import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark", width = 150 }: { tone?: "dark" | "white"; width?: number }) {
  return (
    <Link href="/" className="logo" aria-label="Fondo de Impacto, inicio">
      <Image src={`/brand/logo-full-${tone}.png`} alt="Fondo de Impacto, powered by Redesign Lab" width={width} height={Math.round((width * 424) / 1248)} priority />
    </Link>
  );
}
