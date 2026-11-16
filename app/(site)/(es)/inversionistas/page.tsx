import type { Metadata } from "next";
import { Inversionistas, META } from "@/components/paginas/Inversionistas";
import { alternos } from "@/lib/i18n";

export const metadata: Metadata = { ...META.es, alternates: alternos("/inversionistas") };

export default function Page() {
  return <Inversionistas lang="es" />;
}
