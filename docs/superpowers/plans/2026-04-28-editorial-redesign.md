# Fondo de Impacto — Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Full visual redesign of the landing — Fraunces + Inter typography, hairline design language, count-up/line-draw/parallax animation system, new section order and editorial layout.

**Architecture:** Foundation first (tokens → fonts → CSS), then UI primitives in parallel, then sections in two parallel waves, integration last. No new dependencies — framer-motion v11 and lucide-react v0.400 are already installed.

**Tech Stack:** Next.js 14 · Tailwind CSS 3 · framer-motion v11 · lucide-react v0.400 · next/font/google (Fraunces + Inter)

**Spec:** `docs/superpowers/specs/2026-04-28-redesign-editorial-design.md`

**Branch:** `claude/redesign-existing-projects-3RXXb`

**Execution order:**
```
Phase 1 (sequential): Task 1
Phase 2a (parallel):  Tasks 2, 3, 4, 5, 6
Phase 2b (sequential after 2a): Task 7
Phase 3 (parallel):   Tasks 8, 9, 10, 11
Phase 4 (parallel):   Tasks 12, 13, 14, 15, 16
Phase 5 (sequential): Task 17
```

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `tailwind.config.ts` | Modify | Color tokens, font families, type scale, easings, keyframes |
| `app/globals.css` | Modify | Remove Montserrat import, CSS utilities, reduced-motion rule |
| `app/layout.tsx` | Modify | Load Fraunces + Inter via next/font, expose CSS variables |
| `components/ui/CountUp.tsx` | Create | Animated number counter with format helpers |
| `components/ui/Hairline.tsx` | Create | 1px line with optional line-draw animation |
| `components/ui/Button.tsx` | Modify | Remove pill shape, update variants to 4px radii |
| `components/ui/Badge.tsx` | Modify | Strip to pure eyebrow text (no bg/border/radii) |
| `components/ui/SectionReveal.tsx` | Modify | Swap to framer-motion useInView, editorial easing |
| `components/ui/StatBlock.tsx` | Modify | Fraunces value, accent prop, CountUp integration |
| `components/sections/Navbar.tsx` | Modify | Editorial wordmark, underline hover, mobile overlay |
| `components/sections/Footer.tsx` | Modify | fi-ink bg, 3-col layout, sitemap |
| `components/sections/WhatIsFI.tsx` | Modify | Editorial pillars with vertical hairlines, pull-quote |
| `components/sections/HowToJoin.tsx` | Modify | Numeric stepper, line-draw connector |
| `components/sections/Hero.tsx` | Modify | Grid 12-col, snapshot ficha, parallax, line-draw underline |
| `components/sections/InvestmentCall.tsx` | Modify | Editorial highlight fringe, split-panel project cards |
| `components/sections/InvestorProfiles.tsx` | Modify | Asymmetric header, em-dash lists, no pills |
| `components/sections/TrackRecord.tsx` | Modify | Cream bg, fi-primary stats, text allies, borderless cofounders |
| `components/sections/FinalCTA.tsx` | Modify | Fraunces 80px, inline editorial actions |
| `app/page.tsx` | Modify | Reorder sections to narrative flow |

---

## Phase 1 — Foundation

