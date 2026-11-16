import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { TeamMini } from "@/components/site/Team";

export const metadata: Metadata = { title: "Inversionistas", description: "Inversión paciente en empresas de impacto de América Latina, con due diligence financiero y ESG y reporte mensual." };

const TERMINOS: [string, string][] = [
  ["Enfoque", "Inversión paciente de impacto, a través de un instrumento de deuda"],
  ["Dilución", "Ninguna. El inversionista no adquiere participación en las empresas"],
  ["Rendimiento", "Objetivo definido en los términos de cada ronda. No está garantizado y depende del desempeño de las empresas financiadas"],
  ["Garantías", "Las operaciones con empresas se respaldan con garantía hipotecaria"],
  ["Formalización", "Contrato privado con firmas legalizadas ante notario"],
  ["Reporte", "Mensual: caja, ventas, indicadores operativos y de impacto de cada empresa"],
];

const ORIGINACION: [string, string][] = [
  ["Originación", "Empresas acompañadas o preparadas por Redesign Lab, y referidas por fondos aliados."],
  ["Filtro inicial", "Historial de repago con terceros, ventas recurrentes y estados financieros."],
  ["Due diligence", "Revisión financiera, operativa, ESG y de impacto con nuestra metodología propia."],
  ["Comité y monitoreo", "Aprobación en comité, desembolso y seguimiento mensual hasta el repago."],
];

const PROCESO: [string, string][] = [
  ["Reunión inicial", "30 minutos con el equipo sobre la tesis y tu perfil."],
  ["NDA", "Acuerdo de confidencialidad para acceder a los términos."],
  ["Data room", "Términos, estados financieros, proyecciones y uso de fondos."],
  ["Contrato", "Firma legalizada y desembolso."],
];

export default function InversionistasPage() {
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/rl/pescador.jpg", cap: "Pescador artesanal en la costa peruana" }]} posicion="50% 8%">
        <span className="eyebrow">Inversionistas</span>
        <Words as="h1" className="d1" text="Inversión paciente en empresas de impacto de América Latina" />
        <p className="lead">Canalizamos capital privado hacia empresas de Perú y Colombia con historial de repago.</p>
        <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">Agendar una reunión de inversión</a></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Por qué invertimos en estas empresas</h2>
        <div className="tarjetas">
          <article className="tarjeta"><h3 className="tarjeta-t">Les falta un perfil, no un negocio</h3><p className="tarjeta-x">Los negocios de impacto de Perú y Colombia llegan a ser rentables antes de que el capital tradicional los identifique. Lo que suele faltar es un perfil de inversión bien construido.</p></article>
          <article className="tarjeta"><h3 className="tarjeta-t">Complementamos a otros fondos</h3><p className="tarjeta-x">Financiamos a empresas que ya repagaron a otros fondos de impacto. El historial con terceros es nuestro primer filtro de riesgo.</p></article>
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Cómo se estructura la inversión</h2>
        <div className="terminos">
          {TERMINOS.map(([r, v]) => <div key={r} className="termino"><span>{r}</span><p>{v}</p></div>)}
          <div className="termino naranja ancho"><span>Tasa, plazo y ticket</span><p>Se comparten en reunión, después de firmar el NDA</p></div>
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Cómo llega una empresa al fondo</h2>
        <ol className="tarjetas t4">
          {ORIGINACION.map(([t, x], i) => (
            <li key={t} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{t}</h3><p className="tarjeta-x">{x}</p></li>
          ))}
        </ol>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Quiénes evalúan cada operación</h2>
        <TeamMini />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Riesgos del instrumento y cómo los mitigamos</h2>
        <div className="tarjetas">
          <article className="tarjeta">
            <span className="tarjeta-r">Riesgos</span>
            <ul className="lista-tarjeta">
              <li><b>Riesgo de crédito</b>La empresa puede no repagar en el plazo pactado.</li>
              <li><b>Concentración</b>Cada ronda financia a un número reducido de empresas.</li>
              <li><b>Liquidez</b>No existe mercado secundario. El capital queda comprometido hasta el vencimiento.</li>
              <li><b>ESG e impacto</b>Incumplimientos socioambientales en la operación o en la cadena de suministro, y desvíos frente a los resultados de impacto comprometidos.</li>
            </ul>
          </article>
          <article className="tarjeta">
            <span className="tarjeta-r">Cómo los mitigamos</span>
            <ul className="lista-tarjeta">
              <li><b>Historial previo</b>Solo financiamos a empresas que ya repagaron a otros financiadores.</li>
              <li><b>Conocimiento operativo</b>Acompañamos a las empresas antes y después de invertir, y vemos la operación antes que los estados financieros.</li>
              <li><b>Garantía hipotecaria</b>Cada operación de financiamiento directo cuenta con garantía real sobre un inmueble.</li>
              <li><b>Due diligence ESG</b>Evaluación socioambiental y de impacto antes de invertir, con indicadores que se reportan junto a los financieros.</li>
            </ul>
          </article>
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Pasos hasta la firma del contrato</h2>
        <ol className="tarjetas t4">
          {PROCESO.map(([t, x], i) => (
            <li key={t} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{t}</h3><p className="tarjeta-x">{x}</p></li>
          ))}
        </ol>
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text="Conversemos sobre la tesis y la ronda activa" />
        <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">Agendar una reunión de inversión</a><a className="lnk" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
      </div></section>
    </div>
  );
}
