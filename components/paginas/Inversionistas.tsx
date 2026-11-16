import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { TeamMini } from "@/components/site/Team";
import { SITE } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

export const META = {
  es: { title: "Inversionistas", description: "Inversión paciente en empresas de impacto de América Latina, con due diligence financiero y ESG y reporte mensual." },
  en: { title: "Investors", description: "Patient capital for impact companies in Latin America, with financial and ESG due diligence and monthly reporting." },
};

type Par = [string, string];

const T: Record<Lang, {
  foto: string; rotulo: string; titulo: string; bajada: string; agendar: string; porque: string; tesis: Par[];
  estructura: string; terminos: Par[]; clave: Par; llega: string; originacion: Par[]; equipo: string;
  riesgos: string; r: string; rl: Par[]; m: string; ml: Par[]; pasos: string; proceso: Par[]; cierre: string;
}> = {
  es: {
    foto: "Pescador artesanal en la costa peruana", rotulo: "Inversionistas", titulo: "Inversión paciente en empresas de impacto de América Latina",
    bajada: "Canalizamos capital privado hacia empresas de Perú y Colombia con historial de repago.", agendar: "Agendar una reunión de inversión",
    porque: "Por qué invertimos en estas empresas",
    tesis: [
      ["Son rentables antes de tener un perfil de inversión", "Muchas empresas de impacto de Perú y Colombia ya son rentables cuando el capital tradicional todavía no las identifica. Les suele faltar un perfil de inversión bien construido."],
      ["Complementamos a otros fondos", "Financiamos a empresas que ya repagaron a otros fondos de impacto."],
    ],
    estructura: "Cómo se estructura la inversión",
    terminos: [
      ["Enfoque", "Inversión paciente de impacto, a través de un instrumento de deuda"],
      ["Dilución", "Ninguna. El inversionista no adquiere participación en las empresas"],
      ["Rendimiento", "Objetivo definido en los términos de cada ronda. No está garantizado y depende del desempeño de las empresas financiadas"],
      ["Garantías", "Las operaciones con empresas se respaldan con garantía hipotecaria"],
      ["Formalización", "Contrato privado con firmas legalizadas ante notario"],
      ["Reporte", "Mensual: caja, ventas, indicadores operativos y de impacto de cada empresa"],
    ],
    clave: ["Tasa, plazo y ticket", "Se comparten en reunión, después de firmar el NDA"],
    llega: "Cómo llega una empresa al fondo",
    originacion: [
      ["Originación", "Empresas acompañadas o preparadas por Redesign Lab, y referidas por fondos aliados."],
      ["Filtro inicial", "Historial de repago con terceros, ventas recurrentes y estados financieros."],
      ["Due diligence", "Revisión financiera, operativa, ESG y de impacto con nuestra metodología propia."],
      ["Comité y monitoreo", "Aprobación en comité, desembolso y seguimiento mensual hasta el repago."],
    ],
    equipo: "Quiénes evalúan cada operación",
    riesgos: "Riesgos del instrumento y cómo los mitigamos", r: "Riesgos",
    rl: [
      ["Riesgo de crédito", "La empresa puede no repagar en el plazo pactado."],
      ["Concentración", "Cada ronda financia a un número reducido de empresas."],
      ["Liquidez", "No existe mercado secundario. El capital queda comprometido hasta el vencimiento."],
      ["ESG e impacto", "Incumplimientos socioambientales en la operación o en la cadena de suministro, y desvíos frente a los resultados de impacto comprometidos."],
    ],
    m: "Cómo los mitigamos",
    ml: [
      ["Historial previo", "Solo financiamos a empresas que ya repagaron a otros financiadores."],
      ["Conocimiento operativo", "Acompañamos a las empresas antes y después de invertir, y vemos la operación antes que los estados financieros."],
      ["Garantía hipotecaria", "Cada operación de financiamiento directo cuenta con garantía real sobre un inmueble."],
      ["Due diligence ESG", "Evaluación socioambiental y de impacto antes de invertir, con indicadores que se reportan junto a los financieros."],
    ],
    pasos: "Pasos hasta la firma del contrato",
    proceso: [
      ["Reunión inicial", "30 minutos con el equipo sobre la tesis y tu perfil."],
      ["NDA", "Acuerdo de confidencialidad para acceder a los términos."],
      ["Data room", "Términos, estados financieros, proyecciones y uso de fondos."],
      ["Contrato", "Firma legalizada y desembolso."],
    ],
    cierre: "Conversemos sobre la tesis y la ronda activa",
  },
  en: {
    foto: "Artisanal fisherman on the Peruvian coast", rotulo: "Investors", titulo: "Patient capital for impact companies in Latin America",
    bajada: "We channel private capital to companies in Peru and Colombia with a repayment track record.", agendar: "Book an investment meeting",
    porque: "Why we invest in these companies",
    tesis: [
      ["Profitable before they have an investment profile", "Many impact companies in Peru and Colombia are already profitable when traditional capital has yet to notice them. They usually lack a well-built investment profile."],
      ["We complement other funds", "We finance companies that have already repaid other impact funds."],
    ],
    estructura: "How the investment is structured",
    terminos: [
      ["Approach", "Patient impact investment through a debt instrument"],
      ["Dilution", "None. Investors do not take equity in the companies"],
      ["Return", "Target set in the terms of each round. It is not guaranteed and depends on the performance of the financed companies"],
      ["Collateral", "Loans to companies are secured by a mortgage"],
      ["Documentation", "Private contract with notarized signatures"],
      ["Reporting", "Monthly: cash, sales, operating and impact indicators for each company"],
    ],
    clave: ["Rate, term and ticket size", "Shared in a meeting, after signing the NDA"],
    llega: "How a company reaches the fund",
    originacion: [
      ["Origination", "Companies supported or prepared by Redesign Lab, and referrals from partner funds."],
      ["Screening", "Repayment track record with third parties, recurring sales and financial statements."],
      ["Due diligence", "Financial, operational, ESG and impact review with our own methodology."],
      ["Committee and monitoring", "Committee approval, disbursement and monthly follow-up until repayment."],
    ],
    equipo: "Who assesses each deal",
    riesgos: "Risks of the instrument and how we mitigate them", r: "Risks",
    rl: [
      ["Credit risk", "The company may not repay within the agreed term."],
      ["Concentration", "Each round finances a small number of companies."],
      ["Liquidity", "There is no secondary market. Capital stays committed until maturity."],
      ["ESG and impact", "Social or environmental breaches in operations or the supply chain, and deviations from the committed impact results."],
    ],
    m: "How we mitigate them",
    ml: [
      ["Prior track record", "We only finance companies that have already repaid other lenders."],
      ["Operational knowledge", "We support companies before and after investing, and we look at operations before financial statements."],
      ["Mortgage", "Every direct financing loan is secured by a mortgage on real estate."],
      ["ESG due diligence", "Social, environmental and impact assessment before investing, with indicators reported alongside the financials."],
    ],
    pasos: "Steps to signing the contract",
    proceso: [
      ["First meeting", "30 minutes with the team about the thesis and your profile."],
      ["NDA", "Confidentiality agreement to access the terms."],
      ["Data room", "Terms, financial statements, projections and use of funds."],
      ["Contract", "Notarized signature and disbursement."],
    ],
    cierre: "Let’s talk about the thesis and the active round",
  },
};

