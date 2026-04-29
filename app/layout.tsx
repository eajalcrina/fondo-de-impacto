import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="es" className={`${plusJakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
