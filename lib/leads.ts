/**
 * Validación y armado de cada lead (puro, sin I/O).
 * lib/lead-notify.ts se encarga de enviarlo por Brevo y guardarlo en Google Sheets.
 */
import { etiqueta, PAISES, PUBLICOS, RANGOS_OPC, RUBROS, TIPOS_OPC } from "./catalogo";
import type { Report } from "./matching";
import { SITE } from "./site";

export type LeadForm = "buscador" | "bootcamp" | "consulta" | "pasaporte";

export type ValidationResult =
  | { ok: true; data: Record<string, string> }
  | { ok: false; error: string };

const FORMS: LeadForm[] = ["buscador", "bootcamp", "consulta", "pasaporte"];

const COMUNES = ["nombre", "correo", "consentimiento"];
const REQUERIDOS: Record<LeadForm, string[]> = {
  buscador: [...COMUNES, "razon_social", "rubro", "pais", "tipo", "rango", "celular"],
  bootcamp: [...COMUNES, "empresa", "pais", "celular"],
  consulta: [...COMUNES, "publico", "mensaje"],
  pasaporte: [...COMUNES, "empresa"],
};

const OPCIONALES = ["referente", "utm_source", "utm_medium", "utm_campaign", "navegador", "celular", "empresa", "pais", "rubro", "ventas", "capital", "mensaje", "origen", "rango", "tipo", "razon_social", "publico", "idioma"];

const MAX = 1000;
const CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isLeadForm(x: string): x is LeadForm {
  return (FORMS as string[]).includes(x);
}

export function validateLead(form: string, data: unknown): ValidationResult {
  if (!isLeadForm(form)) return { ok: false, error: "Formulario no reconocido." };
  if (typeof data !== "object" || data === null) return { ok: false, error: "Datos inválidos." };
  const raw = data as Record<string, unknown>;

  // Campo trampa: los bots lo llenan, las personas no lo ven.
  if (typeof raw.website === "string" && raw.website.trim() !== "") return { ok: false, error: "Solicitud rechazada." };

  const clean: Record<string, string> = {};
  for (const k of [...REQUERIDOS[form], ...OPCIONALES]) {
    const v = raw[k];
    if (typeof v === "string" || typeof v === "number") clean[k] = String(v).trim().slice(0, MAX);
  }

  const faltan = REQUERIDOS[form].filter((k) => !clean[k]);
  if (faltan.length) return { ok: false, error: `Faltan campos obligatorios: ${faltan.join(", ")}.` };
  if (!CORREO.test(clean.correo)) return { ok: false, error: "El correo no es válido." };
  if (clean.consentimiento !== "si") return { ok: false, error: "Necesitamos tu consentimiento para contactarte." };
  if (form === "consulta" && !PUBLICOS.some(([v]) => v === clean.publico)) return { ok: false, error: "Público no válido." };
  if (form === "buscador" && !RANGOS_OPC.some(([v]) => v === clean.rango)) return { ok: false, error: "Rango no válido." };

  return { ok: true, data: clean };
}

export function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

type Envelope = {
  subject: string;
  fields: [string, string][];
  tab: string;
  row: string[];
  userEmail?: { to: string; subject: string; html: string };
};

function shell(titulo: string, cuerpo: string, en = false): string {
  return `<div style="font-family:'Open Sans',Helvetica,Arial,sans-serif;color:#123524;max-width:560px;margin:0 auto;padding:32px 24px;">
<p style="font-size:14px;font-weight:600;color:#c94e10;margin:0 0 12px;">Fondo de Impacto</p>
<h1 style="font-size:24px;line-height:1.2;margin:0 0 20px;">${titulo}</h1>
${cuerpo}
<p style="font-size:12px;color:#556259;margin-top:32px;border-top:1px solid #e3e8e3;padding-top:16px;">${en ? "Fondo de Impacto, by Redesign Lab, from Lima and Bogotá" : "Fondo de Impacto, by Redesign Lab, desde Lima y Bogotá"}<br>${SITE.email} | <a href="${SITE.url}${en ? "/en/privacy" : "/privacidad"}" style="color:#556259;">${en ? "Privacy policy" : "Política de privacidad"}</a></p>
</div>`;
}

