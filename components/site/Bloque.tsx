import Image from "next/image";
import Link from "next/link";

/** Bloque de foto con el título abajo a la izquierda sobre un velo. Todo el bloque es un enlace. */
export function Bloque({ href, titulo, sub, foto, alt, ancho = 4, sizes }: { href: string; titulo: string; sub?: string; foto: string; alt: string; ancho?: 4 | 6 | 8 | 12; sizes?: string }) {
  return (
    <Link href={href} className={`bloque c${ancho}`}>
      <Image src={foto} alt={alt} fill sizes={sizes ?? (ancho >= 8 ? "(min-width: 900px) 66vw, 100vw" : "(min-width: 900px) 33vw, 100vw")} />
      <span className="bloque-texto">
        <span className="bloque-titulo">{titulo}</span>
        {sub && <span className="bloque-sub">{sub}</span>}
      </span>
    </Link>
  );
}
