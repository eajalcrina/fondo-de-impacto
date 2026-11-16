import { es } from "@/lib/i18n/es";
import { Pictograma } from "./Pictograma";

export type Cifra = { icono: string; mas: boolean; valor: string; texto: string };

/** Fila de cifras con pictograma, cifra en Newsreader y descripción. */
export function Cifras({ items }: { items: Cifra[] }) {
  return (
    <div className="cifras">
      {items.map((c) => (
        <div key={c.texto} className="cifra-item">
          <Pictograma nombre={c.icono} />
          <span className="cifra">
            {c.mas && <span className="mas" aria-label={es.comun.masDe}>+</span>}
            {c.valor}
          </span>
          <span>{c.texto}</span>
        </div>
      ))}
    </div>
  );
}
