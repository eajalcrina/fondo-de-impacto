# Sitio Fondo de Impacto (Fase 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar el nuevo sitio de Fondo de Impacto (6 páginas + privacidad) con buscador de fondos y captura de leads, y mover la landing del Call a `/call-2026` oculta.

**Architecture:** Next.js 14 App Router con dos grupos de rutas: `(site)` para el sitio nuevo, que porta el CSS y el marcado del prototipo v13, y `call-2026` para la landing heredada en Tailwind. La lógica pura (matching de fuentes, armado de leads) vive en `lib/` con pruebas en Vitest. Una sola ruta `POST /api/lead` envía correos por Brevo y escribe en Google Sheets, igual que redesignlab.org.

**Tech Stack:** Next.js 14.2, React 18, TypeScript, CSS propio (sitio) + Tailwind (Call), `google-auth-library`, Brevo REST API, Vitest.

## Global Constraints

- Fuente de verdad visual y de copy: `../Prototipo/prototipo-fdi.html` (v13, dirección C). Se porta el marcado y el CSS sin rediseñar.
- Paleta: bosque #132617, degradado `linear-gradient(158deg,#1b3323 0%,#10201a 46%,#070d09 100%)`, salvia #7ca07f, salvia claro #e6eee6, cobre #8a4a2b y cobre claro #c7a28c. Montserrat. Botones rectangulares de 6 px. Nada de píldoras en los botones.
- Contacto: fondodeimpacto@redesignlab.org. Sin teléfono ni WhatsApp.
- Calendarios: inversionistas https://calendar.app.google/geMQwggAn3R4nqHt8 (también para fondos y agencias de cooperación); empresas https://calendar.app.google/Fetdonx9fkLQ6vUx8.
- Bootcamp: inicio el lunes 2 de noviembre de 2026, 15 cupos, sin precio.
- Copy: "empresas de impacto" (no "bioeconomía"); nada de "retorno fijo" ni "garantizado"; no mencionar BIRF ni algodón; el Pasaporte cuesta USD 0.
- El Call vive en `/call-2026` con `noindex, nofollow`, fuera del sitemap y la navegación.
- Animaciones con respeto a `prefers-reduced-motion`; el contenido nunca queda oculto si no hay JavaScript.

---

## File Structure

```
app/
  layout.tsx                 # raíz mínima: <html lang="es">, fuente Montserrat
  (site)/layout.tsx          # Nav + Footer + site.css + metadata base
  (site)/site.css            # CSS portado del prototipo
  (site)/page.tsx            # Home
  (site)/empresas/page.tsx
  (site)/bootcamp/page.tsx
  (site)/pasaporte/page.tsx
  (site)/inversionistas/page.tsx
  (site)/nosotros/page.tsx
  (site)/privacidad/page.tsx
  call-2026/layout.tsx       # layout heredado (globals.css Tailwind), noindex
  call-2026/page.tsx         # landing actual movida
  api/lead/route.ts
  robots.ts, sitemap.ts
components/
  call/…                     # componentes heredados (antes components/sections, components/ui)
  site/Nav.tsx (client), Footer.tsx, Logo.tsx
  site/Hero.tsx (+ HeroMotion.tsx client), Ring.tsx (client), PhotoBelt.tsx
  site/Motion.tsx (client: reveal, texto, contadores, parallax)
  site/Ranges.tsx (client), Finder.tsx (client), CapitalMap.tsx (client)
  site/Team.tsx, Teaser.tsx, LeadForm.tsx (client)
lib/
  site.ts                    # enlaces, equipo, cohorte
  fuentes.json               # base anonimizada
  matching.ts                # lógica pura + tipos
  leads.ts                   # validación y armado de correos y filas (puro)
  lead-notify.ts             # Brevo + Sheets (I/O)
scripts/build_fuentes.py
tests/matching.test.ts, tests/leads.test.ts
```

---

### Task 1: Mover el Call a `/call-2026` y preparar los grupos de rutas

**Files:**
- Move: `components/sections/*` → `components/call/sections/*`, `components/ui/*` → `components/call/ui/*`
- Move: `app/page.tsx` → `app/call-2026/page.tsx`; `app/globals.css` → `app/call-2026/globals.css`
- Create: `app/call-2026/layout.tsx`, `app/layout.tsx` (reescrito)
- Modify: `tailwind.config.ts` (content), imports `@/components/sections` → `@/components/call/sections`, `@/components/ui` → `@/components/call/ui`

- [ ] Paso 1: `git mv` de los archivos y actualizar los imports con sed.
- [ ] Paso 2: `app/layout.tsx` raíz:

```tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-montserrat", display: "swap" });
export const metadata: Metadata = { metadataBase: new URL("https://fondodeimpacto.pe") };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es" className={montserrat.variable}><body>{children}</body></html>;
}
```

- [ ] Paso 3: `app/call-2026/layout.tsx` importa `./globals.css`, envuelve en `<div className="font-sans antialiased">` y exporta metadata con `robots: { index: false, follow: false }`.
- [ ] Paso 4: `npm run build`. Esperado: compila y la ruta `/call-2026` aparece en la salida.
- [ ] Paso 5: Commit `feat: mover landing del Call a /call-2026 oculta`.

### Task 2: Datos y lógica de matching (TDD)

**Files:** Create `scripts/build_fuentes.py`, `lib/fuentes.json`, `lib/matching.ts`, `tests/matching.test.ts`, `vitest.config.ts`. Modify `package.json` (agrega `vitest` y el script `"test": "vitest run"`).

**Interfaces (Produces):**

```ts
export type Fuente = { t: ("nr"|"de"|"eq"|"bl")[]; p: string[]; r: 0|1; s: string[]; mn: number|null; mx: number|null; a: 0|1; e: 0|1 };
export const RANGOS: { label: string; key: string; a: number; b: number }[]; // 4 rangos: ≤50K, 50K–500K, 500K–5M, >5M
export function inRange(f: Fuente, i: number): boolean | null;          // null = no publica ticket
export function matchPais(f: Fuente, pais: string): boolean;            // "*" | "OT" | código
export function matchRubro(f: Fuente, rubro: string): boolean;          // "*" | "a|b"
export function matchTipo(f: Fuente, tipo: string): boolean;            // "*" | nr|de|eq|bl
export type Query = { rubro: string; pais: string; tipo: string; rango: number };
export function report(fuentes: Fuente[], q: Query): { total: number; activas: number; sinTicket: number; porTipo: Record<"nr"|"de"|"eq"|"bl", number> };
export function countByRange(fuentes: Fuente[]): number[];              // solo e=1, con ticket
```

- [ ] Paso 1: `scripts/build_fuentes.py` lee `../Base Inversionistas/base_inversionistas.csv` y `calendario_convocatorias.csv`, y escribe `lib/fuentes.json` con la misma lógica usada en el prototipo. Es activa si la convocatoria está abierta, es permanente o cierra pronto, o si `proceso_aplicacion` contiene `ventanilla_permanente`.
- [ ] Paso 2: pruebas que fallan en `tests/matching.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { inRange, matchPais, report, countByRange, type Fuente } from "@/lib/matching";
const f = (o: Partial<Fuente>): Fuente => ({ t: [], p: [], r: 0, s: [], mn: null, mx: null, a: 0, e: 1, ...o });
describe("matching", () => {
  it("rango: sin ticket devuelve null", () => expect(inRange(f({}), 0)).toBeNull());
  it("rango: solo máximo asume piso de 10%", () => expect(inRange(f({ mx: 400000 }), 1)).toBe(true));
  it("rango: no cruza", () => expect(inRange(f({ mn: 1e6, mx: 2e6 }), 0)).toBe(false));
  it("país: regional calza con todos", () => expect(matchPais(f({ r: 1 }), "PE")).toBe(true));
  it("país: nacional solo con su país", () => expect(matchPais(f({ p: ["CO"] }), "PE")).toBe(false));
  it("país OT solo regionales", () => expect(matchPais(f({ p: ["PE"] }), "OT")).toBe(false));
  it("reporte cuenta compatibles, activas y sin ticket", () => {
    const base = [f({ t: ["de"], p: ["PE"], s: ["agricultura"], mn: 5e4, mx: 3e5, a: 1 }), f({ t: ["nr"], r: 1, s: ["agricultura"] }), f({ t: ["de"], p: ["CO"], s: ["agricultura"], mn: 5e4, mx: 3e5 }), f({ t: ["de"], r: 1, s: ["agricultura"], e: 0 })];
    expect(report(base, { rubro: "agricultura", pais: "PE", tipo: "*", rango: 1 })).toEqual({ total: 2, activas: 1, sinTicket: 1, porTipo: { nr: 1, de: 1, eq: 0, bl: 0 } });
  });
  it("countByRange ignora e=0 y sin ticket", () => expect(countByRange([f({ mn: 1e4, mx: 4e4 }), f({ mn: 1e4, mx: 4e4, e: 0 }), f({})])).toEqual([1, 0, 0, 0]));
});
```

- [ ] Paso 3: `npm test`. Esperado: falla porque el módulo no existe.
- [ ] Paso 4: implementar `lib/matching.ts`, con la lógica de las funciones `span/inR/inP/inS/inT` del prototipo.
- [ ] Paso 5: `npm test`. Esperado: 8 pruebas pasan.
- [ ] Paso 6: Commit `feat: base anonimizada de fuentes y lógica de matching`.

