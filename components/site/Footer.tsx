import Link from "next/link";
import { SITE } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import { Logo } from "./Logo";

const t = es.pie;

function Pin() {
  return (
    <svg viewBox="0 0 16 20" aria-hidden="true" focusable="false">
      <path d="M8 19s6-6.2 6-11A6 6 0 0 0 2 8c0 4.8 6 11 6 11z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2.2" fill="currentColor" />
    </svg>
  );
}

/** Pie mínimo: logo, países y volver arriba; enlaces y aviso legal debajo. */
export function Footer() {
  const enlaces = [
    { href: "/bootcamp", t: t.bootcamp },
    { href: "/pasaporte", t: t.pasaporte },
    { href: "/empresas", t: t.financiamiento },
    { href: "/inversionistas", t: es.nav.inversionistas },
    { href: "/portafolio", t: es.nav.portafolio },
    { href: "/nosotros", t: es.nav.nosotros },
  ];
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="pie-fila">
          <div className="pie-marca">
            <Logo tone="white" width={148} />
            <ul className="paises">{es.marca.paises.map((p) => <li key={p}><Pin />{p}</li>)}</ul>
          </div>
          <a className="arriba" href="#top">{t.arriba} <span aria-hidden="true">↑</span></a>
        </div>
        <div className="pie-fila pie-enlaces">
          <ul className="pie-menu">
            {enlaces.map((e) => <li key={e.href}><Link href={e.href}>{e.t}</Link></li>)}
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
          <div className="legal">
            <p>{t.legalOferta}</p>
            <p>{t.legalPrivado}</p>
            <p><Link href="/privacidad">{t.privacidad}</Link> {t.derechos(new Date().getFullYear())}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
