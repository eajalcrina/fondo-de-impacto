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
  description: "Investment Call 2026 de Fondo de Impacto. Acceso privado.",
  robots: { index: false, follow: false },
};

export default function CallLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${plusJakarta.variable} font-sans antialiased`}>{children}</div>;
}
