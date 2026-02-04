

# Plan: Fondos Difuminados con Imágenes Reales + Más Efectos React

## El Problema Detectado

Actualmente los efectos de fondo usan **CSS puro** (gradientes, conic-gradient), pero NO tienen:
- **Imágenes reales difuminadas** como texturas de fondo
- Profundidad visual con fotos borrosas debajo del contenido
- El efecto "premium blur" que tienen sitios como Apple, Stripe, Linear

---

## Solución: 3 Capas de Efectos Visuales

### Capa 1: Imágenes de Fondo Difuminadas (NUEVO)

Agregar imágenes reales con blur extremo detrás del contenido:

| Sección | Imagen de Fondo | Efecto |
|---------|-----------------|--------|
| Hero | `hero-tactical.jpg` | blur(60px) + overlay oscuro |
| WhyINKOGA | Textura abstracta dorada | blur(80px) + saturación |
| Solution | `pilar-tactica.jpg` | blur(100px) + gradiente |
| Programs | Textura oscura con oro | blur(50px) |
| IncidentCoverage | Líneas geométricas | blur(40px) |
| Filter | Contraste verde/rojo | blur(60px) |
| About | Perfil borroso | blur(80px) |

---

### Capa 2: Nuevo Componente `BlurredImageBackground.tsx`

```
Propósito: Renderizar imagen difuminada con:
- blur variable (40px-120px)
- overlay con gradiente
- animación de escala sutil
- parallax opcional
- saturación/brillo ajustable
```

**Props:**
- `imageSrc`: ruta de imagen
- `blurAmount`: intensidad del blur (40-120)
- `overlay`: color/gradiente encima
- `animate`: boolean para movimiento sutil
- `parallax`: boolean para efecto scroll

---

### Capa 3: Efectos React Adicionales

**Nuevos efectos a implementar:**

| Efecto | Descripción |
|--------|-------------|
| **Gradient Orbs Animados** | Círculos de color que se mueven suavemente |
| **Grain/Noise Overlay** | Textura granulada sutil sobre todo |
| **Glow Pulse** | Pulsos de luz que viajan por la pantalla |
| **Scroll-Triggered Reveals** | Elementos que aparecen con desenfoque |
| **Interactive Cursor Glow** | Halo de luz que sigue el cursor |
| **Section Dividers Animados** | Líneas brillantes entre secciones |

---

## Archivos a Crear

### 1. `src/components/BlurredImageBackground.tsx` (NUEVO)

Componente reutilizable para fondos con imagen difuminada:

```text
┌─────────────────────────────────────────────────┐
│  Imagen original (ej: hero-tactical.jpg)        │
├─────────────────────────────────────────────────┤
│  + filter: blur(80px)                           │
│  + transform: scale(1.2) // evitar bordes       │
│  + opacity: 0.4-0.7                             │
├─────────────────────────────────────────────────┤
│  + overlay: gradient oscuro                     │
│  + animation: subtle-scale 30s                  │
└─────────────────────────────────────────────────┘
```

---

### 2. `src/components/CursorGlow.tsx` (NUEVO)

Efecto de halo que sigue el cursor del mouse:

- Círculo difuminado que sigue al cursor
- Color dorado/emerald según sección
- Desaparece en móvil (touch)
- Transición suave

---

### 3. `src/components/GradientOrbs.tsx` (NUEVO)

Orbes de color que flotan animados:

- 3-5 círculos grandes con blur
- Movimiento aleatorio pero suave
- Colores: dorado, emerald, rojo sutil
- z-index detrás del contenido

---

## Archivos a Modificar

### 4. `src/index.css`

Agregar:
```css
/* Blur background utilities */
.bg-blur-image {
  position: absolute;
  inset: -10%;
  filter: blur(80px);
  transform: scale(1.2);
  opacity: 0.5;
  animation: subtleScale 30s ease-in-out infinite;
}

/* Cursor glow */
.cursor-glow {
  pointer-events: none;
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(var(--gold) / 0.15), transparent 70%);
  filter: blur(40px);
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
}

/* New animations */
@keyframes subtleScale {
  0%, 100% { transform: scale(1.2); }
  50% { transform: scale(1.3); }
}

@keyframes orbDrift {
  0% { transform: translate(0, 0); }
  33% { transform: translate(50px, -30px); }
  66% { transform: translate(-30px, 50px); }
  100% { transform: translate(0, 0); }
}
```

---

### 5. Secciones a Actualizar

| Componente | Cambio |
|------------|--------|
| `HeroSection.tsx` | Añadir `<BlurredImageBackground>` con `hero-tactical.jpg` |
| `WhyINKOGASection.tsx` | Añadir fondo difuminado dorado |
| `SolutionSection.tsx` | Añadir imagen de pilar borrosa |
| `ProgramsSection.tsx` | Intensificar blur background |
| `IncidentCoverageSection.tsx` | Añadir patrón geométrico blur |
| `FilterSection.tsx` | Añadir contraste verde/rojo difuminado |
| `AboutSection.tsx` | Añadir imagen de textura blur |
| `ResourcesSection.tsx` | Mantener emerald, añadir más blur |

---

### 6. `src/pages/Index.tsx`

Agregar componentes globales:
```tsx
<CursorGlow />        // Sigue el cursor
<GradientOrbs />      // Orbes flotantes globales
```

---

### 7. Nuevas Imágenes de Textura

Para fondos difuminados, usaremos las imágenes existentes:

| Imagen | Uso |
|--------|-----|
| `hero-tactical.jpg` | Hero, fondo principal |
| `pilar-tactica.jpg` | Solution section |
| `pilar-psique.jpg` | About section |
| `lobo-solitario.jpg` | Filter section |
| `binomio.jpg` | Programs section |

---

## Resultado Visual Esperado

```text
┌─────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░ IMAGEN DIFUMINADA (blur 80px) ░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│     ┌─────────────────────────────────┐         │
│     │                                 │         │
│     │    CONTENIDO NÍTIDO             │         │
│     │    Texto, cards, botones        │         │
│     │                                 │         │
│     └─────────────────────────────────┘         │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░ ORBES ANIMADOS + CURSOR GLOW ░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────────────────────┘
```

---

## Resumen de Archivos

| Archivo | Acción |
|---------|--------|
| `BlurredImageBackground.tsx` | CREAR |
| `CursorGlow.tsx` | CREAR |
| `GradientOrbs.tsx` | CREAR |
| `index.css` | MODIFICAR - nuevas animaciones |
| `HeroSection.tsx` | MODIFICAR - añadir blur bg |
| `WhyINKOGASection.tsx` | MODIFICAR - añadir blur bg |
| `SolutionSection.tsx` | MODIFICAR - añadir blur bg |
| `ProgramsSection.tsx` | MODIFICAR - intensificar |
| `IncidentCoverageSection.tsx` | MODIFICAR - añadir blur bg |
| `FilterSection.tsx` | MODIFICAR - añadir blur bg |
| `AboutSection.tsx` | MODIFICAR - añadir blur bg |
| `ResourcesSection.tsx` | MODIFICAR - intensificar emerald |
| `Index.tsx` | MODIFICAR - añadir componentes globales |

---

## Beneficios

- **Profundidad visual**: Las imágenes difuminadas crean capas de profundidad
- **Cohesión de marca**: Usa las fotos existentes del proyecto
- **Performance**: blur() es acelerado por GPU
- **Interactividad**: Cursor glow añade dinamismo
- **Consistencia**: Mismo estilo que "Elige tu nivel"

