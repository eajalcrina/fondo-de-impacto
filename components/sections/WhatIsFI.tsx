"use client";

import { Leaf, Shield, Network } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Hairline } from "@/components/ui/Hairline";

const pillars = [
  {
    icon: Leaf,
    title: "Impacto real",
    description:
      "Negocios que generan valor económico, social y ambiental en comunidades de la Amazonía y los Andes peruanos.",
  },
  {
    icon: Shield,
    title: "Retorno garantizado",
    description:
      "Instrumento de deuda con tasa fija del 10% anual, pago bullet al mes 12 y contrato notarial firmado por los fundadores.",
  },
  {
    icon: Network,
    title: "Ecosistema vivo",
    description:
      "Al invertir, formas parte de una red de innovación con presencia global y alianzas con IDB, MIT, GIZ, WWF y más.",
  },
];

export function WhatIsFI() {
  return (
    <section id="que-es" className="bg-fi-light py-32 lg:py-40">
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
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
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

                  <Icon size={24} className="text-fi-primary mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-display-sm text-fi-ink mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[14px] text-fi-ink/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Pull-quote */}
        <SectionReveal>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-start-2 md:col-span-8 relative">
              <span
                className="absolute -top-8 -left-4 font-display text-[80px] leading-none text-fi-primary/30 select-none"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="font-display italic text-[32px] font-[400] text-fi-primary leading-tight">
                Invertimos en los negocios que el planeta necesita hoy.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
