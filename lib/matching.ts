/**
 * Lógica pura sobre la base anonimizada de fuentes de capital (lib/fuentes.json).
 * La usan el buscador, el mapa de capital, los rangos del Home y la API de leads.
 */

export type TipoCapital = "nr" | "de" | "eq" | "bl";

export type Fuente = {
  /** Instrumentos: no reembolsable, deuda/garantías, equity, blended o mixto. */
  t: TipoCapital[];
  /** Países con alcance nacional (códigos PE, CO, EC, BO, BR, MX, CL, CA). */
  p: string[];
  /** 1 si el alcance es regional o global con América Latina. */
  r: 0 | 1;
  /** Sectores de foco. */
  s: string[];
  /** Ticket mínimo y máximo publicados (USD). */
  mn: number | null;
  mx: number | null;
  /** 1 si tiene convocatoria abierta o ventanilla permanente. */
  a: 0 | 1;
  /** 1 si financia empresas, startups, asociaciones o cooperativas. */
  e: 0 | 1;
};

export const RANGOS = [
  { key: "Inicial", label: "Hasta USD 50 mil", a: 0, b: 5e4 },
  { key: "Pequeño", label: "USD 50 mil – 150 mil", a: 5e4, b: 1.5e5 },
  { key: "Mediano", label: "USD 150 mil – 300 mil", a: 1.5e5, b: 3e5 },
  { key: "Mediano alto", label: "USD 300 mil – 500 mil", a: 3e5, b: 5e5 },
  { key: "Crecimiento", label: "USD 500 mil – 2 millones", a: 5e5, b: 2e6 },
  { key: "Gran escala", label: "Más de USD 2 millones", a: 2e6, b: 1e13 },
] as const;

export const TIPOS: [TipoCapital, string][] = [
  ["nr", "No reembolsable"],
  ["de", "Deuda y garantías"],
  ["eq", "Equity"],
  ["bl", "Blended o mixto"],
];

export type Query = { rubro: string; pais: string; tipo: string; rango: number };

export type Report = {
  total: number;
  activas: number;
  sinTicket: number;
  porTipo: Record<TipoCapital, number>;
};

function span(f: Fuente): [number, number] | null {
  let { mn, mx } = f;
  if (mn == null && mx == null) return null;
  if (mn == null) mn = (mx as number) * 0.1;
  if (mx == null) mx = mn * 10;
  return [mn, mx];
}

/** true si el ticket cruza el rango, false si no, null si la fuente no publica ticket. */
export function inRange(f: Fuente, i: number): boolean | null {
  const s = span(f);
  if (!s) return null;
  const r = RANGOS[i];
  return s[0] < r.b && s[1] >= r.a;
}

export function matchPais(f: Fuente, pais: string): boolean {
  if (pais === "*") return true;
  if (pais === "OT") return f.r === 1;
  return f.r === 1 || f.p.includes(pais);
}

export function matchRubro(f: Fuente, rubro: string): boolean {
  if (rubro.startsWith("*")) return true;
  return rubro.split("|").some((x) => f.s.includes(x));
}

export function matchTipo(f: Fuente, tipo: string): boolean {
  return tipo === "*" || f.t.includes(tipo as TipoCapital);
}

/** Fuentes compatibles con el perfil: incluye las que no publican ticket. */
export function compatibles(fuentes: Fuente[], q: Query): Fuente[] {
  return fuentes.filter(
    (f) =>
      f.e === 1 &&
      matchPais(f, q.pais) &&
      matchRubro(f, q.rubro) &&
      matchTipo(f, q.tipo) &&
      inRange(f, q.rango) !== false,
  );
}

export function report(fuentes: Fuente[], q: Query): Report {
  const fit = compatibles(fuentes, q);
  const porTipo = { nr: 0, de: 0, eq: 0, bl: 0 } as Record<TipoCapital, number>;
  for (const f of fit) for (const t of f.t) porTipo[t] += 1;
  return {
    total: fit.length,
    activas: fit.filter((f) => f.a === 1).length,
    sinTicket: fit.filter((f) => inRange(f, q.rango) === null).length,
    porTipo,
  };
}

/** Fuentes para empresas con ticket publicado en cada rango. */
export function countByRange(fuentes: Fuente[]): number[] {
  return RANGOS.map((_, i) => fuentes.filter((f) => f.e === 1 && inRange(f, i) === true).length);
}
