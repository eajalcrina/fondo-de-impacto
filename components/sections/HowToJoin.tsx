"use client";

import { useRef } from "react";
import { Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { STEPS, CTA } from "@/lib/constants";

export function HowToJoin() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-20% 0px" });

  return (
    <section id="como-participar" className="bg-fi-dark py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <span className="eyebrow text-fi-sage mb-4 block">Proceso de inversión</span>
          <h2 className="font-display text-display-lg text-white mb-4">
            Súmate en 4 simples pasos.
          </h2>
          <p className="font-sans text-[18px] text-white/50 max-w-2xl leading-relaxed">
            Un proceso claro, seguro y sin burocracia. Desde el primer contacto
            hasta el contrato firmado en menos de dos semanas.
          </p>
        </SectionReveal>

        {/* Stepper */}
        <div className="relative mb-16">
          {/* Animated connector line — desktop, sits BELOW the numbers */}
          <div ref={lineRef} className="hidden md:block absolute top-[76px] left-0 right-0 h-px overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              className="absolute inset-0 bg-fi-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 120} className="relative z-10">
                <div className="flex flex-col md:items-start">
                  {/* Mobile vertical connector */}
                  {i < STEPS.length - 1 && (
                    <div className="md:hidden absolute left-4 top-16 w-px h-16 bg-white/10" />
                  )}

                  {/* Number sits above the line with a fi-dark bg gap to visually clear the line */}
                  <span className="font-display text-[64px] font-[400] text-white/50 leading-none mb-3 pr-3 bg-fi-dark inline-block">
                    {step.number}
                  </span>
                  <h3 className="font-display text-[22px] font-[400] text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[14px] text-white/50 leading-relaxed">
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
            <p className="font-sans text-[14px] text-white/40 mb-6">
              El primer paso es una conversación. Sin compromiso.
            </p>
            <Button
              href={CTA.calendar}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<Calendar size={16} />}
            >
              Agendar mi entrevista 1:1
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
