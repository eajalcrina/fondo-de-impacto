import { JWT } from "google-auth-library";
import { buildEnvelope, escapeHtml, type LeadForm } from "./leads";
import type { Report } from "./matching";

/**
 * Solo servidor. Mismo patrón que redesignlab.org (lib/lead-notify.ts):
 * cada envío manda un correo al equipo por Brevo y agrega una fila en Google Sheets.
 * Ambos canales corren en paralelo y la falla de uno no bloquea al otro.
 * El correo al usuario (reporte o confirmación) es adicional y no define el éxito.
 */

const EMAIL_FROM = process.env.EMAIL_FROM || "fondodeimpacto@redesignlab.org";
const EMAIL_NOTIFY = process.env.EMAIL_NOTIFY || "fondodeimpacto@redesignlab.org";

function renderFieldsHtml(fields: [string, string][]): string {
  const rows = fields
    .map(([label, value]) => {
      const display = value ? escapeHtml(value).replace(/\n/g, "<br/>") : "—";
      return `<tr><td style="padding:6px 12px 6px 0;color:#8a958c;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#132617;font-size:14px;">${display}</td></tr>`;
    })
    .join("");
  return `<table cellpadding="0" cellspacing="0" style="font-family:Helvetica,Arial,sans-serif;">${rows}</table>`;
}

async function sendBrevo(to: string, subject: string, html: string, fromName: string, replyTo?: string): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.warn("[lead-notify] BREVO_API_KEY no configurada: no se envía correo.");
    return false;
  }
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ sender: { email: EMAIL_FROM, name: fromName }, to: [{ email: to }], subject, htmlContent: html, ...(replyTo ? { replyTo: { email: replyTo } } : {}) }),
    });
    if (!res.ok) {
      console.error("[lead-notify] Brevo falló", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[lead-notify] Brevo lanzó un error", err);
    return false;
  }
}

let cachedClient: JWT | null = null;

function sheetsClient(): JWT | null {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !rawKey) return null;
  if (!cachedClient) {
    // Vercel guarda la clave en una sola línea con "\n" literales.
    cachedClient = new JWT({ email, key: rawKey.replace(/\\n/g, "\n"), scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
  }
  return cachedClient;
}

async function appendRow(tab: string, values: string[]): Promise<boolean> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const client = sheetsClient();
  if (!sheetId || !client) {
    console.warn("[lead-notify] Google Sheets no configurado: no se guarda la fila.");
    return false;
  }
  try {
    const { token } = await client.getAccessToken();
    const range = encodeURIComponent(`${tab}!A:A`);
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ values: [values.map(safeCell)] }) },
    );
    if (!res.ok) {
      console.error("[lead-notify] Sheets falló", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[lead-notify] Sheets lanzó un error", err);
    return false;
  }
}

/** Evita que un valor que empieza con = + - @ se interprete como fórmula en Sheets. */
function safeCell(v: string): string {
  return /^[=+\-@]/.test(v) ? `'${v}` : v;
}

/** Alta o actualización del contacto en la lista de Brevo (opcional, si BREVO_LIST_ID existe). */
async function upsertContact(email: string, nombre: string, pais: string, form: string): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !listId) return false;
  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, listIds: [listId], updateEnabled: true, attributes: { FIRSTNAME: nombre.split(" ")[0] ?? "", COUNTRY: pais, FDI_ORIGEN: form } }),
    });
    if (!res.ok && res.status !== 204) {
      console.error("[lead-notify] Brevo contacts falló", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[lead-notify] Brevo contacts lanzó un error", err);
    return false;
  }
}

export async function notifyLead(form: LeadForm, data: Record<string, string>, extra: { reporte?: Report } = {}) {
  const env = buildEnvelope(form, data, extra);
  const [mail, sheet] = await Promise.allSettled([
    sendBrevo(EMAIL_NOTIFY, env.subject, `<div style="padding:24px;">${renderFieldsHtml([...env.fields, ["Página", data.origen ?? ""], ["Referente", data.referente ?? ""], ["UTM", [data.utm_source, data.utm_medium, data.utm_campaign].filter(Boolean).join(" / ")]])}</div>`, "Fondo de Impacto — Sitio web", data.correo),
    appendRow(env.tab, env.row),
    env.userEmail ? sendBrevo(env.userEmail.to, env.userEmail.subject, env.userEmail.html, "Fondo de Impacto", EMAIL_NOTIFY) : Promise.resolve(true),
    upsertContact(data.correo, data.nombre ?? "", data.pais ?? "", form),
  ]);
  return {
    emailOk: mail.status === "fulfilled" && mail.value,
    sheetOk: sheet.status === "fulfilled" && sheet.value,
  };
}
