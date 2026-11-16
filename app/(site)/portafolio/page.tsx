import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Pictograma } from "@/components/site/Pictograma";
import { Anillos } from "@/components/site/Ring";
import { SITE, PORTAFOLIO } from "@/lib/site";
import { es } from "@/lib/i18n/es";

const t = es.portafolio;

export const metadata: Metadata = { title: "Portafolio", description: t.meta, alternates: { canonical: "/portafolio" } };

export default function PortafolioPage() {
  const [a, clave, b] = t.heroe.titulo;
  return (
    <>
      <Hero slides={[{ src: "/img/h04.jpg", cap: t.heroe.foto }]}>
        <span className="eyebrow">{t.heroe.rotulo}</span>
        <h1 className="d1">{a}<span className="kw">{clave}</span>{b}</h1>
        <p className="lead">{t.heroe.bajada}</p>
        <div className="cta-row"><Link className="btn btn-p" href="/inversionistas">{t.heroe.cta}</Link></div>
      </Hero>

      <section className="sec tint"><div className="wrap">
        <div className="cifras">
          {t.cifras.map((c) => (
            <div key={c.texto} className="cifra-item">
              <Pictograma nombre={c.icono} />
              <span className="cifra">{c.mas && <span className="mas" aria-label="más de">+</span>}{c.valor}</span>
              <span>{c.texto}</span>
            </div>
          ))}
        </div>
      </div></section>

      <section className="sec arena"><div className="wrap">
        <div className="head"><span className="eyebrow">{t.empresas.rotulo}</span><h2 className="d2">{t.empresas.titulo}</h2></div>
        <div className="portafolio">
          {PORTAFOLIO.map((p) => (
            <article key={p.nombre} className="empresa"><h3>{p.nombre}</h3><p>{p.que}</p><span>{p.sector}</span></article>
          ))}
        </div>
      </div></section>

      <section className="sec final dk">
        <Anillos donde="centro" />
        <div className="wrap">
          <h2 className="d2" style={{ maxWidth: "18ch" }}>{t.cierre.titulo}</h2>
          <p className="lead" style={{ maxWidth: "56ch" }}>{t.cierre.texto}</p>
          <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">{t.cierre.cta}</a></div>
        </div>
      </section>
    </>
  );
}
