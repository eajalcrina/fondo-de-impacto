"use client";

import React from "react";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTA } from "@/lib/constants";

export function FinalCTA() {
  const actions = [
    {
      icon: <Calendar size={20} />,
      label: "Agendar entrevista 1:1",
      sublabel: "Conversación directa con los fundadores",
      href: CTA.calendar,
      style: "bg-white text-fi-primary hover:bg-white/95",
    },
    {
      icon: <Mail size={20} />,
      label: "Escribir por email",
      sublabel: "eddie@redesignlab.org",
      href: CTA.email,
      style: "border border-white/40 text-white hover:bg-white/10",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      sublabel: "+51 989 338 401",
      href: CTA.whatsapp,
      style: "border border-white/40 text-white hover:bg-white/10",
    },
  ];

  return (
    <section className="bg-fi-primary py-24 lg:py-32 relative overflow-hidden">

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-white/10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <SectionReveal className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            El momento de actuar
            <br />
            es ahora.
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            El call está abierto con cupos limitados. Da el primer paso
            hoy — una conversación sin compromiso.
          </p>
        </SectionReveal>

        {/* CTA buttons */}
        <SectionReveal delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm",
                  "transition-all duration-200 min-w-[200px] justify-center",
                  action.style,
                ].join(" ")}
              >
                <span className="shrink-0">{action.icon}</span>
                <div className="text-left">
                  <div className="font-bold leading-tight">{action.label}</div>
                  <div className="text-xs opacity-60 font-normal">{action.sublabel}</div>
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>

        {/* Confidentiality note */}
        <SectionReveal delay={200}>
          <p className="text-white/30 text-xs">
            Documento confidencial — Uso exclusivo para inversionistas · Lima, Perú · 2026
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
