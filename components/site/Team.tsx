import Image from "next/image";
import { EQUIPO } from "@/lib/site";

export function TeamMini() {
  return (
    <div className="mini-team">
      {EQUIPO.map((p) => (
        <article key={p.nombre} className="mt">
          <div className="avw"><Image src={p.foto} alt={p.nombre} width={72} height={72} /></div>
          <div className="mt-texto">
            <b className="h4">{p.nombre}</b>
            <span className="role">{p.cargo}</span>
            <span className="xs">{p.foco}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function TeamFull() {
  return (
    <div className="trio">
      {EQUIPO.map((p) => (
        <article key={p.nombre} className="pc">
          <div className="ph-img"><Image src={p.foto} alt={p.nombre} fill sizes="(max-width:860px) 100vw, 33vw" /></div>
          <div className="body">
            <div className="pc-cabeza">
              <h3 className="d3">{p.nombre}</h3>
              <span className="role">{p.cargo}</span>
              <span className="focus">{p.foco}</span>
            </div>
            <p className="p2 sm">{p.bio}</p>
            <ul>{p.logros.map((l) => <li key={l}>{l}</li>)}</ul>
            <span className="xs">{p.formacion}<i className="sep" /><a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="pc-enlace">LinkedIn</a>{p.web && <><i className="sep" /><a href={p.web} target="_blank" rel="noopener" className="pc-enlace">Web</a></>}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
