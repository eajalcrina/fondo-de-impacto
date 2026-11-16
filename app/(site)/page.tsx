import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, PORTAFOLIO } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import { Ranges } from "@/components/site/Ranges";
import { PhotoBelt } from "@/components/site/PhotoBelt";
import { Allies } from "@/components/site/Allies";
import { Anillos } from "@/components/site/Ring";
import { Cifras } from "@/components/site/Cifras";
import { Clave } from "@/components/site/Clave";

const t = es.inicio;

export const metadata: Metadata = { description: t.meta };

export default function HomePage() {
  const nodos = t.proceso.nodos;
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

      <section className="sec tint"><div className="wrap">
        <div className="titular"><span className="eyebrow">{t.cifras.rotulo}</span></div>
        <Cifras items={t.cifras.items} />
        <p className="nota-cifras">{t.cifras.nota}</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="titular">
          <span className="eyebrow">{t.trabajo.rotulo}</span>
          <h2 className="d2"><Clave partes={t.trabajo.titulo} /></h2>
        </div>
        <div className="tarjetas">
          {t.trabajo.tarjetas.map((c) => (
            <article key={c.titulo} className={`tarjeta ${c.clase}`}>
              <div className="tarjeta-foto"><div className="marco"><Image src={c.foto} alt={c.alt} fill sizes="(min-width: 900px) 33vw, 100vw" style={{ objectPosition: c.pos }} /></div></div>
              <div className="tarjeta-cuerpo">
                {c.clase === "" && <Anillos donde="abajo" />}
                <span className="eyebrow">{c.rotulo}</span>
                <h3 className="d3">{c.titulo}</h3>
                <p>{c.texto}</p>
                <Link className="lnk" href={c.href}>{c.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </div></section>

      <section className="sec arena" id="rangos"><div className="wrap">
        <div className="titular">
          <span className="eyebrow">{t.rangos.rotulo}</span>
          <h2 className="d2">{t.rangos.titulo}</h2>
          <p className="p2">{t.rangos.texto}</p>
        </div>
        <Ranges />
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="por-que">
          <div className="titular sin-margen">
            <span className="eyebrow">{t.porQue.rotulo}</span>
            <h2 className="d2"><Clave partes={t.porQue.titulo} /></h2>
            <p className="p2">{t.porQue.texto}</p>
          </div>
          <div className="foto-anillo"><div className="marco"><Image src="/img/h09.jpg" alt={t.porQue.foto} fill sizes="(min-width: 900px) 55vw, 100vw" style={{ objectPosition: "50% 42%" }} /></div></div>
        </div>
        <div className="ruta" role="img" aria-label={`${t.proceso.etiqueta}: ${nodos.join(", ")}`}>
          <div className="ruta-nodo"><i />{nodos[0]}</div>
          <span className="ruta-linea" />
          <div className="ruta-nodo prep"><i />{nodos[1]}</div>
          <span className="ruta-linea" />
          <div className="ruta-destinos">
            <div className="ruta-nodo red"><i />{nodos[2]}</div>
            <div className="ruta-nodo fondo"><i />{nodos[3]}</div>
          </div>
        </div>
      </div></section>

      <section className="sec arena"><div className="wrap">
        <div className="titular con-accion">
          <div className="titular sin-margen">
            <span className="eyebrow">{t.portafolio.rotulo}</span>
            <h2 className="d2"><Clave partes={t.portafolio.titulo} /></h2>
            <p className="p2">{t.portafolio.bajada}</p>
          </div>
          <Link className="lnk" href="/portafolio">{t.portafolio.cta}</Link>
        </div>
        <div className="portafolio">
          {PORTAFOLIO.map((p) => (
            <article key={p.nombre} className="empresa"><h3>{p.nombre}</h3><p>{p.que}</p></article>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="titular">
          <span className="eyebrow">{t.organizaciones.rotulo}</span>
          <h2 className="d2">{t.organizaciones.titulo}</h2>
        </div>
        <Allies />
      </div></section>

      <section className="cierre"><div className="wrap">
        <div className="titular sin-margen">
          <span className="eyebrow">{t.cierre.rotuloPrefijo}{SITE.cohorte.inicio.toLowerCase()}</span>
          <h2 className="d2">{t.cierre.titulo}</h2>
        </div>
        <div className="cta-row">
          <Link className="btn" href="/bootcamp#postular">{t.cierre.cta}</Link>
          <Link className="lnk" href="/inversionistas">{t.cierre.inversionista}</Link>
        </div>
      </div></section>
    </>
  );
}
