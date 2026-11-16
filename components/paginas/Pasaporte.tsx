import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { LeadForm } from "@/components/site/LeadForm";
import { Teaser } from "@/components/site/Teaser";
import { Finder } from "@/components/site/Finder";
import { CapitalMap } from "@/components/site/CapitalMap";
import { SITE } from "@/lib/site";
import { catalogo } from "@/lib/catalogo";
import { ruta, type Lang } from "@/lib/i18n";

export const META = {
  es: { title: "Pasaporte de Inversión", description: "Un solo perfil para más de 50 fondos de impacto. Revisa cuántas fuentes de capital hay para tu empresa y solicita acceso al Pasaporte de Inversión." },
  en: { title: "Investment Passport", description: "One profile for more than 50 impact funds. See how many capital sources fit your company and request access to the Investment Passport." },
};

type Par = [string, string];

const T: Record<Lang, {
  foto: string; rotulo: string; titulo: string; bajada: string; acceso: string; fondos: string; asi: string; asiX: string;
  gana: string; beneficios: Par[]; cuantas: string; cuantasX: string; mapa: string; mapaX: string; metodo: string;
  despues: string; pasos: Par[]; antes: string; preguntas: Par[]; anticipado: string; solicita: string; solicitaX: string;
  enviar: string; gracias: string; campos: Record<string, string>; cierre: string; cierreX: string; postular: string;
}> = {
  es: {
    foto: "Mazorcas de cacao", rotulo: "Pasaporte de Inversión", titulo: "Un solo perfil para más de 50 fondos de impacto",
    bajada: "Lo completas una vez y presentamos tu teaser confidencial a los fondos de nuestra red con tesis compatible.",
    acceso: "Solicitar acceso al Pasaporte", fondos: "Ver fondos para mi empresa",
    asi: "Así ven los fondos a tu empresa", asiX: "Una página anónima con los indicadores que un analista revisa primero: tracción, márgenes, historial de repago e impacto. El Pasaporte no tiene costo para tu empresa.",
    gana: "Qué ganas con el Pasaporte de Inversión",
    beneficios: [
      ["Llegas a fondos que ya están buscando", "Tu teaser les llega solo a los fondos de la red cuya tesis coincide con tu empresa."],
      ["Conoces tus brechas", "Recibes un diagnóstico de investment readiness con las brechas que conviene cerrar antes de levantar capital. Si te conviene, te invitamos a la siguiente cohorte del Bootcamp."],
    ],
    cuantas: "¿Cuántas fuentes de capital de impacto hay para tu empresa?", cuantasX: "Ingresa los datos de tu empresa y recibe un reporte preliminar.",
    mapa: "Fuentes de capital de impacto en América Latina", mapaX: "Fondos de impacto, banca de desarrollo, cooperación y fondos públicos con convocatorias para empresas de la región.",
    metodo: "Base propia con fuentes públicas, actualizada en octubre de 2026. Una fuente puede financiar más de un rango, instrumento o sector. «Llamada activa» incluye convocatorias abiertas y ventanillas permanentes.",
    despues: "Qué pasa después de completarlo",
    pasos: [
      ["Completas tu Pasaporte", "Empresa, tracción, finanzas, impacto y necesidad de capital."],
      ["Lo revisamos contigo", "Validamos la información, te pedimos lo que falte y te enviamos tu diagnóstico."],
      ["Entras al portafolio", "Tu teaser queda disponible para los fondos de la red con tesis compatible."],
      ["Te conectamos", "Si un fondo muestra interés, te acompañamos en la reunión, el NDA y el due diligence."],
    ],
    antes: "Antes de empezar",
    preguntas: [
      ["¿Me asegura financiamiento?", "No. El Pasaporte te da un diagnóstico y visibilidad ante fondos con tesis compatible. La decisión de invertir es de cada fondo."],
      ["¿Puedo retirar mi información?", "Sí. Puedes retirar tu Pasaporte cuando quieras."],
      ["¿Qué empresas pueden postular?", "Empresas de impacto con operaciones en América Latina y al menos 12 meses de ventas."],
    ],
    anticipado: "Acceso anticipado", solicita: "Solicita acceso al Pasaporte de Inversión",
    solicitaX: "El Pasaporte de Inversión abre por etapas. Déjanos tus datos y te avisamos cuando tu acceso esté listo. Ten a mano los estados financieros de los últimos dos años, tu pitch deck si lo tienes y las métricas de impacto que ya mides.",
    enviar: "Solicitar acceso", gracias: `Listo. Recibimos tu solicitud y te escribimos ${SITE.respuesta}.`,
    campos: { empresa: "Empresa", nombre: "Nombre completo", correo: "Correo", celular: "Celular", pais: "País", rubro: "Rubro" },
    cierre: "Prepara tu empresa antes de presentarla", cierreX: "En el Bootcamp cierras las brechas del diagnóstico con el equipo, en ocho semanas.", postular: "Postular al Bootcamp",
  },
  en: {
    foto: "Cacao pods", rotulo: "Investment Passport", titulo: "One profile for more than 50 impact funds",
    bajada: "You fill it in once and we present your confidential teaser to the funds in our network whose thesis fits.",
    acceso: "Request access to the Passport", fondos: "See funds for my company",
    asi: "How funds see your company", asiX: "An anonymous one-pager with the indicators an analyst checks first: traction, margins, repayment track record and impact. The Passport is free for your company.",
    gana: "What you get from the Investment Passport",
    beneficios: [
      ["You reach funds that are already looking", "Your teaser only goes to the funds in the network whose thesis matches your company."],
      ["You learn your gaps", "You receive an investment readiness diagnosis with the gaps worth closing before raising capital. If it helps, we invite you to the next Bootcamp cohort."],
    ],
    cuantas: "How many impact capital sources are there for your company?", cuantasX: "Enter your company details and get a preliminary report.",
    mapa: "Impact capital sources in Latin America", mapaX: "Impact funds, development banks, cooperation agencies and public funds with calls for companies in the region.",
    metodo: "Our own database built from public sources, updated in October 2026. A source can finance more than one range, instrument or sector. “Active call” includes open calls and permanent windows.",
    despues: "What happens after you complete it",
    pasos: [
      ["You complete your Passport", "Company, traction, finance, impact and capital needs."],
      ["We review it with you", "We validate the information, ask for anything missing and send you your diagnosis."],
      ["You join the portfolio", "Your teaser becomes available to the network funds with a compatible thesis."],
      ["We connect you", "If a fund shows interest, we support you through the meeting, the NDA and due diligence."],
    ],
    antes: "Before you start",
    preguntas: [
      ["Does it guarantee financing?", "No. The Passport gives you a diagnosis and visibility with funds that have a compatible thesis. Each fund makes its own investment decision."],
      ["Can I withdraw my information?", "Yes. You can withdraw your Passport whenever you want."],
      ["Which companies can apply?", "Impact companies operating in Latin America with at least 12 months of sales."],
    ],
    anticipado: "Early access", solicita: "Request access to the Investment Passport",
    solicitaX: "The Investment Passport opens in stages. Leave your details and we will let you know when your access is ready. Have at hand your financial statements for the last two years, your pitch deck if you have one and the impact metrics you already track.",
    enviar: "Request access", gracias: "Done. We received your request and will write to you within 24 hours.",
    campos: { empresa: "Company", nombre: "Full name", correo: "Email", celular: "Mobile", pais: "Country", rubro: "Sector" },
    cierre: "Prepare your company before presenting it", cierreX: "In the Bootcamp you close the gaps from your diagnosis with the team, in eight weeks.", postular: "Apply to the Bootcamp",
  },
};

