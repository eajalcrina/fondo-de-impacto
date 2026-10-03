import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fondo de Impacto — Investment Call 2026 · Redesign Lab",
  description: "Investment Call 2026 de Fondo de Impacto. Acceso privado.",
  robots: { index: false, follow: false },
};

export default function CallLayout({ children }: { children: React.ReactNode }) {
  return <div className="font-sans antialiased">{children}</div>;
}
