import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Cifras } from "@/components/site/Cifras";
import { Clave } from "@/components/site/Clave";
import { SITE, PORTAFOLIO } from "@/lib/site";
import { dic, ruta, type Lang } from "@/lib/i18n";

/** Portafolio. */
export function Portafolio({ lang }: { lang: Lang }) {
  const t = dic(lang).portafolio;
  const q = (p: (typeof PORTAFOLIO)[number]) => (lang === "en" ? p.queEn : p.que);
  return (
    <div className="portada oscuro interior">
      <Hero slides={[{ src: "/img/h03.jpg", cap: t.heroe.foto }]}>
        <span className="eyebrow">{t.heroe.rotulo}</span>
        <h1 className="d1"><Clave partes={t.heroe.titulo} /></h1>
        <p className="lead">{t.heroe.bajada}</p>
        <div className="cta-row"><Link className="btn btn-p" href={ruta(lang, "/inversionistas")}>{t.heroe.cta}</Link></div>
      </Hero>

      <section className="seccion"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">{t.tesis.titulo}</h2>
          <p className="seccion-texto">{t.tesis.texto}</p>
        </div>
        <Cifras items={t.cifras} lang={lang} />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.empresas.titulo}</h2>
        <div className="portafolio">
          {PORTAFOLIO.map((p) => (
            <article key={p.nombre} className="ficha">
              <div className="ficha-foto"><Image src={p.foto} alt={`${p.nombre}, ${q(p).toLowerCase()}`} fill sizes="(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw" /></div>
              <div className="ficha-cuerpo"><h3>{p.nombre}</h3><p>{q(p)}</p></div>
            </article>
          ))}
        </div>
      </div></section>

      <section className="sec final"><div className="wrap">
        <h2 className="d2">{t.cierre.titulo}</h2>
        <p className="lead">{t.cierre.texto}</p>
        <div className="cta-row"><a className="btn btn-p" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">{t.cierre.cta}</a></div>
      </div></section>
    </div>
  );
}
