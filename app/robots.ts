import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/call-2026", "/api/"] },
    sitemap: "https://fondodeimpacto.pe/sitemap.xml",
  };
}
