"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { attribution, track } from "@/lib/analytics";
import { SITE } from "@/lib/site";
import { langDe, ruta } from "@/lib/i18n";

const TX = {
  es: { noEnvio: "No pudimos enviar tu solicitud.", sinRed: "No pudimos conectarnos. Revisa tu conexión e inténtalo de nuevo.", web: "Sitio web", acepto: "Acepto la", politica: "política de privacidad", contacte: "y que Fondo de Impacto me contacte sobre esta solicitud.", enviando: "Enviando…", respondemos: `Te respondemos ${SITE.respuesta}.` },
  en: { noEnvio: "We could not send your request.", sinRed: "We could not connect. Check your connection and try again.", web: "Website", acepto: "I accept the", politica: "privacy policy", contacte: "and agree that Fondo de Impacto may contact me about this request.", enviando: "Sending…", respondemos: "We reply within 24 hours." },
};

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  options?: [string, string][];
  required?: boolean;
  autoComplete?: string;
  half?: boolean;
  defaultValue?: string;
};

type Estado = { s: "idle" | "sending" | "ok" | "err"; msg?: string };

export async function sendLead(form: string, data: Record<string, string>, lang: "es" | "en" = "es"): Promise<{ ok: boolean; error?: string }> {
  const tx = TX[lang];
  try {
    const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form, data: { ...attribution(), ...data } }) });
    const j = await res.json().catch(() => ({}));
    if (res.ok) track("generate_lead", { form });
    return res.ok ? { ok: true } : { ok: false, error: lang === "es" ? j.error || tx.noEnvio : tx.noEnvio };
  } catch {
    return { ok: false, error: tx.sinRed };
  }
}

function Input({ f, idp }: { f: Field; idp: string }) {
  const id = `${idp}-${f.name}`;
  const common = { id, name: f.name, required: f.required, autoComplete: f.autoComplete, defaultValue: f.defaultValue };
  return (
    <label htmlFor={id}>
      {f.label}
      {f.type === "select" ? (
        <select {...common}>{f.options?.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select>
      ) : f.type === "textarea" ? (
        <textarea {...common} />
      ) : (
        <input type={f.type ?? "text"} {...common} />
      )}
    </label>
  );
}

/** Formulario genérico que envía a /api/lead con honeypot y consentimiento. */
export function LeadForm({ form, fields, submit, hidden = {}, success, idPrefix }: {
  form: string; fields: Field[]; submit: string; hidden?: Record<string, string>; success: string; idPrefix: string;
}) {
  const [st, setSt] = useState<Estado>({ s: "idle" });
  const lang = langDe(usePathname());
  const tx = TX[lang];
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = { ...hidden, origen: window.location.pathname, idioma: lang };
    fd.forEach((v, k) => { data[k] = String(v); });
    data.consentimiento = fd.get("consentimiento") ? "si" : "";
    setSt({ s: "sending" });
    const r = await sendLead(form, data, lang);
    setSt(r.ok ? { s: "ok" } : { s: "err", msg: r.error });
  }
  if (st.s === "ok") return <p className="form-msg ok" role="status">{success}</p>;

  const rows: (Field | [Field, Field])[] = [];
  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];
    if (f.half && fields[i + 1]?.half) { rows.push([f, fields[i + 1]]); i++; } else rows.push(f);
  }
  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate={false}>
      {rows.map((r, i) =>
        Array.isArray(r) ? (
          <div className="frow" key={i}><Input f={r[0]} idp={idPrefix} /><Input f={r[1]} idp={idPrefix} /></div>
        ) : (
          <Input key={i} f={r} idp={idPrefix} />
        ),
      )}
      <div className="hp" aria-hidden="true"><label>{tx.web}<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="consent" htmlFor={`${idPrefix}-ok`}>
        <input id={`${idPrefix}-ok`} name="consentimiento" type="checkbox" required />
        <span>{tx.acepto} <Link href={ruta(lang, "/privacidad")}>{tx.politica}</Link> {tx.contacte}</span>
      </label>
      {st.s === "err" && <p className="form-msg err" role="alert">{st.msg}</p>}
      <button className="btn btn-p" type="submit" disabled={st.s === "sending"}>
        {st.s === "sending" ? tx.enviando : submit}
      </button>
      <span className="xs">{tx.respondemos}</span>
    </form>
  );
}
