
# Plan: Solucionar el Flickering/Rendering en Página Publicada

## Problema Identificado

La página tiene **flickering (parpadeo) y sections que desaparecen/reaparecen** causado por múltiples factores:

### Root Causes:

1. **Intersection Observer triggering constantemente**
   - El hook `useScrollAnimation` usa un umbral de 0.1-0.2
   - Cuando elementos están cerca del borde de la ventana, el observer dispara/se detiene repetidamente
   - Causa que la clase `.visible` se añada/quite constantemente = flickering

2. **Transiciones largas (0.8s) combinadas con IntersectionObserver**
   - Las animaciones `animate-on-scroll` tienen `transition: opacity 0.8s ease-out, transform 0.8s ease-out`
   - Si el observer se detiene antes de que termine la animación, el elemento vuelve a `opacity: 0`
   - Resultado: sections que "parpadean"

3. **Múltiples BlurredImageBackground + AnimatedBackground apilados**
   - En `SolutionSection.tsx` hay `BlurredImageBackground` + `AnimatedBackground` + overlays
   - Cada componente hace re-renders/animaciones
   - Causa repaints frecuentes = flickering

4. **useParallax disparando en cada scroll**
   - El hook `useParallax` escucha `scroll` sin debounce
   - Cada evento de scroll causa `style.transform` update
   - En la página publicada, con muchos elementos animados = lag/flickering

### Impacto en la Experiencia:

- La página se ve "inestable" - sections parpadean
- No es fluida porque hay constantes re-renders
- Especialmente visible en navegación lenta (celular 3G, conexiones débiles)

---

## Solución Propuesta

### FASE 1: Mejorar el hook useScrollAnimation

**Archivo:** `src/hooks/useScrollAnimation.tsx`

**Cambios:**

1. **Una sola observación** - El observer NO debe volver a observar después de que `.visible` sea verdadero
2. **Threshold más alto** - Cambiar de 0.1-0.2 a 0.25-0.3 para evitar trigger en bordes
3. **Root margin** - Agregar `rootMargin` para que la animación inicie antes de que el elemento sea totalmente visible

```tsx
// Antes - observa constantemente
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.unobserve(entry.target);  // ← Se detiene correctamente
    }
  },
  { threshold }
);

// Después - más estable
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.unobserve(entry.target);
    }
  },
  { 
    threshold: 0.25,  // ← Más alto para evitar flickering en bordes
    rootMargin: '0px 0px -50px 0px'  // ← Inicia 50px antes
  }
);
```

### FASE 2: Optimizar useParallax

**Archivo:** `src/hooks/useScrollAnimation.tsx`

**Cambios:**

1. **Agregar requestAnimationFrame** - Evitar múltiples updates en el mismo frame
2. **Agregar debounce** - No actualizar transform en cada scroll
3. **Cleanup adecuado** - Cancelar pending requests

```tsx
// Agregar RAF para throttle natural
let rafId: number;

const handleScroll = () => {
  if (rafId) cancelAnimationFrame(rafId);
  
  rafId = requestAnimationFrame(() => {
    if (!ref.current) return;
    const scrolled = window.scrollY;
    const rect = ref.current.getBoundingClientRect();
    const elementTop = rect.top + scrolled;
    const relativeScroll = scrolled - elementTop + window.innerHeight;
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      ref.current.style.transform = `translateY(${relativeScroll * speed * 0.1}px)`;
    }
  });
};
```

### FASE 3: Reducir animaciones redundantes

**Archivos afectados:**
- `src/components/SolutionSection.tsx` - Reducir glow orbs
- `src/components/OperationalRealitySection.tsx` - Reducir BlurredImageBackground blur amount
- `src/index.css` - Reducir complejidad de aurora/mesh gradients

**Cambios específicos:**

1. **SolutionSection.tsx** - Reducir blur de BlurredImageBackground:
   ```tsx
   // Antes
   <BlurredImageBackground blurAmount={120} ... />
   
   // Después
   <BlurredImageBackground blurAmount={40} ... />  // ← Menos trabajo para GPU
   ```

2. **index.css** - Simplificar aurora effects:
   ```css
   /* Antes - 3 capas complejas */
   .aurora-layer {
     opacity: 0.2;
     filter: blur(120px);
   }
   
   /* Después - menos intensas */
   .aurora-layer {
     opacity: 0.1;
     filter: blur(80px);
   }
   ```

### FASE 4: Estabilizar transiciones CSS

**Archivo:** `src/index.css`

**Cambios:**

1. **Reducir duración de transiciones** - De 0.8s a 0.6s
2. **Agregar `will-change`** - Optimizar para GPU
3. **Usar `translate3d`** - Activar aceleración hardware

```css
.animate-on-scroll {
  opacity: 0;
  transform: translate3d(0, 30px, 0);  // ← 3D acceleration
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;  // ← Prepara GPU
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
```

---

## Archivos a Modificar (En Orden de Impacto)

| Archivo | Prioridad | Cambio |
|---------|-----------|--------|
| `src/hooks/useScrollAnimation.tsx` | 🔴 CRÍTICA | Mejorar threshold, agregar rootMargin, RAF en parallax |
| `src/index.css` | 🔴 CRÍTICA | Usar translate3d, agregar will-change, reducir aurora opacity |
| `src/components/SolutionSection.tsx` | 🟠 MEDIA | Reducir blurAmount de 120 a 40 |
| `src/components/OperationalRealitySection.tsx` | 🟠 MEDIA | Revisar overlays, reducir complejidad |

---

## Resultado Esperado Después

✅ **Flickering eliminado** - Sections ya no parpadean al scrollear
✅ **Animaciones suaves** - Las transiciones son fluidas sin jittering
✅ **Mejor rendimiento** - Hardware acceleration en CSS animations
✅ **Scroll más fluido** - useParallax usa RAF para evitar jank
✅ **Experiencia mobile mejorada** - Funciona bien en conexiones lentas

---

## Nota Técnica

El problema actual es que el `IntersectionObserver` es correcto (desuscribe después de visible), pero:
- El threshold bajo (0.1) hace que se "vea" parcialmente visible en bordes de ventana
- Las transiciones largas (0.8s) combinadas con re-renders pueden causar flasheo
- Las animaciones de fondo complejas compiten por GPU con las animaciones de elementos

La solución combina: **mejor threshold + GPU acceleration + menos capas animadas**

