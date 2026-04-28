"use client";

import { Calendar, Mail, MessageCircle } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTA } from "@/lib/constants";

const actions = [
  {
    icon: Calendar,
    label: "Agendar entrevista 1:1",
    sublabel: "Conversación directa con los fundadores",
    href: CTA.calendar,
  },
  {
    icon: Mail,
    label: "Escribir por email",
    sublabel: CTA.contactEmail,
    href: CTA.email,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: CTA.phone,
    href: CTA.whatsapp,
  },
];

export function FinalCTA() {
  return (
    <section className="bg-fi-primary py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <SectionReveal className="mb-12">
          <h2
            className="font-display font-[400] text-white text-center leading-[1.0] mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            El momento de actuar
            <br />
            es ahora.
          </h2>
          <p className="font-sans text-[18px] text-white/70 max-w-xl mx-auto leading-relaxed">
            El call está abierto con cupos limitados. Da el primer paso hoy — una
            conversación sin compromiso.
          </p>
        </SectionReveal>

        {/* Editorial inline actions */}
        <SectionReveal delay={100} className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {actions.map((action, i) => {
              const Icon = action.icon;
              return (
                <div key={action.label} className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 group w-full sm:w-auto justify-center"
                  >
                    <Icon size={18} className="text-white shrink-0" />
                    <div className="text-left">
                      <div className="font-sans text-[16px] font-semibold text-white leading-tight relative inline-block">
                        {action.label}
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-editorial" />
                      </div>
                      <div className="font-sans text-[12px] text-white/60 leading-tight mt-0.5">
                        {action.sublabel}
                      </div>
                    </div>
                  </a>

                  {/* Separator */}
                  {i < actions.length - 1 && (
                    <>
                      {/* Desktop vertical */}
                      <div className="hidden sm:block w-px h-12 bg-white/20 shrink-0" />
                      {/* Mobile horizontal */}
                      <div className="sm:hidden w-full h-px bg-white/20 my-1" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <p className="font-sans text-[11px] text-white/40">
            Documento confidencial — Uso exclusivo para inversionistas · Lima, Perú · 2026
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
