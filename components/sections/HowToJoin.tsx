"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { STEPS, CTA } from "@/lib/constants";

export function HowToJoin() {
  return (
    <section id="como-participar" className="bg-fi-dark py-24 lg:py-32 overflow-hidden relative">

      {/* BG accents */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="section-label text-fi-primary mb-4 block">
            Proceso de inversión
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Súmate en 4 simples pasos.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Un proceso claro, seguro y sin burocracia. Desde el primer contacto
            hasta el contrato firmado en menos de dos semanas.
          </p>
        </SectionReveal>

        {/* Steps — desktop horizontal / mobile vertical */}
        <div className="relative mb-16">

          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-white/10 z-0" />

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 120} className="relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">

                  {/* Number bubble */}
                  <div className="w-20 h-20 rounded-full bg-fi-dark border-2 border-fi-primary/40 flex items-center justify-center mb-6 relative group-hover:border-fi-primary transition-colors">
                    <span className="text-fi-primary font-bold text-2xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* CTA inline */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-white/40 text-sm mb-6">
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
