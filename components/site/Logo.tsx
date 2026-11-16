import Image from "next/image";
import Link from "next/link";
import { es } from "@/lib/i18n/es";

/**
 * Logo armado en código: el ícono de puntos y el nombre en Open Sans con peso, «Impacto» en naranja
 * y la firma de Redesign Lab legible. Se ve nítido a cualquier tamaño.
 */
export function Logo({ tone = "white", href = "/" }: { tone?: "dark" | "white"; href?: string }) {
  return (
    <Link href={href} className={`logo logo-${tone}`} aria-label={`${es.marca.nombre}, inicio`}>
      <Image className="logo-icono" src={`/brand/logo-icon-${tone}.png`} alt="" width={48} height={48} priority />
      <span className="logo-texto" aria-hidden="true">
        <span className="logo-nombre">Fondo de <span className="logo-clave">Impacto</span></span>
        <span className="logo-firma">Powered by Redesign Lab</span>
      </span>
    </Link>
  );
}
