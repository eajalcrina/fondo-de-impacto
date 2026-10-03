import { describe, it, expect } from "vitest";
import { validateLead, buildEnvelope } from "@/lib/leads";

const base = { nombre: "María Quispe", correo: "maria@empresa.pe", consentimiento: "si" };
const buscador = { ...base, razon_social: "Andina SAC", rubro: "alimentos_bebidas", pais: "PE", tipo: "de", rango: "1", celular: "+51 900 000 000" };

describe("validateLead", () => {
  it("rechaza formulario desconocido", () => expect(validateLead("otro", base).ok).toBe(false));
  it("rechaza si falta un obligatorio y nombra el campo", () => {
    const r = validateLead("buscador", { ...buscador, razon_social: "" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toContain("razon_social");
  });
  it("rechaza correo inválido", () => expect(validateLead("buscador", { ...buscador, correo: "x@" }).ok).toBe(false));
  it("rechaza honeypot lleno", () => expect(validateLead("buscador", { ...buscador, website: "spam" }).ok).toBe(false));
  it("rechaza sin consentimiento", () => expect(validateLead("buscador", { ...buscador, consentimiento: "" }).ok).toBe(false));
  it("rechaza público inválido en consulta", () =>
    expect(validateLead("consulta", { ...base, publico: "otro", mensaje: "hola" }).ok).toBe(false));
  it("acepta un buscador válido", () => expect(validateLead("buscador", buscador).ok).toBe(true));
});

describe("buildEnvelope", () => {
  const reporte = { total: 19, activas: 17, sinTicket: 11, porTipo: { nr: 3, de: 19, eq: 7, bl: 15 } };
  it("buscador: pestaña, fila con fecha y correo al usuario", () => {
    const e = buildEnvelope("buscador", buscador, { reporte });
    expect(e.tab).toBe("Buscador");
    expect(e.row[0]).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(e.row).toContain("Andina SAC");
    expect(e.userEmail?.to).toBe("maria@empresa.pe");
    expect(e.userEmail?.html).toContain("19");
  });
  it("consulta: sin correo al usuario", () => {
    const e = buildEnvelope("consulta", { ...base, publico: "consultor", mensaje: "hola" });
    expect(e.tab).toBe("Consultas");
    expect(e.userEmail).toBeUndefined();
  });
  it("escapa HTML en los datos", () => {
    const e = buildEnvelope("pasaporte", { ...base, empresa: "<b>X</b>" });
    expect(e.userEmail?.html).not.toContain("<b>X</b>");
  });
});
