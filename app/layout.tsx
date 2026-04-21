import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fondo de Impacto — Investment Call 2026 · Redesign Lab",
  description:
    "Invierte en la bioeconomía peruana. 10% fijo anual · 12 meses · S/ 300,000 total · Sin dilución. Impulsado por Redesign Lab.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Fondo de Impacto — Investment Call 2026",
    description:
      "Retorno garantizado con impacto real. Desde S/ 10,000. Redesign Lab.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#hero" className="skip-link">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