/** Inversionistas. */
export function Inversionistas({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/rl/pescador.jpg", cap: t.foto }]} posicion="50% 8%">
        <span className="eyebrow">{t.rotulo}</span>
        <Words as="h1" className="d1" text={t.titulo} />
        <p className="lead">{t.bajada}</p>
        <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">{t.agendar}</a></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.porque}</h2>
        <div className="tarjetas">
          {t.tesis.map(([a, b]) => <article key={a} className="tarjeta"><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></article>)}
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.estructura}</h2>
        <div className="terminos">
          {t.terminos.map(([r, v]) => <div key={r} className="termino"><span>{r}</span><p>{v}</p></div>)}
          <div className="termino naranja ancho"><span>{t.clave[0]}</span><p>{t.clave[1]}</p></div>
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.llega}</h2>
        <ol className="tarjetas t4">
          {t.originacion.map(([a, b], i) => <li key={a} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></li>)}
        </ol>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.equipo}</h2>
        <TeamMini lang={lang} />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.riesgos}</h2>
        <div className="tarjetas">
          <article className="tarjeta">
            <span className="tarjeta-r">{t.r}</span>
            <ul className="lista-tarjeta">{t.rl.map(([a, b]) => <li key={a}><b>{a}</b>{b}</li>)}</ul>
          </article>
          <article className="tarjeta">
            <span className="tarjeta-r">{t.m}</span>
            <ul className="lista-tarjeta">{t.ml.map(([a, b]) => <li key={a}><b>{a}</b>{b}</li>)}</ul>
          </article>
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.pasos}</h2>
        <ol className="tarjetas t4">
          {t.proceso.map(([a, b], i) => <li key={a} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></li>)}
        </ol>
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text={t.cierre} />
        <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">{t.agendar}</a><a className="lnk" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
      </div></section>
    </div>
  );
}
