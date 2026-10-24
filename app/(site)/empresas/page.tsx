import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Ring } from "@/components/site/Ring";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { Teaser } from "@/components/site/Teaser";

export const metadata: Metadata = { title: "Para empresas", description: "Del diagnóstico al capital: Pasaporte de Inversión, Bootcamp de Levantamiento de Capital y financiamiento directo para empresas de impacto en Perú y Colombia." };

export default function EmpresasPage() {
  return (
    <>

  <Hero slides={[{ src: "/img/h17.jpg", cap: "Taller con empresas" }]}>
<span className="eyebrow">Para empresas</span>
    <Words as="h1" className="d1" style={{ fontSize: "clamp(38px,5.4vw,68px)", maxWidth: "16ch" }} text="Del diagnóstico al capital, según la etapa de tu empresa." />
    <p className="lead" style={{ maxWidth: "56ch" }}>Trabajamos con empresas de impacto en Perú y Colombia. Todo empieza con tu Pasaporte de Inversión. Con él evaluamos en qué punto estás y definimos la ruta: prepararte en el Bootcamp y levantar capital con fondos de nuestra red, o recibir financiamiento directo del fondo.</p>
  </Hero>

  <section className="sec tint"><div className="wrap hero-2">
    <div className="stack" style={{ gap: "22px" }}>
      <span className="eyebrow">Empieza aquí · Pasaporte de Inversión</span>
      <Words as="h2" className="d2" text="Un solo perfil. Más de 50 fondos de impacto." />
      <p className="lead">Completa el perfil de tu empresa una sola vez. Con esa información preparamos un teaser confidencial con estándar de comité y lo ponemos frente a los fondos de nuestra red cuya tesis coincide con la tuya.</p>
      <ul className="check"><li>Diagnóstico de investment readiness. Cuesta USD 0, solo tu tiempo.</li><li>Teaser anónimo en el FI Deal Room, visible para fondos compatibles.</li><li>Tu nombre y tus documentos solo se comparten con tu autorización.</li><li>El mismo perfil sirve como postulación al Bootcamp.</li></ul>
      <div className="cta-row"><Link className="btn btn-p" href="/pasaporte#completar">Solicitar acceso al Pasaporte</Link><span className="xs">Acceso anticipado y sin costo.</span></div>
    </div>
    <Teaser />
  </div></section>

  <section className="sec" style={{ borderTop: 0 }}><div className="wrap">
    <div className="head"><span className="eyebrow">Después, elige tu ruta</span><Words as="h2" className="d2" text="Dos modalidades según la etapa de tu empresa" /></div>
    <div className="cols-2">
      <div className="rule" style={{ gap: "16px" }}>
        <span className="eyebrow s">Modalidad 1 · Investment readiness</span>
        <h3 className="d3">Te preparamos para levantar capital y te acompañamos hasta el cierre.</h3>
        <p className="p2">Para empresas que buscan capital de fondos de impacto, banca de desarrollo o cooperación internacional y aún no tienen un perfil de inversión completo.</p>
        <ul className="check"><li>Diagnóstico con nuestra metodología propietaria: finanzas, gobernanza, ESG e impacto.</li><li>Bootcamp de Levantamiento de Capital, con asesoría personalizada y comité simulado.</li><li>Presentación a nuestra red de más de 50 fondos de impacto.</li><li>Acompañamiento en due diligence y negociación del term sheet.</li></ul>
        <div className="cta-row"><Link className="btn btn-p btn-sm" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk" href="/pasaporte#completar">Solicitar acceso al Pasaporte</Link></div>
      </div>
      <div className="rule" style={{ gap: "16px" }}>
        <span className="eyebrow s">Modalidad 2 · Financiamiento directo</span>
        <h3 className="d3">Financiamos tu capital de trabajo con condiciones claras desde el inicio.</h3>
        <p className="p2">Para empresas con historial validado en el ecosistema de impacto que necesitan liquidez para inventario, órdenes de compra o expansión comercial.</p>
        <ul className="check"><li>Ventas recurrentes durante al menos 12 meses.</li><li>Historial de repago con un fondo de impacto u otro financiador.</li><li>Estados financieros del último ejercicio.</li><li>Uso de fondos ligado al ciclo operativo.</li><li>Garantía hipotecaria sobre un inmueble de la empresa o de sus accionistas.</li></ul>
        <div className="cta-row"><a className="btn btn-g btn-sm" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">Ver si califico</a></div>
      </div>
    </div>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Comparativo</span><Words as="h2" className="d3" text="Qué modalidad te corresponde" /></div>
    <div className="tw"><table className="tbl">
      <thead><tr><th></th><th>Investment readiness</th><th>Financiamiento directo</th></tr></thead>
      <tbody>
        <tr><td>Etapa de la empresa</td><td>Modelo validado, sin perfil de inversión formal</td><td>Operación estable con historial de repago</td></tr>
        <tr><td>Qué recibes</td><td>Perfil de inversión y acceso a financiadores</td><td>Financiamiento para capital de trabajo</td></tr>
        <tr><td>Quién pone el capital</td><td>Fondos de impacto, banca de desarrollo, cooperación</td><td>Fondo de Impacto, con inversionistas privados</td></tr>
        <tr><td>Garantías</td><td>No aplica</td><td>Garantía hipotecaria</td></tr>
        <tr><td>Primer paso</td><td>Pasaporte de Inversión y postulación al Bootcamp</td><td>Pasaporte de Inversión y revisión de elegibilidad</td></tr>
      </tbody>
    </table></div>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Proceso</span><Words as="h2" className="d3" text="Cuatro pasos, con un equipo a tu lado" /></div>
    <ol className="steps">
      <li><span className="n">01</span><b className="h4">Diagnóstico</b><p>Evaluamos tu investment readiness con nuestra metodología propietaria.</p></li>
      <li><span className="n">02</span><b className="h4">Ruta de capital</b><p>Definimos la modalidad y la fuente de capital que corresponde a tu etapa.</p></li>
      <li><span className="n">03</span><b className="h4">Evaluación</b><p>Preparamos tu perfil de inversión o lo presentamos al comité del fondo.</p></li>
      <li><span className="n">04</span><b className="h4">Cierre y seguimiento</b><p>Firmamos, desembolsamos y acompañamos la ejecución con reportes mensuales.</p></li>
    </ol>
  </div></section>

  <section className="sec" style={{ paddingTop: 0, borderTop: 0 }}><div className="wrap">
    <div className="band dk"><Ring size={880} />
      <div className="band-in"><span className="eyebrow">Para fondos y cooperación</span><Words as="h2" className="d3" text="Accede a nuestro portafolio privado de empresas con investment readiness." /><p className="p2 sm">Opera con nosotros programas de asistencia técnica para tu cartera y co-invierte en esquemas de blended finance.</p></div>
      <a className="btn btn-g" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">Solicitar acceso al portafolio</a>
    </div>
  </div></section>

    </>
  );
}
