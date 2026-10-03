import { NextRequest, NextResponse } from "next/server";
import fuentes from "@/lib/fuentes.json";
import { validateLead } from "@/lib/leads";
import { notifyLead } from "@/lib/lead-notify";
import { report, type Fuente } from "@/lib/matching";

export async function POST(req: NextRequest) {
  let body: { form?: string; data?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo JSON inválido." }, { status: 400 });
  }

  const form = body.form ?? "";
  const v = validateLead(form, body.data);
  if (!v.ok) return NextResponse.json({ error: v.error }, { status: 400 });

  const extra =
    form === "buscador"
      ? { reporte: report(fuentes as Fuente[], { rubro: v.data.rubro, pais: v.data.pais, tipo: v.data.tipo, rango: Number(v.data.rango) }) }
      : {};

  const result = await notifyLead(form as Parameters<typeof notifyLead>[0], v.data, extra);

  // El correo al equipo es la garantía de no perder el lead; solo es error si fallan ambos canales.
  if (!result.emailOk && !result.sheetOk) {
    return NextResponse.json({ error: "No pudimos registrar tu solicitud. Escríbenos a fondodeimpacto@redesignlab.org." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, ...result });
}
