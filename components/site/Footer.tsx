import Link from "next/link";
import { SITE } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import { Logo } from "./Logo";

const t = es.pie;

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo width={156} />
            <p className="sm" style={{ marginTop: 16, maxWidth: "30ch" }}>{es.marca.sede}</p>
          </div>
          <div><b>{t.empresas}</b><ul><li><Link href="/bootcamp">{t.bootcamp}</Link></li><li><Link href="/pasaporte">{t.pasaporte}</Link></li><li><Link href="/empresas">{t.financiamiento}</Link></li></ul></div>
          <div><b>{t.fondo}</b><ul><li><Link href="/inversionistas">{es.nav.inversionistas}</Link></li><li><Link href="/portafolio">{es.nav.portafolio}</Link></li><li><Link href="/nosotros">{es.nav.nosotros}</Link></li><li><Link href="/privacidad">{t.privacidad}</Link></li></ul></div>
          <div><b>{t.contacto}</b><ul><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li><li><a href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">{es.nav.agendar}</a></li></ul></div>
        </div>
        <div className="legal">
          <p>{t.legalOferta} {t.derechos(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
