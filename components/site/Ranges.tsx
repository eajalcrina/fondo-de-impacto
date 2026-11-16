import Link from "next/link";
import fuentes from "@/lib/fuentes.json";
import { countByRange, RANGOS, type Fuente } from "@/lib/matching";
import { es } from "@/lib/i18n/es";

const t = es.comun.rangos;

/** Escalera de rangos de capital: cada barra es proporcional a las fuentes del rango y lleva al buscador. */
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
              <span className="escalon-barra" aria-hidden="true" />
              <span className="escalon-rango">{rango}</span>
              <span className="escalon-dato"><span><strong>{cnts[i]}</strong> {t.fuentes(cnts[i])}</span></span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
