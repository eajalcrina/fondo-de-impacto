"use client";
import Link from "next/link";
import { useState } from "react";
import { attribution, track } from "@/lib/analytics";

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

export async function sendLead(form: string, data: Record<string, string>): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form, data: { ...attribution(), ...data } }) });
    const j = await res.json().catch(() => ({}));
    if (res.ok) track("generate_lead", { form });
    return res.ok ? { ok: true } : { ok: false, error: j.error || "No pudimos enviar tu solicitud." };
  } catch {
    return { ok: false, error: "No pudimos conectarnos. Revisa tu conexión e inténtalo de nuevo." };
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
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = { ...hidden, origen: window.location.pathname };
    fd.forEach((v, k) => { data[k] = String(v); });
    data.consentimiento = fd.get("consentimiento") ? "si" : "";
    setSt({ s: "sending" });
    const r = await sendLead(form, data);
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
      <div className="hp" aria-hidden="true"><label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="consent" htmlFor={`${idPrefix}-ok`} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontWeight: 400, fontSize: 12.5 }}>
        <input id={`${idPrefix}-ok`} name="consentimiento" type="checkbox" required style={{ width: "auto", marginTop: 2 }} />
        <span>Acepto la <Link href="/privacidad">política de privacidad</Link> y que Fondo de Impacto me contacte sobre esta solicitud.</span>
      </label>
      {st.s === "err" && <p className="form-msg err" role="alert">{st.msg}</p>}
      <button className="btn btn-p" type="submit" disabled={st.s === "sending"} style={{ justifySelf: "start" }}>
        {st.s === "sending" ? "Enviando…" : submit}
      </button>
    </form>
  );
}
