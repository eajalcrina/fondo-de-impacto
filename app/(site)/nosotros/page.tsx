import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { TeamFull } from "@/components/site/Team";

export const metadata: Metadata = { title: "Nosotros", description: "Fondo de Impacto es el brazo de capital de Redesign Lab. Conoce al equipo." };

export default function NosotrosPage() {
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/rl/textil.jpg", cap: "Artesana trabajando un textil" }]}>
        <span className="eyebrow">Nosotros</span>
        <Words as="h1" className="d1" text="El brazo de capital de Redesign Lab" />
        <p className="lead">Redesign Lab es un venture studio que diseña, escala e invierte en empresas de impacto en América Latina desde 2021.</p>
      </Hero>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Qué hacemos</h2>
        <div className="tarjetas t3">
          <article className="tarjeta"><span className="tarjeta-n">01</span><h3 className="tarjeta-t">Investment readiness</h3><p className="tarjeta-x">Metodología propia, Bootcamp y perfil de inversión.</p></article>
          <article className="tarjeta"><span className="tarjeta-n">02</span><h3 className="tarjeta-t">Estructuración de capital</h3><p className="tarjeta-x">Red de más de 50 fondos de impacto, banca de desarrollo y cooperación.</p></article>
          <article className="tarjeta naranja"><span className="tarjeta-n">03</span><h3 className="tarjeta-t">Inversión de impacto</h3><p className="tarjeta-x">Capital privado con due diligence financiero y ESG.</p></article>
        </div>
      </div></section>


      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">Estrategia, operación e inversión en un mismo equipo</h2>
        <TeamFull />
      </div></section>

      <section className="sec final"><div className="wrap">
        <Words as="h2" className="d2" text="Conversemos" />
        <p className="lead">Trabajamos desde Lima y Bogotá con empresas, fondos y organizaciones de cooperación.</p>
        <div className="cta-row"><a className="btn btn-p" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">Agendar reunión</a><a className="lnk" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
      </div></section>
    </div>
  );
}
