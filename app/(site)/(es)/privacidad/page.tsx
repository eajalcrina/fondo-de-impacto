import type { Metadata } from "next";
import { Privacidad, META } from "@/components/paginas/Privacidad";
import { alternos } from "@/lib/i18n";

export const metadata: Metadata = { ...META.es, alternates: alternos("/privacidad") };

export default function Page() {
  return <Privacidad lang="es" />;
}
