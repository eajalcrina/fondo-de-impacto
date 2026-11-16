import type { Metadata } from "next";
import { Portafolio } from "@/components/paginas/Portafolio";
import { dic, alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { title: "Portfolio", description: dic("en").portafolio.meta, alternates: alternosEn("/portafolio") };

export default function Page() {
  return <Portafolio lang="en" />;
}
