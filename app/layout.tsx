import type { Metadata } from "next";
import { Work_Sans, Libre_Caslon_Display } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const libreDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  variable: "--font-caslon",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fondo de Impacto — Investment Call 2026 · Redesign Lab",
  description:
    "Invierte en la bioeconomía peruana. 10% fijo anual · 12 meses · S/ 300,000 total · Sin dilución. Impulsado por Redesign Lab.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Fondo de Impacto — Investment Call 2026",
    description: "Retorno garantizado con impacto real. Desde S/ 10,000. Redesign Lab.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${workSans.variable} ${libreDisplay.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
