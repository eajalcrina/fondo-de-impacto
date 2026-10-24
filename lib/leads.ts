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

const OPCIONALES = ["referente", "utm_source", "utm_medium", "utm_campaign", "navegador", "celular", "empresa", "pais", "rubro", "ventas", "capital", "mensaje", "origen", "rango", "tipo", "razon_social", "publico"];

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

function shell(titulo: string, cuerpo: string): string {
  return `<div style="font-family:Montserrat,Helvetica,Arial,sans-serif;color:#132617;max-width:560px;margin:0 auto;padding:32px 24px;">
<p style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8a4a2b;margin:0 0 12px;">Fondo de Impacto</p>
<h1 style="font-size:24px;line-height:1.2;margin:0 0 20px;">${titulo}</h1>
${cuerpo}
<p style="font-size:12px;color:#8a958c;margin-top:32px;border-top:1px solid #e3e8e3;padding-top:16px;">Fondo de Impacto, una división de Redesign Lab, desde Lima y Bogotá<br>${SITE.email} | <a href="${SITE.url}/privacidad" style="color:#8a958c;">Política de privacidad</a></p>
</div>`;
}

function boton(href: string, texto: string, oscuro = true): string {
  const estilo = oscuro ? "background:#132617;color:#ffffff;" : "background:#ffffff;color:#132617;border:1px solid #132617;";
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
<td style="padding:16px;background:#132617;color:#fff;border-radius:8px 0 0 8px;"><div style="font-size:36px;font-weight:600;">${r.total}</div><div style="font-size:13px;opacity:.75;">fuentes de capital de impacto compatibles con tu perfil</div></td>
<td style="padding:16px;background:#1b3323;color:#fff;border-radius:0 8px 8px 0;"><div style="font-size:36px;font-weight:600;">${r.activas}</div><div style="font-size:13px;opacity:.75;">con llamada activa: convocatoria abierta o ventanilla permanente</div></td>
</tr></table>
<p style="font-size:14px;color:#556259;">No reembolsable: ${r.porTipo.nr}<br>Deuda y garantías: ${r.porTipo.de}<br>Equity: ${r.porTipo.eq}<br>Blended o mixto: ${r.porTipo.bl}${r.sinTicket ? `<br>${r.sinTicket} de estas fuentes no publican su ticket y las revisamos caso por caso.` : ""}</p>
<p style="font-size:15px;line-height:1.6;margin-top:24px;"><b>Siguiente paso recomendado: el Bootcamp de Levantamiento de Capital.</b> En ocho semanas preparas tu tesis, tu modelo financiero, tu teaser y tu pitch, y al final presentas ante fondos aliados. ${SITE.cohorte.nombre}: inicio ${SITE.cohorte.inicio.toLowerCase()}, ${SITE.cohorte.cupos} cupos.</p>
${boton(`${SITE.url}/bootcamp#postular`, "Postular al Bootcamp")}
<p style="font-size:15px;line-height:1.6;margin-top:20px;"><b>¿Quieres empezar hoy a levantar capital?</b> Conversemos 30 minutos.</p>
${boton(SITE.calEmpresas, "Agendar una reunión", false)}`
        : `<p>Hola ${nombre}, recibimos tu solicitud.</p>`;
      return {
        subject: `Buscador: ${d.razon_social} (${pais}, ${rango})`,
        fields: [
          ["Razón social", d.razon_social], ["Nombre", d.nombre], ["Correo", d.correo], ["Celular", d.celular],
          ["Rubro", rubro], ["País", pais], ["Tipo de fondo", tipo], ["Capital", rango],
          ["Compatibles", String(r?.total ?? "")], ["Con llamada activa", String(r?.activas ?? "")],
        ],
        tab: "Buscador",
        row: [ts, d.razon_social, d.nombre, d.correo, d.celular, rubro, pais, tipo, rango, String(r?.total ?? ""), String(r?.activas ?? ""), ...tail(d)],
        userEmail: { to: d.correo, subject: `Tu reporte de fondos disponibles para ${d.razon_social}`, html: shell("Fondos disponibles para tu empresa", cuerpo) },
      };
    }
    case "bootcamp": {
      const pais = etiqueta(PAISES, d.pais);
      return {
        subject: `Postulación al Bootcamp: ${d.empresa} (${pais})`,
        fields: [
          ["Empresa", d.empresa], ["Nombre", d.nombre], ["Correo", d.correo], ["Celular", d.celular], ["País", pais],
          ["Rubro", d.rubro ? etiqueta(RUBROS, d.rubro) : ""], ["Ventas últimos 12 meses", d.ventas ?? ""], ["Capital que busca", d.capital ?? ""], ["Mensaje", d.mensaje ?? ""],
        ],
        tab: "Bootcamp",
        row: [ts, d.empresa, d.nombre, d.correo, d.celular, pais, d.rubro ? etiqueta(RUBROS, d.rubro) : "", d.ventas ?? "", d.capital ?? "", d.mensaje ?? "", ...tail(d)],
        userEmail: {
          to: d.correo,
          subject: "Recibimos tu postulación al Bootcamp de Levantamiento de Capital",
          html: shell(
            "Recibimos tu postulación",
            `<p style="font-size:15px;line-height:1.6;">Hola ${nombre}, gracias por postular a <b>${escapeHtml(d.empresa)}</b> al Bootcamp de Levantamiento de Capital (${SITE.cohorte.nombre}, inicio: ${SITE.cohorte.inicio}). Revisamos cada postulación y te escribiremos ${SITE.respuesta} para coordinar una conversación.</p>
<p style="font-size:15px;line-height:1.6;">Inversión: <b>${SITE.cohorte.precio}</b> por empresa, o <b>${SITE.cohorte.precioAnticipado}</b> si confirmas tu cupo hasta el ${SITE.cohorte.fechaAnticipado}. Se paga en dos cuotas y solo después de confirmar tu cupo. Hay becas parciales para empresas con ventas anuales menores a USD 300,000.</p>
<p style="font-size:15px;line-height:1.6;">Mientras tanto, puedes agendar una reunión con el equipo.</p>${boton(SITE.calEmpresas, "Agendar una reunión")}`,
          ),
        },
      };
    }
    case "consulta": {
      const publico = etiqueta(PUBLICOS, d.publico);
      return {
        subject: `Consulta de ${d.nombre} (${publico})`,
        fields: [["Público", publico], ["Nombre", d.nombre], ["Organización", d.empresa ?? ""], ["Correo", d.correo], ["Celular", d.celular ?? ""], ["Mensaje", d.mensaje]],
        tab: "Consultas",
        row: [ts, publico, d.nombre, d.empresa ?? "", d.correo, d.celular ?? "", d.mensaje, ...tail(d)],
      };
    }
    case "pasaporte": {
      return {
        subject: `Pasaporte de Inversión: ${d.empresa}, de ${d.nombre}`,
        fields: [["Empresa", d.empresa], ["Nombre", d.nombre], ["Correo", d.correo], ["Celular", d.celular ?? ""], ["País", d.pais ? etiqueta(PAISES, d.pais) : ""], ["Rubro", d.rubro ? etiqueta(RUBROS, d.rubro) : ""], ["Mensaje", d.mensaje ?? ""]],
        tab: "Pasaporte",
        row: [ts, d.empresa, d.nombre, d.correo, d.celular ?? "", d.pais ? etiqueta(PAISES, d.pais) : "", d.rubro ? etiqueta(RUBROS, d.rubro) : "", d.mensaje ?? "", ...tail(d)],
        userEmail: {
          to: d.correo,
          subject: "Recibimos tu solicitud de acceso al Pasaporte de Inversión",
          html: shell(
            "Recibimos tu solicitud de acceso",
            `<p style="font-size:15px;line-height:1.6;">Hola ${nombre}, recibimos la solicitud de <b>${escapeHtml(d.empresa)}</b> para acceder al Pasaporte de Inversión. El Pasaporte abre por etapas y cuesta USD 0: solo inviertes tiempo. Te escribiremos cuando tu acceso esté listo.</p>`,
          ),
        },
      };
    }
  }
}
