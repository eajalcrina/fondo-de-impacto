import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { TeamFull } from "@/components/site/Team";
import { Cifras } from "@/components/site/Cifras";
import { es } from "@/lib/i18n/es";

export const metadata: Metadata = { title: "Nosotros", description: "Fondo de Impacto es el brazo de capital de Redesign Lab. Conoce al equipo." };

export default function NosotrosPage() {
  return (
    <>

  <Hero slides={[{ src: "/img/h09.jpg", cap: "Comunidad productora" }]}>
<span className="eyebrow">Nosotros</span>
    <Words as="h1" className="d1" text="El brazo de capital de Redesign Lab" />
    <p className="lead">Redesign Lab es un venture studio que diseña, escala e invierte en empresas de impacto en América Latina desde 2021.</p>
  </Hero>

  <section className="sec"><div className="wrap cols-3">
    <div className="rule"><h3 className="h4">Investment readiness</h3><p className="p2 sm">Metodología propia, Bootcamp y perfil de inversión.</p></div>
    <div className="rule"><h3 className="h4">Estructuración de capital</h3><p className="p2 sm">Red de más de 50 fondos de impacto, banca de desarrollo y cooperación.</p></div>
    <div className="rule"><h3 className="h4">Inversión de impacto</h3><p className="p2 sm">Capital privado con due diligence financiero y ESG.</p></div>
  </div></section>

  <section className="sec tint"><div className="wrap">
    <div className="head"><span className="eyebrow">Cifras</span><Words as="h2" className="d2" text={es.inicio.cifras.titulo} /></div>
    <Cifras items={es.inicio.cifras.items} />
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Equipo</span><Words as="h2" className="d2" text="Estrategia, operación e inversión en un mismo equipo" /></div>
    <TeamFull />
  </div></section>

  <section className="sec final"><div className="wrap">
    <Words as="h2" className="d2" text="Conversemos" />
    <p className="lead">Trabajamos desde Lima y Bogotá. Fondo de Impacto prepara a empresas de impacto para recibir inversión y canaliza capital privado hacia las que tienen historial de repago.</p>
    <div className="cta-row"><a className="btn btn-p" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">Agendar reunión</a><a className="lnk" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
  </div></section>

    </>
  );
}
