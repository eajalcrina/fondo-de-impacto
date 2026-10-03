import { describe, it, expect } from "vitest";
import { inRange, matchPais, report, countByRange, type Fuente } from "@/lib/matching";

const f = (o: Partial<Fuente>): Fuente => ({ t: [], p: [], r: 0, s: [], mn: null, mx: null, a: 0, e: 1, ...o });

describe("matching", () => {
  it("rango: sin ticket devuelve null", () => expect(inRange(f({}), 0)).toBeNull());
  it("rango: solo máximo asume piso de 10%", () => expect(inRange(f({ mx: 400000 }), 1)).toBe(true));
  it("rango: no cruza", () => expect(inRange(f({ mn: 1e6, mx: 2e6 }), 0)).toBe(false));
  it("país: regional calza con todos", () => expect(matchPais(f({ r: 1 }), "PE")).toBe(true));
  it("país: nacional solo con su país", () => expect(matchPais(f({ p: ["CO"] }), "PE")).toBe(false));
  it("país OT solo regionales", () => expect(matchPais(f({ p: ["PE"] }), "OT")).toBe(false));
  it("reporte cuenta compatibles, activas y sin ticket", () => {
    const base = [
      f({ t: ["de"], p: ["PE"], s: ["agricultura"], mn: 5e4, mx: 3e5, a: 1 }),
      f({ t: ["nr"], r: 1, s: ["agricultura"] }),
      f({ t: ["de"], p: ["CO"], s: ["agricultura"], mn: 5e4, mx: 3e5 }),
      f({ t: ["de"], r: 1, s: ["agricultura"], e: 0 }),
    ];
    expect(report(base, { rubro: "agricultura", pais: "PE", tipo: "*", rango: 1 })).toEqual({
      total: 2, activas: 1, sinTicket: 1, porTipo: { nr: 1, de: 1, eq: 0, bl: 0 },
    });
  });
  it("countByRange ignora e=0 y sin ticket", () =>
    expect(countByRange([f({ mn: 1e4, mx: 4e4 }), f({ mn: 1e4, mx: 4e4, e: 0 }), f({})])).toEqual([1, 0, 0, 0]));
});
