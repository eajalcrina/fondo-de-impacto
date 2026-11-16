import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: { default: "Fondo de Impacto | Capital for Latin America’s impact companies", template: "%s | Fondo de Impacto" },
  description: "We prepare impact companies in Latin America to raise capital and introduce them to the funds that can finance them. Capital Raising Bootcamp, Investment Passport and direct financing.",
  openGraph: { type: "website", locale: "en_US", alternateLocale: ["es_PE"], siteName: "Fondo de Impacto", url: "https://fondodeimpacto.pe/en", images: [{ url: "/og-en.png", width: 1200, height: 630, alt: "Fondo de Impacto: capital for Latin America’s impact companies" }] },
  twitter: { card: "summary_large_image", images: ["/og-en.png"] },
};

/** Sitio en inglés: mismo diseño, textos en inglés y el atributo de idioma del documento en «en». */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }} />
      <Nav />
      <main lang="en">{children}</main>
      <Footer lang="en" />
    </>
  );
}
