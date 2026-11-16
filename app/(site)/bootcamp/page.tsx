import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { LeadForm } from "@/components/site/LeadForm";
import { Consultas } from "@/components/site/Consultas";
import { TeamMini } from "@/components/site/Team";
import { PAISES, RANGOS_OPC, RUBROS } from "@/lib/catalogo";
import fuentes from "@/lib/fuentes.json";

const VENTAS: [string, string][] = [["menos-50k", "Menos de USD 50 mil"], ["50k-250k", "USD 50 mil a 250 mil"], ["250k-1m", "USD 250 mil a 1 MM"], ["mas-1m", "Más de USD 1 MM"]];

const SEMANAS: [string, string, string][] = [
  ["Semanas 1 y 2", "Diagnóstico y tesis", "Punto de partida con tu Pasaporte de Inversión. Definimos la tesis de inversión y cuánto capital buscas y para qué."],
  ["Semanas 3 y 4", "Finanzas y estructura", "Modelo financiero, uso de fondos e instrumento adecuado: deuda, equity o blended."],
  ["Semanas 5 y 6", "Teaser, data room y ESG", "Documentos con estándar de comité, métricas de impacto y gestión de riesgos ESG."],
  ["Semanas 7 y 8", "Pitch y comité simulado", "Ensayos con feedback directo y evaluación final ante un comité simulado."],
];

export const metadata: Metadata = { title: "Bootcamp de Levantamiento de Capital", description: "Ocho semanas de investment readiness aplicado para empresas de impacto. Inicio: lunes 1 de febrero de 2027. 15 cupos." };

export default function BootcampPage() {
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/h17.jpg", cap: "Taller con empresas de impacto" }]}>
        <span className="eyebrow">Bootcamp de Levantamiento de Capital</span>
        <Words as="h1" className="d1" text="Levanta capital con quienes ya lo han hecho" />
        <p className="lead">Ocho semanas de trabajo personalizado con un equipo que desde 2021 ha levantado USD 2.7 MM para empresas de impacto.</p>
        <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular a la próxima cohorte</Link><Link className="lnk" href="/bootcamp#como-funciona">Ver cómo funciona</Link></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">Próxima cohorte</h2>
          <p className="seccion-texto">Evaluamos a cada postulante antes de confirmar su lugar.</p>
        </div>
        <div className="datos d6">
          <div className="dato"><span>Inicio</span><b>{SITE.cohorte.corto}</b></div>
          <div className="dato"><span>Duración</span><b>8 semanas</b></div>
          <div className="dato"><span>Formato</span><b>Virtual y 1:1</b></div>
          <div className="dato"><span>Cupos</span><b>{SITE.cohorte.cupos} empresas</b></div>
          <div className="dato"><span>Inversión</span><b>{SITE.cohorte.precio}</b></div>
          <div className="dato naranja"><span>Precio anticipado hasta el {SITE.cohorte.fechaAnticipado}</span><b>{SITE.cohorte.precioAnticipado}</b></div>
        </div>
        <ul className="condiciones">
          <li>Pagas después de que confirmamos tu cupo, en dos cuotas: la mitad al confirmarlo y la otra mitad en la semana 4.</li>
          <li>Becas parciales para empresas con ventas anuales menores a USD 300 mil, cofinanciadas por fondos y organizaciones de cooperación aliadas.</li>
        </ul>
      </div></section>

      <section className="seccion" id="como-funciona"><div className="wrap">
        <h2 className="d2 seccion-titulo">Qué haces cada semana</h2>
        <ol className="tarjetas t4">
          {SEMANAS.map(([r, t, x]) => (
            <li key={r} className="tarjeta"><span className="tarjeta-r">{r}</span><h3 className="tarjeta-t">{t}</h3><p className="tarjeta-x">{x}</p></li>
          ))}
        </ol>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Al terminar</h2>
        <div className="tarjetas">
          <article className="tarjeta"><span className="tarjeta-r">Portafolio privado</span><h3 className="tarjeta-t">Tu teaser queda disponible para los fondos de nuestra red, con el distintivo del Bootcamp</h3></article>
          <article className="tarjeta"><span className="tarjeta-r">Sesión con fondos aliados</span><h3 className="tarjeta-t">Las empresas que aprueben la evaluación final presentan ante fondos de impacto aliados</h3><p className="nota">La sesión no garantiza financiamiento.</p></article>
        </div>
      </div></section>


      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Quién te acompaña</h2>
        <TeamMini />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Para quién es</h2>
        <article className="tarjeta">
          <ul className="check columnas"><li>Tienes operación comercial activa y ventas verificables.</li><li>Sabes para qué necesitas el capital, o quieres definirlo con nosotros.</li><li>Puedes dedicarle horas cada semana durante ocho semanas.</li><li>Quieres feedback directo sobre tu caso.</li></ul>
          <p className="nota">Si aún no tienes ventas, empieza por tu Pasaporte de Inversión. <Link href="/pasaporte#completar">Solicitar acceso</Link></p>
        </article>
      </div></section>

      <section className="seccion claro" id="postular"><div className="wrap split">
        <div className="stack">
          <span className="eyebrow">Postulación</span>
          <Words as="h2" className="d2" text={`Postula a la cohorte de ${SITE.cohorte.mes}`} />
        </div>
        <LeadForm
          form="bootcamp"
          idPrefix="bc"
          submit="Enviar postulación"
          success={`Gracias. Recibimos tu postulación y te enviamos una confirmación por correo. Te escribimos ${SITE.respuesta}.`}
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

      <section className="seccion claro"><div className="wrap">
        <h2 className="d2 seccion-titulo">Cooperativas, consultores y fondos</h2>
        <Consultas />
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text="Mira cuántos fondos calzan con tu empresa" />
        <p className="lead">El buscador revisa {fuentes.length} fuentes de capital de impacto y te muestra cuántas financian a empresas como la tuya.</p>
        <div className="cta-row"><Link className="btn btn-p" href="/pasaporte#buscador">Ver fondos para mi empresa</Link></div>
      </div></section>
    </div>
  );
}
