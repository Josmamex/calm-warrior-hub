
# Implementar Micro-chips de Audiencia en Hero

Cambio mínimo: insertar 6 líneas de JSX en `src/components/HeroSection.tsx`.

---

## Archivo modificado

`src/components/HeroSection.tsx` — un solo bloque nuevo entre el `</p>` del subheadline y el `<div>` del CTA.

---

## Detalle técnico

Insertar el siguiente bloque entre el cierre del párrafo del subheadline y el div del CTA:

```tsx
{/* Audience Chips */}
<div className="flex flex-row gap-3 justify-center opacity-0 animate-fade-up animation-delay-350 mb-4">
  <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-background/50 backdrop-blur-sm">
    <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">👤 Operador Solo</span>
  </div>
  <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-background/50 backdrop-blur-sm">
    <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">👥 Binomio Táctico</span>
  </div>
</div>
```

---

## Posición exacta en el archivo

```text
...subheadline </p>   ← línea existente

[NUEVO BLOQUE AQUÍ]   ← los 2 chips

{/* CTA */}           ← div existente sin modificar
```

---

## Lo que NO se toca

- Badge superior, H1, subheadline, CTA, credencial ONU
- Diseño, colores, fuentes, animaciones, imágenes
- Cualquier otro componente

## Resultado en móvil

```text
  Antes, durante y después del incidente.
  Metodología completa para el escolta...

  ┌─────────────────┐  ┌──────────────────┐
  │ 👤 OPERADOR SOLO│  │ 👥 BINOMIO TÁCTICO│
  └─────────────────┘  └──────────────────┘

  [ ESCRÍBEME → WHATSAPP ]
```
