import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { ruta, type Lang } from "@/lib/i18n";

export const META = {
  es: { title: "Para empresas", description: "Del diagnóstico al capital: buscador de fondos, Bootcamp de Levantamiento de Capital y financiamiento directo para empresas de impacto en Perú y Colombia." },
  en: { title: "For companies", description: "From diagnostic to capital: fund finder, Capital Raising Bootcamp and direct financing for impact companies in Peru and Colombia." },
};

const T = {
  es: {
    foto: "Productor en su campo", rotulo: "Para empresas", titulo: "Del diagnóstico al capital",
    bajada: "Preparamos a empresas de impacto de Perú y Colombia para levantar capital con fondos de nuestra red. A las que ya tienen historial de repago las financiamos directamente.",
    fondos: "Ver fondos para mi empresa", modalidades: "Dos modalidades según la etapa de tu empresa",
    a: { r: "Preparación para levantar capital", t: "Te preparamos para levantar capital y te acompañamos hasta el cierre", x: "Para empresas que buscan capital de fondos de impacto, banca de desarrollo o cooperación internacional y aún no tienen un perfil de inversión completo.",
      l: ["Diagnóstico con nuestra metodología propia: finanzas, gobernanza, ESG e impacto.", "Bootcamp de Levantamiento de Capital, con asesoría personalizada y comité simulado.", "Presentación a nuestra red de más de 50 fondos de impacto.", "Acompañamiento en due diligence y negociación del term sheet."], cta: "Postular al Bootcamp" },
    b: { r: "Financiamiento directo", t: "Financiamos tu capital de trabajo", x: "Para empresas con historial de repago que necesitan liquidez para inventario, órdenes de compra o expansión comercial.",
      l: ["Ventas recurrentes durante al menos 12 meses.", "Historial de repago con un fondo de impacto u otro financiador.", "Estados financieros del último ejercicio.", "Uso de fondos ligado al ciclo operativo.", "Garantía hipotecaria sobre un inmueble de la empresa o de sus accionistas."], cta: "Ver si califico" },
    cierre: `Postula a la cohorte de ${SITE.cohorte.mes}`, cierreX: `El Bootcamp empieza el ${SITE.cohorte.inicio.toLowerCase()}.`, postular: "Postular al Bootcamp",
  },
  en: {
    foto: "Producer in his field", rotulo: "For companies", titulo: "From diagnostic to capital",
    bajada: "We prepare impact companies in Peru and Colombia to raise capital from the funds in our network. Those that already have a repayment track record can get direct financing from us.",
    fondos: "See funds for my company", modalidades: "Two options depending on your company’s stage",
    a: { r: "Getting ready to raise capital", t: "We prepare you to raise capital and stay with you until closing", x: "For companies looking for capital from impact funds, development banks or international cooperation that do not yet have a complete investment profile.",
      l: ["Diagnostic with our own methodology: finance, governance, ESG and impact.", "Capital Raising Bootcamp, with one-on-one advice and a mock investment committee.", "Introduction to our network of more than 50 impact funds.", "Support through due diligence and term sheet negotiation."], cta: "Apply to the Bootcamp" },
    b: { r: "Direct financing", t: "We finance your working capital", x: "For companies with a repayment track record that need liquidity for inventory, purchase orders or commercial expansion.",
      l: ["Recurring sales for at least 12 months.", "Repayment track record with an impact fund or another lender.", "Financial statements for the last fiscal year.", "Use of funds tied to the operating cycle.", "A mortgage on real estate owned by the company or its shareholders."], cta: "Check if I qualify" },
    cierre: `Apply to the ${SITE.cohorteEn.mes} cohort`, cierreX: `The Bootcamp starts on ${SITE.cohorteEn.inicio}.`, postular: "Apply to the Bootcamp",
  },
};

/** Para empresas. */
export function Empresas({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/rl/productor.jpg", cap: t.foto }]}>
        <span className="eyebrow">{t.rotulo}</span>
        <Words as="h1" className="d1" text={t.titulo} />
        <p className="lead">{t.bajada}</p>
        <div className="cta-row"><Link className="btn btn-p" href={ruta(lang, "/pasaporte#buscador")}>{t.fondos}</Link></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.modalidades}</h2>
        <div className="tarjetas filas">
          <article className="tarjeta">
            <span className="tarjeta-r">{t.a.r}</span>
            <h3 className="tarjeta-t">{t.a.t}</h3>
            <p className="tarjeta-x">{t.a.x}</p>
            <ul className="check">{t.a.l.map((x) => <li key={x}>{x}</li>)}</ul>
            <div className="cta-row"><Link className="btn btn-b btn-sm" href={ruta(lang, "/bootcamp#postular")}>{t.a.cta}</Link></div>
          </article>
          <article className="tarjeta naranja">
            <span className="tarjeta-r">{t.b.r}</span>
            <h3 className="tarjeta-t">{t.b.t}</h3>
            <p className="tarjeta-x">{t.b.x}</p>
            <ul className="check">{t.b.l.map((x) => <li key={x}>{x}</li>)}</ul>
            <div className="cta-row"><a className="btn btn-b btn-sm" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">{t.b.cta}</a></div>
          </article>
        </div>
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text={t.cierre} />
        <p className="lead">{t.cierreX}</p>
        <div className="cta-row"><Link className="btn btn-p" href={ruta(lang, "/bootcamp#postular")}>{t.postular}</Link></div>
      </div></section>
    </div>
  );
}
