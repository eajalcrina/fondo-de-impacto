import Image from "next/image";
import Link from "next/link";
import { dic, ruta, type Lang } from "@/lib/i18n";

/**
 * Logo armado en código: el ícono de puntos y el nombre en Open Sans con peso, «Impacto» en naranja
 * y la firma de Redesign Lab legible. Se ve nítido a cualquier tamaño.
 */
export function Logo({ tone = "white", lang = "es" }: { tone?: "dark" | "white"; lang?: Lang }) {
  return (
    <Link href={ruta(lang, "/")} className={`logo logo-${tone}`} aria-label={`${dic(lang).marca.nombre}, ${lang === "en" ? "home" : "inicio"}`}>
      <Image className="logo-icono" src={`/brand/logo-icon-${tone}.png`} alt="" width={48} height={48} priority />
      <span className="logo-texto" aria-hidden="true">
        <span className="logo-nombre">Fondo de Impacto</span>
        <span className="logo-firma">Powered by <b>Redesign Lab</b></span>
      </span>
    </Link>
  );
}
