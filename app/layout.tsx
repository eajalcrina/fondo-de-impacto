import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
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
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
