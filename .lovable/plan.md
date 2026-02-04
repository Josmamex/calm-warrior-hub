

# Plan de Corrección: Colores, Imágenes y Longitud

## Resumen de Problemas Detectados

| Problema | Causa | Impacto |
|----------|-------|---------|
| **Pantalla amarilla** | Múltiples overlays gold apilados + orbs dorados | Pierde el look profesional oscuro |
| **Imágenes de policías/SWAT** | Fotos generadas incorrectas | No representa escoltas ejecutivos LATAM |
| **Página muy larga** | 13 secciones, algunas redundantes | Pierde impacto, fatiga al visitante |

---

## FASE 1: Corrección de Colores (URGENTE)

### 1.1 Reducir saturación de GradientOrbs

**Archivo:** `src/components/GradientOrbs.tsx`

**Cambios:**
- Reducir opacidad de orbs de 0.08 → 0.03
- Cambiar colores dorados a neutros (gris/azul oscuro)
- Mantener solo 2-3 orbs sutiles

### 1.2 Eliminar overlays gold excesivos

**Archivo:** `src/components/BlurredImageBackground.tsx`

**Cambios:**
- Cambiar overlay `gold` por `dark` en la mayoría de secciones
- Reducir opacidad general de 0.5 → 0.2
- Aumentar blur para que no compita con el contenido

### 1.3 Secciones a corregir

| Sección | Overlay actual | Corrección |
|---------|---------------|------------|
| HeroSection | dark | Mantener, reducir opacity |
| WhyINKOGASection | gold | Cambiar a dark |
| SolutionSection | gold | Cambiar a dark |
| ProgramsSection | gold | Cambiar a dark |
| IncidentCoverageSection | dark | Mantener |
| FilterSection | dark | Mantener |
| AboutSection | gold | Cambiar a dark |

### 1.4 CSS: Reducir efectos de primary/gold

**Archivo:** `src/index.css`

- Reducir `text-glow` de 3 shadows a 1 sutil
- Bajar opacidad de mesh gradients
- Menos saturación en auroras

---

## FASE 2: Imágenes Correctas

### 2.1 Necesitas generar/conseguir imágenes de:

| Imagen | Descripción Correcta |
|--------|---------------------|
| **Hero** | Escolta ejecutivo en traje oscuro, discreto, junto a vehículo blindado negro, entorno urbano LATAM |
| **Problema 1** | Escolta solo vigilando perímetro, expresión de alerta, sin apoyo visible |
| **Problema 2** | Primer plano de rostro bajo estrés - sudor, tensión facial, ojos enfocados |
| **Problema 3** | Escolta con manos visibles en posición neutral, contexto legal/profesional |
| **Pilar Psique** | Meditación o respiración controlada, expresión serena pero alerta |
| **Pilar Táctica** | Escolta escaneando entorno, mirando múltiples direcciones, discreto |
| **Pilar Técnica** | Control de articulación estilo Koga - agarre de muñeca/codo, NO kung fu |
| **Lobo Solitario** | Un solo escolta, espalda al cliente, mirando hacia amenaza |
| **Binomio** | Dos escoltas en formación, uno adelante uno atrás, coordinados |

### 2.2 Características de las fotos:

- **NO militares/SWAT** - Sin cascos, chalecos tácticos, rifles
- **Traje ejecutivo** - Traje oscuro, corbata opcional, profesional
- **Contexto LATAM** - Ciudad mexicana, brasileña, etc.
- **Alta definición** - Mínimo 1920x1080
- **Tonos fríos** - Azules, grises, negros (NO sepia/cálidos)

---

## FASE 3: Reducir Longitud de Página

### 3.1 Secciones a ELIMINAR o FUSIONAR

| Acción | Sección | Razón |
|--------|---------|-------|
| **ELIMINAR** | BlogSection | Contenido secundario, distrae de conversión |
| **FUSIONAR** | WhyINKOGASection + OperationalRealitySection | Mismo mensaje: "entrenamos para 1-2" |
| **MOVER A SUBPÁGINA** | ResourcesSection | Los PDFs pueden estar en /recursos |
| **SIMPLIFICAR** | FAQSection | Reducir de 10 preguntas a 5 esenciales |

### 3.2 Nuevo orden optimizado (8 secciones vs 13 actuales)

```
1. HeroSection (Hero + 3 Problemas)
2. OperationalRealitySection (GAP + Lobo/Binomio) ← absorbe WhyINKOGA
3. SolutionSection (3 Pilares)
4. IncidentCoverageSection (4 Etapas)
5. ProgramsSection (Elige tu nivel)
6. FilterSection (¿Es para ti?)
7. AboutSection (Josafath)
8. ContactSection + FAQSection (fusionar)
9. Footer
```

**Resultado:** De 13 → 9 secciones (30% más corta)

---

## FASE 4: Restaurar Impacto Visual

### 4.1 Paleta de colores corregida

| Color | Uso | HSL |
|-------|-----|-----|
| **Background** | Fondo principal | 220 20% 6% (casi negro) |
| **Foreground** | Texto principal | 40 25% 95% (crema) |
| **Primary (Gold)** | SOLO acentos, CTA | 38 70% 55% |
| **Neutral** | Bordes, separadores | 220 15% 20% |

**Regla:** El dorado debe ser **10% o menos** de la pantalla, no 40% como ahora.

### 4.2 Contraste mejorado

- Fondo más oscuro (actualmente compite con efectos)
- Menos capas de blur superpuestas
- Texto más grande y con más weight
- CTA único por sección (no múltiples)

---

## Resumen de Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `GradientOrbs.tsx` | Reducir opacidad, colores neutros |
| `BlurredImageBackground.tsx` | Overlay dark por defecto, menos opacity |
| `HeroSection.tsx` | Reducir efectos, overlay más oscuro |
| `WhyINKOGASection.tsx` | ELIMINAR o fusionar |
| `SolutionSection.tsx` | Overlay dark, menos blur |
| `ProgramsSection.tsx` | Overlay dark |
| `AboutSection.tsx` | Overlay dark |
| `BlogSection.tsx` | ELIMINAR |
| `ResourcesSection.tsx` | Mover a subpágina o simplificar |
| `FAQSection.tsx` | Reducir preguntas |
| `Index.tsx` | Nuevo orden de secciones |
| `index.css` | Reducir efectos de glow |

---

## Sobre las Imágenes

**Necesito que me proporciones nuevas imágenes** o que me indiques si quieres que genere prompts específicos para que las generes tú. Las imágenes actuales de policías con cascos NO representan tu marca de protección ejecutiva discreta.

¿Quieres que proceda con las correcciones de color y longitud mientras consigues las imágenes correctas?

