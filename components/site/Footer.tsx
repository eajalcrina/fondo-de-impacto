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

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo width={156} />
            <ul className="paises">{es.marca.paises.map((p) => <li key={p}><Pin />{p}</li>)}</ul>
          </div>
          <div><b>{t.empresas}</b><ul><li><Link href="/bootcamp">{t.bootcamp}</Link></li><li><Link href="/pasaporte">{t.pasaporte}</Link></li><li><Link href="/empresas">{t.financiamiento}</Link></li></ul></div>
          <div><b>{t.fondo}</b><ul><li><Link href="/inversionistas">{es.nav.inversionistas}</Link></li><li><Link href="/portafolio">{es.nav.portafolio}</Link></li><li><Link href="/nosotros">{es.nav.nosotros}</Link></li><li><Link href="/privacidad">{t.privacidad}</Link></li></ul></div>
          <div><b>{t.contacto}</b><ul><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li><li><a href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">{es.nav.agendar}</a></li></ul></div>
        </div>
        <div className="legal">
          <p>{t.legalOferta}</p>
          <p>{t.legalPrivado} {t.derechos(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
