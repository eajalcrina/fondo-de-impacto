"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { catalogo } from "@/lib/catalogo";
import { SITE } from "@/lib/site";
import { langDe } from "@/lib/i18n";
import { LeadForm } from "./LeadForm";

const TX = {
  es: {
    texto: {
      cooperativa: "Quiero preparar mi organización para acceder a financiamiento de impacto.",
      consultor: "Quiero especializarme en inversión de impacto y asesorar mejor a mis clientes.",
      agencia_fondo: "Quiero llevar este programa a las empresas de mi portafolio o patrocinar cupos de una cohorte.",
    } as Record<string, string>,
    consultar: "Consultar", para: "Consulta para", enviar: "Enviar consulta", gracias: `Gracias. Recibimos tu consulta y te escribimos ${SITE.respuesta}.`,
    nombre: "Nombre completo", org: "Organización", correo: "Correo", celular: "Celular", necesitas: "¿Qué necesitas?",
    conversar: "¿Prefieres conversar?", agenda: "Agenda una reunión",
  },
  en: {
    texto: {
      cooperativa: "I want to prepare my organization to access impact financing.",
      consultor: "I want to specialize in impact investing and advise my clients better.",
      agencia_fondo: "I want to bring this program to the companies in my portfolio or sponsor seats in a cohort.",
    } as Record<string, string>,
    consultar: "Get in touch", para: "Inquiry from", enviar: "Send inquiry", gracias: "Thank you. We received your inquiry and will write to you within 24 hours.",
    nombre: "Full name", org: "Organization", correo: "Email", celular: "Mobile", necesitas: "What do you need?",
    conversar: "Prefer to talk?", agenda: "Book a meeting",
  },
};

/** Tres públicos con formularios separados (cada consulta queda etiquetada para medir demanda). */
export function Consultas() {
  const lang = langDe(usePathname());
  const tx = TX[lang];
  const { PUBLICOS } = catalogo(lang);
  const [pub, setPub] = useState<string | null>(null);
  return (
    <>
      <div className="cols-3">
        {PUBLICOS.map(([v, t]) => (
          <div key={v} className="rule l">
            <span className="h4">{t}</span>
            <p className="p2 sm">{tx.texto[v]}</p>
            <button type="button" className="lnk boton-lnk" aria-expanded={pub === v} onClick={() => setPub(v)}>
              {tx.consultar}
            </button>
          </div>
        ))}
      </div>
      {pub && (
        <div id="consulta" className="consulta">
          <p className="eyebrow s">{tx.para} {PUBLICOS.find(([v]) => v === pub)?.[1]}</p>
          <LeadForm
            key={pub}
            form="consulta"
            idPrefix={`c-${pub}`}
            hidden={{ publico: pub }}
            submit={tx.enviar}
            success={tx.gracias}
            fields={[
              { name: "nombre", label: tx.nombre, required: true, autoComplete: "name", half: true },
              { name: "empresa", label: tx.org, autoComplete: "organization", half: true },
              { name: "correo", label: tx.correo, type: "email", required: true, autoComplete: "email", half: true },
              { name: "celular", label: tx.celular, type: "tel", autoComplete: "tel", half: true },
              { name: "mensaje", label: tx.necesitas, type: "textarea", required: true },
            ]}
          />
          {pub === "agencia_fondo" && (
            <p className="xs">
              {tx.conversar} <a className="lnk" href={SITE.calInversionistas} target="_blank" rel="noopener noreferrer">{tx.agenda}</a>
            </p>
          )}
        </div>
      )}
    </>
  );
}
