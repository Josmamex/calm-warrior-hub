
# Ajustes Visuales Hero — Móvil

Dos cambios quirúrgicos en dos archivos. Sin tocar textos, colores, estructura ni animaciones.

---

## Cambio 1 — Logo más grande en móvil

**Archivo**: `src/components/Navbar.tsx` — línea 54

**Estado actual**:
```tsx
<img src={logoInkoga} alt="INKOGA" className="h-9 w-auto" />
```

**Cambio**:
```tsx
<img src={logoInkoga} alt="INKOGA" className="h-12 md:h-9 w-auto" />
```

- Móvil: `h-12` (48px) — aprox. 33% más grande que `h-9` (36px)
- Desktop (`md:`): `h-9` (36px) — idéntico al actual, sin cambio

---

## Cambio 2 — Reposicionar imagen de fondo solo en móvil

**Archivo**: `src/components/HeroSection.tsx` — línea 50-51

**Estado actual**:
```tsx
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{ backgroundImage: `url(${heroTactical})` }}
```

**Cambio**:
```tsx
className="absolute inset-0 bg-cover bg-no-repeat"
style={{
  backgroundImage: `url(${heroTactical})`,
  backgroundPosition: window.innerWidth < 768 ? 'center 30%' : 'center center'
}}
```

Espera — usar `window.innerWidth` en el render no es la mejor práctica (re-renders, SSR). La solución correcta y más limpia es usar clases Tailwind con un override inline solo para móvil usando la clase `md:bg-center`:

```tsx
className="absolute inset-0 bg-cover bg-no-repeat bg-[center_30%] md:bg-center"
style={{ backgroundImage: `url(${heroTactical})` }}
```

- Móvil: `bg-[center_30%]` — mueve el punto focal al 30% desde arriba, mostrando más del torso/cabeza del escolta
- Desktop `md:bg-center`: idéntico al actual `bg-center`, sin ningún cambio visual

### Por qué `center 30%` funciona

```text
  ┌─────────────────┐
  │                 │  ← 0%
  │   [ESCOLTA]     │  ← 30% ← punto focal aquí (móvil)
  │                 │  ← 50% ← centro actual (desktop)
  │                 │
  └─────────────────┘
```

Al usar `center 30%`, la figura del escolta sube visualmente en la pantalla del móvil, evitando que quede cortada hacia abajo.

---

## Archivos modificados

| Archivo | Línea | Cambio |
|---|---|---|
| `src/components/Navbar.tsx` | 54 | `h-9` → `h-12 md:h-9` |
| `src/components/HeroSection.tsx` | 50 | `bg-center` → `bg-[center_30%] md:bg-center` |

## Lo que NO se toca

- Textos, colores, fuentes, animaciones
- Estructura del Hero o del Navbar
- Footer, botones, secciones
- Comportamiento desktop (idéntico al actual)
