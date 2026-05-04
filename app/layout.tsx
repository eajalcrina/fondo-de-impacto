import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://www.fondodeimpacto.pe";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fondo de Impacto — Investment Call 2026 · Redesign Lab",
    template: "%s | Fondo de Impacto",
  },
  description:
    "Invierte en la bioeconomía peruana con retorno garantizado. 10% fijo anual, plazo 12 meses, desde S/ 10,000. Instrumento de deuda sin dilución respaldado por contrato notarial. Impulsado por Redesign Lab.",
  keywords: [
    "inversión de impacto Perú",
    "bioeconomía peruana",
    "inversión sostenible",
    "retorno fijo anual",
    "angel investor Perú",
    "deuda sin dilución",
    "Redesign Lab",
    "Fondo de Impacto",
    "investment call 2026",
    "clean beauty Perú",
    "suplementos naturales Perú",
    "inversión biodiversidad",
    "contrato notarial inversión",
    "impacto social ambiental Perú",
  ],
  authors: [
    { name: "Redesign Lab", url: "https://redesignlab.org" },
  ],
  creator: "Redesign Lab",
  publisher: "Fondo de Impacto by Redesign Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Fondo de Impacto — Investment Call 2026",
    description:
      "Invierte en la bioeconomía peruana. 10% fijo anual · 12 meses · Desde S/ 10,000 · Sin dilución. Respaldado por contrato notarial.",
    url: SITE_URL,
    siteName: "Fondo de Impacto",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondo de Impacto — Investment Call 2026",
    description:
      "Invierte en la bioeconomía peruana. 10% fijo anual · 12 meses · Desde S/ 10,000 · Sin dilución.",
    creator: "@redesignlab",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "finance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
