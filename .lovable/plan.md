

# Plan de Implementación: Textos INKOGA Definitivos

## Resumen Ejecutivo

Implementar todos los textos definitivos proporcionados, crear 2 nuevas secciones y actualizar SEO/metadata.

---

## FASE 1: HeroSection.tsx

### Cambios en el Hero Principal

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| **Badge** | "Protección del Ser · Ciencia del Control" | "Ciencia del Control · Protección 1-2 Elementos" |
| **H1** | "Domina el Caos sin Perder la Calma" | "Dominar el caos sin perder la calma." |
| **Subtítulo** | (no existe) | Agregar párrafo completo |
| **CTA** | "Comienza Ahora →" | "Solicitar Información" |

**Subtítulo a agregar (después del H1):**
```
La doctrina convencional entrena para equipos de cuatro. 
La realidad exige eficacia en solitario o en binomio.

Desde hace 25 años preparando protectores en Finlandia, Holanda, 
Brasil, Canadá y México. Cuando no hay unidad de apoyo, 
tu psique, tu táctica y tu técnica son el único recurso 
para resolver la asimetría.
```

### Cambios en las 3 Cards de Problemas

**Título de sección:** Cambiar de "¿Te suena familiar?" a:
```
Tres frentes críticos que el entrenamiento estándar ignora.
```

| Card | Título Actual | Título Nuevo | Descripción Nueva |
|------|---------------|--------------|-------------------|
| 1 | "El Miedo Afecta tus Decisiones" | "El Entorno: La Soledad del Elemento" | El agresor tiene la ventaja de la sorpresa. El protector tiene la desventaja de la multifuncionalidad: conductor, escolta y avanzada simultáneos. Se requiere capacidad para priorizar y resolver sin margen de error. |
| 2 | "La Fuerza Excesiva te Destruye" | "La Fisiología: El Bloqueo Interno" | Bajo estrés, el mayor adversario es el propio sistema nervioso. El túnel visual y el bloqueo auditivo anulan la capacidad de respuesta. Utilizamos Systema para blindar la psique y mantener la claridad mental bajo fuego. |
| 3 | "Realidad vs Teoría de Libro" | "La Ley: El Riesgo Penal" | Neutralizar la amenaza sin justificación es una derrota legal. El marco jurídico exige racionalidad. Enseñamos a controlar con fundamentos técnicos que resisten el escrutinio de un juez, evitando la prisión por uso indebido de la fuerza. |

**Hook final:** Eliminar "No eres el único. Y tiene solución."

---

## FASE 2: SolutionSection.tsx

### Cambios en Header

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| **Etiqueta** | "La Solución" | "Nuestra Expertise" |
| **Título** | "Protección del Ser: 3 Pilares" | "25 Años perfeccionando la respuesta en entornos hostiles." |
| **Subtítulo** | (no existe) | "Nuestra experiencia integra tres sistemas probados para anular la desventaja numérica y física." |

### Cambios en los 3 Pilares

| Pilar | Actual | Nuevo |
|-------|--------|-------|
| **1 - Título** | "Psique / Control Mental" | "La Psique: Blindaje Mental (Systema Vasiliev)" |
| **1 - Descripción** | "Gestiona el miedo. Reprograma automatismos." | "Antes de la táctica, está la mente. Se entrena la regulación del miedo. Controlar la respiración y el estado interno permite gestionar la violencia sin perder la claridad estratégica." |
| **2 - Título** | "Físico / Biomecánica Eficiente" | "La Táctica: Lectura y Evasión" |
| **2 - Descripción** | "Eficiencia sin fuerza bruta. Koga + Systema." | "La mejor resolución es la que evita el contacto. Desarrollamos la lectura de entorno para detectar y evadir la amenaza. Si la confrontación es inminente, se entrena la transición inmediata a la ofensiva controlada." |
| **3 - Título** | "Táctica / Estrategia Aplicada" | "La Técnica: Control Físico (Sistema Koga)" |
| **3 - Descripción** | "Decisiones inteligentes. OODA + Hombre Gris." | "Cuando la fuerza es inevitable, se aplica biomecánica de control. Permite someter a oponentes sin depender de la fuerza bruta, asegurando la eficiencia energética y la legalidad de la intervención." |

**Nota:** Se mantienen las aplicaciones Lobo/Binomio existentes en cada pilar.

---

## FASE 3: Nueva Sección - IncidentCoverageSection.tsx

### Crear nuevo componente

**Ubicación:** `src/components/IncidentCoverageSection.tsx`

**Contenido:**

```
TÍTULO PRINCIPAL: Cobertura Total del Incidente

TEXTO DESCRIPTIVO: En esquemas de 1-2 elementos, se debe garantizar 
la seguridad del Principal en todas las etapas:

4 ETAPAS (timeline horizontal o grid):

┌─────────────┬─────────────┬─────────────┬─────────────┐
│ PREVENCIÓN  │  DISUASIÓN  │  REACCIÓN   │RECUPERACIÓN │
├─────────────┼─────────────┼─────────────┼─────────────┤
│Inteligencia,│Romper la    │Uso de fuerza│Gestión legal│
│contravigi-  │intención del│técnica      │del evento y │
│lancia y     │agresor      │fundamentada │manejo del   │
│lectura de   │mediante     │para         │estrés post- │
│entorno.     │postura y    │neutralizar  │incidente.   │
│             │dominio del  │el riesgo.   │             │
│             │espacio.     │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Estilo visual:**
- Fondo con gradiente oscuro
- Iconos para cada etapa (escudo, mano, puño, balance)
- Hover effects en cada card
- Línea conectora entre etapas

---

## FASE 4: AboutSection.tsx

### Cambios en el perfil de Josafath

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| **Título cargo** | (solo nombre) | "CEO INKOGA · 25 Años de Experiencia Internacional" |

**Texto bio a actualizar:**
```
Trayectoria operativa desarrollada en Finlandia, Holanda, Brasil, 
Canadá y México. Experiencia real en entornos de alto riesgo 
sin estructura de apoyo convencional.

