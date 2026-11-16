import type { Metadata } from "next";
import { Pasaporte, META } from "@/components/paginas/Pasaporte";
import { alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { ...META.en, alternates: alternosEn("/pasaporte") };

export default function Page() {
  return <Pasaporte lang="en" />;
}
