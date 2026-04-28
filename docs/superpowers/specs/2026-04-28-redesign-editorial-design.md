# Fondo de Impacto — Rediseño Editorial
**Fecha:** 2026-04-28  
**Branch destino:** `claude/redesign-existing-projects-3RXXb`  
**Stack:** Next.js 14 · Tailwind 3 · framer-motion v11 · lucide-react v0.400

---

## Objetivo

Rediseño visual completo del landing: tipografía, color, animaciones, layout de secciones. El copy, los datos (`lib/constants.ts`), el routing y el stack no cambian. El look objetivo es **boutique de inversión editorial** — salir del patrón "AI generic / Tailwind default" hacia un lenguaje de prospectus financiero con restraint.

---

## Decisiones de evaluación (spec → doc)

### 1. Orden de secciones en `page.tsx` — CAMBIA

El spec original decía "no tocar `page.tsx`" pero el orden actual rompe la narrativa y hace imposible el patrón de fondos verde-crema-verde-crema. Decisión: **reordenar**.

| # | Sección | Fondo | Narrativa |
|---|---------|-------|-----------|
| 1 | Hero | `fi-dark` | Hook |
| 2 | WhatIsFI | `fi-light` | Credibilidad antes del pitch |
| 3 | InvestmentCall | `fi-dark` | La oportunidad concreta |
| 4 | InvestorProfiles | `fi-light` | Cualificación |
| 5 | HowToJoin | `fi-dark` | Proceso (fricción = cero) |
| 6 | TrackRecord | `fi-light` | Prueba social antes del cierre |
| 7 | FinalCTA | `fi-primary` | Cierre — único momento terracota |
| 8 | Footer | `fi-ink` | Bookend |

### 2. Estrategia de ejecución — Design system first + agentes paralelos

**Fase 1 — Foundation** (prerrequisito de todo lo demás)  
`tailwind.config.ts` · `globals.css` · `app/layout.tsx` → fuentes, tokens de color, escala tipográfica, keyframes.

**Fase 2 — UI components** (paralelo entre sí, dependen de Fase 1)  
`Button` · `Badge` · `SectionReveal` · `StatBlock` · `CountUp` (nuevo) · `Hairline` (nuevo)

**Fase 3 — Secciones simples** (paralelo, dependen de Fase 2)  
`Navbar` · `Footer` · `WhatIsFI` · `HowToJoin`

**Fase 4 — Secciones complejas** (paralelo, dependen de Fase 2)  
`Hero` · `InvestmentCall` · `InvestorProfiles` · `TrackRecord` · `FinalCTA`

**Fase 5 — Integración**  
Reorder `page.tsx` · `npm run build` · QA visual desktop+mobile

---

## Sistema de diseño

### Tipografía

| Token | Fuente | Tamaño | Peso | line-height | letter-spacing |
|-------|--------|--------|------|-------------|----------------|
| `display-xl` | Fraunces | clamp(3rem, 6vw, 5.25rem) | 400 | 1.05 | -0.02em |
| `display-lg` | Fraunces | clamp(2.5rem, 4.5vw, 3.5rem) | 400 | 1.05 | -0.02em |
| `display-md` | Fraunces | 2.5rem | 500 | 1.1 | – |
| `numeric-xl` | Fraunces | clamp(3rem, 5vw, 4.5rem) | 400 | 1 | -0.02em · tnum |
| `numeric-lg` | Fraunces | 3.5rem | 400 | 1 | -0.02em · tnum |
| `eyebrow` | Inter | 0.6875rem | 600 | 1.6 | 0.25em · uppercase |
| body | Inter | 16-18px | 400 | 1.6 | – |
| caption | Inter | 13px | 500 | – | 0.02em |

CSS variables: `--font-display` (Fraunces) · `--font-sans` (Inter). Cargadas vía `next/font/google` con `axes: ["opsz", "SOFT"]` para Fraunces.

Inter body: `font-feature-settings: "ss01", "cv11"` en globals.css (alternativas tipográficas para legibilidad).

### Paleta

