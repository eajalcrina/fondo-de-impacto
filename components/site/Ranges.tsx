import Link from "next/link";
import fuentes from "@/lib/fuentes.json";
import { countByRange, RANGOS, type Fuente } from "@/lib/matching";
import { dic, ruta, type Lang } from "@/lib/i18n";

/** Tarjetas de rango de capital: monto, fuentes que calzan y acceso al buscador con ese rango. */
export function Ranges({ lang = "es" }: { lang?: Lang }) {
  const t = dic(lang).comun.rangos;
  const cnts = countByRange(fuentes as Fuente[]);
  return (
    <ul className="rangos">
      {RANGOS.map((r, i) => {
        const [antes, monto, despues] = t.montos[i];
        return (
          <li key={r.key}>
            <Link href={`${ruta(lang, "/pasaporte")}?rango=${i}#buscador`} className="rango">
              <span className="rango-pre">{antes}</span>
              <span className="rango-monto">{monto}</span>
              <span className="rango-hasta">{despues || " "}</span>
              <span className="rango-pie">
                <span className="rango-fuentes"><strong>{cnts[i]}</strong> {t.fuentes(cnts[i])}</span>
                <span className="redondo" aria-hidden="true"><svg viewBox="0 0 14 14"><path d="M1 7h11M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg></span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
