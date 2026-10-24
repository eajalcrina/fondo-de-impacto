import type { MetadataRoute } from "next";

const RUTAS = ["", "/empresas", "/bootcamp", "/pasaporte", "/inversionistas", "/nosotros", "/privacidad"];

export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.map((r) => ({ url: `https://fondodeimpacto.pe${r}`, lastModified: new Date(), changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
