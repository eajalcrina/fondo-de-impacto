import { es } from "@/lib/i18n/es";
import { Pictograma } from "./Pictograma";

export type Cifra = { icono: string; mas: boolean; valor: string; texto: string; nota?: boolean };

/** Fila de cifras con pictograma, cifra en Newsreader y descripción. El asterisco remite a la nota del pie. */
export function Cifras({ items }: { items: Cifra[] }) {
  return (
    <div className="cifras">
      {items.map((c) => (
        <div key={c.texto} className="cifra-item">
          <Pictograma nombre={c.icono} />
          <span className="cifra">
            {c.mas && <span className="mas" aria-label={es.comun.masDe}>+</span>}
            {c.valor}
            {c.nota && <sup aria-hidden="true">*</sup>}
          </span>
          <span>{c.texto}</span>
        </div>
      ))}
    </div>
  );
}
