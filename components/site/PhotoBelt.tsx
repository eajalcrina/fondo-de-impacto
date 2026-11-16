import Image from "next/image";

/** Fotos que no aparecen en otro lugar de la portada. */
const FOTOS = ["/img/h21.jpg", "/img/h04.jpg", "/img/h05.jpg", "/img/h03.jpg", "/images/hero-forest.jpg"];

/** Cinturón continuo de fotos, como en la web anterior. Se detiene al pasar el cursor y con movimiento reducido. */
export function PhotoBelt() {
  const set = [...FOTOS, ...FOTOS].map((f, i) => <Image key={`${f}-${i}`} src={f} alt="" width={144} height={96} sizes="144px" />);
  return (
    <div className="belt" aria-hidden="true">
      <div className="belt-track">
        <div className="belt-set">{set}</div>
        <div className="belt-set">{set}</div>
      </div>
    </div>
  );
}
