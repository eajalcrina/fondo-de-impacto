"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { dic, langDe, ruta, rutaPar } from "@/lib/i18n";
import { track } from "@/lib/analytics";
import { Logo } from "./Logo";

/** Entradas del menú con la foto que se muestra al pasar el cursor. */
function entradas(lang: "es" | "en") {
  const t = dic(lang).nav;
  return [
    { href: ruta(lang, "/empresas"), t: t.empresas, foto: "/img/rl/feria.jpg", hijos: t.soluciones },
    { href: ruta(lang, "/inversionistas"), t: t.inversionistas, foto: "/img/rl/cacao-manos.jpg" },
    { href: ruta(lang, "/portafolio"), t: t.portafolio, foto: "/img/rl/cotton-nation.jpg" },
    { href: ruta(lang, "/nosotros"), t: t.nosotros, foto: "/img/rl/productor.jpg" },
  ];
}

/** Selector de idioma: enlaza a la misma página en el otro idioma. */
function Idioma({ lang, path, etiqueta }: { lang: "es" | "en"; path: string; etiqueta: string }) {
  const par = rutaPar(path);
  return (
    <span className="idioma" role="group" aria-label={etiqueta}>
      {lang === "es" ? <b lang="es" aria-current="true">ES</b> : <Link href={par.es} lang="es" hrefLang="es">ES</Link>}
      <span aria-hidden="true">/</span>
      {lang === "en" ? <b lang="en" aria-current="true">EN</b> : <Link href={par.en} lang="en" hrefLang="en">EN</Link>}
    </span>
  );
}

export function Nav() {
  const path = usePathname() ?? "/";
  const lang = langDe(path);
  const t = dic(lang).nav;
  const ENTRADAS = entradas(lang);
  const [abierto, setAbierto] = useState(false);
  const [oculto, setOculto] = useState(false);
  const [foto, setFoto] = useState(ENTRADAS[0].foto);
  const ultimo = useRef(0);
  const cerrar = useRef<HTMLButtonElement>(null);

  useEffect(() => setAbierto(false), [path]);
  /* Atributo de idioma del documento al cambiar de página dentro del sitio */
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  /* Se oculta al bajar y vuelve al subir */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOculto(y > 120 && y > ultimo.current);
      ultimo.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Escape cierra el menú y el foco va al botón de cerrar al abrir */
  useEffect(() => {
    if (!abierto) return;
    cerrar.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [abierto]);

  const inv = path === "/inversionistas" || path === "/en/investors";
  const cal = inv ? SITE.calInversionistas : SITE.calEmpresas;
  const agendar = (lugar: string) => track("cta_calendar", { location: lugar, calendario: inv ? "inversionistas" : "empresas" });
  const clase = ["nav", "claro", oculto && !abierto ? "oculto" : ""].filter(Boolean).join(" ");

  return (
    <>
      <header className={clase}>
        <div className="wrap">
          <Logo tone="dark" lang={lang} />
          <div className="acciones">
            <Idioma lang={lang} path={path} etiqueta={t.idioma} />
            <a className="btn btn-sm btn-p" href={cal} target="_blank" rel="noopener noreferrer" onClick={() => agendar("nav")}>{t.agendar}</a>
            <button type="button" className="icono" aria-expanded={abierto} aria-controls="menu-principal" onClick={() => setAbierto(true)}>
              <span className="sr">{t.abrir}</span>
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`velo-menu${abierto ? " abierto" : ""}`} onClick={() => setAbierto(false)} aria-hidden="true" />
      <div id="menu-principal" className={`panel-menu${abierto ? " abierto" : ""}`} role="dialog" aria-modal="true" aria-label={t.principal} aria-hidden={!abierto}>
        <div className="panel-foto">
          <Image key={foto} src={foto} alt="" fill sizes="50vw" />
        </div>
        <div className="panel-cuerpo">
          <button ref={cerrar} type="button" className="panel-cerrar" onClick={() => setAbierto(false)}>
            <span className="sr">{t.cerrar}</span>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" /></svg>
          </button>
          <nav className="panel-listas" aria-label={t.principal}>
            <span className="panel-titulo">{t.menu}</span>
            <ul className="menu-n1">
              {ENTRADAS.map((e) => (
                <li key={e.href} onMouseEnter={() => setFoto(e.foto)}>
                  <Link href={e.href} onFocus={() => setFoto(e.foto)}>{e.t}</Link>
                  {e.hijos && (
                    <ul className="menu-n2">
                      {e.hijos.map((h) => <li key={h.href}><Link href={h.href}>{h.t}</Link></li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="panel-pie">
            <a className="btn btn-p" href={cal} target="_blank" rel="noopener noreferrer" onClick={() => agendar("menu")}>{t.agendar}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Idioma lang={lang} path={path} etiqueta={t.idioma} />
          </div>
        </div>
      </div>
    </>
  );
}
