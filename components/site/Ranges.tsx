import Link from "next/link";
import fuentes from "@/lib/fuentes.json";
import { countByRange, RANGOS, type Fuente } from "@/lib/matching";
import { es } from "@/lib/i18n/es";

const t = es.comun.rangos;
const AMT = t.montos;

/** Tarjetas de rango del Home: llevan al buscador con el rango elegido. */
export function Ranges() {
  const cnts = countByRange(fuentes as Fuente[]);
  const max = Math.max(...cnts);
  return (
    <div className="ranges">
      {RANGOS.map((r, i) => (
        <Link key={r.key} href={`/pasaporte?rango=${i}#buscador`} className="rng">
          <span className="amt"><small>{AMT[i][0]}</small><b>{AMT[i][1]}</b><em className="to">{AMT[i][2]}</em></span>
          <span className="meter2"><u style={{ width: `${Math.round((100 * cnts[i]) / max)}%` }} /></span>
          <span className="cnt"><strong>{cnts[i]}</strong> {t.fuentes(cnts[i])}</span>
          <span className="go">{t.ir}</span>
        </Link>
      ))}
    </div>
  );
}
