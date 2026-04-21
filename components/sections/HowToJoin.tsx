"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { STEPS, CTA } from "@/lib/constants";

export function HowToJoin() {
  return (
    <section id="como-participar" className="bg-fi-dark py-24 lg:py-32 overflow-hidden relative">

      {/* BG grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="text-center mb-20">
          <span className="section-label text-fi-primary mb-4 block">
            Proceso de inversión
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Súmate en 4 pasos.
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
            Un proceso claro, seguro y sin burocracia. Desde el primer contacto
            hasta el contrato firmado en menos de dos semanas.
          </p>
        </SectionReveal>

        {/* Steps */}
        <div className="relative mb-20">

          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-white/8 z-0" />

          <div className="grid md:grid-cols-4 gap-10 lg:gap-8">
            {STEPS.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 120} className="relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">

                  {/* Ghost number + small label */}
                  <div className="relative mb-6 flex items-end gap-3 md:block">
                    <span className="text-[4.5rem] font-black leading-none text-white/[0.04] select-none absolute -top-3 -left-2 hidden md:block">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 rounded-full border border-fi-primary/30 bg-fi-dark flex items-center justify-center relative z-10">
                      <span className="text-fi-primary font-bold text-lg tracking-tight">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-white/35 text-sm mb-6 tracking-wide">
              El primer paso es una conversación. Sin compromiso.
            </p>
            <Button
              href={CTA.calendar}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<Calendar size={18} />}
            >
              Agendar mi entrevista 1:1
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
