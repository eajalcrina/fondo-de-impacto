import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { Teaser } from "@/components/site/Teaser";

export const metadata: Metadata = { title: "Para empresas", description: "Del diagnóstico al capital: buscador de fondos, Bootcamp de Levantamiento de Capital y financiamiento directo para empresas de impacto en Perú y Colombia." };

export default function EmpresasPage() {
  return (
    <>

  <Hero slides={[{ src: "/img/h17.jpg", cap: "Taller con empresas" }]}>
<span className="eyebrow">Para empresas</span>
    <Words as="h1" className="d1" text="Del diagnóstico al capital" />
    <p className="lead">Preparamos a empresas de impacto de Perú y Colombia para levantar capital con fondos de nuestra red. A las que ya tienen historial de repago las financiamos directamente.</p>
    <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
  </Hero>

  <section className="sec tint"><div className="wrap hero-2">
    <div className="stack">
      <span className="eyebrow">Buscador</span>
      <Words as="h2" className="d2" text="Mira cuántos fondos financian a empresas como la tuya" />
      <p className="lead">El buscador revisa 456 fuentes de capital de impacto y te dice cuántas calzan con tu empresa y cuántas tienen convocatoria abierta.</p>
      
      <div className="cta-row"><Link className="btn btn-p" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
    </div>
    <Teaser />
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Servicios</span><Words as="h2" className="d2" text="Dos modalidades según la etapa de tu empresa" /></div>
    <div className="cols-2 filas-5">
      <div className="rule">
        <span className="eyebrow s">Investment readiness</span>
        <h3 className="d3">Te preparamos para levantar capital y te acompañamos hasta el cierre</h3>
        <p className="p2">Para empresas que buscan capital de fondos de impacto, banca de desarrollo o cooperación internacional y aún no tienen un perfil de inversión completo.</p>
        <ul className="check"><li>Diagnóstico con nuestra metodología propia: finanzas, gobernanza, ESG e impacto.</li><li>Bootcamp de Levantamiento de Capital, con asesoría personalizada y comité simulado.</li><li>Presentación a nuestra red de más de 50 fondos de impacto.</li><li>Acompañamiento en due diligence y negociación del term sheet.</li></ul>
        <div className="cta-row"><Link className="btn btn-p btn-sm" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
      </div>
      <div className="rule">
        <span className="eyebrow s">Financiamiento directo</span>
        <h3 className="d3">Financiamos tu capital de trabajo</h3>
        <p className="p2">Para empresas con historial de repago que necesitan liquidez para inventario, órdenes de compra o expansión comercial.</p>
        <ul className="check"><li>Ventas recurrentes durante al menos 12 meses.</li><li>Historial de repago con un fondo de impacto u otro financiador.</li><li>Estados financieros del último ejercicio.</li><li>Uso de fondos ligado al ciclo operativo.</li><li>Garantía hipotecaria sobre un inmueble de la empresa o de sus accionistas.</li></ul>
        <div className="cta-row"><a className="btn btn-g btn-sm" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">Ver si califico</a></div>
      </div>
    </div>
  </div></section>


  <section className="sec tint"><div className="wrap">
    <div className="head"><span className="eyebrow">Proceso</span><Words as="h2" className="d2" text="Cómo trabajamos contigo" /></div>
    <ol className="steps">
      <li><span className="n">01</span><b className="h4">Diagnóstico</b><p>Evaluamos tu investment readiness con nuestra metodología propia.</p></li>
      <li><span className="n">02</span><b className="h4">Ruta de capital</b><p>Definimos la modalidad y la fuente de capital que corresponde a tu etapa.</p></li>
      <li><span className="n">03</span><b className="h4">Evaluación</b><p>Preparamos tu perfil de inversión o lo presentamos al comité del fondo.</p></li>
      <li><span className="n">04</span><b className="h4">Cierre y seguimiento</b><p>Firmamos, desembolsamos y acompañamos la ejecución con reportes mensuales.</p></li>
    </ol>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="band dk">
      <div className="band-in"><span className="eyebrow">Para fondos y cooperación</span><Words as="h2" className="d2" text="Accede a nuestro portafolio privado de empresas con investment readiness" /><p className="p2 sm">Opera con nosotros programas de asistencia técnica para tu cartera y coinvierte en esquemas de blended finance.</p></div>
      <a className="btn btn-b" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">Solicitar acceso al portafolio</a>
    </div>
  </div></section>

  <section className="sec final"><div className="wrap">
    <Words as="h2" className="d2" text="Empieza por el diagnóstico" />
    <p className="lead">La próxima cohorte del Bootcamp empieza el {SITE.cohorte.inicio.toLowerCase()}.</p>
    <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
  </div></section>

    </>
  );
}