function boton(href: string, texto: string, oscuro = true): string {
  const estilo = oscuro ? "background:#123524;color:#ffffff;" : "background:#ffffff;color:#123524;border:1px solid #123524;";
  return `<a href="${href}" style="${estilo}display:inline-block;padding:12px 20px;border-radius:6px;font-weight:600;font-size:14px;text-decoration:none;margin:4px 8px 4px 0;">${texto}</a>`;
}

export function nowLima(): string {
  return new Date().toLocaleString("es-PE", { timeZone: "America/Lima" });
}

/** Columnas de atribución al final de cada fila (mismo criterio que Circular Club y BBS). */
function tail(d: Record<string, string>): string[] {
  return [d.origen ?? "", d.navegador ?? "", d.referente ?? "", d.utm_source ?? "", d.utm_medium ?? "", d.utm_campaign ?? ""];
}

export function buildEnvelope(form: LeadForm, d: Record<string, string>, extra: { reporte?: Report } = {}): Envelope {
  const ts = nowLima();
  const nombre = escapeHtml(d.nombre ?? "");
  const en = d.idioma === "en";

  switch (form) {
    case "buscador": {
      const r = extra.reporte;
      const rubro = etiqueta(RUBROS, d.rubro);
      const pais = etiqueta(PAISES, d.pais);
      const tipo = etiqueta(TIPOS_OPC, d.tipo);
      const rango = etiqueta(RANGOS_OPC, d.rango);
      const cuerpo = r
        ? `<p style="font-size:15px;line-height:1.6;">Hola ${nombre}, este es el reporte preliminar para <b>${escapeHtml(d.razon_social)}</b> (${escapeHtml(rubro)}, ${escapeHtml(pais)}, ${escapeHtml(tipo)}, ${escapeHtml(rango)}).</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0;"><tr>
<td style="padding:16px;background:#123524;color:#fff;border-radius:8px 0 0 8px;"><div style="font-size:36px;font-weight:600;">${r.total}</div><div style="font-size:13px;opacity:.75;">fuentes de capital de impacto compatibles con tu perfil</div></td>
<td style="padding:16px;background:#123524;color:#fff;border-radius:0 8px 8px 0;"><div style="font-size:36px;font-weight:600;">${r.activas}</div><div style="font-size:13px;opacity:.75;">con postulación abierta: convocatoria vigente o ventanilla permanente</div></td>
</tr></table>
<p style="font-size:14px;color:#556259;">No reembolsable: ${r.porTipo.nr}<br>Deuda y garantías: ${r.porTipo.de}<br>Equity: ${r.porTipo.eq}<br>Blended o mixto: ${r.porTipo.bl}${r.sinTicket ? `<br>${r.sinTicket} de estas fuentes no publican su ticket y las revisamos caso por caso.` : ""}</p>
<p style="font-size:15px;line-height:1.6;margin-top:24px;"><b>Siguiente paso recomendado: el Bootcamp de Levantamiento de Capital.</b> En ocho semanas preparas tu tesis, tu modelo financiero, tu teaser y tu pitch, y, si apruebas la evaluación final, presentas ante fondos aliados. ${SITE.cohorte.nombre}: inicio ${SITE.cohorte.inicio.toLowerCase()}, ${SITE.cohorte.cupos} cupos.</p>
${boton(`${SITE.url}/bootcamp#postular`, "Postular al Bootcamp")}
<p style="font-size:15px;line-height:1.6;margin-top:20px;"><b>¿Prefieres conversar?</b> Agenda 30 minutos con el equipo.</p>
${boton(SITE.calEmpresas, "Agendar una reunión", false)}`
        : `<p>Hola ${nombre}, recibimos tu solicitud.</p>`;
      return {
        subject: `${en ? "[EN] " : ""}Buscador: ${d.razon_social} (${pais}, ${rango})`,
        fields: [
          ["Razón social", d.razon_social], ["Nombre", d.nombre], ["Correo", d.correo], ["Celular", d.celular],
          ["Rubro", rubro], ["País", pais], ["Tipo de fondo", tipo], ["Capital", rango],
          ["Compatibles", String(r?.total ?? "")], ["Con postulación abierta", String(r?.activas ?? "")],
        ],
        tab: "Buscador",
        row: [ts, d.razon_social, d.nombre, d.correo, d.celular, rubro, pais, tipo, rango, String(r?.total ?? ""), String(r?.activas ?? ""), ...tail(d)],
        userEmail: en
          ? { to: d.correo, subject: `Your fund report for ${d.razon_social}`, html: shell("Funds available for your company", r
            ? `<p style="font-size:15px;line-height:1.6;">Hi ${nombre}, here is the preliminary report for <b>${escapeHtml(d.razon_social)}</b>.</p>
<p style="font-size:15px;line-height:1.6;"><b>${r.total}</b> impact capital sources match your profile and <b>${r.activas}</b> are open for applications.</p>
<p style="font-size:14px;color:#556259;">Grants: ${r.porTipo.nr}<br>Debt and guarantees: ${r.porTipo.de}<br>Equity: ${r.porTipo.eq}<br>Blended: ${r.porTipo.bl}</p>
<p style="font-size:15px;line-height:1.6;margin-top:24px;"><b>Recommended next step: the Capital Raising Bootcamp.</b> In eight weeks you build your thesis, financial model, teaser and pitch, and, if you pass the final assessment, you pitch to partner funds. ${SITE.cohorteEn.nombre}: starts ${SITE.cohorteEn.inicio}, ${SITE.cohorte.cupos} seats.</p>
${boton(`${SITE.url}/en/bootcamp#postular`, "Apply to the Bootcamp")}
<p style="font-size:15px;line-height:1.6;margin-top:20px;"><b>Prefer to talk?</b> Book 30 minutes with the team.</p>
${boton(SITE.calEmpresas, "Book a meeting", false)}`
            : `<p>Hi ${nombre}, we received your request.</p>`, true) }
          : { to: d.correo, subject: `Tu reporte de fondos disponibles para ${d.razon_social}`, html: shell("Fondos disponibles para tu empresa", cuerpo) },
      };
    }
    case "bootcamp": {
      const pais = etiqueta(PAISES, d.pais);
      return {
        subject: `${en ? "[EN] " : ""}Postulación al Bootcamp: ${d.empresa} (${pais})`,
        fields: [
          ["Empresa", d.empresa], ["Nombre", d.nombre], ["Correo", d.correo], ["Celular", d.celular], ["País", pais],
          ["Rubro", d.rubro ? etiqueta(RUBROS, d.rubro) : ""], ["Ventas últimos 12 meses", d.ventas ?? ""], ["Capital que busca", d.capital ?? ""], ["Mensaje", d.mensaje ?? ""],
        ],
        tab: "Bootcamp",
        row: [ts, d.empresa, d.nombre, d.correo, d.celular, pais, d.rubro ? etiqueta(RUBROS, d.rubro) : "", d.ventas ?? "", d.capital ?? "", d.mensaje ?? "", ...tail(d)],
        userEmail: en ? {
          to: d.correo,
          subject: "We received your application to the Capital Raising Bootcamp",
          html: shell(
            "We received your application",
            `<p style="font-size:15px;line-height:1.6;">Hi ${nombre}, thank you for applying with <b>${escapeHtml(d.empresa)}</b> to the Capital Raising Bootcamp (${SITE.cohorteEn.nombre}, starting ${SITE.cohorteEn.inicio}). We review every application and will write to you within 24 hours to set up a conversation.</p>
<p style="font-size:15px;line-height:1.6;">Price: <b>${SITE.cohorte.precio}</b> per company, or <b>${SITE.cohorte.precioAnticipado}</b> if you confirm your seat by ${SITE.cohorteEn.fechaAnticipado}. It is paid in two installments and only after your seat is confirmed. Partial scholarships are available for companies with annual sales below USD 300K.</p>
<p style="font-size:15px;line-height:1.6;">In the meantime, you can book a meeting with the team.</p>${boton(SITE.calEmpresas, "Book a meeting")}`,
            true,
          ),
        } : {
          to: d.correo,
          subject: "Recibimos tu postulación al Bootcamp de Levantamiento de Capital",
          html: shell(
            "Recibimos tu postulación",
            `<p style="font-size:15px;line-height:1.6;">Hola ${nombre}, gracias por postular a <b>${escapeHtml(d.empresa)}</b> al Bootcamp de Levantamiento de Capital (${SITE.cohorte.nombre}, inicio: ${SITE.cohorte.inicio.toLowerCase()}). Revisamos cada postulación y te escribiremos ${SITE.respuesta} para coordinar una conversación.</p>
<p style="font-size:15px;line-height:1.6;">Inversión: <b>${SITE.cohorte.precio}</b> por empresa, o <b>${SITE.cohorte.precioAnticipado}</b> si confirmas tu cupo hasta el ${SITE.cohorte.fechaAnticipado}. Se paga en dos cuotas y solo después de confirmar tu cupo. Hay becas parciales para empresas con ventas anuales menores a USD 300 mil.</p>
<p style="font-size:15px;line-height:1.6;">Mientras tanto, puedes agendar una reunión con el equipo.</p>${boton(SITE.calEmpresas, "Agendar una reunión")}`,
          ),
        },
      };
    }
    case "consulta": {
      const publico = etiqueta(PUBLICOS, d.publico);
      return {
        subject: `${en ? "[EN] " : ""}Consulta de ${d.nombre} (${publico})`,
        fields: [["Público", publico], ["Nombre", d.nombre], ["Organización", d.empresa ?? ""], ["Correo", d.correo], ["Celular", d.celular ?? ""], ["Mensaje", d.mensaje]],
        tab: "Consultas",
        row: [ts, publico, d.nombre, d.empresa ?? "", d.correo, d.celular ?? "", d.mensaje, ...tail(d)],
      };
    }
    case "pasaporte": {
      return {
        subject: `${en ? "[EN] " : ""}Pasaporte de Inversión: ${d.empresa}, de ${d.nombre}`,
        fields: [["Empresa", d.empresa], ["Nombre", d.nombre], ["Correo", d.correo], ["Celular", d.celular ?? ""], ["País", d.pais ? etiqueta(PAISES, d.pais) : ""], ["Rubro", d.rubro ? etiqueta(RUBROS, d.rubro) : ""], ["Mensaje", d.mensaje ?? ""]],
        tab: "Pasaporte",
        row: [ts, d.empresa, d.nombre, d.correo, d.celular ?? "", d.pais ? etiqueta(PAISES, d.pais) : "", d.rubro ? etiqueta(RUBROS, d.rubro) : "", d.mensaje ?? "", ...tail(d)],
        userEmail: en ? {
          to: d.correo,
          subject: "We received your request to access the Investment Passport",
          html: shell(
            "We received your access request",
            `<p style="font-size:15px;line-height:1.6;">Hi ${nombre}, we received the request from <b>${escapeHtml(d.empresa)}</b> to access the Investment Passport. The Passport opens in stages and is free for your company. We will write to you when your access is ready.</p>`,
            true,
          ),
        } : {
          to: d.correo,
          subject: "Recibimos tu solicitud de acceso al Pasaporte de Inversión",
          html: shell(
            "Recibimos tu solicitud de acceso",
            `<p style="font-size:15px;line-height:1.6;">Hola ${nombre}, recibimos la solicitud de <b>${escapeHtml(d.empresa)}</b> para acceder al Pasaporte de Inversión. El Pasaporte abre por etapas y no tiene costo para tu empresa. Te escribiremos cuando tu acceso esté listo.</p>`,
          ),
        },
      };
    }
  }
}
