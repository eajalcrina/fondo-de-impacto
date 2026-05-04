"use client";

import { Calendar, Mail, MessageCircle } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CTA } from "@/lib/constants";

const secondaryActions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: CTA.phone,
    href: CTA.whatsapp,
  },
  {
    icon: Mail,
    label: "Email",
    sublabel: CTA.contactEmail,
    href: CTA.email,
  },
];

export function FinalCTA() {
  return (
    <section className="bg-fi-primary py-20 sm:py-32 lg:py-40 overflow-hidden relative">
      {/* Noise texture for depth */}
      <NoiseOverlay opacity="opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <SectionReveal className="mb-10">
          <h2
            className="font-display font-[700] text-white leading-[1.0] mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            El momento de actuar
            <br />
            es ahora.
          </h2>
          <p className="font-sans text-[18px] text-white/85 max-w-xl mx-auto leading-relaxed">
            El call está abierto con cupos limitados. Da el primer paso hoy —
            una conversación sin compromiso.
          </p>
        </SectionReveal>

        {/* Primary CTA */}
        <SectionReveal delay={80} className="mb-8">
          <div className="flex justify-center">
            <Button
              href={CTA.calendar}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-white"
              size="lg"
              icon={<Calendar size={16} />}
            >
              Agendar entrevista 1:1
            </Button>
          </div>
        </SectionReveal>

        {/* Secondary channels */}
        <SectionReveal delay={160} className="mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {secondaryActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <div key={action.label} className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3 group w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-fi-primary rounded"
                  >
                    <Icon size={15} className="text-white/70 shrink-0" />
                    <div className="text-left">
                      <div className="font-sans text-[14px] font-semibold text-white/85 leading-tight relative inline-block">
                        {action.label}
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white/60 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-editorial" />
                      </div>
                      <div className="font-sans text-[11px] text-white/55 leading-tight mt-0.5">
                        {action.sublabel}
                      </div>
                    </div>
                  </a>

                  {i < secondaryActions.length - 1 && (
                    <>
                      <div className="hidden sm:block w-px h-8 bg-white/20 shrink-0 mx-2" />
                      <div className="sm:hidden w-8 h-px bg-white/20 my-2" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={240}>
          <p className="font-sans text-[11px] text-white/60">
            Documento confidencial — Uso exclusivo para inversionistas · Lima, Perú · 2026
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
