import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import { CONSENT_DEFAULT } from "@/lib/consent";

/** Titulares, cifras y citas. Siempre 400, con el eje de tamaño óptico al máximo. */
const serif = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

/** Texto, rótulos, menú, botones y cifras tabulares. */
const sans = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fondodeimpacto.pe"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