### Task 1: Design tokens, fonts, global CSS

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fi-dark":    "#132617",
        "fi-primary": "#994215",
        "fi-light":   "#faf8f3",
        "fi-sage":    "#7ca07f",
        "fi-ink":     "#0e0e0c",
        "fi-line":    "#e6e3da",
        endemics:     "#2c2c2a",
        rareby:       "#f82605",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow:       "0.25em",
        "eyebrow-wide": "0.3em",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.25rem)",    { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem",                        { lineHeight: "1.1" }],
        "display-sm": ["1.75rem",                       { lineHeight: "1.15" }],
        "numeric-xl": ["clamp(3rem, 5vw, 4.5rem)",     { lineHeight: "1", letterSpacing: "-0.02em" }],
        "numeric-lg": ["3.5rem",                        { lineHeight: "1", letterSpacing: "-0.02em" }],
        "numeric-md": ["2rem",                          { lineHeight: "1", letterSpacing: "-0.01em" }],
        eyebrow:      ["0.6875rem",                     { letterSpacing: "0.25em", lineHeight: "1.6" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        soft:      "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-draw": {
          "0%":   { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "line-draw": "line-draw 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; padding: 0; margin: 0; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: var(--font-inter), system-ui, sans-serif;
  background-color: #faf8f3;
  color: #0e0e0c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "ss01", "cv11";
}

::-webkit-scrollbar       { width: 6px; }
::-webkit-scrollbar-track { background: #132617; }
::-webkit-scrollbar-thumb { background: #994215; border-radius: 0; }

::selection { background: #994215; color: white; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@layer utilities {
  .eyebrow {
    @apply font-sans text-[11px] font-semibold uppercase tracking-[0.25em];
  }
  .hairline-h { @apply h-px w-full; }
  .hairline-v { @apply w-px; }
}
```

- [ ] **Step 3: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Fondo de Impacto — Investment Call 2026 · Redesign Lab",
  description:
    "Invierte en la bioeconomía peruana. 10% fijo anual · 12 meses · S/ 300,000 total · Sin dilución. Impulsado por Redesign Lab.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Fondo de Impacto — Investment Call 2026",
    description: "Retorno garantizado con impacto real. Desde S/ 10,000. Redesign Lab.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: build succeeds (may show font fetch warnings — ignore).

- [ ] **Step 5: Commit**

```bash
git checkout -b claude/redesign-existing-projects-3RXXb
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "feat: design system foundation — Fraunces+Inter, tokens, easings"
```

---

## Phase 2a — UI Primitives (run Tasks 2–6 in parallel)

### Task 2: `CountUp.tsx` — new animated number component

**Files:**
- Create: `components/ui/CountUp.tsx`

- [ ] **Step 1: Create `components/ui/CountUp.tsx`**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export type CountUpFormat = "currency-soles" | "percent" | "int" | "float";

interface CountUpProps {
  value: number;
  format: CountUpFormat;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function formatValue(n: number, format: CountUpFormat): string {
  const rounded = Math.round(n);
  switch (format) {
    case "currency-soles":
      return `S/ ${rounded.toLocaleString("en-US")}`;
    case "percent":
      return `${rounded}%`;
    case "float":
      return n.toFixed(1);
    case "int":
    default:
      return rounded.toLocaleString("en-US");
  }
}

export function CountUp({
  value,
  format,
  prefix = "",
  suffix = "",
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(
    prefersReducedMotion ? formatValue(value, format) : formatValue(0, format)
  );
  const animated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(formatValue(value, format));
      return;
    }
    if (!inView || animated.current) return;
    animated.current = true;

    const start = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayed(formatValue(easeOut(progress) * value, format));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value, format, duration, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors in `components/ui/CountUp.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/ui/CountUp.tsx
git commit -m "feat: CountUp animated number component"
```

---

### Task 3: `Hairline.tsx` — animated 1px line

**Files:**
- Create: `components/ui/Hairline.tsx`

- [ ] **Step 1: Create `components/ui/Hairline.tsx`**

```tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HairlineProps {
  direction?: "horizontal" | "vertical";
  color?: string;
  animated?: boolean;
  delay?: number;
  className?: string;
}

export function Hairline({
  direction = "horizontal",
  color,
  animated = false,
  delay = 0,
  className = "",
}: HairlineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const isH = direction === "horizontal";

  const baseClass = isH ? "hairline-h" : "hairline-v";
  const colorStyle = color ? { backgroundColor: color } : {};

  if (!animated) {
    return (
      <div
        ref={ref}
        className={[baseClass, className].join(" ")}
        style={colorStyle}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      className={[baseClass, className].join(" ")}
      style={{ ...colorStyle, transformOrigin: isH ? "left" : "top" }}
      initial={isH ? { scaleX: 0 } : { scaleY: 0 }}
      animate={inView ? (isH ? { scaleX: 1 } : { scaleY: 1 }) : {}}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/Hairline.tsx
git commit -m "feat: Hairline component with optional line-draw animation"
```

---

### Task 4: `Button.tsx` — refactor to 4px radii

**Files:**
- Modify: `components/ui/Button.tsx`

- [ ] **Step 1: Replace `components/ui/Button.tsx`**

```tsx
"use client";

import React from "react";

type Variant = "primary" | "outline-white" | "outline-dark" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-fi-primary text-white hover:brightness-95 transition-[filter] duration-200 ease-soft",
  "outline-white":
    "border-[1.5px] border-white text-white hover:bg-white/10 transition-colors duration-200 ease-soft",
  "outline-dark":
    "border-[1.5px] border-fi-ink text-fi-ink hover:bg-fi-ink/5 transition-colors duration-200 ease-soft",
  ghost:
    "text-fi-primary font-semibold hover:underline underline-offset-2 transition-all duration-200 ease-soft",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[12px] gap-1.5",
  md: "px-6 py-3 text-[13px] gap-2",
  lg: "px-8 py-[14px] text-[14px] gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={[
        "inline-flex items-center justify-center font-semibold rounded",
        "cursor-pointer select-none tracking-wide",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </a>
  );
}
```

Note: `rounded` in Tailwind = `border-radius: 0.25rem` = 4px. Correct per spec.

- [ ] **Step 2: Commit**

```bash
git add components/ui/Button.tsx
git commit -m "feat: Button — 4px radii, editorial variants, no pill"
```

---

### Task 5: `Badge.tsx` — refactor to pure eyebrow text

**Files:**
- Modify: `components/ui/Badge.tsx`

- [ ] **Step 1: Replace `components/ui/Badge.tsx`**

```tsx
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: "sage" | "primary" | "white" | "ink";
  className?: string;
}

const colorClasses: Record<string, string> = {
  sage:    "text-fi-sage",
  primary: "text-fi-primary",
  white:   "text-white",
  ink:     "text-fi-ink",
};

export function Badge({ children, color = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "eyebrow",
        colorClasses[color] ?? "text-fi-primary",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/Badge.tsx
git commit -m "feat: Badge refactored to eyebrow (no bg/border/radii)"
```

---

### Task 6: `SectionReveal.tsx` — framer-motion internals

**Files:**
- Modify: `components/ui/SectionReveal.tsx`

- [ ] **Step 1: Replace `components/ui/SectionReveal.tsx`**

```tsx
"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/SectionReveal.tsx
git commit -m "feat: SectionReveal — framer-motion useInView, editorial easing"
```

---

## Phase 2b — StatBlock (after Tasks 2–6 complete)

### Task 7: `StatBlock.tsx` — Fraunces value, CountUp integration

**Files:**
- Modify: `components/ui/StatBlock.tsx`

- [ ] **Step 1: Replace `components/ui/StatBlock.tsx`**

```tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp, CountUpFormat } from "@/components/ui/CountUp";

interface StatBlockProps {
  value: string;
  label: string;
  accent?: "primary" | "white" | "sage";
  numeric?: boolean;
}

const accentClasses: Record<string, string> = {
  primary: "text-fi-primary",
  white:   "text-white",
  sage:    "text-fi-sage",
};

function parseNumeric(raw: string): {
  prefix: string;
  num: number;
  suffix: string;
  format: CountUpFormat;
} | null {
  // Match optional prefix, then digits (possibly with comma/dot), then optional suffix
  const match = raw.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const num = parseFloat(numStr.replace(/,/g, ""));
  if (isNaN(num)) return null;
  const format: CountUpFormat =
    suffix.trim() === "%" ? "percent" : "int";
  return { prefix: prefix.trim(), num, suffix: suffix ? ` ${suffix.trim()}` : "", format };
}

export function StatBlock({
  value,
  label,
  accent = "white",
  numeric = false,
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const parsed = numeric ? parseNumeric(value) : null;

  return (
    <div ref={ref} className="flex flex-col gap-2">
      {/* Animated hairline top */}
      <motion.div
        className="h-px w-full"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="pt-4">
        <span
          className={[
            "font-display text-numeric-lg leading-none block",
            "font-[400]",
            accentClasses[accent] ?? "text-white",
          ].join(" ")}
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {numeric && parsed ? (
            <CountUp
              value={parsed.num}
              format={parsed.format}
              prefix={parsed.prefix}
              suffix={parsed.suffix}
            />
          ) : (
            value
          )}
        </span>
        <span className="font-sans text-[13px] leading-relaxed mt-2 block opacity-60">
          {label}
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/ui/StatBlock.tsx
git commit -m "feat: StatBlock — Fraunces numeric value, CountUp integration, hairline top"
```

---

## Phase 3 — Sections: first wave (run Tasks 8–11 in parallel)

### Task 8: `Navbar.tsx` — editorial wordmark, underline hover, full-height mobile overlay

**Files:**
- Modify: `components/sections/Navbar.tsx`

- [ ] **Step 1: Replace `components/sections/Navbar.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Qué es FI",        href: "#que-es" },
  { label: "Track Record",     href: "#track-record" },
  { label: "Call 2026",        href: "#call-2026" },
  { label: "Proyectos",        href: "#proyectos" },
  { label: "Cómo participar",  href: "#como-participar" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-fi-dark/95 backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-[16px] font-[500] text-white leading-none">
            Fondo de Impacto
          </span>
          <span className="text-white/40 text-[16px] leading-none select-none">·</span>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 leading-none">
            Redesign Lab
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-sans text-[12px] font-semibold uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-editorial" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href={CTA.calendar}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            Invertir ahora
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile full-height overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden fixed inset-0 bg-fi-dark z-40 flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="absolute top-5 right-6 text-white p-2"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-[28px] font-[400] text-white hover:text-fi-sage transition-colors duration-200"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Navbar.tsx
git commit -m "feat: Navbar — editorial wordmark, underline hover, full-height mobile overlay"
```

---

### Task 9: `Footer.tsx` — fi-ink background, 3-column sitemap layout

**Files:**
- Modify: `components/sections/Footer.tsx`

- [ ] **Step 1: Replace `components/sections/Footer.tsx`**

```tsx
import { Linkedin, Mail, Phone } from "lucide-react";
import { CTA } from "@/lib/constants";

const navLinks = [
  { label: "Qué es FI",       href: "#que-es" },
  { label: "Track Record",    href: "#track-record" },
  { label: "Call 2026",       href: "#call-2026" },
  { label: "Proyectos",       href: "#proyectos" },
  { label: "Cómo participar", href: "#como-participar" },
];

export function Footer() {
  return (
    <footer className="bg-fi-ink py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Wordmark */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-[16px] font-[500] text-white leading-none">
                Fondo de Impacto
              </span>
              <span className="text-white/40 text-[16px] leading-none">·</span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 leading-none">
                Redesign Lab
              </span>
            </div>
            <p className="font-sans text-[13px] text-white/40 leading-relaxed max-w-[240px]">
              Invertimos en los negocios que el planeta necesita hoy.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="eyebrow text-white/30 mb-6">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-[12px] font-semibold uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-white/30 mb-6">Contacto</p>
            <div className="space-y-4">
              <a
                href={CTA.email}
                className="flex items-center gap-3 font-sans text-[14px] text-white/70 hover:text-white transition-colors duration-200"
              >
                <Mail size={14} className="text-fi-primary shrink-0" />
                {CTA.contactEmail}
              </a>
              <a
                href={CTA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-[14px] text-white/70 hover:text-white transition-colors duration-200"
              >
                <Phone size={14} className="text-fi-primary shrink-0" />
                {CTA.phone}
              </a>
              <a
                href="https://www.linkedin.com/company/redesignlab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-[14px] text-white/70 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={14} className="text-fi-primary shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        <p className="font-sans text-[11px] text-white/30">
          © 2026 Fondo de Impacto · Powered by Redesign Lab
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Footer.tsx
git commit -m "feat: Footer — fi-ink bg, 3-col sitemap layout"
```

---

### Task 10: `WhatIsFI.tsx` — editorial pillars with vertical hairlines, pull-quote

**Files:**
- Modify: `components/sections/WhatIsFI.tsx`

- [ ] **Step 1: Replace `components/sections/WhatIsFI.tsx`**

```tsx
"use client";

import { Leaf, Shield, Network } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Hairline } from "@/components/ui/Hairline";

const pillars = [
  {
    icon: Leaf,
    title: "Impacto real",
    description:
      "Negocios que generan valor económico, social y ambiental en comunidades de la Amazonía y los Andes peruanos.",
  },
  {
    icon: Shield,
    title: "Retorno garantizado",
    description:
      "Instrumento de deuda con tasa fija del 10% anual, pago bullet al mes 12 y contrato notarial firmado por los fundadores.",
  },
  {
    icon: Network,
    title: "Ecosistema vivo",
    description:
      "Al invertir, formas parte de una red de innovación con presencia global y alianzas con IDB, MIT, GIZ, WWF y más.",
  },
];

export function WhatIsFI() {
  return (
    <section id="que-es" className="bg-fi-light py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <span className="eyebrow text-fi-primary mb-4 block">Quiénes somos</span>
          <h2 className="font-display text-display-lg text-fi-ink mb-6">
            Aceleramos negocios
            <br />
            con capital de impacto.
          </h2>
          <p className="font-sans text-[18px] text-fi-ink/60 leading-relaxed max-w-3xl">
            Fondo de Impacto es la plataforma de inversión de Redesign Lab: un ecosistema
            de financiamiento que conecta inversionistas ángel con marcas peruanas
            construidas sobre la biodiversidad amazónica y andina. No es un fondo de
            riesgo. Es una oportunidad de retorno garantizado con propósito real.
          </p>
        </SectionReveal>

        {/* Pillars — editorial blocks with vertical hairlines */}
        <div className="grid md:grid-cols-3 gap-0 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <SectionReveal key={pillar.title} delay={i * 120}>
                <div className="pl-8 pr-6 relative">
                  {/* Animated vertical hairline left edge */}
                  <div className="absolute left-0 top-0 bottom-0 flex">
                    <Hairline
                      direction="vertical"
                      color="#e6e3da"
                      animated
                      delay={i * 120}
                      className="h-full"
                    />
                  </div>

                  <Icon size={24} className="text-fi-primary mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-display-sm text-fi-ink mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[14px] text-fi-ink/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Pull-quote */}
        <SectionReveal>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-start-2 md:col-span-8 relative">
              <span
                className="absolute -top-8 -left-4 font-display text-[80px] leading-none text-fi-primary/30 select-none"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="font-display italic text-[32px] font-[400] text-fi-primary leading-tight">
                Invertimos en los negocios que el planeta necesita hoy.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/WhatIsFI.tsx
git commit -m "feat: WhatIsFI — editorial pillars with vertical hairlines, pull-quote"
```

---

### Task 11: `HowToJoin.tsx` — numeric stepper, line-draw connector

**Files:**
- Modify: `components/sections/HowToJoin.tsx`

- [ ] **Step 1: Replace `components/sections/HowToJoin.tsx`**

```tsx
"use client";

import { useRef } from "react";
import { Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { STEPS, CTA } from "@/lib/constants";

export function HowToJoin() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-20% 0px" });

  return (
    <section id="como-participar" className="bg-fi-dark py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <span className="eyebrow text-fi-sage mb-4 block">Proceso de inversión</span>
          <h2 className="font-display text-display-lg text-white mb-4">
            Súmate en 4 simples pasos.
          </h2>
          <p className="font-sans text-[18px] text-white/50 max-w-2xl leading-relaxed">
            Un proceso claro, seguro y sin burocracia. Desde el primer contacto
            hasta el contrato firmado en menos de dos semanas.
          </p>
        </SectionReveal>

        {/* Stepper */}
        <div className="relative mb-16">
          {/* Animated connector line — desktop */}
          <div ref={lineRef} className="hidden md:block absolute top-8 left-0 right-0 h-px overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              className="absolute inset-0 bg-fi-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 120} className="relative z-10">
                <div className="flex flex-col md:items-start">
                  {/* Mobile vertical connector */}
                  {i < STEPS.length - 1 && (
                    <div className="md:hidden absolute left-4 top-16 w-px h-16 bg-white/10" />
                  )}

                  <span className="font-display text-[64px] font-[400] text-white/40 leading-none mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-display text-[22px] font-[500] text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[14px] text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <SectionReveal>
          <div className="text-center">
            <p className="font-sans text-[14px] text-white/40 mb-6">
              El primer paso es una conversación. Sin compromiso.
            </p>
            <Button
              href={CTA.calendar}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<Calendar size={16} />}
            >
              Agendar mi entrevista 1:1
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/HowToJoin.tsx
git commit -m "feat: HowToJoin — numeric stepper, line-draw fi-primary connector"
```

---

## Phase 4 — Sections: second wave (run Tasks 12–16 in parallel)

### Task 12: `Hero.tsx` — grid layout, snapshot ficha, parallax, line-draw underline

**Files:**
- Modify: `components/sections/Hero.tsx`

- [ ] **Step 1: Replace `components/sections/Hero.tsx`**

```tsx
"use client";

import { useRef } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CountUp } from "@/components/ui/CountUp";
import { Hairline } from "@/components/ui/Hairline";

// Noise texture via SVG feTurbulence
const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const snapshot = [
  { label: "CAPITAL OBJETIVO", value: 300000, format: "currency-soles" as const, accent: false },
  { label: "TASA FIJA ANUAL",  value: 10,     format: "percent" as const,         accent: true  },
  { label: "PLAZO",            value: 12,     format: "int" as const,             accent: false, suffix: " meses" },
  { label: "TICKET MÍNIMO",   value: 10000,  format: "currency-soles" as const,  accent: false, small: true },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -40]
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-fi-dark overflow-hidden"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: NOISE }}
        aria-hidden
      />

      {/* Horizontal hairline at 1/3 height */}
      <div
        className="absolute left-0 right-0 h-px bg-white/10 pointer-events-none"
        style={{ top: "33.333%" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left: 7 columns */}
          <div className="col-span-12 lg:col-span-7">
            <Badge color="sage" className="mb-8">
              Investment Call 2026 · I
            </Badge>

            <h1 className="font-display text-display-xl text-white mb-8 leading-[1.05]">
              Invierte en el futuro
              <br />
              de la{" "}
              <span className="relative inline-block">
                bioeconomía
                <motion.span
                  className="absolute left-0 right-0 h-[1.5px] bg-fi-primary origin-left"
                  style={{ bottom: "-4px" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden
                />
              </span>
              <br />
              peruana.
            </h1>

            <p className="font-sans text-[18px] text-white/70 leading-relaxed max-w-xl mb-10">
              Fondo de Impacto conecta capital ángel con marcas sostenibles de la
              biodiversidad peruana. Un instrumento de deuda simple, con retorno
              garantizado por contrato notarial y respaldo de Redesign Lab.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={CTA.calendar}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<Calendar size={16} />}
              >
                Agendar entrevista 1:1
              </Button>
              <Button
                href={CTA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-white"
                size="lg"
                icon={<MessageCircle size={16} />}
              >
                Escribir por WhatsApp
              </Button>
            </div>
          </div>

          {/* Right: snapshot ficha — cols 9-12 with parallax */}
          <motion.div
            className="col-span-12 lg:col-span-4 lg:col-start-9"
            style={{ y: parallaxY }}
          >
            <div className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-fi-sage mb-3">
              Snapshot
            </div>
            <Hairline color="rgba(255,255,255,0.15)" />

            {snapshot.map((item, i) => (
              <div key={item.label}>
                <div className="py-5">
                  <div className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-1">
                    {item.label}
                  </div>
                  <div
                    className={[
                      "font-display font-[400] leading-none",
                      item.small ? "text-[2.25rem] text-white/70" : "text-numeric-lg",
                      item.accent ? "text-fi-primary" : "text-white",
                    ].join(" ")}
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    <CountUp
                      value={item.value}
                      format={item.format}
                      suffix={"suffix" in item ? item.suffix : undefined}
                    />
                  </div>
                </div>
                {i < snapshot.length - 1 && <Hairline color="rgba(255,255,255,0.1)" />}
              </div>
            ))}

            <Hairline color="rgba(255,255,255,0.15)" />
            <div className="pt-4 font-sans text-[12px] text-white/60 leading-relaxed">
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40">
                Estructura
              </span>
              <br />
              Deuda · Sin dilución · Contrato notarial
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: Hero — 12-col grid, snapshot ficha, parallax, line-draw underline, noise"
```

---

### Task 13: `InvestmentCall.tsx` — editorial highlight fringe, split-panel project cards

**Files:**
- Modify: `components/sections/InvestmentCall.tsx`

- [ ] **Step 1: Replace `components/sections/InvestmentCall.tsx`**

```tsx
"use client";

import { Lock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { CountUp } from "@/components/ui/CountUp";
import { Hairline } from "@/components/ui/Hairline";
import { PROJECTS } from "@/lib/constants";

export function InvestmentCall() {
  return (
    <section id="call-2026" className="bg-fi-dark py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <Badge color="sage" className="mb-6">Investment Call 2026 · I</Badge>
          <h2 className="font-display text-display-lg text-white mb-6">
            Una sola oportunidad.
            <br />
            Dos mercados.
          </h2>
          <p className="font-sans text-[18px] text-white/60 max-w-2xl leading-relaxed">
            Levantamos S/ 300,000 bajo un instrumento de deuda sin dilución, a 12 meses
            con 10% de retorno fijo anual. El capital se distribuye en dos marcas con
            operaciones activas y mercado validado.
          </p>
        </SectionReveal>

        {/* Highlight fringe — editorial 3-column strip */}
        <SectionReveal className="mb-16">
          <div className="py-16 relative">
            <Hairline color="rgba(255,255,255,0.15)" />
            <div className="pt-12 pb-12 grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Capital */}
              <div className="text-center md:text-left md:pr-8">
                <div className="eyebrow text-white/40 mb-4">Capital</div>
                <div className="font-display font-[400] leading-none text-white mb-2" style={{ fontSize: "4.5rem", fontFeatureSettings: '"tnum"' }}>
                  <CountUp value={300000} format="currency-soles" />
                </div>
              </div>

              {/* Vertical divider + Retorno */}
              <div className="relative text-center md:px-8 mt-10 md:mt-0">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/10" />
                <div className="eyebrow text-white/40 mb-4">Retorno</div>
                <div className="font-display font-[400] leading-none text-white mb-2" style={{ fontSize: "4.5rem", fontFeatureSettings: '"tnum"' }}>
                  <CountUp value={10} format="percent" />
                  <span className="font-sans text-[13px] text-white/50 ml-2 align-middle">anual</span>
                </div>
              </div>

              {/* Devolución */}
              <div className="text-center md:text-right md:pl-8 mt-10 md:mt-0">
                <div className="eyebrow text-white/40 mb-4">Devolución</div>
                <div className="font-display font-[400] leading-none text-white mb-2" style={{ fontSize: "4.5rem", fontFeatureSettings: '"tnum"' }}>
                  <CountUp value={330000} format="currency-soles" />
                </div>
                <div className="font-sans text-[12px] text-white/40 mt-1">Mes 12</div>
              </div>
            </div>

            {/* Mobile horizontal dividers */}
            <div className="md:hidden">
              <Hairline color="rgba(255,255,255,0.1)" className="my-4" />
            </div>

            <Hairline color="rgba(255,255,255,0.15)" />

            {/* Terms — plain text, no pills */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
              {[
                "10% fijo",
                "12 meses",
                "Deuda sin dilución",
                "Ticket mín. S/ 10,000",
                "Contrato notarial",
              ].map((term, i) => (
                <span key={term} className="font-sans text-[13px] text-white/50 tracking-wide flex items-center gap-4">
                  {i > 0 && <span className="text-white/20">·</span>}
                  {term}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Project cards — split panel díptico */}
        <div id="proyectos" className="grid md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Confidentiality note */}
        <SectionReveal>
          <div className="py-5">
            <Hairline color="rgba(255,255,255,0.1)" className="mb-5" />
            <div className="flex items-start gap-3">
              <Lock size={12} className="text-white/40 mt-0.5 shrink-0" />
              <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                La información financiera detallada de cada proyecto —proyecciones,
                uso de fondos y modelo operativo— está disponible en el{" "}
                <strong className="font-semibold text-white/60">data room</strong>,
                accesible desde el paso 3 del proceso de inversión.
              </p>
            </div>
            <Hairline color="rgba(255,255,255,0.1)" className="mt-5" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  // Split margin field "Concept Store - Cuzco" → ["Concept Store", "Cuzco"]
  const [hitoMain, hitoSub] = project.margin.split(" - ");

  return (
    <SectionReveal delay={index * 100}>
      <div
        ref={cardRef}
        className="relative overflow-hidden group"
        style={{ aspectRatio: "5/6" }}
      >
        {/* Animated hairline top — project color */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px z-20 origin-left"
          style={{ backgroundColor: project.color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid grid-cols-12 h-full">
          {/* Left panel — project color (7 cols) */}
          <div
            className="col-span-7 relative overflow-hidden p-10 lg:p-14 flex flex-col justify-between"
            style={{ backgroundColor: project.color }}
          >
            {/* Logo overlay */}
            <div
              className="absolute inset-0 flex items-start justify-start pointer-events-none transition-opacity duration-300 ease-soft"
              style={{ opacity: 0.08 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.logo}
                alt=""
                aria-hidden
                className="w-[140%] max-w-none object-contain scale-150 origin-top-left"
                style={{ filter: "brightness(0) invert(1)", mixBlendMode: "soft-light" }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="font-display text-[14px] tracking-widest text-white/40 mb-1">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="font-sans text-[11px] font-bold tracking-[0.4em] uppercase text-white mb-10">
                {project.name}
              </div>

              <h3 className="font-display text-[3rem] lg:text-[3.5rem] font-[400] text-white leading-[1.05]">
                {project.tagline}
              </h3>
            </div>

            <div className="relative z-10">
              <span className="eyebrow text-white/50">
                {project.category}
              </span>
            </div>
          </div>

          {/* Right panel — fi-dark ficha (5 cols) */}
          <div className="col-span-5 bg-fi-dark p-8 lg:p-10 flex flex-col">
            <div className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-fi-sage mb-3">
              Ficha
            </div>
            <div className="h-px bg-white/15 mb-6" />

            <div className="space-y-0 flex-1">
              {/* Inversión */}
              <div className="pb-5">
                <div className="eyebrow text-white/40 mb-2">Inversión</div>
                <div className="font-display text-[2rem] font-[400] text-white leading-none" style={{ fontFeatureSettings: '"tnum"' }}>
                  {project.investment}
                </div>
              </div>
              <div className="h-px bg-white/15" />

              {/* Hito principal */}
              <div className="py-5">
                <div className="eyebrow text-white/40 mb-2">Hito principal</div>
                <div className="font-sans text-[18px] font-[500] text-white leading-tight">
                  {hitoMain}
                </div>
                {hitoSub && (
                  <div className="font-sans text-[14px] text-white/60 mt-0.5">{hitoSub}</div>
                )}
              </div>
              <div className="h-px bg-white/15" />

              {/* Descripción */}
              <div className="pt-5">
                <div className="eyebrow text-white/40 mb-2">Descripción</div>
                <p className="font-sans text-[13px] text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/InvestmentCall.tsx
git commit -m "feat: InvestmentCall — editorial highlight fringe, split-panel project cards"
```

---

### Task 14: `InvestorProfiles.tsx` — asymmetric header, em-dash lists, no pills

**Files:**
- Modify: `components/sections/InvestorProfiles.tsx`

- [ ] **Step 1: Replace `components/sections/InvestorProfiles.tsx`**

```tsx
"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Hairline } from "@/components/ui/Hairline";
import { INVESTOR_PROFILES, CTA } from "@/lib/constants";

export function InvestorProfiles() {
  return (
    <section className="bg-fi-light py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Asymmetric header */}
        <SectionReveal className="mb-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow text-fi-primary mb-4 block">Perfiles de inversionista</span>
              <h2 className="font-display text-display-lg text-fi-ink">
                ¿Cuál es tu perfil?
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="font-sans text-[18px] text-fi-ink/60 leading-relaxed">
                Ambos perfiles reciben el mismo retorno: 10% anual fijo,
                pago bullet mes 12, respaldado por contrato notarial.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {INVESTOR_PROFILES.map((profile, i) => (
            <SectionReveal key={profile.tier} delay={i * 150}>
              <div
                className={[
                  "rounded p-10 h-full border relative overflow-hidden",
                  profile.highlighted
                    ? "bg-fi-dark border-white/10"
                    : "bg-white border-fi-line",
                ].join(" ")}
              >
                {/* Strategic investor label */}
                {profile.highlighted && (
                  <div className="absolute top-8 right-8">
                    <span className="eyebrow text-fi-sage">
                      Para inversionistas estratégicos
                    </span>
                  </div>
                )}

                {/* Tier */}
                <div className="mb-8">
                  <h3
                    className={[
                      "font-display text-[2rem] font-[500] mb-1",
                      profile.highlighted ? "text-white" : "text-fi-ink",
                    ].join(" ")}
                  >
                    {profile.tier}
                  </h3>
                  <p className="eyebrow text-fi-primary mt-1 mb-4">
                    {profile.subtitle}
                  </p>
                  {/* Range with hairline underline */}
                  <div className="relative inline-block">
                    <span
                      className={[
                        "font-sans text-[14px] font-semibold",
                        profile.highlighted ? "text-white" : "text-fi-ink",
                      ].join(" ")}
                    >
                      {profile.range}
                    </span>
                    <div
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{ backgroundColor: "#994215" }}
                    />
                  </div>
                </div>

                <p
                  className={[
                    "font-sans text-[14px] leading-relaxed mb-8",
                    profile.highlighted ? "text-white/60" : "text-fi-ink/60",
                  ].join(" ")}
                >
                  {profile.description}
                </p>

                <Hairline
                  color={profile.highlighted ? "rgba(255,255,255,0.1)" : "#e6e3da"}
                  className="mb-6"
                />

                {/* Ideal para */}
                <div className="mb-6">
                  <p
                    className={[
                      "eyebrow mb-3",
                      profile.highlighted ? "text-white/40" : "text-fi-ink/40",
                    ].join(" ")}
                  >
                    Ideal para
                  </p>
                  <ul className="space-y-1.5">
                    {profile.forWhom.map((item) => (
                      <li
                        key={item}
                        className={[
                          "font-sans text-[14px] flex gap-3 items-start",
                          profile.highlighted ? "text-white/70" : "text-fi-ink/70",
                        ].join(" ")}
                      >
                        <span className="shrink-0 mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Hairline
                  color={profile.highlighted ? "rgba(255,255,255,0.1)" : "#e6e3da"}
                  className="mb-6"
                />

                {/* Benefits */}
                <div>
                  <p
                    className={[
                      "eyebrow mb-3",
                      profile.highlighted ? "text-white/40" : "text-fi-ink/40",
                    ].join(" ")}
                  >
                    Beneficios
                  </p>
                  <ul className="space-y-2">
                    {profile.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className={[
                          "font-sans text-[14px] flex gap-3 items-start",
                          profile.highlighted ? "text-white/70" : "text-fi-ink/70",
                        ].join(" ")}
                      >
                        <span className="shrink-0 text-fi-primary mt-0.5">—</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Note */}
        <SectionReveal>
          <p className="font-sans text-[14px] italic text-fi-ink/50 text-center">
            &ldquo;Ambos perfiles reciben el mismo retorno: 10% anual fijo, pago bullet mes 12,
            respaldado por contrato notarial firmado por los co-fundadores.&rdquo;
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/InvestorProfiles.tsx
git commit -m "feat: InvestorProfiles — asymmetric header, em-dash lists, no pills"
```

---

### Task 15: `TrackRecord.tsx` — cream background, fi-primary stats, text allies, borderless cofounders

**Files:**
- Modify: `components/sections/TrackRecord.tsx`

- [ ] **Step 1: Replace `components/sections/TrackRecord.tsx`**

```tsx
"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatBlock } from "@/components/ui/StatBlock";
import { Hairline } from "@/components/ui/Hairline";
import { STATS_TRACK_RECORD, ALLIES, TEAM } from "@/lib/constants";

export function TrackRecord() {
  return (
    <section id="track-record" className="bg-fi-light py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <span className="eyebrow text-fi-primary mb-4 block">
            Powered by{" "}
            <a
              href="https://www.redesignlab.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-fi-ink transition-colors duration-200"
            >
              Redesign Lab
            </a>
          </span>
          <h2 className="font-display text-display-lg text-fi-ink mb-6">
            Más de 5 años construyendo
            <br />
            negocios de impacto en Perú.
          </h2>
          <p className="font-sans text-[18px] text-fi-ink/70 leading-relaxed max-w-3xl">
            Redesign Lab ha diseñado, financiado y escalado más de 10 empresas
            sostenibles en Loreto, Madre de Dios, Ucayali, San Martín, Ancash,
            Lima e Ica — con alianzas activas en tres continentes.
          </p>
        </SectionReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-20">
          {STATS_TRACK_RECORD.map((stat, i) => {
            const isNumeric = stat.value === "10" || stat.value === "120";
            return (
              <SectionReveal key={stat.value} delay={i * 100}>
                <StatBlock
                  value={stat.value}
                  label={stat.label}
                  accent="primary"
                  numeric={isNumeric}
                />
              </SectionReveal>
            );
          })}
        </div>

        <Hairline color="#e6e3da" className="mb-14" />

        {/* Institutional allies */}
        <SectionReveal className="mb-14">
          <h3 className="eyebrow text-fi-ink/40 mb-8">Aliados del Ecosistema</h3>
          <div className="grid md:grid-cols-3 gap-0">
            {ALLIES.map((group, i) => (
              <SectionReveal key={group.group} delay={i * 100}>
                <div className="pl-8 relative">
                  <div className="absolute left-0 top-0 bottom-0 flex">
                    <Hairline direction="vertical" color="#e6e3da" animated delay={i * 100} className="h-full" />
                  </div>
                  <p className="eyebrow text-fi-ink/40 mb-4">{group.group}</p>
                  <p className="font-sans text-[14px] text-fi-ink leading-relaxed">
                    {group.names.join(" · ")}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        <Hairline color="#e6e3da" className="mb-14" />

        {/* Cofounders — no card container */}
        <SectionReveal className="mb-8">
          <h3 className="eyebrow text-fi-ink/40 mb-10">Co-fundadores</h3>
        </SectionReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {TEAM.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 120}>
              <div className="flex flex-col sm:flex-row gap-0 overflow-hidden">
                {/* Photo */}
                <div className="w-full sm:w-2/5 shrink-0 relative" style={{ aspectRatio: "4/5" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Bio */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h4 className="font-display text-[28px] font-[500] text-fi-ink mb-1 relative inline-block group">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:text-fi-primary transition-colors duration-200 group"
                      >
                        {member.name}
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-fi-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-editorial" />
                      </a>
                    ) : (
                      member.name
                    )}
                  </h4>
                  <p className="eyebrow text-fi-primary mt-1 mb-6">{member.role}</p>
                  <ul className="space-y-2">
                    {member.highlights.map((h) => (
                      <li key={h} className="font-sans text-[14px] text-fi-ink/70 flex gap-3 items-start leading-relaxed">
                        <span className="shrink-0 mt-0.5 text-fi-ink/30">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/TrackRecord.tsx
git commit -m "feat: TrackRecord — cream bg, fi-primary stats, text allies, borderless cofounders"
```

---

### Task 16: `FinalCTA.tsx` — Fraunces 80px, inline editorial actions

**Files:**
- Modify: `components/sections/FinalCTA.tsx`

- [ ] **Step 1: Replace `components/sections/FinalCTA.tsx`**

```tsx
"use client";

import { Calendar, Mail, MessageCircle } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTA } from "@/lib/constants";

const actions = [
  {
    icon: Calendar,
    label: "Agendar entrevista 1:1",
    sublabel: "Conversación directa con los fundadores",
    href: CTA.calendar,
  },
  {
    icon: Mail,
    label: "Escribir por email",
    sublabel: CTA.contactEmail,
    href: CTA.email,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: CTA.phone,
    href: CTA.whatsapp,
  },
];

export function FinalCTA() {
  return (
    <section className="bg-fi-primary py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <SectionReveal className="mb-12">
          <h2
            className="font-display font-[400] text-white text-center leading-[1.0] mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            El momento de actuar
            <br />
            es ahora.
          </h2>
          <p className="font-sans text-[18px] text-white/70 max-w-xl mx-auto leading-relaxed">
            El call está abierto con cupos limitados. Da el primer paso hoy — una
            conversación sin compromiso.
          </p>
        </SectionReveal>

        {/* Editorial inline actions */}
        <SectionReveal delay={100} className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {actions.map((action, i) => {
              const Icon = action.icon;
              return (
                <div key={action.label} className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 group w-full sm:w-auto justify-center"
                  >
                    <Icon size={18} className="text-white shrink-0" />
                    <div className="text-left">
                      <div className="font-sans text-[16px] font-semibold text-white leading-tight relative inline-block">
                        {action.label}
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-editorial" />
                      </div>
                      <div className="font-sans text-[12px] text-white/60 leading-tight mt-0.5">
                        {action.sublabel}
                      </div>
                    </div>
                  </a>

                  {/* Separator */}
                  {i < actions.length - 1 && (
                    <>
                      {/* Desktop vertical */}
                      <div className="hidden sm:block w-px h-12 bg-white/20 shrink-0" />
                      {/* Mobile horizontal */}
                      <div className="sm:hidden w-full h-px bg-white/20 my-1" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <p className="font-sans text-[11px] text-white/40">
            Documento confidencial — Uso exclusivo para inversionistas · Lima, Perú · 2026
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/FinalCTA.tsx
git commit -m "feat: FinalCTA — Fraunces 80px headline, editorial inline actions"
```

---

## Phase 5 — Integration

### Task 17: Reorder `page.tsx`, final build, QA

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatIsFI } from "@/components/sections/WhatIsFI";
import { InvestmentCall } from "@/components/sections/InvestmentCall";
import { InvestorProfiles } from "@/components/sections/InvestorProfiles";
import { HowToJoin } from "@/components/sections/HowToJoin";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIsFI />
      <InvestmentCall />
      <InvestorProfiles />
      <HowToJoin />
      <TrackRecord />
      <FinalCTA />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Expected: exit 0, no TypeScript or ESLint errors. Font download warnings from next/font are acceptable.

- [ ] **Step 3: Start dev server and verify visual**

```bash
npm run dev
```

Open `http://localhost:3000` and check each section visually at 1440px then 375px.

Checklist:
- [ ] Verde-crema-verde-crema-verde-crema-naranja-negro section rhythm visible
- [ ] Fraunces loads on headings, Inter on body
- [ ] Hero snapshot count-up fires on page load
- [ ] TrackRecord count-up (10, 120) fires on scroll
- [ ] InvestmentCall highlight count-up fires on scroll
- [ ] "bioeconomía" underline draws on page load (~900ms delay)
- [ ] HowToJoin stepper line draws to fi-primary on scroll
- [ ] Hero parallax active on desktop (snapshot moves slower than headline)
- [ ] No pills, no rounded-3xl, no blur circles anywhere
- [ ] Mobile (375px): parallax off, snapshot below headline, overlay menu works

- [ ] **Step 4: Test reduced motion**

In browser devtools → Rendering → Emulate CSS media → prefers-reduced-motion: reduce.

Expected: all animations instant (count-ups show final values, no line-draws, no fade-ups — content immediately visible at final state).

- [ ] **Step 5: Commit and push**

```bash
git add app/page.tsx
git commit -m "feat: reorder sections — editorial narrative flow + integration"
git push -u origin claude/redesign-existing-projects-3RXXb
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|-----------------|------|
| Fraunces + Inter via next/font | Task 1 |
| Paleta fi-ink, fi-line, fi-light=#faf8f3 | Task 1 |
| ease-editorial, ease-soft tokens | Task 1 |
| CountUp with format/prefix/suffix/reduced-motion | Task 2 |
| Hairline animated line-draw scaleX/Y | Task 3 |
| Button 4px radii, no pill | Task 4 |
| Badge → eyebrow plano | Task 5 |
| SectionReveal framer-motion, -15% margin | Task 6 |
| StatBlock Fraunces, hairline top, CountUp | Task 7 |
| Navbar wordmark, underline hover, mobile overlay | Task 8 |
| Footer fi-ink, sitemap, LinkedIn | Task 9 |
| WhatIsFI editorial pillars, vertical hairlines, pull-quote | Task 10 |
| HowToJoin numeric stepper, line-draw connector fi-primary | Task 11 |
| Hero grid 12-col, snapshot ficha, parallax, underline draw, noise | Task 12 |
| InvestmentCall fringe editorial, split-panel cards 0px radii | Task 13 |
| InvestorProfiles asymmetric header, em-dash lists | Task 14 |
| TrackRecord cream bg, fi-primary stats, text allies, cofounders | Task 15 |
| FinalCTA Fraunces 80px, editorial inline actions | Task 16 |
| page.tsx reorder, build, QA visual + reduced-motion | Task 17 |

All spec requirements covered.
