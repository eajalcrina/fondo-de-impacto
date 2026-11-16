import type { Metadata } from "next";
import { Inicio } from "@/components/paginas/Inicio";
import { dic, alternos } from "@/lib/i18n";

export const metadata: Metadata = { description: dic("es").inicio.meta, alternates: alternos("/") };

export default function Page() {
  return <Inicio lang="es" />;
}
