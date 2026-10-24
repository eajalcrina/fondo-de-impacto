import type { Metadata } from "next";
import "./site.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Motion } from "@/components/site/Motion";
import { Analytics } from "@/components/site/Analytics";
import { EQUIPO, SITE, personaSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "Fondo de Impacto | Capital para empresas de impacto de América Latina", template: "%s | Fondo de Impacto" },
  description: "Preparamos a empresas de impacto de América Latina para levantar capital y las presentamos a los fondos que pueden financiarlas. Bootcamp de Levantamiento de Capital, Pasaporte de Inversión y financiamiento directo.",
  openGraph: { type: "website", locale: "es_PE", siteName: "Fondo de Impacto", url: "https://fondodeimpacto.pe", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fondo de Impacto: capital para las empresas de impacto de América Latina" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  alternates: { canonical: "/" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "Fondo de Impacto",
      url: SITE.url,
      logo: `${SITE.url}/brand/logo-full-dark.png`,
      email: SITE.email,
      description: "Prepara a empresas de impacto de América Latina para recibir inversión y les acerca capital privado.",
      areaServed: ["Perú", "Colombia", "América Latina"],
      parentOrganization: { "@type": "Organization", "@id": "https://redesignlab.org/#organization", name: "Redesign Lab", url: "https://redesignlab.org" },
      founder: EQUIPO.slice(0, 2).map(personaSchema),
      employee: EQUIPO.map(personaSchema),
      sameAs: ["https://www.linkedin.com/company/fondo-de-impacto"],
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: "Fondo de Impacto", inLanguage: "es", publisher: { "@id": `${SITE.url}/#organization` } },
  ],
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <Motion />
      <Analytics />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
    </>
  );
}
