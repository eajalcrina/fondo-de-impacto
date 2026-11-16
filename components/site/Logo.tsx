import Image from "next/image";
import Link from "next/link";
import { es } from "@/lib/i18n/es";

export function Logo({ tone = "white", width = 156 }: { tone?: "dark" | "white"; width?: number }) {
  return (
    <Link href="/" className="logo" aria-label={`${es.marca.nombre}, inicio`}>
      <Image src={`/brand/logo-full-${tone}.png`} alt={es.marca.alt} width={width} height={Math.round((width * 424) / 1248)} priority />
    </Link>
  );
}
