"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { es } from "@/lib/i18n/es";
import { track } from "@/lib/analytics";
import { Logo } from "./Logo";

const t = es.nav;

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const emp = ["/empresas", "/bootcamp", "/pasaporte"].includes(path);
  const inv = path === "/inversionistas";
  const cal = inv ? SITE.calInversionistas : SITE.calEmpresas;
  const agendar = (lugar: string) => track("cta_calendar", { location: lugar, calendario: inv ? "inversionistas" : "empresas" });
  const on = (href: string) => (path === href ? "on" : undefined);
  return (
    <header className="nav">
      <div className="wrap">
        <Logo />
        <nav className="links" aria-label={t.principal}>
          <div className="dd">
            <button type="button" className={emp ? "on" : undefined} aria-haspopup="true">
              {t.empresas}
              <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <div className="menu">
              {t.soluciones.map((x) => (
                <Link key={x.href} href={x.href}><b>{x.t}</b><span>{x.d}</span></Link>
              ))}
            </div>
          </div>
          <Link href="/inversionistas" className={on("/inversionistas")}>{t.inversionistas}</Link>
          <Link href="/portafolio" className={on("/portafolio")}>{t.portafolio}</Link>
          <Link href="/nosotros" className={on("/nosotros")}>{t.nosotros}</Link>
          <span className="idioma" role="group" aria-label={t.idioma}>
            <b lang="es">ES</b><span aria-hidden="true">/</span><span className="pronto" lang="en" title={t.enPronto}>EN</span>
          </span>
          <a className="btn btn-p btn-sm" href={cal} target="_blank" rel="noopener noreferrer" onClick={() => agendar("nav")}>{t.agendar}</a>
          <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen((o) => !o)}>
            <span className="sr">{open ? t.cerrar : t.abrir}</span>
            <i /><i /><i />
          </button>
        </nav>
      </div>
      <div id="menu-movil" className="mmenu" hidden={!open}>
        <div className="wrap">
          <span className="k">{t.empresas}</span>
          {t.soluciones.map((x) => <Link key={x.href} href={x.href}>{x.t}</Link>)}
          <span className="k">{t.fondo}</span>
          <Link href="/inversionistas">{t.inversionistas}</Link>
          <Link href="/portafolio">{t.portafolio}</Link>
          <Link href="/nosotros">{t.nosotros}</Link>
          <span className="idioma" role="group" aria-label={t.idioma}>
            <b lang="es">ES</b><span aria-hidden="true">/</span><span className="pronto" lang="en" title={t.enPronto}>EN</span>
          </span>
          <a className="btn btn-p" href={cal} target="_blank" rel="noopener noreferrer" onClick={() => agendar("menu_movil")}>{t.agendar}</a>
        </div>
      </div>
    </header>
  );
}