### Task 3: Leads, validación, Brevo y Google Sheets (TDD)

**Files:** Create `lib/leads.ts`, `lib/lead-notify.ts`, `app/api/lead/route.ts`, `tests/leads.test.ts`. Modify `package.json` (agrega `google-auth-library`).

**Interfaces (Produces):**

```ts
export type LeadForm = "buscador" | "bootcamp" | "consulta" | "pasaporte";
export type ValidationResult = { ok: true; data: Record<string, string> } | { ok: false; error: string };
export function validateLead(form: string, data: unknown): ValidationResult; // honeypot "website" con valor → error
export function buildEnvelope(form: LeadForm, d: Record<string,string>, extra?: { reporte?: ReturnType<typeof report> }): {
  subject: string; fields: [string, string][]; tab: string; row: string[];
  userEmail?: { to: string; subject: string; html: string };
};
export async function notifyLead(form: LeadForm, d: Record<string,string>, extra?): Promise<{ emailOk: boolean; sheetOk: boolean }>;
```

Obligatorios: todos los formularios piden `nombre`, `correo` y `consentimiento="si"`. El buscador agrega `razon_social`, `rubro`, `pais`, `tipo`, `rango` y `celular`. Bootcamp agrega `empresa`, `pais` y `celular`. Consulta agrega `publico` (cooperativa, consultor o agencia_fondo) y `mensaje`. Pasaporte agrega `empresa`.

- [ ] Paso 1: pruebas que fallan en `tests/leads.test.ts`: formulario desconocido → error; falta un obligatorio → error con el nombre del campo; correo inválido → error; honeypot lleno → error; sin consentimiento → error; buscador válido → ok; `buildEnvelope("buscador")` devuelve la pestaña "Buscador", la fila empieza con la fecha ISO y `userEmail.to` es el correo del lead; `buildEnvelope("consulta")` no tiene `userEmail`.
- [ ] Paso 2: `npm test`. Esperado: fallan.
- [ ] Paso 3: implementar `lib/leads.ts` (puro) y `lib/lead-notify.ts`, copiando `sendBrevoEmail` y `appendSheetRow` de `redesignlab/lib/lead-notify.ts`. Cambios: remitente "Fondo de Impacto — Sitio web", `EMAIL_FROM` por defecto fondodeimpacto@redesignlab.org y `EMAIL_NOTIFY` por defecto fondodeimpacto@redesignlab.org. El correo al usuario va en paralelo y no afecta el resultado.
- [ ] Paso 4: `app/api/lead/route.ts`: parsea JSON, llama a `validateLead` y, si el formulario es el buscador, recalcula `report(fuentes, q)`. Llama a `notifyLead` y responde 502 si fallan ambos canales, si no `{ ok: true }`.
- [ ] Paso 5: `npm test`. Esperado: todas pasan.
- [ ] Paso 6: Commit `feat: captura de leads con Brevo y Google Sheets`.

### Task 4: Layout del sitio, CSS, navegación, footer y movimiento

**Files:** Create `app/(site)/layout.tsx`, `app/(site)/site.css`, `components/site/{Nav,Footer,Logo,Ring,Motion,PhotoBelt,HeroMotion,Hero}.tsx`, `lib/site.ts`; copia de imágenes a `public/img`.

- [ ] Paso 1: `site.css` = el bloque `<style>` del prototipo sin las reglas de la barra del prototipo (`.proto`, `.modes`) ni de las direcciones A y B. Se fija la dirección C: `.vC`→ siempre activa; `.only-photo` y `.belt` visibles; `.motion` lo agrega `Motion.tsx` si no hay reduced-motion.
- [ ] Paso 2: `Nav.tsx` (cliente): logo (`/brand/logo-full-dark.png`, 150 px), menú "Empresas" con tres enlaces, Inversionistas, Nosotros y botón "Agendar reunión". El botón usa el calendario de inversionistas en `/inversionistas` y el de empresas en el resto. Incluye menú móvil con un botón de hamburguesa y `aria-expanded`.
- [ ] Paso 3: `Footer.tsx`: columnas, correo, enlace a `/privacidad` y nota legal con las cifras y el marcador del USD 80MM.
- [ ] Paso 4: `Ring.tsx` (cliente): canvas con la función `ringAt` del prototipo; anima solo si está visible y sin reduced-motion. `Motion.tsx` (cliente, montado en el layout): portar `prepMotion`, `prepText`, `countUp` y `parallax`, y reejecutar al cambiar de ruta (`usePathname`).
- [ ] Paso 5: `Hero.tsx` (servidor) + `HeroMotion.tsx` (cliente): las props `slides: {src, cap}[]`, `variant: "single"|"split"` y `children` reproducen el slideshow, el velo, el contador y la barra de progreso.
- [ ] Paso 6: `npm run build`. Esperado: compila.
- [ ] Paso 7: Commit `feat: layout, navegación y sistema visual del sitio`.

