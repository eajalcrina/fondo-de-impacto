import type { Metadata } from "next";
import { Inversionistas, META } from "@/components/paginas/Inversionistas";
import { alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { ...META.en, alternates: alternosEn("/inversionistas") };

export default function Page() {
  return <Inversionistas lang="en" />;
}
