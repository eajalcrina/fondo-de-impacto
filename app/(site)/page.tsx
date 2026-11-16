import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, PORTAFOLIO } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import { Ranges } from "@/components/site/Ranges";
import { Allies } from "@/components/site/Allies";
import { Cifras } from "@/components/site/Cifras";
import { Bloque } from "@/components/site/Bloque";

const t = es.inicio;

export const metadata: Metadata = { description: t.meta };

export default function HomePage() {
  const [p1, p2, ...resto] = PORTAFOLIO;
  return (
    <div className="portada oscuro">
      <section className="portada-heroe">
        <Image src="/img/n2.jpg" alt={t.heroe.foto} fill priority sizes="100vw" style={{ objectPosition: "35% 60%" }} />
        <div className="wrap portada-heroe-texto">
          <span className="eyebrow">{t.heroe.rotulo}</span>
          <h1 className="d1">{t.heroe.titulo}</h1>
          <p className="lead">{t.heroe.bajada}</p>
          <div className="cta-row">
            <Link className="btn btn-p" href="#capital">{t.heroe.cta}</Link>
            <Link className="btn btn-g" href="/inversionistas">{t.heroe.inversionista}</Link>
          </div>
        </div>
        <a className="bajar" href="#empresas" aria-label={t.heroe.bajar}>
          <svg viewBox="0 0 14 20" aria-hidden="true"><path d="M7 1v17M1 12l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
        </a>
      </section>

      <section className="seccion" id="empresas"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.empresas.titulo}</h2>
        <div className="bloques">
          <Bloque ancho={8} href={t.empresas.bootcamp.href} titulo={t.empresas.bootcamp.t} foto={t.empresas.bootcamp.foto} alt={t.empresas.bootcamp.alt} />
          <div className="cita c4">
            <p className="cita-rotulo">{t.empresas.cohorte.rotulo}</p>
            <p className="cita-fecha">{SITE.cohorte.inicio}</p>
            <p className="cita-texto">{t.empresas.cohorte.titulo}</p>
            <Link className="btn btn-b" href="/bootcamp#postular">{t.empresas.cohorte.cta}</Link>
          </div>
          {t.empresas.bloques.map((b) => <Bloque key={b.href} href={b.href} titulo={b.t} foto={b.foto} alt={b.alt} />)}
        </div>
      </div></section>

      <section className="seccion" id="capital"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">{t.capital.titulo}</h2>
          <p className="seccion-texto">{t.capital.texto}</p>
        </div>
        <Ranges />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.cifras.titulo}</h2>
        <Cifras items={t.cifras.items} />
      </div></section>

      <section className="seccion"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.inversionistas.titulo}</h2>
        <div className="bloques">
          <Bloque ancho={8} href={t.inversionistas.bloque.href} titulo={t.inversionistas.bloque.t} foto={t.inversionistas.bloque.foto} alt={t.inversionistas.bloque.alt} />
          <div className="cita c4">
            <p className="cita-texto">«{t.inversionistas.cita}»</p>
            <p className="cita-firma">{t.inversionistas.firma}</p>
            <Link className="btn btn-b" href="/inversionistas">{t.inversionistas.cta}</Link>
          </div>
        </div>
      </div></section>

      <section className="seccion"><div className="wrap">
        <div className="seccion-cabeza">
          <h2 className="d2 seccion-titulo">{t.portafolio.titulo}</h2>
          <Link className="lnk" href="/portafolio">{t.portafolio.cta}</Link>
        </div>
        <div className="bloques">
          <Bloque ancho={8} href="/portafolio" titulo={p1.nombre} sub={p1.que} foto={p1.foto} alt={`${p1.nombre}, ${p1.que.toLowerCase()}`} />
          <Bloque href="/portafolio" titulo={p2.nombre} sub={p2.que} foto={p2.foto} alt={`${p2.nombre}, ${p2.que.toLowerCase()}`} />
          {resto.map((p) => <Bloque key={p.nombre} href="/portafolio" titulo={p.nombre} sub={p.que} foto={p.foto} alt={`${p.nombre}, ${p.que.toLowerCase()}`} />)}
        </div>
      </div></section>

      <section className="seccion claro"><div className="wrap">
        <h2 className="d2 seccion-titulo">{t.organizaciones.titulo}</h2>
        <Allies />
      </div></section>
    </div>
  );
}
