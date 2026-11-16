import type { Metadata } from "next";
import { Nosotros, META } from "@/components/paginas/Nosotros";
import { alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { ...META.en, alternates: alternosEn("/nosotros") };

export default function Page() {
  return <Nosotros lang="en" />;
}
