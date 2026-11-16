import type { Metadata } from "next";
import { Inicio } from "@/components/paginas/Inicio";
import { dic, alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { description: dic("en").inicio.meta, alternates: alternosEn("/") };

export default function Page() {
  return <Inicio lang="en" />;
}
