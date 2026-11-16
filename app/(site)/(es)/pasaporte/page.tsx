import type { Metadata } from "next";
import { Pasaporte, META } from "@/components/paginas/Pasaporte";
import { alternos } from "@/lib/i18n";

export const metadata: Metadata = { ...META.es, alternates: alternos("/pasaporte") };

export default function Page() {
  return <Pasaporte lang="es" />;
}
