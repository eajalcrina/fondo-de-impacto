import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { LeadForm } from "@/components/site/LeadForm";
import { Consultas } from "@/components/site/Consultas";
import { TeamMini } from "@/components/site/Team";
import { SITE } from "@/lib/site";
import { catalogo } from "@/lib/catalogo";
import fuentes from "@/lib/fuentes.json";
import { ruta, type Lang } from "@/lib/i18n";

export const META = {
  es: { title: "Bootcamp de Levantamiento de Capital", description: `Ocho semanas de preparación para la inversión para empresas de impacto. Inicio: ${SITE.cohorte.inicio.toLowerCase()}. ${SITE.cohorte.cupos} cupos.` },
  en: { title: "Capital Raising Bootcamp", description: `Eight weeks of hands-on investment readiness for impact companies. Starts ${SITE.cohorteEn.inicio}. ${SITE.cohorte.cupos} seats.` },
};

const C = SITE.cohorte;
const CE = SITE.cohorteEn;

const T = {
  es: {
    foto: "Taller con empresas de impacto", rotulo: "Bootcamp de Levantamiento de Capital", titulo: "Levanta capital con quienes ya lo han hecho",
    bajada: "Ocho semanas de trabajo personalizado con un equipo que desde 2021 ha levantado USD 2.7 MM para empresas de impacto.",
    postular: "Postular a la próxima cohorte", como: "Ver cómo funciona",
    cohorte: "Próxima cohorte", cohorteX: "Evaluamos a cada postulante antes de confirmar su lugar.",
    datos: [["Inicio", C.corto], ["Duración", "8 semanas"], ["Formato", "Virtual y 1:1"], ["Cupos", `${C.cupos} empresas`], ["Inversión", C.precio]],
    anticipado: [`Precio anticipado hasta el ${C.fechaAnticipado}`, C.precioAnticipado],
    condiciones: ["Pagas después de que confirmamos tu cupo, en dos cuotas: la mitad al confirmarlo y la otra mitad en la semana 4.", "Becas parciales para empresas con ventas anuales menores a USD 300 mil, cofinanciadas por fondos y organizaciones de cooperación aliadas."],
    semanas: "Qué haces cada semana",
    lista: [
      ["Semanas 1 y 2", "Diagnóstico y tesis", "Punto de partida con tu Pasaporte de Inversión. Definimos la tesis de inversión y cuánto capital buscas y para qué."],
      ["Semanas 3 y 4", "Finanzas y estructura", "Modelo financiero, uso de fondos e instrumento adecuado: deuda, equity o blended."],
      ["Semanas 5 y 6", "Teaser, data room y ESG", "Documentos con estándar de comité, métricas de impacto y gestión de riesgos ESG."],
      ["Semanas 7 y 8", "Pitch y comité simulado", "Ensayos con feedback directo y evaluación final ante un comité simulado."],
    ],
    terminar: "Al terminar",
    t1: ["Red de fondos", "Tu teaser queda disponible para los fondos de nuestra red, con el distintivo del Bootcamp"],
    t2: ["Sesión con fondos aliados", "Las empresas que aprueben la evaluación final presentan ante fondos de impacto aliados", "La sesión no garantiza financiamiento."],
    equipo: "Quién te acompaña",
    quien: "Para quién es",
    requisitos: ["Tienes operación comercial activa y ventas verificables.", "Sabes para qué necesitas el capital, o quieres definirlo con nosotros.", "Puedes dedicarle horas cada semana durante ocho semanas.", "Quieres feedback directo sobre tu caso."],
    sinVentas: "Si aún no tienes ventas, empieza por tu Pasaporte de Inversión.", acceso: "Solicitar acceso",
    postulacion: "Postulación", postula: `Postula a la cohorte de ${C.mes}`, enviar: "Enviar postulación",
    gracias: `Gracias. Recibimos tu postulación y te enviamos una confirmación por correo. Te escribimos ${SITE.respuesta}.`,
    campos: { empresa: "Empresa", nombre: "Nombre completo", correo: "Correo", celular: "Celular", pais: "País", rubro: "Rubro", ventas: "Ventas de los últimos 12 meses (USD)", capital: "Capital que buscas", mensaje: "¿Para qué necesitas el capital?" },
    ventas: [["menos-50k", "Menos de USD 50 mil"], ["50k-250k", "USD 50 mil a 250 mil"], ["250k-1m", "USD 250 mil a 1 MM"], ["mas-1m", "Más de USD 1 MM"]] as [string, string][],
    otros: "Cooperativas, consultores y fondos",
    cierre: "Mira cuántos fondos calzan con tu empresa", cierreX: `El buscador revisa ${fuentes.length} fuentes de capital de impacto y te muestra cuántas financian a empresas como la tuya.`, fondos: "Ver fondos para mi empresa",
  },
  en: {
    foto: "Workshop with impact companies", rotulo: "Capital Raising Bootcamp", titulo: "Raise capital with people who have done it",
    bajada: "Eight weeks of one-on-one work with a team that has raised USD 2.7 M for impact companies since 2021.",
    postular: "Apply to the next cohort", como: "See how it works",
    cohorte: "Next cohort", cohorteX: "We assess every applicant before confirming their seat.",
    datos: [["Start", CE.corto], ["Length", "8 weeks"], ["Format", "Online and one-on-one"], ["Seats", `${C.cupos} companies`], ["Price", C.precio]],
    anticipado: [`Early price until ${CE.fechaAnticipado}`, C.precioAnticipado],
    condiciones: ["You pay after we confirm your seat, in two installments: half on confirmation and half in week 4.", "Partial scholarships for companies with annual sales below USD 300K, co-funded by partner funds and cooperation organizations."],
    semanas: "What you do each week",
    lista: [
      ["Weeks 1 and 2", "Diagnostic and thesis", "Starting point with your Investment Passport. We define the investment thesis, how much capital you need and what for."],
      ["Weeks 3 and 4", "Finance and structure", "Financial model, use of funds and the right instrument: debt, equity or blended."],
      ["Weeks 5 and 6", "Teaser, data room and ESG", "Committee-grade documents, impact metrics and ESG risk management."],
      ["Weeks 7 and 8", "Pitch and mock committee", "Rehearsals with direct feedback and a final assessment before a mock investment committee."],
    ],
    terminar: "When you finish",
    t1: ["Fund network", "Your teaser becomes available to the funds in our network, with the Bootcamp badge"],
    t2: ["Session with partner funds", "Companies that pass the final assessment pitch to partner impact funds", "The session does not guarantee financing."],
    equipo: "Who works with you",
    quien: "Who it is for",
    requisitos: ["You have active commercial operations and verifiable sales.", "You know what you need the capital for, or want to define it with us.", "You can commit hours every week for eight weeks.", "You want direct feedback on your case."],
    sinVentas: "If you do not have sales yet, start with your Investment Passport.", acceso: "Request access",
    postulacion: "Application", postula: `Apply to the ${CE.mes} cohort`, enviar: "Send application",
    gracias: "Thank you. We received your application and sent you a confirmation email. We will write to you within 24 hours.",
    campos: { empresa: "Company", nombre: "Full name", correo: "Email", celular: "Mobile", pais: "Country", rubro: "Sector", ventas: "Sales in the last 12 months (USD)", capital: "Capital you are looking for", mensaje: "What do you need the capital for?" },
    ventas: [["menos-50k", "Less than USD 50K"], ["50k-250k", "USD 50K to 250K"], ["250k-1m", "USD 250K to 1 M"], ["mas-1m", "More than USD 1 M"]] as [string, string][],
    otros: "Cooperatives, consultants and funds",
    cierre: "See how many funds match your company", cierreX: `The finder reviews ${fuentes.length} impact capital sources and shows you how many finance companies like yours.`, fondos: "See funds for my company",
  },
};

