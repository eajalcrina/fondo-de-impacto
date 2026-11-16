import type { Metadata } from "next";
import { Nosotros, META } from "@/components/paginas/Nosotros";
import { alternos } from "@/lib/i18n";

export const metadata: Metadata = { ...META.es, alternates: alternos("/nosotros") };

export default function Page() {
  return <Nosotros lang="es" />;
}
