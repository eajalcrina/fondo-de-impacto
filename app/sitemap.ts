import type { MetadataRoute } from "next";
import { ruta } from "@/lib/i18n";

const BASE = "https://fondodeimpacto.pe";
const RUTAS = ["/", "/empresas", "/bootcamp", "/pasaporte", "/inversionistas", "/portafolio", "/nosotros", "/privacidad"];

/** Cada página en español y en inglés, con sus pares de idioma. */
export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.flatMap((r) => {
    const languages = { "es-PE": `${BASE}${r === "/" ? "" : r}`, en: `${BASE}${ruta("en", r)}` };
    const prioridad = r === "/" ? 1 : 0.7;
    return [
      { url: languages["es-PE"], lastModified: new Date(), changeFrequency: "monthly" as const, priority: prioridad, alternates: { languages } },
      { url: languages.en, lastModified: new Date(), changeFrequency: "monthly" as const, priority: prioridad - 0.1, alternates: { languages } },
    ];
  });
}
