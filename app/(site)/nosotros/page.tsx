import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Ring } from "@/components/site/Ring";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { TeamFull } from "@/components/site/Team";

export const metadata: Metadata = { title: "Nosotros", description: "Fondo de Impacto es el brazo de capital de Redesign Lab. Conoce al equipo." };

export default function NosotrosPage() {
  return (
    <>

  <Hero slides={[{ src: "/img/h09.jpg", cap: "Comunidad productora" }]}>
<span className="eyebrow">Nosotros</span>
    <Words as="h1" className="d1" style={{ fontSize: "clamp(38px,5.4vw,68px)", maxWidth: "15ch" }} text="El brazo de capital de Redesign Lab." />
    <p className="lead" style={{ maxWidth: "60ch" }}>Redesign Lab es un venture studio que diseña, escala e invierte en empresas de impacto en América Latina desde 2021. Fondo de Impacto es su vehículo especializado en capital de impacto. Prepara a las empresas para recibir inversión y canaliza capital privado hacia las que tienen historial validado.</p>
  </Hero>

  <section className="sec"><div className="wrap cols-3">
    <div className="rule"><span className="eyebrow s">Especialidad</span><h3 className="d3">Investment readiness</h3><p className="p2 sm">Metodología propietaria, Bootcamp y perfil de inversión.</p></div>
    <div className="rule"><span className="eyebrow s">Especialidad</span><h3 className="d3">Estructuración de capital</h3><p className="p2 sm">Red de más de 50 fondos de impacto, banca de desarrollo y cooperación.</p></div>
    <div className="rule"><span className="eyebrow s">Especialidad</span><h3 className="d3">Inversión de impacto</h3><p className="p2 sm">Capital privado con due diligence financiero y ESG.</p></div>
  </div></section>

  <section className="sec tint"><div className="wrap">
    <div className="head"><span className="eyebrow">Track record</span><Words as="h2" className="d3" text="Desde 2021, con empresas de impacto en Perú y la región" /></div>
    <div className="stats num">
      <div><b>USD 1,2MM</b><span>fondos no reembolsables internacionales</span></div>
      <div><b>USD 1,5MM</b><span>deuda levantada para empresas acompañadas</span></div>
      <div><b>10</b><span>empresas en portafolio activo de Redesign Lab</span></div>
      <div><b>+USD 26MM</b><span>facturación del portafolio en 2024</span></div>
      <div><b>+120</b><span>comunidades con impacto directo</span></div>
    </div>
  </div></section>

  <section className="sec" style={{ borderTop: 0 }}><div className="wrap">
    <div className="head"><span className="eyebrow">Equipo</span><Words as="h2" className="d2" text="Estrategia, operación e inversión en un mismo equipo" /></div>
    <TeamFull />
  </div></section>

  <section className="sec"><div className="wrap split">
    <span className="eyebrow">Oficinas</span>
    <div className="cols-2" style={{ gap: "32px" }}><div className="rule l"><h3 className="d3">Lima</h3><p className="p2 sm">Perú</p></div><div className="rule l"><h3 className="d3">Bogotá</h3><p className="p2 sm">Colombia</p></div></div>
  </div></section>

    </>
  );
}
