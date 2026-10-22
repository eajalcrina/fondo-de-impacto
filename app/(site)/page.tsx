import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Ring } from "@/components/site/Ring";
import { Words } from "@/components/site/Words";
import { SITE } from "@/lib/site";
import { TeamMini } from "@/components/site/Team";
import { Ranges } from "@/components/site/Ranges";
import { PhotoBelt } from "@/components/site/PhotoBelt";

export const metadata: Metadata = { description: "Capital para las empresas de impacto de América Latina que ya demostraron tracción. Te preparamos para levantar capital y te presentamos a los fondos que pueden financiarte." };

export default function HomePage() {
  return (
    <>

  <Hero slides={[{ src: "/img/n2.jpg", cap: "Amazonía" }, { src: "/img/h01.jpg", cap: "Biodiversidad" }, { src: "/img/h21.jpg", cap: "Productores" }, { src: "/img/h05.jpg", cap: "Mercados internacionales" }, { src: "/img/h09.jpg", cap: "Comunidades" }]}>
<span className="eyebrow">Capital de impacto · Perú y Colombia</span>
    <Words as="h1" className="d1" style={{ maxWidth: "21ch" }} text="Capital para las empresas de impacto de América Latina que ya demostraron tracción." />
    <p className="lead" style={{ maxWidth: "48ch" }}>Te preparamos para levantar capital y te presentamos a los fondos que pueden financiarte.</p>
    <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk q" href="/inversionistas">Soy inversionista</Link></div>
    <div className="facts num"><div><b>+50</b><span>fondos en nuestra red</span></div><div><b>USD 1,5MM</b><span>en capital de impacto levantado*</span></div><div><b>USD 1,2MM</b><span>en fondos no reembolsables*</span></div></div>
  </Hero>
  <PhotoBelt />

  <section className="sec"><div className="wrap split">
    <span className="eyebrow">Por qué existimos</span>
    <div className="stack" style={{ gap: "24px" }}>
      <Words as="h2" className="d2" text="El potencial existe. Lo que falta es un perfil de inversión que un comité pueda aprobar." />
      <p className="lead">Los negocios de impacto de América Latina generan ingresos y resultados medibles antes de que el capital los identifique. El obstáculo pocas veces es el negocio. Son estados financieros incompletos, gobernanza informal y una tesis que un comité no puede evaluar.</p>
      <p className="p2">Nuestro rol es conectar a esas empresas con las organizaciones que tienen el capital: fondos de impacto, banca de desarrollo y cooperación internacional. Las preparamos para recibir inversión y, con ella, desarrollar las cadenas de valor de América Latina.</p>
      <p className="h4">Trabajamos a los dos lados de la mesa: conocemos a la empresa por dentro y sabemos lo que exige quien invierte.</p>
      <div className="bridge"><span>Empresas de impacto</span><i /><span className="me">Fondo de Impacto</span><i /><span>Organizaciones con capital</span></div>
    </div>
  </div></section>

  <section className="only-photo" style={{ paddingBottom: "clamp(56px,7vw,96px)" }}><div className="wrap mosaic duo">
    <figure className="ph-fig px"><Image src="/img/h01.jpg" alt="Mazorca de cacao en un sistema agroforestal" fill sizes="(max-width:760px) 100vw, 40vw" /><figcaption>Biodiversidad</figcaption></figure>
    <figure className="ph-fig px"><Image src="/img/h21.jpg" alt="Productor sonriendo en su finca" fill sizes="(max-width:760px) 100vw, 40vw" /><figcaption>Productores</figcaption></figure>
    <figure className="ph-fig px"><Image src="/img/h05.jpg" alt="Feria internacional de materiales sostenibles" fill sizes="(max-width:760px) 100vw, 40vw" /><figcaption>Mercados internacionales</figcaption></figure>
  </div></section>

  <section className="sec tint" id="rangos"><div className="wrap">
    <div className="head"><span className="eyebrow">¿Cuánto capital necesitas?</span><div className="stack" style={{ gap: "12px" }}><Words as="h2" className="d2" text="Mira cuántas fuentes de capital de impacto financian en tu rango." /><p className="p2">Elige un rango y revisa los fondos disponibles para tu empresa. Es gratis y toma dos minutos.</p></div></div>
    <Ranges />
    <p className="zero" style={{ marginTop: "22px" }}><b>USD 0</b> Ver tu reporte y completar tu Pasaporte de Inversión no tiene costo. Solo inviertes tu tiempo.</p>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Cómo funciona</span><Words as="h2" className="d3" text="Invertimos en las empresas que acompañamos. Acompañamos a las empresas en las que invertimos." /></div>
    <ol className="flow">
      <li><span className="dot"></span><span className="k">Originación</span><b className="h4">Empresas acompañadas por Redesign Lab</b><p>Empresas que Redesign Lab ha escalado, acompañado o preparado, y empresas referidas por nuestra red de fondos.</p></li>
      <li><span className="dot"></span><span className="k">Preparación</span><b className="h4">Bootcamp de Levantamiento de Capital</b><p>Ocho semanas de investment readiness aplicado, con nuestra metodología propietaria.</p></li>
      <li><span className="dot t"></span><span className="k">Ruta de capital</span>
        <div className="fork"><div><b className="h4">Red de +50 fondos de impacto</b><p>Presentación a fondos con tesis compatible, banca de desarrollo y cooperación.</p></div><div><b className="h4">Financiamiento de Fondo de Impacto</b><p>Capital de inversionistas privados para empresas con historial validado.</p></div></div>
      </li>
    </ol>
  </div></section>

  <section className="sec tint"><div className="wrap">
    <div className="head"><span className="eyebrow">Para empresas</span><Words as="h2" className="d2" text="Tres formas de llegar al capital que tu empresa necesita" /></div>
    <article className="feature dk ph-bg" style={{ backgroundImage: "linear-gradient(158deg,rgba(27,51,35,.92),rgba(7,13,9,.84)),url(/img/h16.jpg)" }}>
      <Ring size={1120} />
      <div className="stack" style={{ gap: "22px" }}>
        <div className="cta-row" style={{ gap: "10px" }}><span className="eyebrow">Programa central</span><span className="badge"><i />Cohorte noviembre 2026 · 15 cupos</span></div>
        <h3 className="d2" style={{ maxWidth: "14ch" }}>Bootcamp de Levantamiento de Capital</h3>
        <p className="lead" style={{ maxWidth: "46ch" }}>Ocho semanas trabajando sobre tu propia empresa, con un equipo que ya ha levantado capital. Al final, presentas ante fondos de impacto aliados.</p>
        <div className="cta-row"><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="lnk q" href="/bootcamp">Ver el programa</Link></div>
      </div>
      <ol className="mods">
        <li><span>01</span>Tesis de inversión y estructura de capital</li>
        <li><span>02</span>Modelo financiero, teaser y data room</li>
        <li><span>03</span>Pitch y comité simulado</li>
        <li><span>04</span>Sesión con fondos aliados</li>
      </ol>
    </article>
    <div className="side">
      <div className="rule"><span className="eyebrow s">Empieza aquí · USD 0</span><h3 className="d3">Pasaporte de Inversión</h3><p className="p2">Un solo perfil para llegar a más de 50 fondos de impacto. Completarlo cuesta USD 0: solo inviertes tiempo, y abre la puerta al capital que buscas.</p><Link className="lnk" href="/pasaporte#completar">Crear mi pasaporte</Link></div>
      <div className="rule"><span className="eyebrow s">Con historial de repago</span><h3 className="d3">Financiamiento directo</h3><p className="p2">Capital de trabajo del fondo para empresas con historial validado en el ecosistema de impacto.</p><a className="lnk" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">Ver si califico</a></div>
    </div>
  </div></section>

  <section className="sec" style={{ borderTop: 0, paddingTop: "clamp(56px,7vw,96px)" }}><div className="wrap">
    <div className="band dk">
      <Ring size={880} />
      <div className="band-in"><span className="eyebrow">Para inversionistas</span><Words as="h2" className="d3" text="Inversión paciente en empresas que conocemos desde adentro." /><div className="tags"><span className="tag">Sin dilución</span><span className="tag">Due diligence financiero y ESG</span><span className="tag">Reporte mensual</span></div></div>
      <Link className="btn btn-p" href="/inversionistas">Conocer la tesis</Link>
    </div>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Equipo</span><div className="stack" style={{ gap: "14px" }}><Words as="h2" className="d3" text="Estrategia, operación e inversión en un mismo equipo" /><Link className="lnk" href="/nosotros" style={{ justifySelf: "start" }}>Conocer al equipo</Link></div></div>
    <TeamMini />
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="head"><span className="eyebrow">Ecosistema</span><Words as="h2" className="d3" text="Instituciones con las que Redesign Lab ha trabajado en cinco años en el ecosistema de impacto" /></div>
    <div className="cols-4 allies">
      <div><h5>Cooperación internacional</h5><ul><li>BID</li><li>GIZ</li><li>Unión Europea</li><li>WWF</li><li>Conservation International</li><li>Green Climate Fund</li></ul></div>
      <div><h5>Academia</h5><ul><li>MIT</li><li>Singularity University</li><li>IMD</li><li>Tec de Monterrey</li><li>UAL</li><li>Wyss Academy</li></ul></div>
      <div><h5>Ecosistema de impacto</h5><ul><li>NESsT</li><li>ImpactAlpha</li><li>elea</li><li>Beneficial Returns</li><li>AIV</li><li>C-Minds / NaturaTech LAC</li></ul></div>
      <div><h5>Sector público</h5><ul><li>Ministerio del Ambiente</li><li>PromPerú</li><li>ProInnóvate</li><li>Sociedad Nacional de Industrias</li></ul></div>
    </div>
  </div></section>

  <section className="sec final dk ph-bg" style={{ backgroundImage: "linear-gradient(180deg,rgba(7,13,9,.86),rgba(13,27,17,.9)),url(/img/h03.jpg)" }}><Ring size={1400} /><div className="wrap">
    <span className="eyebrow">Inicio: lunes 2 de noviembre de 2026</span>
    <Words as="h2" className="d2" style={{ maxWidth: "18ch" }} text="¿Tu empresa está lista para levantar capital?" />
    <p className="lead" style={{ maxWidth: "52ch" }}>Postula a la próxima cohorte o empieza con tu Pasaporte de Inversión. Si prefieres, conversemos 30 minutos.</p>
    <div className="cta-row" style={{ justifyContent: "center" }}><Link className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</Link><Link className="btn btn-g" href="/pasaporte#completar">Crear mi pasaporte</Link></div>
  </div></section>

    </>
  );
}