| Token | Valor | Uso |
|-------|-------|-----|
| `fi-dark` | `#132617` | Fondos inmersivos: Hero, InvestmentCall, HowToJoin |
| `fi-primary` | `#994215` | Acento terracota · FinalCTA |
| `fi-sage` | `#7ca07f` | Eyebrows sobre fi-dark |
| `fi-light` | `#faf8f3` | Fondos crema (ajustado desde #f4f4f4) |
| `fi-ink` | `#0e0e0c` | Texto sobre crema · Footer |
| `fi-line` | `#e6e3da` | Hairlines sobre crema |
| `endemics` | `#2c2c2a` | Fijo — card Endemics |
| `rareby` | `#f82605` | Fijo — card Rare By |

Eliminar: `hero-gradient`, `cta-gradient`.

### Radii

| Nombre | Valor | Uso |
|--------|-------|-----|
| `sm` | 2px | chips, inputs |
| `md` | 4px | cards, buttons |
| `lg` | 8px | cards secundarias |
| `pill` | full | Reservado — ningún componente lo usa en este rediseño |
| `project` | 0px | cards Endemics + Rare By |

### Animación

| Token | Valor |
|-------|-------|
| `ease-editorial` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `duration-reveal` | 700ms |
| `duration-line` | 600ms |
| `duration-count` | 1400ms |

**Patrones:**
- **fade-up reveal**: `translateY(24px) + opacity 0→1` · threshold 0.15 · stagger 100ms · `once: true`
- **count-up**: `requestAnimationFrame` · ease-editorial · `once: true` · respeta `prefers-reduced-motion`
- **line-draw**: `scaleX 0→1` · `transform-origin: left` · al entrar viewport
- **parallax hero**: solo desktop · `useScroll + useTransform` · lado derecho -40px sobre 100vh

---

## Componentes UI

### `Button.tsx` — refactor
Variantes: `primary` (bg fi-primary, radii 4px) · `outline-white` · `outline-dark` · `ghost`. Eliminar `rounded-full`. Mantener props `icon` e `iconPosition`.

### `Badge.tsx` → `Eyebrow`
Sin bg, sin border, sin radii. Solo texto Inter 11px tracking 0.25em uppercase. Props: `color: sage | primary | white | ink`.

### `SectionReveal.tsx` — refactor internals
`framer-motion motion.div` + `useInView({ once: true, margin: "-15% 0px" })`. Misma API externa. `prefers-reduced-motion` → estado final directo.

### `StatBlock.tsx` — refactor
Props: `value`, `label`, `accent: "primary" | "white" | "sage"`, `numeric: boolean`. Si `numeric=true` → CountUp integrado. Hairline arriba line-draw. Fraunces 56px `font-feature-settings: "tnum"`.

### `CountUp.tsx` — NUEVO
```tsx
interface CountUpProps {
  value: number
  format: "currency-soles" | "percent" | "int" | "float"
  prefix?: string
  suffix?: string
  duration?: number // default 1400
}
```
`requestAnimationFrame` · ease-editorial · trigger `useInView once` · `prefers-reduced-motion` → pinta valor final.

Lugares de uso: Hero snapshot (300000, 10, 12 con suffix " meses", 10000), InvestmentCall highlight (300000, 10, 330000), TrackRecord stats (10, 120).

### `Hairline.tsx` — NUEVO
```tsx
interface HairlineProps {
  direction?: "horizontal" | "vertical" // default "horizontal"
  color?: string
  animated?: boolean
  delay?: number
}
```
Si `animated=true` → line-draw `scaleX/scaleY 0→1`, origin left/top, 600ms ease-editorial.

---

## Secciones — cambios clave

### Navbar
- Wordmark inline: "Fondo de Impacto" Fraunces 16px · "·" separador · "Redesign Lab" Inter 11px uppercase tracking
- Links: Inter 12px uppercase tracking · hover = underline line-draw
- CTA: radii 4px (no pill)
- Mobile: overlay full-height, links Fraunces 28px centered

### Hero
- Grid 12 col · lado izq 7col (eyebrow + headline Fraunces 84px + description + CTAs) · lado der 4col (snapshot ficha)
- Snapshot: 4 pares label/valor con hairlines internas · Fraunces 56px para valores · count-up en los 4
- "bioeconomía" → underline line-draw fi-primary al cargar
- Parallax lado derecho desktop: translateY 0 → -40px
- Eliminar: chips pill, scroll indicator, círculos decorativos, radial-gradient, grid sutil
- Agregar: hairline cruzada horizontal a 1/3 de altura · noise texture sutil (3-5% opacity, blend-mode overlay via data-uri PNG o SVG feTurbulence inline)
- `HITO PRINCIPAL` en cards: partir `constants.PROJECTS[].margin` en " - " → primera parte Inter 18px bold, segunda Inter 14px white/60

### WhatIsFI
- Pilares: eliminar cards bg-white rounded-3xl. → bloques editoriales en grid 3col con hairline vertical izquierda (line-draw vertical scaleY)
- Pull-quote: left-aligned col 2-9, Fraunces italic 32px fi-primary, comilla decorativa " en 80px opacity 0.30

### InvestmentCall
- Header: headline acortado "Una sola oportunidad. / Dos mercados."
- Highlight: franja editorial (no card cerrada) · grid 3 col · hairlines h/v · números Fraunces 72px · términos en texto plano con bullets (no pills)
- Cards proyectos: grid 2col · aspect 5/6 · radii 0px · split panel 7/5 (color/ficha) · logo overlay opacity 0.08 · hover: opacity 0.12 + hairline top line-draw + brightness +2%
- Nota confidencialidad: solo hairlines, sin bg white/5

### InvestorProfiles
- Header asimétrico: cols 1-7 título · cols 9-12 subhead
- Cards: bg white + hairline fi-line (Supporter) · bg fi-dark (Lead) · sin rounded-3xl, radii 4px
- Range: subrayado hairline fi-primary (no pill)
- Listas: guion largo "—" editorial (no bullets, no check-circles)
- Lead: eliminar pill "Recomendado" → eyebrow esquina "PARA INVERSIONISTAS ESTRATÉGICOS"

### HowToJoin
- Stepper: eliminar círculos 80px. → número Fraunces 64px white/40 + título Fraunces 22px + descripción Inter 14px
- Línea conectora: hairline white/10 → line-draw fi-primary 1200ms al entrar viewport
- Mobile: línea vertical lado izquierdo

### TrackRecord
- Fondo: **fi-light** (era fi-primary) → terracota reservada para FinalCTA
- Stats: Fraunces 56px fi-primary sobre crema (alto contraste)
- Aliados: grid 3col con hairlines verticales, texto plano con bullets (eliminar pills bg-white/10)
- Cofounders: sin bg card. foto aspect 4/5 grayscale → color en hover. Nombre: underline hairline line-draw en hover. Lista: guion largo —

### FinalCTA
- Headline: Fraunces 80px centered "El momento de actuar / es ahora."
- Acciones: eliminar 3 "card buttons". → fila editorial: `[icon] Label / Sublabel` separadas por hairline vertical white/20 · hover = underline line-draw
- Mobile: stacked con separadores horizontales

### Footer
- Fondo: fi-ink (#0e0e0c)
- 3 columnas: wordmark · sitemap (links del nav) · contacto + LinkedIn
- Hairline white/10 · copyright Inter 11px white/30

---

## Archivos modificados

| Archivo | Tipo de cambio |
|---------|----------------|
| `tailwind.config.ts` | Nuevos tokens, fuentes, easings, keyframes. Elimina hero/cta-gradient |
| `app/globals.css` | Elimina @import Montserrat. Agrega tokens CSS, eyebrow utility, hairline utilities |
| `app/layout.tsx` | next/font Fraunces + Inter. CSS variables |
| `app/page.tsx` | Reorder secciones: Hero→WhatIsFI→InvestmentCall→InvestorProfiles→HowToJoin→TrackRecord→FinalCTA→Footer |
| `components/ui/Button.tsx` | Refactor variantes, elimina rounded-full |
| `components/ui/Badge.tsx` | Refactor → eyebrow sin bg/border/radii |
| `components/ui/SectionReveal.tsx` | Refactor → framer-motion motion.div + useInView |
| `components/ui/StatBlock.tsx` | Refactor props + CountUp integrado + hairline |
| `components/ui/CountUp.tsx` | NUEVO |
| `components/ui/Hairline.tsx` | NUEVO |
| `components/sections/Navbar.tsx` | Wordmark editorial, links hover underline, mobile overlay |
| `components/sections/Hero.tsx` | Grid 12col, snapshot ficha, parallax, underline bioeconomía, noise |
| `components/sections/WhatIsFI.tsx` | Pilares editoriales, pull-quote izquierda |
| `components/sections/InvestmentCall.tsx` | Franja editorial, cards split panel 0px radii |
| `components/sections/InvestorProfiles.tsx` | Header asimétrico, cards sin rounded-3xl, listas con guion largo |
| `components/sections/HowToJoin.tsx` | Stepper numérico, line-draw conector |
| `components/sections/TrackRecord.tsx` | Fondo crema, stats fi-primary, aliados texto plano, cofounders sin card |
| `components/sections/FinalCTA.tsx` | Fila editorial, Fraunces 80px |
| `components/sections/Footer.tsx` | fi-ink, 3col, sitemap |

---

## Definition of done

- [ ] `npm run build` sin errores TypeScript ni ESLint
- [ ] `npm run dev` arranca, página renderiza completa
- [ ] QA visual: cada sección en 1440px + 375px
- [ ] Animaciones verificadas con `prefers-reduced-motion: reduce`
- [ ] Count-up dispara una sola vez por viewport entry
- [ ] Parallax solo activo en lg+ y desactivado con reduced-motion
- [ ] Commit en `claude/redesign-existing-projects-3RXXb` y push a origin

---

## Constraints

- No cambiar copy (salvo "Dos mercados de alto potencial." → "Dos mercados." en InvestmentCall — único ajuste explícito del spec)
- No cambiar `lib/constants.ts`
- No añadir dependencias (framer-motion v11 y lucide-react v0.400 ya instalados)
- No internacionalización ni dark/light toggle
