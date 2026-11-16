import type { Metadata } from "next";
import { Privacidad, META } from "@/components/paginas/Privacidad";
import { alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { ...META.en, alternates: alternosEn("/privacidad") };

export default function Page() {
  return <Privacidad lang="en" />;
}
