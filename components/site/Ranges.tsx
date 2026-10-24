import Link from "next/link";
import fuentes from "@/lib/fuentes.json";
import { countByRange, RANGOS, type Fuente } from "@/lib/matching";

const AMT: [string, string, string][] = [
  ["Hasta USD", "50K", " "],
  ["Desde USD", "50K", "a 150K"],
  ["Desde USD", "150K", "a 300K"],
  ["Desde USD", "300K", "a 500K"],
  ["Desde USD", "500K", "a 2M"],
  ["Más de USD", "2M", " "],
];

/** Tarjetas de rango del Home: llevan al buscador con el rango elegido. */
export function Ranges() {
  const cnts = countByRange(fuentes as Fuente[]);
  const max = Math.max(...cnts);
  return (
    <div className="ranges">
      {RANGOS.map((r, i) => (
        <Link key={r.key} href={`/pasaporte?rango=${i}#buscador`} className="rng">
          <span className="k">{r.key}</span>
          <span className="amt"><small>{AMT[i][0]}</small><b>{AMT[i][1]}</b><em className="to">{AMT[i][2]}</em></span>
          <span className="meter2"><u style={{ width: `${Math.round((100 * cnts[i]) / max)}%` }} /></span>
          <span className="cnt"><strong>{cnts[i]}</strong> fuentes publican tickets en este rango</span>
          <span className="go">Ver fondos disponibles</span>
        </Link>
      ))}
    </div>
  );
}
