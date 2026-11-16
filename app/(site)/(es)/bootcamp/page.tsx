import type { Metadata } from "next";
import { Bootcamp, META } from "@/components/paginas/Bootcamp";
import { alternos } from "@/lib/i18n";

export const metadata: Metadata = { ...META.es, alternates: alternos("/bootcamp") };

export default function Page() {
  return <Bootcamp lang="es" />;
}