### Task 5: Páginas Home, Empresas, Bootcamp, Inversionistas y Nosotros

**Files:** Create `app/(site)/page.tsx`, `empresas/page.tsx`, `bootcamp/page.tsx`, `inversionistas/page.tsx`, `nosotros/page.tsx`, `components/site/{Ranges,Team,Teaser,LeadForm}.tsx`.

- [ ] Paso 1: portar cada `<div class="page" id="p-…">` del prototipo a JSX (`class`→`className`, estilos en línea a objetos y `<a href="#x">` a `next/link` con rutas reales). Cada página exporta `metadata` con título y descripción propios.
- [ ] Paso 2: `Ranges.tsx` (cliente) usa `countByRange` y enlaza a `/pasaporte?rango=i#buscador`.
- [ ] Paso 3: Bootcamp: la ficha de la cohorte muestra "Inicio: lunes 2 de noviembre de 2026", "Duración: 8 semanas", "Formato: Virtual + 1:1", "Cupos: 15 empresas" y "Postulaciones: abiertas", sin precio ni becas. Se agrega una sección `#postular` con `LeadForm form="bootcamp"` y la sección `#otro-perfil` con un `LeadForm form="consulta"` por público.
- [ ] Paso 4: `LeadForm.tsx` (cliente) es un formulario genérico. Recibe la configuración de campos, incluye el honeypot oculto, el consentimiento con enlace a `/privacidad` y los estados enviando/éxito/error, y hace POST a `/api/lead`.
- [ ] Paso 5: `npm run build` y revisión en el navegador de las cinco páginas.
- [ ] Paso 6: Commit `feat: páginas principales del sitio`.

### Task 6: Pasaporte (buscador, reporte, mapa de capital)

**Files:** Create `app/(site)/pasaporte/page.tsx`, `components/site/{Finder,CapitalMap}.tsx`.

- [ ] Paso 1: `Finder.tsx` (cliente): formulario sin datos de ejemplo prellenados; lee `?rango` de la URL. Al enviar, calcula `report` en el cliente y lo muestra; en paralelo hace POST a `/api/lead` con `form: "buscador"`. Si el envío falla, igual muestra el reporte y avisa que no se pudo enviar la copia por correo. Antes del primer envío, el panel del reporte muestra una vista de ejemplo marcada como "Ejemplo".
- [ ] Paso 2: el CTA "Completar mi pasaporte" abre un `LeadForm form="pasaporte"` prellenado con los datos del buscador. El CTA "Agendar una reunión" usa el calendario de empresas.
- [ ] Paso 3: `CapitalMap.tsx` (cliente): tiles, filtro por país y tres gráficos de barras, portados de `drawMap` del prototipo.
- [ ] Paso 4: build, prueba en el navegador del flujo completo y POST que responde 502 sin credenciales (la interfaz muestra el aviso).
- [ ] Paso 5: Commit `feat: pasaporte con buscador de fondos y mapa de capital`.

### Task 7: Privacidad, SEO y entrega

**Files:** Create `app/(site)/privacidad/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, `.env.example`, `README.md` (actualizado).

- [ ] Paso 1: política de privacidad. Responsable: Redesign Ventures SAC, Lima. Recoge datos de formularios (nombre, correo, celular, empresa, país, rubro y necesidades de capital). Finalidades: responder, enviar el reporte y contactar sobre financiamiento. Proveedores: Brevo, Google y Vercel. Conservación: mientras dure la relación o hasta 3 años. Derechos ARCO en fondodeimpacto@redesignlab.org. Sin venta de datos. Sin cookies de seguimiento. Marco legal: Ley 29733 y su reglamento (Perú) y Ley 1581 de 2012 (Colombia). Fecha de vigencia.
- [ ] Paso 2: `robots.ts` con `disallow: ["/call-2026", "/api/"]` y `sitemap.ts` con las 7 rutas públicas.
- [ ] Paso 3: `.env.example` con las seis variables y un README con los pasos: crear la hoja con pestañas Buscador, Bootcamp, Consultas y Pasaporte; compartirla con la cuenta de servicio; configurar las variables en Vercel.
- [ ] Paso 4: `npm run lint && npm test && npm run build`. Esperado: sin errores.
- [ ] Paso 5: Commit `feat: privacidad, SEO y documentación de despliegue`.
