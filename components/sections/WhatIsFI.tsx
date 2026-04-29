"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Hairline } from "@/components/ui/Hairline";

const pillars = [
  {
    number: "01",
    title: "Impacto real",
    description:
      "Negocios que generan valor económico, social y ambiental en comunidades de la Amazonía y los Andes peruanos.",
  },
  {
    number: "02",
    title: "Retorno garantizado",
    description:
      "Instrumento de deuda con tasa fija del 10% anual, pago bullet al mes 12 y contrato notarial firmado por los fundadores.",
  },
  {
    number: "03",
    title: "Ecosistema vivo",
    description:
      "Al invertir, formas parte de una red de innovación con presencia global y alianzas con IDB, MIT, GIZ, WWF y más.",
  },
];

export function WhatIsFI() {
  return (
    <section id="que-es" className="bg-fi-light py-20 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <span className="eyebrow text-fi-primary mb-4 block">Quiénes somos</span>
          <h2 className="font-display text-display-lg text-fi-ink mb-6">
            Aceleramos negocios
            <br />
            con capital de impacto.
          </h2>
          <p className="font-sans text-[18px] text-fi-ink/60 leading-relaxed max-w-3xl">
            Fondo de Impacto es la plataforma de inversión de Redesign Lab: un ecosistema
            de financiamiento que conecta inversionistas ángel con marcas peruanas
            construidas sobre la biodiversidad amazónica y andina. No es un fondo de
            riesgo. Es una oportunidad de retorno garantizado con propósito real.
          </p>
        </SectionReveal>

        {/* Pillars — editorial blocks with vertical hairlines */}
        <div className="grid md:grid-cols-3 gap-0 mb-20">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 120}>
              <div className="pl-8 pr-6 relative">
                {/* Animated vertical hairline left edge */}
                <div className="absolute left-0 top-0 bottom-0 flex">
                  <Hairline
                    direction="vertical"
                    color="#e6e3da"
                    animated
                    delay={i * 120}
                    className="h-full"
                  />
                </div>

                {/* Editorial number instead of icon */}
                <div className="font-display text-[11px] tracking-[0.3em] text-fi-primary/50 mb-6 font-[400]">
                  {pillar.number}
                </div>

                <h3 className="font-display text-display-sm text-fi-ink mb-3 font-[400]">
                  {pillar.title}
                </h3>
                <p className="font-sans text-[14px] text-fi-ink/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Pull-quote — toned down */}
        <SectionReveal>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-start-2 md:col-span-8 relative pl-8 border-l-2 border-fi-line">
              <p className="font-display italic text-[26px] lg:text-[30px] font-[400] text-fi-ink/60 leading-tight">
                Invertimos en los negocios que el planeta necesita hoy.
              </p>
              <p className="font-sans text-[12px] text-fi-ink/40 mt-4 tracking-[0.1em] uppercase">
                Redesign Lab · Lima, Perú
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
