import type { Metadata } from "next";
import { Empresas, META } from "@/components/paginas/Empresas";
import { alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { ...META.en, alternates: alternosEn("/empresas") };

export default function Page() {
  return <Empresas lang="en" />;
}
