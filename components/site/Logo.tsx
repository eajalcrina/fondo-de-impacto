import Image from "next/image";
import Link from "next/link";
import { dic, ruta, type Lang } from "@/lib/i18n";

/**
 * Logo armado en código: isotipo de puntos y «FONDO DE / IMPACTO» en Open Sans 500, con «IMPACTO» del mismo ancho
 * que «FONDO DE». Debajo, la firma de Redesign Lab desde el isotipo y con el ancho total del logo.
 */
export function Logo({ tone = "white", lang = "es" }: { tone?: "dark" | "white"; lang?: Lang }) {
  return (
    <Link href={ruta(lang, "/")} className={`logo logo-${tone}`} aria-label={`${dic(lang).marca.nombre}, ${lang === "en" ? "home" : "inicio"}`}>
      <Image className="logo-icono" src={`/brand/logo-icon-${tone}.png`} alt="" width={48} height={48} priority />
      <span className="logo-texto" aria-hidden="true">
        <span className="logo-nombre"><span className="logo-l1">Fondo de</span><span className="logo-l2">Impacto</span></span>
        <span className="logo-firma">Powered by <b>Redesign Lab</b></span>
      </span>
    </Link>
  );
}
