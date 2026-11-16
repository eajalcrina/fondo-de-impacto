"use client";
import { useState } from "react";
import { PUBLICOS } from "@/lib/catalogo";
import { SITE } from "@/lib/site";
import { LeadForm } from "./LeadForm";

const TEXTO: Record<string, string> = {
  cooperativa: "Quiero preparar mi organización para acceder a financiamiento de impacto.",
  consultor: "Quiero especializarme en inversión de impacto y asesorar mejor a mis clientes.",
  agencia_fondo: "Quiero llevar este programa a las empresas de mi portafolio o patrocinar cupos de una cohorte.",
};

/** Tres públicos con formularios separados (cada consulta queda etiquetada para medir demanda). */
export function Consultas() {
  const [pub, setPub] = useState<string | null>(null);
  return (
    <>
      <div className="cols-3">
        {PUBLICOS.map(([v, t]) => (
          <div key={v} className="rule l">
            <span className="h4">{t}</span>
            <p className="p2 sm">{TEXTO[v]}</p>
            <button type="button" className="lnk boton-lnk" aria-expanded={pub === v} onClick={() => setPub(v)}>
              Consultar
            </button>
          </div>
        ))}
      </div>
      {pub && (
        <div id="consulta" className="consulta">
          <p className="eyebrow s">Consulta para {PUBLICOS.find(([v]) => v === pub)?.[1]}</p>
          <LeadForm
            key={pub}
            form="consulta"
            idPrefix={`c-${pub}`}
            hidden={{ publico: pub }}
            submit="Enviar consulta"
            success={`Gracias. Recibimos tu consulta y te escribimos ${SITE.respuesta}.`}
            fields={[
              { name: "nombre", label: "Nombre completo", required: true, autoComplete: "name", half: true },
              { name: "empresa", label: "Organización", autoComplete: "organization", half: true },
              { name: "correo", label: "Correo", type: "email", required: true, autoComplete: "email", half: true },
              { name: "celular", label: "Celular", type: "tel", autoComplete: "tel", half: true },
              { name: "mensaje", label: "¿Qué necesitas?", type: "textarea", required: true },
            ]}
          />
          {pub === "agencia_fondo" && (
            <p className="xs">
              ¿Prefieres conversar? <a className="lnk" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">Agenda una reunión</a>
            </p>
          )}
        </div>
      )}
    </>
  );
}
