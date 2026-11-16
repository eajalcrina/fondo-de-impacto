import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Cifras } from "@/components/site/Cifras";
import { Clave } from "@/components/site/Clave";
import { SITE, PORTAFOLIO } from "@/lib/site";
import { es } from "@/lib/i18n/es";

const t = es.portafolio;

export const metadata: Metadata = { title: "Portafolio", description: t.meta, alternates: { canonical: "/portafolio" } };

export default function PortafolioPage() {
  return (
    <>
      <Hero slides={[{ src: "/img/h03.jpg", cap: t.heroe.foto }]}>
        <span className="eyebrow">{t.heroe.rotulo}</span>
        <h1 className="d1"><Clave partes={t.heroe.titulo} /></h1>
        <p className="lead">{t.heroe.bajada}</p>
        <div className="cta-row"><Link className="btn btn-p" href="/inversionistas">{t.heroe.cta}</Link></div>
      </Hero>

      <section className="sec"><div className="wrap">
        <div className="titular">
          <span className="eyebrow">{t.tesis.rotulo}</span>
          <h2 className="d2"><Clave partes={t.tesis.titulo} /></h2>
          <p className="p2">{t.tesis.texto}</p>
        </div>
        <Cifras items={t.cifras} />
      </div></section>

      <section className="sec arena"><div className="wrap">
        <div className="titular">
          <span className="eyebrow">{t.empresas.rotulo}</span>
          <h2 className="d2">{t.empresas.titulo}</h2>
        </div>
        <div className="portafolio">
          {PORTAFOLIO.map((p) => (
            <article key={p.nombre} className="empresa"><h3>{p.nombre}</h3><p>{p.que}</p></article>
          ))}
        </div>
      </div></section>

      <section className="sec final dk">
        <div className="wrap">
          <div className="titular sin-margen">
            <h2 className="d2">{t.cierre.titulo}</h2>
            <p className="lead">{t.cierre.texto}</p>
          </div>
          <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">{t.cierre.cta}</a></div>
        </div>
      </section>
    </>
  );
}
