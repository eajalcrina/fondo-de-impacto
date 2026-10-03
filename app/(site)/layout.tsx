import type { Metadata } from "next";
import "./site.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Motion } from "@/components/site/Motion";

export const metadata: Metadata = {
  title: { default: "Fondo de Impacto · Capital para empresas de impacto de América Latina", template: "%s · Fondo de Impacto" },
  description: "Preparamos a empresas de impacto de América Latina para levantar capital y las presentamos a los fondos que pueden financiarlas. Bootcamp de Levantamiento de Capital, Pasaporte de Inversión y financiamiento directo.",
  openGraph: { type: "website", locale: "es_PE", siteName: "Fondo de Impacto", images: ["/img/h21.jpg"] },
  icons: { icon: "/brand/logo-icon-dark.png" },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <Motion />
    </>
  );
}
