import Image from "next/image";
import { EQUIPO, type Persona } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

/** Textos de la persona en el idioma pedido. */
function textos(p: Persona, lang: Lang) {
  return lang === "en" ? p.en : { cargo: p.cargo, foco: p.foco, bio: p.bio, logros: p.logros, formacion: p.formacion };
}

function Cabeza({ p, lang }: { p: Persona; lang: Lang }) {
  const x = textos(p, lang);
  return (
    <div className="persona-cabeza">
      <div className="persona-foto"><Image src={p.foto} alt={p.nombre} fill sizes="88px" /></div>
      <div>
        <h3 className="persona-nombre">{p.nombre}</h3>
        <span className="persona-cargo">{x.cargo}</span>
        <span className="persona-foco">{x.foco}</span>
      </div>
    </div>
  );
}

/** Equipo en tarjetas cortas: foto, nombre, cargo y foco. */
export function TeamMini({ lang = "es" }: { lang?: Lang }) {
  return (
    <div className="equipo">
      {EQUIPO.map((p) => (
        <article key={p.nombre} className="persona"><Cabeza p={p} lang={lang} /></article>
      ))}
    </div>
  );
}

/** Equipo completo: las filas de biografía, logros y formación quedan alineadas entre tarjetas. */
export function TeamFull({ lang = "es" }: { lang?: Lang }) {
  return (
    <div className="equipo completo">
      {EQUIPO.map((p) => {
        const x = textos(p, lang);
        return (
        <article key={p.nombre} className="persona">
          <Cabeza p={p} lang={lang} />
          <p className="persona-bio">{x.bio}</p>
          <ul className="persona-logros">{x.logros.map((l) => <li key={l}>{l}</li>)}</ul>
          <div className="persona-formacion">
            <span>{x.formacion}</span>
            <span className="persona-enlaces">
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {p.web && <a href={p.web} target="_blank" rel="noopener">Web</a>}
            </span>
          </div>
        </article>
        );
      })}
    </div>
  );
}