/** Bootcamp de Levantamiento de Capital. */
export function Bootcamp({ lang }: { lang: Lang }) {
  const t = T[lang];
  const c = t.campos;
  const { PAISES, RUBROS, RANGOS_OPC } = catalogo(lang);
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/h17.jpg", cap: t.foto }]}>
        <span className="eyebrow">{t.rotulo}</span>
        <Words as="h1" className="d1" text={t.titulo} />
        <p className="lead">{t.bajada}</p>
        <div className="cta-row"><Link className="btn btn-p" href={ruta(lang, "/bootcamp#postular")}>{t.postular}</Link><Link className="lnk" href={ruta(lang, "/bootcamp#como-funciona")}>{t.como}</Link></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">{t.cohorte}</h2>
          <p className="seccion-texto">{t.cohorteX}</p>
        </div>
        <div className="datos d6">
          {t.datos.map(([a, b]) => <div key={a} className="dato"><span>{a}</span><b>{b}</b></div>)}
          <div className="dato naranja"><span>{t.anticipado[0]}</span><b>{t.anticipado[1]}</b></div>
        </div>
        <ul className="condiciones">{t.condiciones.map((x) => <li key={x}>{x}</li>)}</ul>
      </div></section>

      <section className="seccion" id="como-funciona"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.semanas}</h2>
        <ol className="tarjetas t4">
          {t.lista.map(([r, a, b]) => <li key={r} className="tarjeta"><span className="tarjeta-r">{r}</span><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></li>)}
        </ol>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.terminar}</h2>
        <div className="tarjetas">
          <article className="tarjeta"><span className="tarjeta-r">{t.t1[0]}</span><h3 className="tarjeta-t">{t.t1[1]}</h3></article>
          <article className="tarjeta"><span className="tarjeta-r">{t.t2[0]}</span><h3 className="tarjeta-t">{t.t2[1]}</h3><p className="nota">{t.t2[2]}</p></article>
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.equipo}</h2>
        <TeamMini lang={lang} />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.quien}</h2>
        <article className="tarjeta">
          <ul className="check columnas">{t.requisitos.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="nota">{t.sinVentas} <Link href={ruta(lang, "/pasaporte#completar")}>{t.acceso}</Link></p>
        </article>
      </div></section>

      <section className="seccion claro" id="postular"><div className="wrap split">
        <div className="stack">
          <span className="eyebrow">{t.postulacion}</span>
          <Words as="h2" className="d2" text={t.postula} />
        </div>
        <LeadForm
          form="bootcamp"
          idPrefix="bc"
          submit={t.enviar}
          success={t.gracias}
          fields={[
            { name: "empresa", label: c.empresa, required: true, autoComplete: "organization", half: true },
            { name: "nombre", label: c.nombre, required: true, autoComplete: "name", half: true },
            { name: "correo", label: c.correo, type: "email", required: true, autoComplete: "email", half: true },
            { name: "celular", label: c.celular, type: "tel", required: true, autoComplete: "tel", half: true },
            { name: "pais", label: c.pais, type: "select", options: PAISES, required: true, half: true },
            { name: "rubro", label: c.rubro, type: "select", options: RUBROS, half: true },
            { name: "ventas", label: c.ventas, type: "select", options: t.ventas, half: true },
            { name: "capital", label: c.capital, type: "select", options: RANGOS_OPC, half: true },
            { name: "mensaje", label: c.mensaje, type: "textarea" },
          ]}
        />
      </div></section>

      <section className="seccion claro"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.otros}</h2>
        <Consultas />
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text={t.cierre} />
        <p className="lead">{t.cierreX}</p>
        <div className="cta-row"><Link className="btn btn-p" href={ruta(lang, "/pasaporte#buscador")}>{t.fondos}</Link></div>
      </div></section>
    </div>
  );
}
