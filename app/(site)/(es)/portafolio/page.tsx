import type { Metadata } from "next";
import { Portafolio } from "@/components/paginas/Portafolio";
import { dic, alternos } from "@/lib/i18n";

export const metadata: Metadata = { title: "Portafolio", description: dic("es").portafolio.meta, alternates: alternos("/portafolio") };

export default function Page() {
  return <Portafolio lang="es" />;
}
