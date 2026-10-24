"use client";
import { useEffect, useState } from "react";
import fuentes from "@/lib/fuentes.json";
import { inRange, matchPais, RANGOS, TIPOS, type Fuente } from "@/lib/matching";

const F = fuentes as Fuente[];
const SECT: Record<string, string> = {
  agricultura: "Agricultura", alimentos_bebidas: "Alimentos y bebidas", agroforestal: "Agroforestal", bioeconomia: "Bioeconomía",
  bionegocios: "Bionegocios", economia_circular: "Economía circular", turismo: "Turismo", biotech: "Biotecnología",
  biomateriales: "Biomateriales", agritech: "Agritech", bioinsumos: "Bioinsumos",
};
const FILTROS: [string, string][] = [["*", "Todos"], ["PE", "Perú"], ["CO", "Colombia"], ["EC", "Ecuador"], ["BO", "Bolivia"], ["BR", "Brasil"], ["MX", "México"], ["CA", "Centroamérica"]];
const RLAB = ["Hasta 50K", "50K – 150K", "150K – 300K", "300K – 500K", "500K – 2M", "Más de 2M"];

function Bars({ items, unit = "" }: { items: [string, number, string?][]; unit?: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => setOn(true)); return () => cancelAnimationFrame(id); }, []);
  const max = Math.max(1, ...items.map((x) => x[1]));
  return (
    <div>
      {items.map(([l, v, extra]) => (
        <div className="bar" key={l}>
          <span>{l}</span>
          <i><u style={{ width: on ? `${Math.round((100 * v) / max)}%` : 0 }} /></i>
          <em>{v}{unit}</em>
          <span className="tip">{l}: {v}{unit}{extra ? ` · ${extra}` : ""}</span>
        </div>
      ))}
    </div>
  );
}

/** Mapa de capital: cifras y gráficos filtrables por país. */
export function CapitalMap() {
  const [p, setP] = useState("*");
  const set = F.filter((f) => matchPais(f, p));
  const tk = set.filter((f) => f.e === 1 && inRange(f, 0) !== null);
  const sc: Record<string, number> = {};
  set.forEach((f) => f.s.forEach((x) => { if (SECT[x]) sc[x] = (sc[x] || 0) + 1; }));
  return (
    <>
      <div className="tiles num">
        <div><b>{set.length}</b><span>fuentes de capital de impacto mapeadas</span></div>
        <div><b>{set.filter((f) => f.t.includes("nr")).length}</b><span>con capital no reembolsable</span></div>
        <div><b>{set.filter((f) => f.t.includes("de")).length}</b><span>con deuda de impacto o garantías</span></div>
        <div><b>{set.filter((f) => f.a === 1).length}</b><span>con llamada activa</span></div>
        <div><b>+50</b><span>fondos en nuestra red de contacto directo</span></div>
      </div>
      <div className="filters" role="group" aria-label="Filtrar por país">
        <span className="lbl">País</span>
        {FILTROS.map(([v, t]) => (
          <button key={v} type="button" className={`fbtn${p === v ? " on" : ""}`} aria-pressed={p === v} onClick={() => setP(v)}>{t}</button>
        ))}
      </div>
      <div className="charts">
        <div className="chart">
          <h3>Rangos de ticket</h3>
          <p className="sub">% de las fuentes que financian empresas y publican su ticket</p>
          <Bars key={`r${p}`} unit="%" items={RANGOS.map((_, i) => { const n = tk.filter((f) => inRange(f, i) === true).length; return [RLAB[i], tk.length ? Math.round((100 * n) / tk.length) : 0, `${n} de ${tk.length} fuentes`]; })} />
        </div>
        <div className="chart">
          <h3>Tipo de capital</h3>
          <p className="sub">Número de fuentes por instrumento</p>
          <Bars key={`t${p}`} items={TIPOS.map(([k, t]) => [t, set.filter((f) => f.t.includes(k)).length])} />
        </div>
        <div className="chart">
          <h3>Sectores con más oferta</h3>
          <p className="sub">Número de fuentes por sector de foco</p>
          <Bars key={`s${p}`} items={Object.keys(sc).sort((a, b) => sc[b] - sc[a]).slice(0, 6).map((k) => [SECT[k], sc[k]])} />
        </div>
      </div>
    </>
  );
}
