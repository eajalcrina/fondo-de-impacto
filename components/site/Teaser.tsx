import type { Lang } from "@/lib/i18n";

const TX = {
  es: { aria: "Ejemplo ilustrativo de teaser confidencial", rotulo: "Teaser confidencial", empresa: "Empresa peruana de alimentos de origen amazónico", chips: ["Crecimiento", "Deuda"], busca: "Busca USD 250K a 400K",
    kpi: [["Ventas últimos 12 meses", "USD 1.1 MM"], ["Crecimiento anual", "38%"], ["Margen bruto", "42%"], ["Historial con fondos", "2 créditos repagados"], ["Productores en su cadena", "180"], ["ODS principales", "1, 8 y 15"]],
    nivel: "Preparación para la inversión", alto: "Alto", nota: "Ejemplo ilustrativo. Los fondos ven tu nombre solo si lo apruebas." },
  en: { aria: "Illustrative sample of a confidential teaser", rotulo: "Confidential teaser", empresa: "Peruvian food company with Amazon-sourced products", chips: ["Growth", "Debt"], busca: "Seeking USD 250K to 400K",
    kpi: [["Sales, last 12 months", "USD 1.1 M"], ["Annual growth", "38%"], ["Gross margin", "42%"], ["Track record with funds", "2 loans repaid"], ["Producers in its chain", "180"], ["Main SDGs", "1, 8 and 15"]],
    nivel: "Investment readiness", alto: "High", nota: "Illustrative sample. Funds see your name only if you approve it." },
};

/** Maqueta del teaser confidencial que ven los fondos: una página anónima con los indicadores de un comité. */
export function Teaser({ lang = "es" }: { lang?: Lang }) {
  const t = TX[lang];
  return (
    <figure className="teaser num" aria-label={t.aria}>
      <div className="teaser-cabeza">
        <div className="teaser-id">
          <span className="teaser-rotulo">{t.rotulo}</span>
          <b className="teaser-codigo">FI-0142</b>
        </div>
        <div className="teaser-empresa">
          <h3>{t.empresa}</h3>
          <ul className="teaser-chips">{t.chips.map((c) => <li key={c}>{c}</li>)}<li className="clave">{t.busca}</li></ul>
        </div>
      </div>
      <dl className="teaser-kpi">
        {t.kpi.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <figcaption className="teaser-pie">
        <span className="teaser-nivel">{t.nivel} <i><u /><u /><u /><u /><u className="o" /></i> <b>{t.alto}</b></span>
        <span>{t.nota}</span>
      </figcaption>
    </figure>
  );
}
