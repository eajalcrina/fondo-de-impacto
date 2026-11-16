import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Para empresas", description: "Del diagnóstico al capital: buscador de fondos, Bootcamp de Levantamiento de Capital y financiamiento directo para empresas de impacto en Perú y Colombia." };

const PASOS: [string, string][] = [
  ["Diagnóstico", "Evaluamos tu investment readiness con nuestra metodología propia."],
  ["Ruta de capital", "Definimos la modalidad y la fuente de capital que corresponde a tu etapa."],
  ["Evaluación", "Preparamos tu perfil de inversión o lo presentamos al comité del fondo."],
  ["Cierre y seguimiento", "Firmamos, desembolsamos y acompañamos la ejecución con reportes mensuales."],
];

export default function EmpresasPage() {
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/rl/productor.jpg", cap: "Productor en su campo" }]}>
        <span className="eyebrow">Para empresas</span>
        <Words as="h1" className="d1" text="Del diagnóstico al capital" />
        <p className="lead">Preparamos a empresas de impacto de Perú y Colombia para levantar capital con fondos de nuestra red. A las que ya tienen historial de repago las financiamos directamente.</p>
        <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Dos modalidades según la etapa de tu empresa</h2>
        <div className="tarjetas filas">
          <article className="tarjeta">
            <span className="tarjeta-r">Investment readiness</span>
            <h3 className="tarjeta-t">Te preparamos para levantar capital y te acompañamos hasta el cierre</h3>
            <p className="tarjeta-x">Para empresas que buscan capital de fondos de impacto, banca de desarrollo o cooperación internacional y aún no tienen un perfil de inversión completo.</p>
            <ul className="check"><li>Diagnóstico con nuestra metodología propia: finanzas, gobernanza, ESG e impacto.</li><li>Bootcamp de Levantamiento de Capital, con asesoría personalizada y comité simulado.</li><li>Presentación a nuestra red de más de 50 fondos de impacto.</li><li>Acompañamiento en due diligence y negociación del term sheet.</li></ul>
            <div className="cta-row"><Link className="btn btn-b btn-sm" href="/bootcamp#postular">Postular al Bootcamp</Link></div>
          </article>
          <article className="tarjeta naranja">
            <span className="tarjeta-r">Financiamiento directo</span>
            <h3 className="tarjeta-t">Financiamos tu capital de trabajo</h3>
            <p className="tarjeta-x">Para empresas con historial de repago que necesitan liquidez para inventario, órdenes de compra o expansión comercial.</p>
            <ul className="check"><li>Ventas recurrentes durante al menos 12 meses.</li><li>Historial de repago con un fondo de impacto u otro financiador.</li><li>Estados financieros del último ejercicio.</li><li>Uso de fondos ligado al ciclo operativo.</li><li>Garantía hipotecaria sobre un inmueble de la empresa o de sus accionistas.</li></ul>
            <div className="cta-row"><a className="btn btn-b btn-sm" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">Ver si califico</a></div>
          </article>
        </div>
      </div></section>


      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Cómo trabajamos contigo</h2>
        <ol className="tarjetas t4">
          {PASOS.map(([t, x], i) => (
            <li key={t} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{t}</h3><p className="tarjeta-x">{x}</p></li>
          ))}
        </ol>
      </div></section>


      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text="Empieza por el diagnóstico" />
        <p className="lead">La próxima cohorte del Bootcamp empieza el {SITE.cohorte.inicio.toLowerCase()}.</p>
        <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
      </div></section>
    </div>
  );
}
