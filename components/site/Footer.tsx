import Link from "next/link";
import { SITE } from "@/lib/site";
import fuentes from "@/lib/fuentes.json";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo width={160} />
            <p className="sm" style={{ marginTop: 16, maxWidth: "30ch" }}>Capital de impacto para empresas de América Latina. Lima, Perú · Bogotá, Colombia.</p>
          </div>
          <div><b>Empresas</b><ul><li><Link href="/bootcamp">Bootcamp</Link></li><li><Link href="/pasaporte">Pasaporte de Inversión</Link></li><li><Link href="/empresas">Financiamiento directo</Link></li></ul></div>
          <div><b>Fondo</b><ul><li><Link href="/inversionistas">Inversionistas</Link></li><li><Link href="/nosotros">Nosotros</Link></li><li><Link href="/privacidad">Política de privacidad</Link></li></ul></div>
          <div><b>Contacto</b><ul><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li><li><a href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer">Agendar reunión</a></li></ul></div>
        </div>
        <div className="legal">
          <p>* Periodo 2021–2026. USD 1,5MM en capital de impacto, principalmente deuda, y USD 1,2MM en fondos no reembolsables, levantados para empresas acompañadas por Redesign Lab. Nuestra red: más de 50 fondos de impacto con los que tenemos contacto directo activo en los últimos 12 meses. Fuentes mapeadas: {fuentes.length} fuentes públicas de capital de impacto que monitoreamos en América Latina.</p>
          <p>Este sitio es informativo y no constituye una oferta pública de valores ni una invitación a captar fondos del público. Las oportunidades de inversión se presentan solo en conversaciones privadas, bajo acuerdo de confidencialidad. © {new Date().getFullYear()} Redesign Ventures SAC.</p>
        </div>
      </div>
    </footer>
  );
}
