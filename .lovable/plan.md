

# Plan: Generar Nuevas Imágenes de Protección Ejecutiva

## Estado Actual

Existen 11 imágenes en `src/assets/` que NO representan la marca correctamente:

| Imagen Actual | Problema | Nueva Descripción |
|---------------|----------|-------------------|
| `hero-tactical.jpg` | Militar/SWAT con casco | Escolta ejecutivo en traje oscuro, silueta discreta, entorno urbano nocturno |
| `hero-background.jpg` | Desconocido | Ciudad latinoamericana nocturna, luces urbanas, atmósfera profesional |
| `problem-fear.jpg` | Policía con equipo táctico | Escolta solo vigilando perímetro, expresión de alerta profesional |
| `problem-ego.jpg` | Militar con casco | Primer plano de rostro bajo estrés controlado, sudor sutil, ojos enfocados |
| `problem-copy.jpg` | SWAT/Navy Seal | Escolta con manos visibles en posición neutral, contexto legal |
| `pilar-psique.jpg` | Kung fu/artes marciales | Hombre en traje meditando, respiración controlada, expresión serena |
| `pilar-tactica.jpg` | Militar escaneando | Escolta en traje escaneando entorno discretamente, mirada periférica |
| `pilar-fisico.jpg` | Desconocido | Control de articulación estilo Koga - agarre de muñeca/codo profesional |
| `lobo-solitario.jpg` | Posiblemente incorrecto | Un solo escolta en traje, espalda al cliente, postura protectora |
| `binomio.jpg` | Posiblemente incorrecto | Dos escoltas en traje en formación coordinada, uno adelante uno atrás |
| `gap-comparison.jpg` | Diagrama/comparación | Mantener o regenerar con estilo visual consistente |

---

## Proceso de Generación

Usaré la API de **Nano banana (google/gemini-2.5-flash-image)** para generar cada imagen con prompts específicos.

### Características de todas las imágenes:

- **NO militares/SWAT** - Sin cascos, chalecos tácticos, rifles
- **Traje ejecutivo oscuro** - Profesional, discreto, elegante
- **Contexto LATAM** - Arquitectura mexicana/brasileña cuando aplique
- **Tonos fríos** - Azules, grises, negros (paleta cinematográfica)
- **Alta calidad** - Estilo fotorrealista, iluminación dramática
- **Aspecto 16:9** para fondos, **1:1** para cards

---

## Archivos a Modificar

| Archivo | Acción |
|---------|--------|
| `src/assets/hero-tactical.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/hero-background.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/problem-fear.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/problem-ego.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/problem-copy.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/pilar-psique.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/pilar-tactica.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/pilar-fisico.jpg` | REEMPLAZAR con nueva imagen (Koga) |
| `src/assets/lobo-solitario.jpg` | REEMPLAZAR con nueva imagen |
| `src/assets/binomio.jpg` | REEMPLAZAR con nueva imagen |
| `src/components/HeroSection.tsx` | Restaurar visibilidad de imagen |

---

## Prompts Específicos para Cada Imagen

### 1. Hero Principal (`hero-tactical.jpg`)
```
Professional executive protection agent in dark tailored suit, standing in 
protective posture near a black armored SUV, urban Latin American city at 
night, dramatic blue and grey lighting, cinematic photography, photorealistic, 
silhouette visible, mysterious and professional atmosphere, no military gear, 
no helmet, no tactical vest
```

### 2. Problema 1 - Soledad (`problem-fear.jpg`)
```
Single executive bodyguard in dark suit alone scanning a perimeter, alert 
expression, professional demeanor, urban environment, no backup visible, 
isolated, dramatic lighting, photorealistic, cold blue tones
```

### 3. Problema 2 - Estrés (`problem-ego.jpg`)
```
Close-up portrait of a professional bodyguard face under controlled stress, 
subtle sweat, focused intense eyes, wearing dark suit collar visible, 
dramatic side lighting, photorealistic, psychological tension
```

### 4. Problema 3 - Legal (`problem-copy.jpg`)
```
Executive protection agent with hands visible in neutral defensive position, 
professional courtroom-appropriate posture, dark suit, legal context implied, 
controlled demeanor, photorealistic, cold lighting
```

### 5. Pilar Psique (`pilar-psique.jpg`)
```
Professional man in dark executive suit practicing controlled breathing 
meditation, serene but alert expression, eyes closed or soft focus, 
minimalist dark background, photorealistic, zen professional atmosphere
```

### 6. Pilar Táctica (`pilar-tactica.jpg`)
```
Executive bodyguard in dark suit discreetly scanning environment, peripheral 
vision engaged, looking multiple directions subtly, urban setting, 
professional surveillance posture, photorealistic, cold blue tones
```

### 7. Pilar Técnica - KOGA (`pilar-fisico.jpg`)
```
Professional Koga technique demonstration, wrist lock joint control, 
executive protection style, men in dark suits, realistic self-defense 
training, NOT kung fu or martial arts, arm bar or wrist manipulation, 
photorealistic, professional training environment
```

### 8. Lobo Solitario (`lobo-solitario.jpg`)
```
Single executive bodyguard in dark suit, back to camera protecting client, 
facing potential threat direction, protective stance, alone, urban 
environment, dramatic lighting, photorealistic, heroic silhouette
```

### 9. Binomio (`binomio.jpg`)
```
Two executive bodyguards in dark suits working as coordinated team, 
one forward one behind formation, protecting movement, synchronized, 
professional protection detail, urban environment, photorealistic
```

### 10. Hero Background (`hero-background.jpg`)
```
Latin American urban cityscape at night, Mexico City or São Paulo style 
architecture, dramatic blue and grey lighting, professional atmosphere, 
no people, cinematic wide shot, moody corporate noir aesthetic
```

---

## Después de Generar Imágenes

Una vez reemplazadas las imágenes, también modificaré:

1. **`HeroSection.tsx`** - Restaurar visibilidad reduciendo overlays
2. **`BlurredImageBackground.tsx`** - Ajustar opacidad del overlay dark

---

## Resultado Esperado

- **Hero visible** con silueta del operador en traje
- **Consistencia visual** en toda la página
- **Marca correcta** de Protección Ejecutiva LATAM
- **Técnica Koga** correctamente representada (NO kung fu)
- **Look profesional oscuro** sin saturación amarilla

