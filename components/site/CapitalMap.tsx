"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import fuentes from "@/lib/fuentes.json";
import { inRange, matchPais, RANGOS, TIPOS, type Fuente } from "@/lib/matching";
import { TIPOS_LABEL } from "@/lib/catalogo";
import { langDe } from "@/lib/i18n";

const F = fuentes as Fuente[];

const TX = {
  es: {
    sect: { agricultura: "Agricultura", alimentos_bebidas: "Alimentos y bebidas", agroforestal: "Agroforestal", bioeconomia: "Bioeconomía", bionegocios: "Bionegocios", economia_circular: "Economía circular", turismo: "Turismo", biotech: "Biotecnología", biomateriales: "Biomateriales", agritech: "Agritech", bioinsumos: "Bioinsumos" } as Record<string, string>,
    filtros: [["*", "Todos"], ["PE", "Perú"], ["CO", "Colombia"], ["EC", "Ecuador"], ["BO", "Bolivia"], ["BR", "Brasil"], ["MX", "México"], ["CA", "Centroamérica"]] as [string, string][],
    rangos: ["Hasta 50K", "50K a 150K", "150K a 300K", "300K a 500K", "500K a 2 MM", "Más de 2 MM"],
    mapeadas: "fuentes de capital de impacto mapeadas", nr: "con capital no reembolsable", de: "con deuda de impacto o garantías", activa: "con postulación abierta", red: "fondos en nuestra red de contacto directo",
    filtrar: "Filtrar por país", pais: "País", ticket: "Rangos de ticket", ticketSub: "% de las fuentes que financian empresas y publican su ticket", de_: (n: number, t: number) => `${n} de ${t} fuentes`,
    tipo: "Tipo de capital", tipoSub: "Número de fuentes por instrumento", sectores: "Sectores con más oferta", sectoresSub: "Número de fuentes por sector de foco",
  },
  en: {
    sect: { agricultura: "Agriculture", alimentos_bebidas: "Food and beverages", agroforestal: "Agroforestry", bioeconomia: "Bioeconomy", bionegocios: "Biobusiness", economia_circular: "Circular economy", turismo: "Tourism", biotech: "Biotech", biomateriales: "Biomaterials", agritech: "Agritech", bioinsumos: "Bio-inputs" } as Record<string, string>,
    filtros: [["*", "All"], ["PE", "Peru"], ["CO", "Colombia"], ["EC", "Ecuador"], ["BO", "Bolivia"], ["BR", "Brazil"], ["MX", "Mexico"], ["CA", "Central America"]] as [string, string][],
    rangos: ["Up to 50K", "50K to 150K", "150K to 300K", "300K to 500K", "500K to 2 M", "More than 2 M"],
    mapeadas: "impact capital sources mapped", nr: "offering grants", de: "with impact debt or guarantees", activa: "open for applications", red: "funds we are in direct contact with",
    filtrar: "Filter by country", pais: "Country", ticket: "Ticket sizes", ticketSub: "% of sources that finance companies and publish their ticket size", de_: (n: number, t: number) => `${n} of ${t} sources`,
    tipo: "Type of capital", tipoSub: "Number of sources per instrument", sectores: "Sectors with the most sources", sectoresSub: "Number of sources per focus sector",
  },
};

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
          <span className="tip">{l}: {v}{unit}{extra ? `, ${extra}` : ""}</span>
        </div>
      ))}
    </div>
  );
}

/** Mapa de capital: cifras y gráficos filtrables por país. */
export function CapitalMap() {
  const lang = langDe(usePathname());
  const tx = TX[lang];
  const [p, setP] = useState("*");
  const set = F.filter((f) => matchPais(f, p));
  const tk = set.filter((f) => f.e === 1 && inRange(f, 0) !== null);
  const sc: Record<string, number> = {};
  set.forEach((f) => f.s.forEach((x) => { if (tx.sect[x]) sc[x] = (sc[x] || 0) + 1; }));
  return (
    <>
      <div className="tiles num">
        <div><b>{set.length}</b><span>{tx.mapeadas}</span></div>
        <div><b>{set.filter((f) => f.t.includes("nr")).length}</b><span>{tx.nr}</span></div>
        <div><b>{set.filter((f) => f.t.includes("de")).length}</b><span>{tx.de}</span></div>
        <div><b>{set.filter((f) => f.a === 1).length}</b><span>{tx.activa}</span></div>
        <div><b>+50</b><span>{tx.red}</span></div>
      </div>
      <div className="filters" role="group" aria-label={tx.filtrar}>
        <span className="lbl">{tx.pais}</span>
        {tx.filtros.map(([v, t]) => (
          <button key={v} type="button" className={`fbtn${p === v ? " on" : ""}`} aria-pressed={p === v} onClick={() => setP(v)}>{t}</button>
        ))}
      </div>
      <div className="charts">
        <div className="chart">
          <h3>{tx.ticket}</h3>
          <p className="sub">{tx.ticketSub}</p>
          <Bars key={`r${p}`} unit="%" items={RANGOS.map((_, i) => { const n = tk.filter((f) => inRange(f, i) === true).length; return [tx.rangos[i], tk.length ? Math.round((100 * n) / tk.length) : 0, tx.de_(n, tk.length)]; })} />
        </div>
        <div className="chart">
          <h3>{tx.tipo}</h3>
          <p className="sub">{tx.tipoSub}</p>
          <Bars key={`t${p}`} items={TIPOS.map(([k]) => [TIPOS_LABEL[lang][k], set.filter((f) => f.t.includes(k)).length])} />
        </div>
        <div className="chart">
          <h3>{tx.sectores}</h3>
          <p className="sub">{tx.sectoresSub}</p>
          <Bars key={`s${p}`} items={Object.keys(sc).sort((a, b) => sc[b] - sc[a]).slice(0, 6).map((k) => [tx.sect[k], sc[k]])} />
        </div>
      </div>
    </>
  );
}
