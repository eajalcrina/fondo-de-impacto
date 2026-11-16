import Image from "next/image";

export type Slide = { src: string; cap: string };

/**
 * Cabecera de las páginas internas: una foto a sangre y el texto abajo a la izquierda.
 * Con `split`, banda bosque a todo el ancho con una pieza a la derecha (ficha, buscador).
 */
export function Hero({ slides, split = false, children }: { slides: Slide[]; split?: boolean; children: React.ReactNode }) {
  if (split) {
    return (
      <section className="hero dk">
        <div className="wrap hero-2">{children}</div>
      </section>
    );
  }
  const foto = slides[0];
  return (
    <section className="cabecera">
      <Image src={foto.src} alt={foto.cap} fill priority sizes="100vw" />
      <div className="wrap cabecera-texto">{children}</div>
    </section>
  );
}
