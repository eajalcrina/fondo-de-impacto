import Link from "next/link";
import { SITE } from "@/lib/site";
import { dic, ruta, type Lang } from "@/lib/i18n";
import { Logo } from "./Logo";


/** Marca de ubicación: un punto blanco con un anillo fino. */
function Punto() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <circle cx="6" cy="6" r="5.25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="6" cy="6" r="2" fill="currentColor" />
    </svg>
  );
}

/** Pie mínimo: logo, países y volver arriba; enlaces y aviso legal debajo. */
export function Footer({ lang = "es" }: { lang?: Lang }) {
  const d = dic(lang);
  const t = d.pie;
  const enlaces = [
    { href: ruta(lang, "/bootcamp"), t: t.bootcamp },
    { href: ruta(lang, "/pasaporte"), t: t.pasaporte },
    { href: ruta(lang, "/empresas"), t: t.financiamiento },
    { href: ruta(lang, "/inversionistas"), t: d.nav.inversionistas },
    { href: ruta(lang, "/portafolio"), t: d.nav.portafolio },
    { href: ruta(lang, "/nosotros"), t: d.nav.nosotros },
  ];
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="pie-fila">
          <div className="pie-marca">
            <Logo tone="white" lang={lang} />
            <ul className="paises">{d.marca.paises.map((p) => <li key={p}><Punto />{p}</li>)}</ul>
          </div>
          <a className="arriba" href="#top">{t.arriba} <span aria-hidden="true">↑</span></a>
        </div>
        <div className="pie-fila pie-enlaces">
          <ul className="pie-menu">
            {enlaces.map((e) => <li key={e.href}><Link href={e.href}>{e.t}</Link></li>)}
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
        <div className="pie-fila pie-legal">
          <div className="legal">
            <p>{t.legalOferta}</p>
            <p>{t.legalPrivado}</p>
            <p><Link href={ruta(lang, "/privacidad")}>{t.privacidad}</Link> {t.derechos(new Date().getFullYear())}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
