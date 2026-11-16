import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { TeamFull } from "@/components/site/Team";
import { SITE } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

export const META = {
  es: { title: "Nosotros", description: "Fondo de Impacto es el brazo de capital de Redesign Lab. Conoce al equipo." },
  en: { title: "About us", description: "Fondo de Impacto is the capital arm of Redesign Lab. Meet the team." },
};

const T = {
  es: {
    foto: "Comunidad productora", rotulo: "Nosotros", titulo: "El brazo de capital de Redesign Lab",
    bajada: "Redesign Lab es un venture studio que diseña, escala e invierte en empresas de impacto en América Latina desde 2021.",
    hacemos: "Qué hacemos",
    lineas: [["Preparación para la inversión", "Metodología propia, Bootcamp y perfil de inversión."], ["Estructuración de capital", "Red de más de 50 fondos de impacto, banca de desarrollo y cooperación."], ["Inversión de impacto", "Capital privado con due diligence financiero y ESG."]],
    equipo: "Estrategia, operación e inversión en un mismo equipo",
    cierre: "Conversemos", cierreX: "Trabajamos desde Lima y Bogotá con empresas, fondos y organizaciones de cooperación.", agendar: "Agendar reunión",
  },
  en: {
    foto: "Producer community", rotulo: "About us", titulo: "The capital arm of Redesign Lab",
    bajada: "Redesign Lab is a venture studio that designs, scales and invests in impact companies in Latin America since 2021.",
    hacemos: "What we do",
    lineas: [["Investment readiness", "Our own methodology, the Bootcamp and the investment profile."], ["Capital structuring", "A network of more than 50 impact funds, development banks and cooperation agencies."], ["Impact investing", "Private capital with financial and ESG due diligence."]],
    equipo: "Strategy, operations and investment in one team",
    cierre: "Let’s talk", cierreX: "We work from Lima and Bogotá with companies, funds and cooperation organizations.", agendar: "Book a meeting",
  },
};

/** Nosotros. */
export function Nosotros({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/comunidad.jpg", cap: t.foto }]} posicion="50% 50%">
        <span className="eyebrow">{t.rotulo}</span>
        <Words as="h1" className="d1" text={t.titulo} />
        <p className="lead">{t.bajada}</p>
      </Hero>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.hacemos}</h2>
        <div className="tarjetas t3">
          {t.lineas.map(([a, b], i) => <article key={a} className="tarjeta"><span className="tarjeta-n">0{i + 1}</span><h3 className="tarjeta-t">{a}</h3><p className="tarjeta-x">{b}</p></article>)}
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.equipo}</h2>
        <TeamFull lang={lang} />
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text={t.cierre} />
        <p className="lead">{t.cierreX}</p>
        <div className="cta-row"><a className="btn btn-p" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">{t.agendar}</a><a className="lnk" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
      </div></section>
    </div>
  );
}
