"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import fuentes from "@/lib/fuentes.json";
import { catalogo, etiqueta, TIPOS_LABEL } from "@/lib/catalogo";
import { report, TIPOS, type Fuente, type Query } from "@/lib/matching";
import { SITE } from "@/lib/site";
import { langDe, ruta } from "@/lib/i18n";
import { sendLead } from "./LeadForm";
import { track } from "@/lib/analytics";

const F = fuentes as Fuente[];
const EJEMPLO: Query = { rubro: "alimentos_bebidas", pais: "PE", tipo: "de", rango: 1 };

const TX = {
  es: {
    empresa: "Tu empresa", razon: "Razón social", rubro: "Rubro", pais: "País", tipo: "Tipo de capital que buscas", capital: "Capital que buscas",
    contacto: "Tus datos de contacto", nombre: "Nombre completo", correo: "Correo", celular: "Celular", web: "Sitio web",
    acepto: "Acepto la", politica: "política de privacidad", contacte: "y que Fondo de Impacto me contacte sobre oportunidades de financiamiento.",
    enviar: "Ver cuántos fondos calzan conmigo", ejemplo: "Ejemplo de reporte preliminar", reporte: "Reporte preliminar",
    compatibles: "fuentes de capital de impacto compatibles con tu perfil", activas: "con postulación abierta: convocatoria vigente o ventanilla permanente",
    sinTicket: (n: number) => `${n} de estas fuentes no publican su ticket y las revisamos caso por caso. `,
    revisamos: "Los nombres y las condiciones los revisamos contigo.",
    ok: ` Te enviamos una copia de este reporte por correo y te escribimos ${SITE.respuesta}.`,
    err: (e: string) => ` No pudimos enviarte la copia por correo (${e}).`,
    cohorte: SITE.cohorte.nombre,
    prepara: "Prepara tu perfil de inversión en el Bootcamp.", preparaX: `Ocho semanas para tu tesis, tu modelo financiero, tu teaser y tu pitch. Inicio: ${SITE.cohorte.inicio.toLowerCase()}.`,
    postular: "Postular al Bootcamp", conversar: "¿Prefieres conversar?", conversarX: "Agenda 30 minutos con el equipo.", agendar: "Agendar una reunión",
  },
  en: {
    empresa: "Your company", razon: "Company name", rubro: "Sector", pais: "Country", tipo: "Type of capital you are looking for", capital: "Capital you are looking for",
    contacto: "Your contact details", nombre: "Full name", correo: "Email", celular: "Mobile", web: "Website",
    acepto: "I accept the", politica: "privacy policy", contacte: "and agree that Fondo de Impacto may contact me about financing opportunities.",
    enviar: "See how many funds match", ejemplo: "Sample preliminary report", reporte: "Preliminary report",
    compatibles: "impact capital sources that match your profile", activas: "open for applications: open call or rolling applications",
    sinTicket: (n: number) => `${n} of these sources do not publish their ticket size and we review them case by case. `,
    revisamos: "We go over names and terms with you.",
    ok: " We sent you a copy of this report by email and will write to you within 24 hours.",
    err: (e: string) => ` We could not email you a copy (${e}).`,
    cohorte: SITE.cohorteEn.nombre,
    prepara: "Build your investment profile in the Bootcamp.", preparaX: `Eight weeks for your thesis, financial model, teaser and pitch. Starts ${SITE.cohorteEn.inicio}.`,
    postular: "Apply to the Bootcamp", conversar: "Prefer to talk?", conversarX: "Book 30 minutes with the team.", agendar: "Book a meeting",
  },
};

type Datos = { razon_social: string; nombre: string; correo: string; celular: string } & Record<string, string>;

