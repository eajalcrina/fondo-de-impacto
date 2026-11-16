import { es, type Textos } from "./es";
import { en } from "./en";

export type Lang = "es" | "en";

export const IDIOMAS: Lang[] = ["es", "en"];

export function dic(lang: Lang): Textos {
  return lang === "en" ? en : es;
}

/** Cada página en español con su par en inglés. */
const RUTAS: [string, string][] = [
  ["/", "/en"],
  ["/empresas", "/en/companies"],
  ["/bootcamp", "/en/bootcamp"],
  ["/pasaporte", "/en/passport"],
  ["/inversionistas", "/en/investors"],
  ["/portafolio", "/en/portfolio"],
  ["/nosotros", "/en/about"],
  ["/privacidad", "/en/privacy"],
];

export function langDe(path: string | null | undefined): Lang {
  return path === "/en" || path?.startsWith("/en/") ? "en" : "es";
}

/** Ruta en el idioma pedido a partir de la ruta en español, conservando el ancla. */
export function ruta(lang: Lang, rutaEs: string): string {
  if (lang === "es") return rutaEs;
  const [base, ancla] = rutaEs.split("#");
  const par = RUTAS.find(([e]) => e === (base || "/"));
  const destino = par ? par[1] : `/en${base}`;
  return ancla ? `${destino}#${ancla}` : destino;
}

/** Ruta equivalente en el otro idioma para el selector ES / EN. */
export function rutaPar(path: string): { es: string; en: string } {
  const par = RUTAS.find(([e, i]) => e === path || i === path);
  return par ? { es: par[0], en: par[1] } : { es: "/", en: "/en" };
}

/** Pares de idioma para metadatos (hreflang). */
export function alternos(rutaEs: string) {
  const enPath = ruta("en", rutaEs);
  return { canonical: rutaEs, languages: { "es-PE": rutaEs, en: enPath, "x-default": rutaEs } };
}

export function alternosEn(rutaEs: string) {
  const enPath = ruta("en", rutaEs);
  return { canonical: enPath, languages: { "es-PE": rutaEs, en: enPath, "x-default": rutaEs } };
}
