# Fondo de Impacto — Landing Page

Landing page para el Investment Call 2026-I de Fondo de Impacto, powered by Redesign Lab.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (íconos)

## Setup

### Prerequisitos

- Node.js 18+ → [nodejs.org](https://nodejs.org)

### Instalar y correr

```bash
cd landing
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### Build de producción

```bash
npm run build
npm start
```

### Deploy en Vercel (recomendado)

```bash
npx vercel --prod
```

O conecta el repo a [vercel.com](https://vercel.com) para deploy automático.

## Estructura

```
app/
  layout.tsx       ← Metadata, fuentes, globals
  page.tsx         ← Composición de secciones
  globals.css      ← Tailwind base + fuentes

components/
  ui/
    Button.tsx       ← Botones reutilizables
    Badge.tsx        ← Labels de color
    StatBlock.tsx    ← Métricas animadas
    SectionReveal.tsx ← Animación scroll
  sections/
    Navbar.tsx
    Hero.tsx
    WhatIsFI.tsx
    TrackRecord.tsx
    InvestmentCall.tsx
    InvestorProfiles.tsx
    HowToJoin.tsx
    FinalCTA.tsx
    Footer.tsx

lib/
  constants.ts     ← Todos los textos, datos y links CTA

tailwind.config.ts ← Tokens de color FI
```

## Personalización rápida

Todos los textos, métricas y CTAs están centralizados en `lib/constants.ts`.
Los colores están en `tailwind.config.ts` como tokens (`fi-dark`, `fi-primary`, etc.).
