import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { CONSENT_DEFAULT } from "@/lib/consent";

/** Una sola familia, como la referencia (fosterandpartners.com): 500 en títulos, 300 para leer. */
const sans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fondodeimpacto.pe"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={sans.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
