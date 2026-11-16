import Image from "next/image";
import { EQUIPO, type Persona } from "@/lib/site";

function Cabeza({ p }: { p: Persona }) {
  return (
    <div className="persona-cabeza">
      <div className="persona-foto"><Image src={p.foto} alt={p.nombre} fill sizes="88px" /></div>
      <div>
        <h3 className="persona-nombre">{p.nombre}</h3>
        <span className="persona-cargo">{p.cargo}</span>
        <span className="persona-foco">{p.foco}</span>
      </div>
    </div>
  );
}

/** Equipo en tarjetas cortas: foto, nombre, cargo y foco. */
export function TeamMini() {
  return (
    <div className="equipo">
      {EQUIPO.map((p) => (
        <article key={p.nombre} className="persona"><Cabeza p={p} /></article>
      ))}
    </div>
  );
}

/** Equipo completo: las filas de biografía, logros y formación quedan alineadas entre tarjetas. */
export function TeamFull() {
  return (
    <div className="equipo completo">
      {EQUIPO.map((p) => (
        <article key={p.nombre} className="persona">
          <Cabeza p={p} />
          <p className="persona-bio">{p.bio}</p>
          <ul className="persona-logros">{p.logros.map((l) => <li key={l}>{l}</li>)}</ul>
          <div className="persona-formacion">
            <span>{p.formacion}</span>
            <span className="persona-enlaces">
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {p.web && <a href={p.web} target="_blank" rel="noopener">Web</a>}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
