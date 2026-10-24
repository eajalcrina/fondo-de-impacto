"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";
import { Logo } from "./Logo";

const EMPRESAS = [
  { href: "/bootcamp", t: "Bootcamp de Levantamiento de Capital", d: "Ocho semanas para salir a levantar capital" },
  { href: "/pasaporte", t: "Pasaporte de Inversión", d: "Un perfil para llegar a más de 50 fondos" },
  { href: "/empresas", t: "Financiamiento directo", d: "Para empresas con historial de repago" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const emp = ["/empresas", "/bootcamp", "/pasaporte"].includes(path);
  const cal = path === "/inversionistas" ? SITE.calInversionistas : SITE.calEmpresas;
  return (
    <header className="nav">
      <div className="wrap">
        <Logo />
        <nav className="links" aria-label="Principal">
          <div className="dd">
            <button type="button" className={emp ? "on" : undefined} aria-haspopup="true">
              Empresas
              <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <div className="menu">
              {EMPRESAS.map((x) => (
                <Link key={x.href} href={x.href}><b>{x.t}</b><span>{x.d}</span></Link>
              ))}
            </div>
          </div>
          <Link href="/inversionistas" className={path === "/inversionistas" ? "on" : undefined}>Inversionistas</Link>
          <Link href="/nosotros" className={path === "/nosotros" ? "on" : undefined}>Nosotros</Link>
          <a className="btn btn-p btn-sm" href={cal} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_calendar", { location: "nav", calendario: path === "/inversionistas" ? "inversionistas" : "empresas" })}>Agendar reunión</a>
          <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen((o) => !o)}>
            <span className="sr">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <i /><i /><i />
          </button>
        </nav>
      </div>
      <div id="menu-movil" className="mmenu" hidden={!open}>
        <div className="wrap">
          <span className="k">Empresas</span>
          {EMPRESAS.map((x) => <Link key={x.href} href={x.href}>{x.t}</Link>)}
          <span className="k">Fondo</span>
          <Link href="/inversionistas">Inversionistas</Link>
          <Link href="/nosotros">Nosotros</Link>
        </div>
      </div>
    </header>
  );
}
