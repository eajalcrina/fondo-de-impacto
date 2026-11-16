import Link from "next/link";
import { SITE } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import fuentes from "@/lib/fuentes.json";
import { Logo } from "./Logo";
import { Anillos } from "./Ring";

const t = es.pie;

export function Footer() {
  return (
    <footer className="foot">
      <Anillos donde="abajo" />
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo width={156} />
            <p className="sm" style={{ marginTop: 16, maxWidth: "30ch" }}>{es.marca.sede}</p>
          </div>
          <div><b>{t.empresas}</b><ul><li><Link href="/bootcamp">{t.bootcamp}</Link></li><li><Link href="/pasaporte">{t.pasaporte}</Link></li><li><Link href="/empresas">{t.financiamiento}</Link></li></ul></div>
          <div><b>{t.fondo}</b><ul><li><Link href="/inversionistas">{es.nav.inversionistas}</Link></li><li><Link href="/portafolio">{es.nav.portafolio}</Link></li><li><Link href="/nosotros">{es.nav.nosotros}</Link></li><li><Link href="/privacidad">{t.privacidad}</Link></li></ul></div>
          <div><b>{t.contacto}</b><ul><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li><li><a href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">{es.nav.agendar}</a></li><li>{t.idiomas}</li></ul></div>
        </div>
        <div className="legal">
          <p>* Periodo 2021 a 2026. USD&nbsp;1.5&nbsp;MM en capital de impacto, principalmente deuda, y USD&nbsp;1.2&nbsp;MM en fondos no reembolsables, levantados para empresas acompañadas por Redesign Lab. Nuestra red: más de 50 fondos de impacto con los que tenemos contacto directo activo en los últimos 12 meses. Fuentes mapeadas: {fuentes.length} fuentes públicas de capital de impacto que monitoreamos en América Latina.</p>
          <p>Este sitio es informativo y no constituye una oferta pública de valores ni una invitación a captar fondos del público. Las oportunidades de inversión se presentan solo en conversaciones privadas, bajo acuerdo de confidencialidad. © {new Date().getFullYear()} Redesign Ventures SAC.</p>
        </div>
      </div>
    </footer>
  );
}
