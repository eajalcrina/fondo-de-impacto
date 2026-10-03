import Image from "next/image";

const FOTOS = ["n2", "h01", "h17", "h21", "h04", "h05", "h16", "h09", "h03"];

/** Cinturón continuo de fotos (se pausa al pasar el cursor). */
export function PhotoBelt() {
  const set = FOTOS.map((f) => <Image key={f} src={`/img/${f}.jpg`} alt="" width={144} height={96} sizes="144px" />);
  return (
    <div className="belt" aria-hidden="true">
      <div className="belt-track">
        <div className="belt-set">{set}</div>
        <div className="belt-set">{set}</div>
      </div>
    </div>
  );
}
