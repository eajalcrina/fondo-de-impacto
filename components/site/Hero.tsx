import Image from "next/image";

export type Slide = { src: string; cap: string };

/**
 * Cabecera de las páginas internas: texto a la izquierda y una foto mediana a la derecha, sobre el lienzo.
 * La foto no se estira a pantalla completa para no perder calidad.
 */
export function Hero({ slides, posicion, children }: { slides: Slide[]; posicion?: string; children: React.ReactNode }) {
  const foto = slides[0];
  return (
    <section className="intro">
      <div className="wrap intro-in">
        <div className="intro-texto">{children}</div>
        <div className="intro-foto">
          <Image src={foto.src} alt={foto.cap} fill priority sizes="(min-width: 900px) 40vw, 100vw" style={posicion ? { objectPosition: posicion } : undefined} />
        </div>
      </div>
    </section>
  );
}
