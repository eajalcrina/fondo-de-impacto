/**
 * Empuja eventos al dataLayer de Google Tag Manager. En GTM se configuran las
 * etiquetas de GA4 que escuchan estos eventos (ver README).
 * Eventos: generate_lead, cta_calendar, finder_report.
 */
export function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
}

const UTM_KEY = "fdi-utm";
const UTM = ["utm_source", "utm_medium", "utm_campaign"] as const;

/** Guarda los UTM de la primera página de la visita (primer contacto). */
export function captureUtm() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(UTM_KEY)) return;
    const q = new URLSearchParams(window.location.search);
    const v: Record<string, string> = {};
    UTM.forEach((k) => { const x = q.get(k); if (x) v[k] = x.slice(0, 120); });
    v.referente = document.referrer.slice(0, 300);
    sessionStorage.setItem(UTM_KEY, JSON.stringify(v));
  } catch {}
}

/** Datos de atribución que viajan con cada formulario. */
export function attribution(): Record<string, string> {
  try {
    const v = JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}");
    return typeof v === "object" && v ? v : {};
  } catch {
    return {};
  }
}