/** Pasaporte de Inversión. */
export function Pasaporte({ lang }: { lang: Lang }) {
  const t = T[lang];
  const c = t.campos;
  const { PAISES, RUBROS } = catalogo(lang);
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/h04.jpg", cap: t.foto }]}>
        <span className="eyebrow">{t.rotulo}</span>
        <Words as="h1" className="d1" text={t.titulo} />
        <p className="lead">{t.bajada}</p>
        <div className="cta-row"><Link className="btn btn-p" href={ruta(lang, "/pasaporte#completar")}>{t.acceso}</Link><Link className="lnk" href={ruta(lang, "/pasaporte#buscador")}>{t.fondos}</Link></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">{t.asi}</h2>
          <p className="seccion-texto">{t.asiX}</p>
        </div>
        <Teaser lang={lang} />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.gana}</h2>
        <div className="tarjetas">
          {t.beneficios.map(([a, b]) => <article key={a} className="tarjeta"><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></article>)}
        </div>
      </div></section>

      <section className="seccion claro" id="buscador"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">{t.cuantas}</h2>
          <p className="seccion-texto">{t.cuantasX}</p>
        </div>
        <Finder />
      </div></section>

      <section className="seccion claro" id="mapa"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">{t.mapa}</h2>
          <p className="seccion-texto">{t.mapaX}</p>
        </div>
        <CapitalMap />
        <p className="method">{t.metodo}</p>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.despues}</h2>
        <ol className="tarjetas t4">
          {t.pasos.map(([a, b], i) => <li key={a} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></li>)}
        </ol>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.antes}</h2>
        <div className="tarjetas t3">
          {t.preguntas.map(([a, b]) => <article key={a} className="tarjeta"><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></article>)}
        </div>
      </div></section>

      <section className="seccion claro" id="completar"><div className="wrap split">
        <div className="stack">
          <span className="eyebrow">{t.anticipado}</span>
          <Words as="h2" className="d2" text={t.solicita} />
          <p className="p2">{t.solicitaX}</p>
        </div>
        <LeadForm
          form="pasaporte"
          idPrefix="ps"
          submit={t.enviar}
          success={t.gracias}
          fields={[
            { name: "empresa", label: c.empresa, required: true, autoComplete: "organization", half: true },
            { name: "nombre", label: c.nombre, required: true, autoComplete: "name", half: true },
            { name: "correo", label: c.correo, type: "email", required: true, autoComplete: "email", half: true },
            { name: "celular", label: c.celular, type: "tel", autoComplete: "tel", half: true },
            { name: "pais", label: c.pais, type: "select", options: PAISES, half: true },
            { name: "rubro", label: c.rubro, type: "select", options: RUBROS, half: true },
          ]}
        />
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text={t.cierre} />
        <p className="lead">{t.cierreX}</p>
        <div className="cta-row"><Link className="btn btn-p" href={ruta(lang, "/bootcamp#postular")}>{t.postular}</Link></div>
      </div></section>
    </div>
  );
}
