import type { Metadata } from "next";
import { Bootcamp, META } from "@/components/paginas/Bootcamp";
import { alternosEn } from "@/lib/i18n";

export const metadata: Metadata = { ...META.en, alternates: alternosEn("/bootcamp") };

export default function Page() {
  return <Bootcamp lang="en" />;
}
