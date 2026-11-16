import Link from "next/link";
import { SITE } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import { Logo } from "./Logo";

const t = es.pie;

/** Pin en forma de aguja: un círculo y un palito. */
function Pin() {
  return (
    <svg viewBox="0 0 8 16" aria-hidden="true" focusable="false">
      <circle cx="4" cy="4" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 7.2V15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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
