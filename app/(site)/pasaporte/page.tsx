import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Ring } from "@/components/site/Ring";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { LeadForm } from "@/components/site/LeadForm";
import { PAISES, RUBROS } from "@/lib/catalogo";
import { Teaser } from "@/components/site/Teaser";
import { Finder } from "@/components/site/Finder";
import { CapitalMap } from "@/components/site/CapitalMap";

export const metadata: Metadata = { title: "Pasaporte de Inversión", description: "Un solo perfil, más de 50 fondos de impacto. Revisa cuántas fuentes de capital hay para tu empresa y completa tu pasaporte. Cuesta USD 0." };

export default function PasaportePage() {
  return (
    <>

  <Hero slides={[{ src: "/img/h04.jpg", cap: "Cacao" }]} split>
<div className="stack" style={{ gap: "26px" }}>
      <span className="eyebrow">Pasaporte de Inversión · USD 0</span>
      <Words as="h1" className="d1" style={{ fontSize: "clamp(40px,5.8vw,72px)" }} text="Un solo perfil. Más de 50 fondos de impacto." />
      <p className="lead">Completa el Pasaporte de Inversión de tu empresa una sola vez y abre la puerta al capital que estás buscando. No pagas nada: solo inviertes unos 40 minutos. Con esa información preparamos un teaser confidencial con estándar de comité y lo presentamos a los fondos de nuestra red cuya tesis coincide con tu empresa.</p>
      <div className="cta-row"><Link className="btn btn-p" href="/pasaporte#completar">Solicitar acceso al Pasaporte</Link><Link className="lnk q" href="/pasaporte#buscador">Ver fondos disponibles</Link></div>
      <div className="facts num" style={{ marginTop: "4px" }}><div><b>USD 0</b><span>costo para tu empresa</span></div><div><b>Por etapas</b><span>acceso anticipado</span></div><div><b>+50</b><span>fondos en nuestra red</span></div></div>
    </div>
    <Teaser />
  
  </Hero>

  <section className="sec tint" id="buscador"><div className="wrap">
    <div className="head"><span className="eyebrow">Fondos disponibles</span><div className="stack" style={{ gap: "12px" }}><Words as="h2" className="d2" text="¿Cuántas fuentes de capital de impacto hay para tu empresa?" /><p className="p2">Ingresa unos datos básicos y recibe un reporte preliminar al instante. Sin costo.</p></div></div>
    <Finder />
  </div></section>

  <section className="sec" id="mapa"><div className="wrap">
    <div className="head"><span className="eyebrow">Mapa de capital de impacto</span><div className="stack" style={{ gap: "12px" }}><Words as="h2" className="d2" text="Las fuentes de capital que mapeamos y monitoreamos en América Latina" /><p className="p2">Fondos de impacto, banca de desarrollo, cooperación y fondos públicos con convocatorias para empresas de la región. Filtra por país para ver qué hay disponible.</p></div></div>
    <CapitalMap />
    <p className="method">Base construida por Fondo de Impacto con fuentes públicas, actualizada en octubre de 2026. Una fuente puede financiar más de un rango, instrumento o sector. &ldquo;Llamada activa&rdquo; incluye convocatorias abiertas y ventanillas permanentes. Los nombres y las condiciones de cada fuente se revisan contigo al completar tu Pasaporte de Inversión.</p>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Por qué solicitarlo</span><Words as="h2" className="d2" text="Los fondos de impacto no invierten en empresas que no conocen." /></div>
    <div className="cols-2" style={{ gap: "40px 64px" }}>
      <div className="rule"><h3 className="h4">Llegas a fondos que ya están buscando</h3><p className="p2 sm">Nuestra red reúne más de 50 fondos de impacto de América Latina, Norteamérica y Europa, con tesis en deuda, equity y blended finance. Tu teaser les llega solo si coincides con lo que buscan.</p></div>
      <div className="rule"><h3 className="h4">Tu empresa, en el formato que usa un comité</h3><p className="p2 sm">Convertimos tu información en un teaser de una página con los indicadores que un analista revisa primero: tracción, márgenes, historial de repago e impacto.</p></div>
      <div className="rule"><h3 className="h4">Sabes dónde estás parado</h3><p className="p2 sm">Recibes un diagnóstico de investment readiness con las brechas que conviene cerrar antes de levantar capital. Si te conviene, te invitamos a la siguiente cohorte del Bootcamp.</p></div>
      <div className="rule"><h3 className="h4">Tú decides quién ve qué</h3><p className="p2 sm">El teaser es anónimo. Tu nombre, tus estados financieros y tus documentos se comparten solo con los fondos que tú apruebes, y después de un NDA.</p></div>
    </div>
  </div></section>

  <section className="sec tint"><div className="wrap">
    <div className="head"><span className="eyebrow">Cómo funciona</span><Words as="h2" className="d2" text="Del formulario a la conversación con un fondo" /></div>
    <ol className="steps">
      <li><span className="n">01</span><b className="h4">Completas tu pasaporte</b><p>Empresa, tracción, finanzas, impacto y necesidad de capital, en seis bloques.</p></li>
      <li><span className="n">02</span><b className="h4">Lo revisamos contigo</b><p>Validamos la información, te pedimos lo que falte y te enviamos tu diagnóstico.</p></li>
      <li><span className="n">03</span><b className="h4">Entras al portafolio</b><p>Tu teaser queda disponible para los fondos de la red con tesis compatible.</p></li>
      <li><span className="n">04</span><b className="h4">Te conectamos</b><p>Si un fondo muestra interés, te acompañamos en la reunión, el NDA y el due diligence.</p></li>
    </ol>
  </div></section>

  <section className="sec" style={{ borderTop: 0 }}><div className="wrap">
    <div className="head"><span className="eyebrow">Vista previa · Próximamente</span><div className="stack" style={{ gap: "10px" }}><Words as="h2" className="d2" text="Seis bloques, a tu ritmo" /><p className="p2">Ten a mano los estados financieros de los últimos dos años, tu pitch deck si lo tienes y las métricas de impacto que ya mides.</p></div></div>
    <div className="formwrap">
      <ol className="sects">
        <li className="ok">Tu empresa <small>Completo</small></li><li className="ok">Tracción y mercado <small>Completo</small></li><li className="cur">Finanzas <small>En curso</small></li><li>Impacto y ESG <small>8 preguntas</small></li><li>Necesidad de capital <small>6 preguntas</small></li><li>Documentos <small>3 archivos</small></li>
      </ol>
      <div className="fcard" style={{ position: "relative" }}><span className="badge" style={{ position: "absolute", top: -14, right: 20 }}><i />Próximamente</span>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", fontSize: "12.5px", color: "var(--t3)" }}><b style={{ color: "var(--bosque)" }}>3 de 6 · Finanzas</b><span>42% completado</span></div>
        <div className="prog"><u /></div>
        <div className="frow"><div className="field"><label>Ventas netas, últimos 12 meses (USD)</label><div className="inp num">1.100.000</div></div><div className="field"><label>Margen bruto (%)</label><div className="inp num">42</div></div></div>
        <div className="field"><label>¿Has recibido financiamiento de fondos de impacto u otros financiadores?</label><div className="opts"><span className="on">Sí, y lo repagué</span><span>Sí, está vigente</span><span>No</span></div></div>
        <div className="field"><label>Estados financieros del último ejercicio</label><div className="inp file"><span>EEFF_2025.pdf</span><b>Subido</b></div><span className="xs">Solo los ve el equipo de Fondo de Impacto. No forman parte del teaser.</span></div>
        <div className="factions"><span className="lnk q" aria-hidden="true">Guardar y seguir después</span><span className="btn btn-p btn-sm" aria-hidden="true">Siguiente: Impacto y ESG</span></div>
      </div>
    </div>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Preguntas frecuentes</span><Words as="h2" className="d3" text="Antes de empezar" /></div>
    <div className="faq">
      <div><b className="h4">¿Tiene costo?</b><p className="p2">No. Completar el pasaporte y recibir tu diagnóstico cuesta USD 0. Solo inviertes tiempo, y a cambio tu empresa queda frente a fondos que pueden financiarla.</p></div>
      <div><b className="h4">¿Me asegura financiamiento?</b><p className="p2">No. El pasaporte te da un diagnóstico y visibilidad ante fondos con tesis compatible. La decisión de invertir es de cada fondo.</p></div>
      <div><b className="h4">¿Quién ve mi información?</b><p className="p2">Los fondos ven un teaser anónimo. Tu nombre y tus documentos se comparten solo con tu autorización y después de un NDA. Puedes retirar tu pasaporte cuando quieras.</p></div>
      <div><b className="h4">¿Qué empresas pueden postular?</b><p className="p2">Empresas de impacto con operaciones en América Latina y al menos 12 meses de ventas.</p></div>
    </div>
  </div></section>

  <section className="sec tint" id="completar"><div className="wrap split">
    <div className="stack" style={{ gap: 14 }}>
      <span className="eyebrow">Acceso anticipado · USD 0</span>
      <Words as="h2" className="d2" text="Solicita acceso al Pasaporte de Inversión" />
      <p className="p2">El Pasaporte de Inversión abre por etapas. Déjanos tus datos y te avisamos cuando tu acceso esté listo. No cuesta nada: solo inviertes tu tiempo, y abre la puerta al capital que estás buscando.</p>
    </div>
    <LeadForm
      form="pasaporte"
      idPrefix="ps"
      submit="Solicitar acceso"
      success="Listo. Recibimos tu solicitud y te escribiremos cuando tu acceso esté listo."
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

  <section className="sec final dk"><Ring size={1400} /><div className="wrap">
    <Words as="h2" className="d2" style={{ maxWidth: "20ch" }} text="Más de 50 fondos buscan empresas de impacto en América Latina." />
    <p className="lead">Haz que conozcan la tuya. Cuesta USD 0, solo tu tiempo.</p>
    <Link className="btn btn-p" href="/pasaporte#completar">Solicitar acceso al Pasaporte</Link>
  </div></section>

    </>
  );
}
