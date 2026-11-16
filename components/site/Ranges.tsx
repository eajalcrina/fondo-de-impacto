import Link from "next/link";
import fuentes from "@/lib/fuentes.json";
import { countByRange, RANGOS, type Fuente } from "@/lib/matching";
import { es } from "@/lib/i18n/es";

const t = es.comun.rangos;

/** Rangos de capital en filas: rango, barra proporcional a las fuentes, conteo y flecha al buscador. */
export function Ranges() {
  const cnts = countByRange(fuentes as Fuente[]);
  const max = Math.max(...cnts);
  return (
    <ol className="escala">
      {RANGOS.map((r, i) => {
        const [antes, monto, despues] = t.montos[i];
        const rango = [antes, monto, despues].filter(Boolean).join(" ");
        return (
          <li key={r.key}>
            <Link href={`/pasaporte?rango=${i}#buscador`} className="escalon" style={{ "--f": (cnts[i] / max).toFixed(3) } as React.CSSProperties}>
              <span className="escalon-rango">{rango}</span>
              <span className="escalon-barra" aria-hidden="true"><i /></span>
              <span className="escalon-dato"><strong>{cnts[i]}</strong> {t.fuentes(cnts[i])}</span>
              <span className="redondo" aria-hidden="true"><svg viewBox="0 0 14 14"><path d="M1 7h11M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg></span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
