import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { LeadForm } from "@/components/site/LeadForm";
import { PAISES, RUBROS } from "@/lib/catalogo";
import { Teaser } from "@/components/site/Teaser";
import { Finder } from "@/components/site/Finder";
import { CapitalMap } from "@/components/site/CapitalMap";

export const metadata: Metadata = { title: "Pasaporte de Inversión", description: "Un solo perfil para más de 50 fondos de impacto. Revisa cuántas fuentes de capital hay para tu empresa y solicita acceso al Pasaporte de Inversión." };

const BENEFICIOS: [string, string][] = [
  ["Llegas a fondos que ya están buscando", "Tu teaser les llega solo a los fondos de la red cuya tesis coincide con tu empresa."],
  ["Conoces tus brechas", "Recibes un diagnóstico de investment readiness con las brechas que conviene cerrar antes de levantar capital. Si te conviene, te invitamos a la siguiente cohorte del Bootcamp."],
];

const PASOS: [string, string][] = [
  ["Completas tu Pasaporte", "Empresa, tracción, finanzas, impacto y necesidad de capital."],
  ["Lo revisamos contigo", "Validamos la información, te pedimos lo que falte y te enviamos tu diagnóstico."],
  ["Entras al portafolio", "Tu teaser queda disponible para los fondos de la red con tesis compatible."],
  ["Te conectamos", "Si un fondo muestra interés, te acompañamos en la reunión, el NDA y el due diligence."],
];


const PREGUNTAS: [string, string][] = [
  ["¿Me asegura financiamiento?", "No. El Pasaporte te da un diagnóstico y visibilidad ante fondos con tesis compatible. La decisión de invertir es de cada fondo."],
  ["¿Puedo retirar mi información?", "Sí. Puedes retirar tu Pasaporte cuando quieras."],
  ["¿Qué empresas pueden postular?", "Empresas de impacto con operaciones en América Latina y al menos 12 meses de ventas."],
];

export default function PasaportePage() {
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/h04.jpg", cap: "Mazorcas de cacao" }]}>
        <span className="eyebrow">Pasaporte de Inversión</span>
        <Words as="h1" className="d1" text="Un solo perfil para más de 50 fondos de impacto" />
        <p className="lead">Lo completas una vez y presentamos tu teaser confidencial a los fondos de nuestra red con tesis compatible.</p>
        <div className="cta-row"><Link className="btn btn-p" href="/pasaporte#completar">Solicitar acceso al Pasaporte</Link><Link className="lnk" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">Así ven los fondos a tu empresa</h2>
          <p className="seccion-texto">Una página anónima con los indicadores que un analista revisa primero: tracción, márgenes, historial de repago e impacto. El Pasaporte no tiene costo para tu empresa.</p>
        </div>
        <Teaser />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Qué ganas con el Pasaporte de Inversión</h2>
        <div className="tarjetas">
          {BENEFICIOS.map(([t, x]) => <article key={t} className="tarjeta"><h3 className="tarjeta-t">{t}</h3><p className="tarjeta-x">{x}</p></article>)}
        </div>
      </div></section>

      <section className="seccion claro" id="buscador"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">¿Cuántas fuentes de capital de impacto hay para tu empresa?</h2>
          <p className="seccion-texto">Ingresa los datos de tu empresa y recibe un reporte preliminar.</p>
        </div>
        <Finder />
      </div></section>

      <section className="seccion claro" id="mapa"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">Fuentes de capital de impacto en América Latina</h2>
          <p className="seccion-texto">Fondos de impacto, banca de desarrollo, cooperación y fondos públicos con convocatorias para empresas de la región.</p>
        </div>
        <CapitalMap />
        <p className="method">Base propia con fuentes públicas, actualizada en octubre de 2026. Una fuente puede financiar más de un rango, instrumento o sector. &laquo;Llamada activa&raquo; incluye convocatorias abiertas y ventanillas permanentes.</p>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Qué pasa después de completarlo</h2>
        <ol className="tarjetas t4">
          {PASOS.map(([t, x], i) => (
            <li key={t} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{t}</h3><p className="tarjeta-x">{x}</p></li>
          ))}
        </ol>
      </div></section>


      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Antes de empezar</h2>
        <div className="tarjetas t3">
          {PREGUNTAS.map(([t, x]) => <article key={t} className="tarjeta"><h3 className="tarjeta-t">{t}</h3><p className="tarjeta-x">{x}</p></article>)}
        </div>
      </div></section>

      <section className="seccion claro" id="completar"><div className="wrap split">
        <div className="stack">
          <span className="eyebrow">Acceso anticipado</span>
          <Words as="h2" className="d2" text="Solicita acceso al Pasaporte de Inversión" />
          <p className="p2">El Pasaporte de Inversión abre por etapas. Déjanos tus datos y te avisamos cuando tu acceso esté listo. Ten a mano los estados financieros de los últimos dos años, tu pitch deck si lo tienes y las métricas de impacto que ya mides.</p>
        </div>
        <LeadForm
          form="pasaporte"
          idPrefix="ps"
          submit="Solicitar acceso"
          success={`Listo. Recibimos tu solicitud y te escribimos ${SITE.respuesta}.`}
          fields={[
            { name: "empresa", label: "Empresa", required: true, autoComplete: "organization", half: true },
            { name: "nombre", label: "Nombre completo", required: true, autoComplete: "name", half: true },
            { name: "correo", label: "Correo", type: "email", required: true, autoComplete: "email", half: true },
            { name: "celular", label: "Celular", type: "tel", autoComplete: "tel", half: true },
            { name: "pais", label: "País", type: "select", options: PAISES, half: true },
            { name: "rubro", label: "Rubro", type: "select", options: RUBROS, half: true },
          ]}
        />
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text="Prepara tu empresa antes de presentarla" />
        <p className="lead">En el Bootcamp cierras las brechas del diagnóstico con el equipo, en ocho semanas.</p>
        <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link></div>
      </div></section>
    </div>
  );
}
