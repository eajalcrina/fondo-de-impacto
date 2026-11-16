import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Words } from "@/components/site/Words";
import { SITE, PORTAFOLIO } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import { TeamMini } from "@/components/site/Team";
import { Ranges } from "@/components/site/Ranges";
import { PhotoBelt } from "@/components/site/PhotoBelt";
import { Allies } from "@/components/site/Allies";
import { Anillos } from "@/components/site/Ring";
import { Pictograma } from "@/components/site/Pictograma";

const t = es.inicio;

export const metadata: Metadata = { description: t.meta };

/** Título con una palabra clave en color: [antes, clave, después]. */
function Clave({ partes }: { partes: string[] }) {
  return <>{partes[0]}<span className="kw">{partes[1]}</span>{partes[2]}</>;
}

export default function HomePage() {
  return (
    <>
      <section className="heroe">
        <div className="heroe-foto">
          <Image src="/img/n2.jpg" alt={t.heroe.foto} fill priority sizes="(min-width: 900px) 58vw, 100vw" style={{ objectPosition: "30% 60%" }} />
        </div>
        <div className="heroe-panel">
          <Anillos donde="abajo" />
          <span className="eyebrow">{t.heroe.rotulo}</span>
          <h1 className="d1"><Clave partes={t.heroe.titulo} /></h1>
          <p className="lead">{t.heroe.bajada}</p>
          <div className="cta-row">
            <Link className="btn btn-p" href="#rangos">{t.heroe.cta}</Link>
            <Link className="btn btn-g" href="/inversionistas">{t.heroe.inversionista}</Link>
          </div>
        </div>
      </section>
      <PhotoBelt />

      <section className="sec"><div className="wrap">
        <div className="stack" style={{ gap: 16, marginBottom: 48 }}>
          <span className="eyebrow">{t.trabajo.rotulo}</span>
          <h2 className="d2"><Clave partes={t.trabajo.titulo} /></h2>
        </div>
        <div className="tarjetas">
          {t.trabajo.tarjetas.map((c) => (
            <article key={c.titulo} className={`tarjeta ${c.clase}`}>
              <div className="tarjeta-foto"><div className="marco"><Image src={c.foto} alt={c.alt} fill sizes="(min-width: 900px) 33vw, 100vw" style={{ objectPosition: c.pos }} /></div></div>
              <div className="tarjeta-cuerpo">
                <span className="eyebrow">{c.rotulo}</span>
                <h3 className="d3">{c.titulo}</h3>
                <p>{c.texto}</p>
                <Link className="lnk" href={c.href}>{c.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </div></section>

      <section className="sec tint"><div className="wrap">
        <h2 className="d2" style={{ maxWidth: "20ch", marginBottom: 48 }}><Clave partes={t.cifras.titulo} /></h2>
        <div className="cifras">
          {t.cifras.items.map((c) => (
            <div key={c.texto} className="cifra-item">
              <Pictograma nombre={c.icono} />
              <span className="cifra">{c.mas && <span className="mas" aria-label="más de">+</span>}{c.valor}</span>
              <span>{c.texto}</span>
            </div>
          ))}
        </div>
      </div></section>

      <section className="sec" id="rangos"><div className="wrap">
        <div className="head">
          <span className="eyebrow">{t.rangos.rotulo}</span>
          <div className="stack" style={{ gap: 12 }}>
            <Words as="h2" className="d2" text={t.rangos.titulo} />
            <p className="p2">{t.rangos.texto}</p>
          </div>
        </div>
        <Ranges />
      </div></section>

      <section className="sec arena"><div className="wrap por-que">
        <div className="stack" style={{ gap: 22 }}>
          <span className="eyebrow">{t.porQue.rotulo}</span>
          <h2 className="d2"><Clave partes={t.porQue.titulo} /></h2>
          <p className="p2">{t.porQue.texto}</p>
        </div>
        <div className="foto-anillo"><div className="marco"><Image src="/img/h09.jpg" alt={t.porQue.foto} fill sizes="(min-width: 900px) 55vw, 100vw" style={{ objectPosition: "50% 42%" }} /></div></div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head"><span className="eyebrow">{t.proceso.rotulo}</span><Words as="h2" className="d2" text={t.proceso.titulo} /></div>
        <ol className="flow">
          {t.proceso.etapas.map((e) => (
            <li key={e.k}><span className="dot" /><span className="k">{e.k}</span><b className="h4">{e.t}</b><p>{e.d}</p></li>
          ))}
          <li><span className="dot t" /><span className="k">{t.proceso.ruta.k}</span>
            <div className="fork">
              <div><b className="h4">{t.proceso.ruta.a.t}</b><p>{t.proceso.ruta.a.d}</p></div>
              <div><b className="h4">{t.proceso.ruta.b.t}</b><p>{t.proceso.ruta.b.d}</p></div>
            </div>
          </li>
        </ol>
      </div></section>

      <section className="sec arena"><div className="wrap">
        <div className="cta-row" style={{ justifyContent: "space-between", alignItems: "end", marginBottom: 40 }}>
          <div className="stack" style={{ gap: 16 }}>
            <span className="eyebrow">{t.portafolio.rotulo}</span>
            <h2 className="d2"><Clave partes={t.portafolio.titulo} /></h2>
          </div>
          <Link className="lnk" href="/portafolio">{t.portafolio.cta}</Link>
        </div>
        <div className="portafolio">
          {PORTAFOLIO.map((p) => (
            <article key={p.nombre} className="empresa"><h3>{p.nombre}</h3><p>{p.que}</p><span>{p.sector}</span></article>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head"><span className="eyebrow">{t.equipo.rotulo}</span><div className="stack" style={{ gap: 14 }}><Words as="h2" className="d2" text={t.equipo.titulo} /><Link className="lnk" href="/nosotros" style={{ justifySelf: "start" }}>{t.equipo.cta}</Link></div></div>
        <TeamMini />
      </div></section>

      <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="head"><span className="eyebrow">{t.organizaciones.rotulo}</span><Words as="h2" className="d2" text={t.organizaciones.titulo} /></div>
        <Allies />
      </div></section>

      <section className="cierre"><div className="wrap">
        <div className="stack" style={{ gap: 20 }}>
          <span className="eyebrow">{t.cierre.rotuloPrefijo}{SITE.cohorte.inicio.toLowerCase()}</span>
          <h2 className="d2">{t.cierre.titulo}</h2>
        </div>
        <div className="cta-row"><Link className="btn" href="/bootcamp#postular">{t.cierre.cta}</Link></div>
      </div></section>
    </>
  );
}
