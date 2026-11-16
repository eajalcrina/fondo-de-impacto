"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import fuentes from "@/lib/fuentes.json";
import { etiqueta, PAISES, RANGOS_OPC, RUBROS, TIPOS_OPC } from "@/lib/catalogo";
import { report, TIPOS, type Fuente, type Query } from "@/lib/matching";
import { SITE } from "@/lib/site";
import { sendLead } from "./LeadForm";
import { track } from "@/lib/analytics";

const F = fuentes as Fuente[];
const EJEMPLO: Query = { rubro: "alimentos_bebidas", pais: "PE", tipo: "de", rango: 1 };

type Datos = { razon_social: string; nombre: string; correo: string; celular: string } & Record<string, string>;

/** Buscador de fondos: reporte preliminar en pantalla y copia por correo. */
export function Finder() {
  const [rango, setRango] = useState("1");
  const [q, setQ] = useState<Query>(EJEMPLO);
  const [datos, setDatos] = useState<Datos | null>(null);
  const [envio, setEnvio] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("rango");
    if (r && RANGOS_OPC.some(([v]) => v === r)) setRango(r);
  }, []);

  const r = useMemo(() => report(F, q), [q]);
  const max = Math.max(1, r.total);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const d = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, String(v)])) as Datos;
    d.consentimiento = fd.get("consentimiento") ? "si" : "";
    d.origen = window.location.pathname;
    const nq: Query = { rubro: d.rubro, pais: d.pais, tipo: d.tipo, rango: Number(d.rango) };
    setQ(nq);
    setDatos(d);
    track("finder_report", { rubro: d.rubro, pais: d.pais, tipo: d.tipo, rango: d.rango });
    setEnvio("sending");
    document.getElementById("reporte")?.scrollIntoView({ behavior: "smooth", block: "start" });
    const res = await sendLead("buscador", d);
    setEnvio(res.ok ? "ok" : "err");
    setError(res.error ?? "");
  }

  const ejemplo = !datos;
  return (
    <div className="finder">
      <form className="fform" onSubmit={onSubmit}>
        <span className="sep primero">Tu empresa</span>
        <label htmlFor="f-rs">Razón social<input id="f-rs" name="razon_social" required autoComplete="organization" /></label>
        <div className="frow">
          <label htmlFor="f-rubro">Rubro<select id="f-rubro" name="rubro" defaultValue="alimentos_bebidas">{RUBROS.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
          <label htmlFor="f-pais">País<select id="f-pais" name="pais" defaultValue="PE">{PAISES.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
        </div>
        <div className="frow">
          <label htmlFor="f-tipo">Tipo de fondo que buscas<select id="f-tipo" name="tipo" defaultValue="*">{TIPOS_OPC.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
          <label htmlFor="f-rango">Capital que buscas<select id="f-rango" name="rango" value={rango} onChange={(e) => setRango(e.target.value)}>{RANGOS_OPC.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
        </div>
        <span className="sep">Tus datos de contacto</span>
        <label htmlFor="f-nom">Nombre completo<input id="f-nom" name="nombre" required autoComplete="name" /></label>
        <div className="frow">
          <label htmlFor="f-mail">Correo<input id="f-mail" name="correo" type="email" required autoComplete="email" /></label>
          <label htmlFor="f-cel">Celular<input id="f-cel" name="celular" type="tel" required autoComplete="tel" /></label>
        </div>
        <div className="hp" aria-hidden="true"><label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <label className="consent" htmlFor="f-ok"><input id="f-ok" name="consentimiento" type="checkbox" required /> <span>Acepto la <Link href="/privacidad">política de privacidad</Link> y que Fondo de Impacto me contacte sobre oportunidades de financiamiento.</span></label>
        <button className="btn btn-p" type="submit">Ver cuántos fondos calzan conmigo</button>
      </form>

      <div className="report dk" id="reporte" aria-live="polite">
        <div className="rep-top"><span>{ejemplo ? "Ejemplo de reporte preliminar" : "Reporte preliminar"}</span><b>{datos?.razon_social || "Tu empresa"}</b></div>
        <div className="rep-chips">
          <span>{etiqueta(RUBROS, q.rubro)}</span><span>{etiqueta(PAISES, q.pais)}</span><span>{etiqueta(TIPOS_OPC, q.tipo)}</span><span>{etiqueta(RANGOS_OPC, String(q.rango))}</span>
        </div>
        <div className="rep-big num">
          <div><b>{r.total}</b><span>fuentes de capital de impacto compatibles con tu perfil</span></div>
          <div><b>{r.activas}</b><span>con llamada activa: convocatoria abierta o ventanilla permanente</span></div>
        </div>
        <div className="rbars num">
          {TIPOS.map(([k, t]) => (
            <div className="rbar" key={k}><span>{t}</span><i><u style={{ width: `${Math.round((100 * r.porTipo[k]) / max)}%` }} /></i><em>{r.porTipo[k]}</em></div>
          ))}
        </div>
        <p className="xs">
          {r.sinTicket ? `${r.sinTicket} de estas fuentes no publican su ticket y las revisamos caso por caso. ` : ""}
          Los nombres y las condiciones los revisamos contigo.
          {envio === "ok" && ` Te enviamos una copia de este reporte por correo y te escribimos ${SITE.respuesta}.`}
          {envio === "err" && ` No pudimos enviarte la copia por correo (${error}).`}
        </p>
        <div className="rep-cta">
          <span className="flag">{SITE.cohorte.nombre}</span>
          <p><b>Prepara tu perfil de inversión en el Bootcamp.</b> Ocho semanas para tu tesis, tu modelo financiero, tu teaser y tu pitch. Inicio: {SITE.cohorte.inicio.toLowerCase()}.</p>
          <a className="btn btn-p" href="/bootcamp#postular">Postular al Bootcamp</a>
        </div>
        <div className="rep-cta abierta">
          <p><b>¿Prefieres conversar?</b> Agenda 30 minutos con el equipo.</p>
          <a className="btn btn-g" href={SITE.calEmpresas} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_calendar", { location: "reporte", calendario: "empresas" })}>Agendar una reunión</a>
        </div>
      </div>
    </div>
  );
}