1er mexicano certificado por la ONU en Administración de Seguridad 
y Representante del Sistema Koga en LATAM.

Aquí no hay teorías; hay ciencia del control aplicada 
a la resolución de conflictos para el elemento solo y el binomio.
```

**Mantener:** Stats grid, maestros, países, certificaciones.

---

## FASE 5: Nueva Sección - FilterSection.tsx

### Crear nuevo componente

**Ubicación:** `src/components/FilterSection.tsx`

**Diseño: 2 columnas**

```
┌─────────────────────────────────────────────────────────────┐
│                    ¿Es Esto Para Ti?                        │
├──────────────────────────┬──────────────────────────────────┤
│     ✓ DIRIGIDO A         │      ✗ NO DIRIGIDO A             │
├──────────────────────────┼──────────────────────────────────┤
│ • Elementos que trabajan │ • Quienes creen que la seguridad │
│   solos o en binomio y   │   se limita a la agresión física.│
│   enfrentan la           │                                  │
│   vulnerabilidad de la   │ • Buscadores de métodos rápidos  │
│   falta de apoyo.        │   sin fundamento táctico ni      │
│                          │   mental.                        │
│ • Quienes entienden que  │                                  │
│   la psique determina el │                                  │
│   resultado tanto como   │                                  │
│   el arma.               │                                  │
│                          │                                  │
│ • Profesionales que      │                                  │
│   buscan respaldo legal  │                                  │
│   en su actuar.          │                                  │
└──────────────────────────┴──────────────────────────────────┘
```

**Estilo visual:**
- Columna izquierda: borde verde/primario, checks verdes
- Columna derecha: borde rojo/muted, X rojas
- Fondo con gradiente sutil

---

## FASE 6: Footer.tsx

### Actualizar textos

**Cambiar descripción de marca:**
```
ACTUAL: "Protección Ejecutiva con Integridad. Ciencia aplicada 
para operaciones de 1-2 escoltas en LATAM. Fundador: Josafath Herrera."

NUEVO: "Ciencia del Control para Protección 1-2 Elementos. 
Dominar el Caos sin perder la Calma."
```

**Mantener:** Links de navegación, contacto, newsletter, copyright.

---

## FASE 7: index.html - SEO & Metadata

### Actualizar meta tags

```html
<!-- META TITLE -->
<title>Protección Ejecutiva 1-2 Elementos | INKOGA Ciencia del Control</title>

<!-- META DESCRIPTION -->
<meta name="description" content="Especialización para escoltas solos 
y binomios. Metodología Koga y Systema para resolver sin apoyo. 
25 años de experiencia operativa internacional." />
```

### Agregar Schema.org EducationalOccupationalProgram

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "name": "Protección Ejecutiva para 1-2 Elementos",
  "provider": {
    "@type": "Organization",
    "name": "INKOGA",
    "founder": {
      "@type": "Person",
      "name": "Josafath Herrera",
      "jobTitle": "CEO & Representante Koga LATAM"
    }
  },
  "description": "Metodología de Ciencia del Control para 
  escoltas operativos en solitario o binomio."
}
```

---

## FASE 8: Index.tsx - Orden de Secciones

### Agregar nuevas secciones al layout

```tsx
<Navbar />
<HeroSection />
<WhyINKOGASection />
<OperationalRealitySection />
<SolutionSection />
<IncidentCoverageSection />    // NUEVO
<ProgramsSection />
<FilterSection />              // NUEVO
<ResourcesSection />
<FAQSection />
<BlogSection />
<AboutSection />
<ContactSection />
<Footer />
<WhatsAppButton />
```

---

## Resumen de Archivos

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `HeroSection.tsx` | MODIFICAR | Badge, H1, subtítulo, CTA, 3 cards |
| `SolutionSection.tsx` | MODIFICAR | Header, 3 pilares con descripciones |
| `AboutSection.tsx` | MODIFICAR | Título cargo, bio actualizada |
| `Footer.tsx` | MODIFICAR | Descripción de marca |
| `IncidentCoverageSection.tsx` | CREAR | Nueva sección 4 etapas |
| `FilterSection.tsx` | CREAR | Nueva sección filtro |
| `Index.tsx` | MODIFICAR | Agregar 2 nuevas secciones |
| `index.html` | MODIFICAR | Meta tags + Schema.org |

---

## Lo que se PRESERVA

- Todas las imágenes generadas
- Efectos parallax y partículas flotantes
- Animaciones de scroll (useScrollAnimation)
- OperationalRealitySection completa (GAP + Lobo/Binomio)
- ProgramsSection (3 niveles)
- WhyINKOGASection
- FAQSection, BlogSection, ResourcesSection
- WhatsAppButton flotante
- Estructura visual de cards con hover effects

