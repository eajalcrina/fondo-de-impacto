import type { Metadata } from "next";
import { Empresas, META } from "@/components/paginas/Empresas";
import { alternos } from "@/lib/i18n";

export const metadata: Metadata = { ...META.es, alternates: alternos("/empresas") };

export default function Page() {
  return <Empresas lang="es" />;
}
