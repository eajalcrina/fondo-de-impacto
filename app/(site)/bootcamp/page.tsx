import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Ring } from "@/components/site/Ring";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { LeadForm } from "@/components/site/LeadForm";
import { Consultas } from "@/components/site/Consultas";
import { PAISES, RANGOS_OPC, RUBROS } from "@/lib/catalogo";

const VENTAS: [string, string][] = [["menos-50k", "Menos de USD 50 mil"], ["50k-250k", "USD 50 mil a 250 mil"], ["250k-1m", "USD 250 mil a 1 millón"], ["mas-1m", "Más de USD 1 millón"]];
import { TeamMini } from "@/components/site/Team";

export const metadata: Metadata = { title: "Bootcamp de Levantamiento de Capital", description: "Ocho semanas de investment readiness aplicado para empresas de impacto. Inicio: lunes 2 de noviembre de 2026. 15 cupos." };

export default function BootcampPage() {
  return (
    <>

  <Hero slides={[{ src: "/img/h16.jpg", cap: "Mapeo de cadena de valor" }]} split>
<div className="stack" style={{ gap: "26px" }}>
      <span className="eyebrow">Bootcamp de Levantamiento de Capital</span>
      <Words as="h1" className="d1" style={{ fontSize: "clamp(38px,5.4vw,68px)" }} text="Sal a levantar capital acompañado por quienes ya lo han hecho." />
      <p className="lead">Investment readiness aplicado. Ocho semanas de trabajo intensivo y personalizado para empresas de impacto listas para buscar inversión, con un equipo que, desde 2021, ha levantado USD 1,5MM en capital de impacto y USD 1,2MM en fondos no reembolsables para empresas de la región.</p>
      <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular a la próxima cohorte</Link><Link className="lnk q" href="/bootcamp#como-funciona">Ver cómo funciona</Link></div>
    </div>
    <div className="card num dk">
      <div className="top"><span>Próxima cohorte</span><b>Noviembre 2026</b></div>
      <div className="kv" style={{ borderTop: 0, paddingTop: 0 }}>
        <div><span>Inicio</span><b>Lun 2 nov 2026</b></div><div><span>Duración</span><b>8 semanas</b></div>
        <div><span>Formato</span><b>Virtual + 1:1</b></div><div><span>Cupos</span><b>{SITE.cohorte.cupos} empresas</b></div>
      </div>
      <div className="meter"><span>Postulaciones</span><span style={{ flex: 1 }}></span><b className="tc">Abiertas</b></div>
      <span className="xs">Revisamos cada postulación antes de confirmar tu cupo.</span>
    </div>
  </Hero>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Por qué es distinto</span><Words as="h2" className="d2" text="Trabajas tu empresa, no un caso de estudio." /></div>
    <div className="cols-3">
      <div className="rule"><h3 className="h4">Aplicado, no teórico</h3><p className="p2 sm">Cada semana avanzas en tu propio caso: estructura de capital, teaser, data room y pitch.</p></div>
      <div className="rule"><h3 className="h4">Asesoría personalizada</h3><p className="p2 sm">Un equipo que ha levantado capital y evaluado créditos trabaja contigo, empresa por empresa.</p></div>
      <div className="rule"><h3 className="h4">Selección previa</h3><p className="p2 sm">Evaluamos a todas las postulantes para que el grupo esté al nivel del programa y de los fondos que lo reciben.</p></div>
    </div>
  </div></section>

  <section className="sec tint" id="como-funciona"><div className="wrap">
    <div className="head"><span className="eyebrow">Cómo funciona</span><Words as="h2" className="d2" text="Ocho semanas, de tu diagnóstico a la sesión con fondos" /></div>
    <ol className="steps">
      <li><span className="n">SEMANAS 1–2</span><b className="h4">Diagnóstico y tesis</b><p>Punto de partida con tu pasaporte. Definimos la tesis de inversión y cuánto capital buscas y para qué.</p></li>
      <li><span className="n">SEMANAS 3–4</span><b className="h4">Finanzas y estructura</b><p>Modelo financiero, uso de fondos e instrumento adecuado: deuda, equity o blended.</p></li>
      <li><span className="n">SEMANAS 5–6</span><b className="h4">Teaser, data room y ESG</b><p>Documentos con estándar de comité, métricas de impacto y gestión de riesgos ESG.</p></li>
      <li><span className="n">SEMANAS 7–8</span><b className="h4">Pitch y comité simulado</b><p>Ensayos con feedback directo y evaluación final ante un comité simulado.</p></li>
    </ol>
  </div></section>

  <section className="sec" style={{ borderTop: 0 }}><div className="wrap cols-2" style={{ alignItems: "start" }}>
    <div className="stack">
      <span className="eyebrow">Lo que consigues</span>
      <Words as="h2" className="d2" text="Sales con tu empresa lista para una ronda" />
      <ul className="check"><li>Tesis de inversión y estructura de capital definidas</li><li>Modelo financiero y plan de uso de fondos</li><li>Teaser y pitch deck con estándar de comité</li><li>Data room ordenado, con indicadores ESG y de impacto</li><li>Tu teaser en el FI Deal Room, con el distintivo del Bootcamp</li></ul>
    </div>
    <div className="feature dk" style={{ gridTemplateColumns: "1fr", gap: "16px" }}>
      <Ring size={1120} />
      <span className="eyebrow">Sesión con fondos aliados</span>
      <h3 className="d3">Las empresas que aprueben la evaluación final presentan ante fondos de impacto aliados.</h3>
      <p className="p2">Una sesión con inversionistas de nuestra red, preparada para que cada empresa llegue con su caso completo.</p>
      <p className="xs" style={{ borderTop: "1px solid rgba(255,255,255,.16)", paddingTop: "14px" }}>Es una presentación ante quienes pueden financiarte, no una promesa de financiamiento.</p>
    </div>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Quién te acompaña</span><Words as="h2" className="d3" text="Un equipo que conoce los dos lados de la mesa" /></div>
    <TeamMini />
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">¿Para quién es?</span><Words as="h2" className="d2" text="Para empresas que quieren levantar capital ahora" /></div>
    <div className="cols-2">
      <div className="rule" style={{ gap: "18px" }}><span className="eyebrow s">Este programa es para ti si</span><ul className="check"><li>Tienes operación comercial activa y ventas verificables.</li><li>Sabes para qué necesitas el capital, o estás listo para definirlo con nosotros.</li><li>Puedes dedicarle tiempo real durante ocho semanas.</li><li>Quieres feedback directo, no solo contenido.</li></ul><div><Link className="btn btn-p btn-sm" href="/bootcamp#postular">Postular</Link></div></div>
      <div className="rule l" style={{ gap: "18px" }}><span className="eyebrow s">Todavía no es tu momento si</span><ul className="check x"><li>Aún estás validando tu producto o no tienes ventas.</li><li>No podrás dedicar horas semanales durante el programa.</li></ul><p className="p2 sm">Empieza por tu Pasaporte de Inversión. Recibes tu diagnóstico y te avisamos cuando estés listo para una cohorte.</p><Link className="lnk" href="/pasaporte#completar">Crear mi pasaporte</Link></div>
    </div>
  </div></section>

  <section className="sec tint" id="postular"><div className="wrap split">
    <div className="stack" style={{ gap: 14 }}>
      <span className="eyebrow">Postulación</span>
      <Words as="h2" className="d2" text="Postula a la cohorte de noviembre" />
      <p className="p2">Inicio: {SITE.cohorte.inicio}. {SITE.cohorte.cupos} cupos. Revisamos cada postulación y te escribimos para coordinar una conversación.</p>
    </div>
    <LeadForm
      form="bootcamp"
      idPrefix="bc"
      submit="Enviar postulación"
      success="Gracias. Recibimos tu postulación y te enviamos una confirmación por correo."
      fields={[
        { name: "empresa", label: "Empresa", required: true, autoComplete: "organization", half: true },
        { name: "nombre", label: "Nombre completo", required: true, autoComplete: "name", half: true },
        { name: "correo", label: "Correo", type: "email", required: true, autoComplete: "email", half: true },
        { name: "celular", label: "Celular", type: "tel", required: true, autoComplete: "tel", half: true },
        { name: "pais", label: "País", type: "select", options: PAISES, required: true, half: true },
        { name: "rubro", label: "Rubro", type: "select", options: RUBROS, half: true },
        { name: "ventas", label: "Ventas de los últimos 12 meses (USD)", type: "select", options: VENTAS, half: true },
        { name: "capital", label: "Capital que buscas", type: "select", options: RANGOS_OPC, half: true },
        { name: "mensaje", label: "¿Para qué necesitas el capital?", type: "textarea" },
      ]}
    />
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">¿Otro perfil?</span><div className="stack" style={{ gap: "8px" }}><Words as="h2" className="d3" text="Cuéntanos qué necesitas" /><p className="p2">Cada público tiene necesidades distintas. Dinos cuál es la tuya.</p></div></div>
    <Consultas />
  </div></section>

  <section className="sec final"><Ring size={1400} /><div className="wrap">
    <Words as="h2" className="d2" style={{ maxWidth: "20ch" }} text="La próxima cohorte empieza el lunes 2 de noviembre de 2026, con 15 cupos." />
    <p className="lead">Postula con tu Pasaporte de Inversión.</p>
    <Link className="btn btn-p" href="/bootcamp#postular">Postular a la próxima cohorte</Link>
  </div></section>

    </>
  );
}
