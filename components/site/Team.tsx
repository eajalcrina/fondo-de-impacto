import Image from "next/image";
import { EQUIPO } from "@/lib/site";

export function TeamMini() {
  return (
    <div className="mini-team">
      {EQUIPO.map((p) => (
        <article key={p.nombre} className="mt">
          <div className="avw"><Image src={p.foto} alt={p.nombre} width={72} height={72} /></div>
          <div style={{ display: "grid", gap: 3 }}>
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
            <div style={{ display: "grid", gap: 4 }}>
              <h3 className="d3" style={{ fontSize: 24 }}>{p.nombre}</h3>
              <span className="role">{p.cargo}</span>
              <span className="focus">{p.foco}</span>
            </div>
            <p className="p2 sm">{p.bio}</p>
            <ul>{p.logros.map((l) => <li key={l}>{l}</li>)}</ul>
            <span className="xs">{p.formacion} · <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="lnk q" style={{ fontSize: 12.5 }}>LinkedIn</a></span>
          </div>
        </article>
      ))}
    </div>
  );
}