/** Buscador de fondos: reporte preliminar en pantalla y copia por correo. */
export function Finder() {
  const lang = langDe(usePathname());
  const tx = TX[lang];
  const { RUBROS, PAISES, TIPOS_OPC, RANGOS_OPC } = catalogo(lang);
  const [rango, setRango] = useState("1");
  const [q, setQ] = useState<Query>(EJEMPLO);
  const [datos, setDatos] = useState<Datos | null>(null);
  const [envio, setEnvio] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("rango");
    if (r && RANGOS_OPC.some(([v]) => v === r)) setRango(r);
  }, [RANGOS_OPC]);

  const r = useMemo(() => report(F, q), [q]);
  const max = Math.max(1, r.total);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const d = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, String(v)])) as Datos;
    d.consentimiento = fd.get("consentimiento") ? "si" : "";
    d.origen = window.location.pathname;
    d.idioma = lang;
    const nq: Query = { rubro: d.rubro, pais: d.pais, tipo: d.tipo, rango: Number(d.rango) };
    setQ(nq);
    setDatos(d);
    track("finder_report", { rubro: d.rubro, pais: d.pais, tipo: d.tipo, rango: d.rango });
    setEnvio("sending");
    document.getElementById("reporte")?.scrollIntoView({ behavior: "smooth", block: "start" });
    const res = await sendLead("buscador", d, lang);
    setEnvio(res.ok ? "ok" : "err");
    setError(res.error ?? "");
  }

  const ejemplo = !datos;
  return (
    <div className="finder">
      <form className="fform" onSubmit={onSubmit}>
        <span className="sep primero">{tx.empresa}</span>
        <label htmlFor="f-rs">{tx.razon}<input id="f-rs" name="razon_social" required autoComplete="organization" /></label>
        <div className="frow">
          <label htmlFor="f-rubro">{tx.rubro}<select id="f-rubro" name="rubro" defaultValue="alimentos_bebidas">{RUBROS.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
          <label htmlFor="f-pais">{tx.pais}<select id="f-pais" name="pais" defaultValue="PE">{PAISES.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
        </div>
        <div className="frow">
          <label htmlFor="f-tipo">{tx.tipo}<select id="f-tipo" name="tipo" defaultValue="*">{TIPOS_OPC.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
          <label htmlFor="f-rango">{tx.capital}<select id="f-rango" name="rango" value={rango} onChange={(e) => setRango(e.target.value)}>{RANGOS_OPC.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
        </div>
        <span className="sep">{tx.contacto}</span>
        <label htmlFor="f-nom">{tx.nombre}<input id="f-nom" name="nombre" required autoComplete="name" /></label>
        <div className="frow">
          <label htmlFor="f-mail">{tx.correo}<input id="f-mail" name="correo" type="email" required autoComplete="email" /></label>
          <label htmlFor="f-cel">{tx.celular}<input id="f-cel" name="celular" type="tel" required autoComplete="tel" /></label>
        </div>
        <div className="hp" aria-hidden="true"><label>{tx.web}<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <label className="consent" htmlFor="f-ok"><input id="f-ok" name="consentimiento" type="checkbox" required /> <span>{tx.acepto} <Link href={ruta(lang, "/privacidad")}>{tx.politica}</Link> {tx.contacte}</span></label>
        <button className="btn btn-p" type="submit">{tx.enviar}</button>
      </form>

      <div className="report dk" id="reporte" aria-live="polite">
        <div className="rep-top"><span>{ejemplo ? tx.ejemplo : tx.reporte}</span><b>{datos?.razon_social || tx.empresa}</b></div>
        <div className="rep-chips">
          <span>{etiqueta(RUBROS, q.rubro)}</span><span>{etiqueta(PAISES, q.pais)}</span><span>{etiqueta(TIPOS_OPC, q.tipo)}</span><span>{etiqueta(RANGOS_OPC, String(q.rango))}</span>
        </div>
        <div className="rep-big num">
          <div><b>{r.total}</b><span>{tx.compatibles}</span></div>
          <div><b>{r.activas}</b><span>{tx.activas}</span></div>
        </div>
        <div className="rbars num">
          {TIPOS.map(([k]) => (
            <div className="rbar" key={k}><span>{TIPOS_LABEL[lang][k]}</span><i><u style={{ width: `${Math.round((100 * r.porTipo[k]) / max)}%` }} /></i><em>{r.porTipo[k]}</em></div>
          ))}
        </div>
        <p className="xs">
          {r.sinTicket ? tx.sinTicket(r.sinTicket) : ""}
          {tx.revisamos}
          {envio === "ok" && tx.ok}
          {envio === "err" && tx.err(error)}
        </p>
        <div className="rep-cta">
          <span className="flag">{tx.cohorte}</span>
          <p><b>{tx.prepara}</b> {tx.preparaX}</p>
          <a className="btn btn-p" href={ruta(lang, "/bootcamp#postular")}>{tx.postular}</a>
        </div>
        <div className="rep-cta abierta">
          <p><b>{tx.conversar}</b> {tx.conversarX}</p>
          <a className="btn btn-g" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_calendar", { location: "reporte", calendario: "empresas" })}>{tx.agendar}</a>
        </div>
      </div>
    </div>
  );
}
