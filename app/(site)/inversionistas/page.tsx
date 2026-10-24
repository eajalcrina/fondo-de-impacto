import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Ring } from "@/components/site/Ring";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { TeamMini } from "@/components/site/Team";

export const metadata: Metadata = { title: "Inversionistas", description: "Inversión paciente en empresas de impacto de América Latina, con due diligence financiero y ESG y reporte mensual." };

export default function InversionistasPage() {
  return (
    <>

  <Hero slides={[{ src: "/img/n2.jpg", cap: "Amazonía" }]}>
<span className="eyebrow">Para inversionistas · Tesis de inversión</span>
    <Words as="h1" className="d1" style={{ fontSize: "clamp(38px,5.4vw,68px)", maxWidth: "17ch" }} text="Inversión paciente en empresas de impacto de América Latina." />
    <p className="lead" style={{ maxWidth: "58ch" }}>Canalizamos capital privado hacia empresas de impacto con historial verificado en Perú y Colombia. Sin dilución, con due diligence financiero y ESG, y reporte financiero y de impacto cada mes.</p>
    <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">Agendar una reunión de inversión</a></div>
  </Hero>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Tesis</span><Words as="h2" className="d2" text="Tres convicciones" /></div>
    <div className="faq">
      <div><b className="d3" style={{ fontSize: "22px" }}>El negocio llega antes que el capital</b><p className="p2">Los negocios de impacto de Perú y Colombia llegan a ser rentables antes de que el capital tradicional los identifique. El filtro casi nunca es el negocio. Es la falta de un perfil de inversión bien construido.</p></div>
      <div><b className="d3" style={{ fontSize: "22px" }}>La demanda de liquidez está validada</b><p className="p2">Fondos de impacto de la región ya prestan a estas empresas a tasas de 25 a 40% anual, y los prestatarios siguen siendo rentables. Lo que falta es velocidad de desembolso.</p></div>
      <div><b className="d3" style={{ fontSize: "22px" }}>Complementamos a otros fondos</b><p className="p2">Financiamos a empresas que ya repagaron a otros fondos de impacto, con plazos de decisión que el resto del ecosistema no ofrece. El historial con terceros es nuestro primer filtro de riesgo.</p></div>
    </div>
  </div></section>

  <section className="sec" style={{ borderTop: 0, paddingTop: 0 }}><div className="wrap">
    <div className="head"><span className="eyebrow">Estructura</span><Words as="h2" className="d3" text="Cómo se estructura la inversión" /></div>
    <div className="tw"><table className="tbl"><tbody>
      <tr><td>Enfoque</td><td>Inversión paciente de impacto, a través de un instrumento de deuda</td></tr>
      <tr><td>Dilución</td><td>Ninguna. El inversionista no adquiere participación en las empresas</td></tr>
      <tr><td>Rendimiento</td><td>Objetivo definido en los términos de cada ronda. No está garantizado y depende del desempeño de las empresas financiadas</td></tr>
      <tr><td>Garantías</td><td>Las operaciones con empresas se respaldan con garantía hipotecaria</td></tr>
      <tr><td>Formalización</td><td>Contrato privado con firmas legalizadas ante notario</td></tr>
      <tr><td>Reporte</td><td>Mensual: caja, ventas, indicadores operativos y de impacto de cada empresa</td></tr>
      <tr><td>Tasa, plazo y ticket</td><td className="lock">Se comparten en reunión, después de firmar el NDA</td></tr>
    </tbody></table></div>
  </div></section>

  <section className="sec tint"><div className="wrap">
    <div className="head"><span className="eyebrow">Originación y underwriting</span><Words as="h2" className="d2" text="Cómo llega una empresa al fondo" /></div>
    <ol className="steps">
      <li><span className="n">01</span><b className="h4">Originación</b><p>Empresas acompañadas o preparadas por Redesign Lab, y referidas por fondos aliados.</p></li>
      <li><span className="n">02</span><b className="h4">Screening</b><p>Historial de repago con terceros, ventas recurrentes y estados financieros.</p></li>
      <li><span className="n">03</span><b className="h4">Due diligence</b><p>Revisión financiera, operativa, ESG y de impacto con nuestra metodología propietaria.</p></li>
      <li><span className="n">04</span><b className="h4">Comité y monitoreo</b><p>Aprobación en comité, desembolso y seguimiento mensual hasta el repago.</p></li>
    </ol>
  </div></section>

  <section className="sec" style={{ borderTop: 0 }}><div className="wrap">
    <div className="head"><span className="eyebrow">Equipo de inversión</span><Words as="h2" className="d3" text="Quiénes evalúan cada operación" /></div>
    <TeamMini />
  </div></section>

  <section className="sec" style={{ borderTop: 0 }}><div className="wrap">
    <div className="head"><span className="eyebrow">Riesgos y mitigantes</span><Words as="h2" className="d2" text="Lo que evaluamos antes de cada operación" /></div>
    <div className="cols-2">
      <div className="rule l" style={{ gap: "18px" }}><span className="eyebrow s">Riesgos del instrumento</span>
        <div className="stack" style={{ gap: "16px" }}>
          <div><b className="h4">Riesgo de crédito</b><p className="p2 sm">La empresa puede no repagar en el plazo pactado.</p></div>
          <div><b className="h4">Concentración</b><p className="p2 sm">Cada ronda financia a un número reducido de empresas.</p></div>
          <div><b className="h4">Liquidez</b><p className="p2 sm">No existe mercado secundario. El capital queda comprometido hasta el vencimiento.</p></div>
          <div><b className="h4">ESG e impacto</b><p className="p2 sm">Incumplimientos socioambientales en la operación o en la cadena de suministro, y desvíos frente a los resultados de impacto comprometidos.</p></div>
        </div>
      </div>
      <div className="rule" style={{ gap: "18px" }}><span className="eyebrow s">Cómo los mitigamos</span>
        <div className="stack" style={{ gap: "16px" }}>
          <div><b className="h4">Historial previo</b><p className="p2 sm">Solo financiamos a empresas que ya repagaron a otros financiadores.</p></div>
          <div><b className="h4">Conocimiento operativo</b><p className="p2 sm">Acompañamos a las empresas antes y después de invertir, y vemos la operación antes que los estados financieros.</p></div>
          <div><b className="h4">Garantía hipotecaria</b><p className="p2 sm">Cada operación de financiamiento directo cuenta con garantía real sobre un inmueble.</p></div>
          <div><b className="h4">Due diligence ESG</b><p className="p2 sm">Evaluación socioambiental y de impacto antes de invertir, con indicadores que se reportan junto a los financieros.</p></div>
          <div><b className="h4">Reporte mensual</b><p className="p2 sm">Caja, ventas e indicadores para detectar desvíos a tiempo.</p></div>
        </div>
      </div>
    </div>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Proceso de inversión</span><Words as="h2" className="d3" text="De la primera reunión al contrato" /></div>
    <ol className="steps">
      <li><span className="n">01</span><b className="h4">Reunión inicial</b><p>30 minutos con el equipo sobre la tesis y tu perfil.</p></li>
      <li><span className="n">02</span><b className="h4">NDA</b><p>Acuerdo de confidencialidad para acceder a los términos.</p></li>
      <li><span className="n">03</span><b className="h4">Data room</b><p>Términos, estados financieros, proyecciones y uso de fondos.</p></li>
      <li><span className="n">04</span><b className="h4">Contrato</b><p>Firma legalizada, desembolso y primer reporte al cierre del mes.</p></li>
    </ol>
  </div></section>

  <section className="sec final dk"><Ring size={1400} /><div className="wrap">
    <Words as="h2" className="d2" style={{ maxWidth: "20ch" }} text="Conversemos sobre la tesis y la ronda activa." />
    <p className="lead">Al terminar la reunión recibes el NDA para acceder a los términos.</p>
    <div className="cta-row" style={{ justifyContent: "center" }}><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">Agendar una reunión de inversión</a><a className="btn btn-g" href={`mailto:${SITE.email}`}>fondodeimpacto@redesignlab.org</a></div>
  </div></section>

    </>
  );
}
