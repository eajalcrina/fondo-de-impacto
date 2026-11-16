import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { CONSENT_DEFAULT } from "@/lib/consent";

/** Una sola familia, como la referencia (fosterandpartners.com): 500 en títulos, 300 para leer. */
const sans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  variable: "--font-sans",
  display: "swap",
});

/** Solo para el nombre del logo, como el original: Montserrat 400. */
const logo = Montserrat({ subsets: ["latin"], weight: ["400"], variable: "--font-logo", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fondodeimpacto.pe"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${logo.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
