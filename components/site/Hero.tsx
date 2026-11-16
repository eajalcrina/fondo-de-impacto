import Image from "next/image";

export type Slide = { src: string; cap: string };

/**
 * Héroe de las páginas interiores, con el mismo esquema que la portada:
 * una sola foto fija a la izquierda y el mensaje en el panel bosque.
 * Con `split`, el panel ocupa todo el ancho y lleva una pieza a la derecha (ficha, buscador).
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
    <section className="heroe heroe-int">
      <div className="heroe-foto">
        <Image src={foto.src} alt={foto.cap} fill priority sizes="(min-width: 900px) 58vw, 100vw" />
      </div>
      <div className="heroe-panel">
        {children}
      </div>
    </section>
  );
}
