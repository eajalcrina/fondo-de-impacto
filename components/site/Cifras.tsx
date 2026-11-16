import { dic, type Lang } from "@/lib/i18n";
import { Pictograma } from "./Pictograma";

export type Cifra = { icono: string; mas: boolean; valor: string; texto: string };

/** Fila de cifras con pictograma, cifra en Open Sans y descripción. */
export function Cifras({ items, lang = "es" }: { items: Cifra[]; lang?: Lang }) {
  return (
    <div className="cifras">
      {items.map((c) => (
        <div key={c.texto} className="cifra-item">
          <Pictograma nombre={c.icono} />
          <span className="cifra">
            {c.mas && <span className="mas" aria-label={dic(lang).comun.masDe}>+</span>}
            {c.valor}
          </span>
          <span>{c.texto}</span>
        </div>
      ))}
    </div>
  );
}
