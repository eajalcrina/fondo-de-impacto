"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Hairline } from "@/components/ui/Hairline";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

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
    <section id="que-es" className="bg-fi-light">
      {/* Top half — light background with header */}
      <div className="pt-20 sm:pt-32 lg:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            {/* Asymmetric header — text left, description right on large screens */}
            <div className="grid grid-cols-12 gap-y-6 gap-x-8 items-end mb-0">
              <div className="col-span-12 lg:col-span-7">
                <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-fi-primary mb-4 block">
                  Powered by{" "}
                  <a
                    href="https://redesignlab.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-fi-ink transition-colors duration-200"
                  >
                    Redesign Lab
                  </a>
                </span>
                <h2 className="font-display text-display-lg text-fi-ink">
                  Aceleramos negocios
                  <br />
                  con capital de impacto.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <p className="font-sans text-[17px] text-fi-ink/55 leading-relaxed">
                  Fondo de Impacto conecta inversionistas ángel con marcas peruanas
                  construidas sobre la biodiversidad amazónica y andina. No es un
                  fondo de riesgo. Es retorno garantizado con propósito real.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Dark band — pillars with visual contrast */}
      <div className="relative overflow-hidden">
        <div className="bg-fi-dark py-16 sm:py-20 relative">
          <NoiseOverlay opacity="opacity-[0.03]" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(192,84,28,0.05) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-0">
              {pillars.map((pillar, i) => (
                <SectionReveal key={pillar.title} delay={i * 120}>
                  <div className="relative py-8 md:py-0 md:px-8 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0">
                    {/* Vertical hairline (desktop) */}
                    {i > 0 && (
                      <div className="hidden md:block absolute left-0 top-0 bottom-0">
                        <Hairline
                          direction="vertical"
                          color="rgba(255,255,255,0.08)"
                          animated
                          delay={i * 120}
                          className="h-full"
                        />
                      </div>
                    )}
                    {/* Horizontal hairline (mobile) */}
                    {i > 0 && (
                      <div className="md:hidden absolute top-0 left-0 right-0">
                        <Hairline color="rgba(255,255,255,0.08)" />
                      </div>
                    )}

                    {/* Large number accent */}
                    <div
                      className="font-display text-[56px] sm:text-[64px] font-[300] leading-none text-fi-primary/15 mb-4 select-none"
                      aria-hidden
                    >
                      {pillar.number}
                    </div>

                    <h3 className="font-display text-[22px] sm:text-display-sm text-white mb-3 font-[500]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[14px] text-white/50 leading-relaxed max-w-[32ch]">
                      {pillar.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — pull quote on light background */}
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-start-2 md:col-span-9 lg:col-start-2 lg:col-span-7 relative pl-8">
                {/* Accent border — fi-primary instead of fi-line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-fi-primary/30" />
                <p className="font-display italic text-[26px] lg:text-[32px] font-[400] text-fi-ink/50 leading-[1.2]">
                  Invertimos en los negocios que el planeta necesita hoy.
                </p>
                <p className="font-sans text-[12px] text-fi-ink/35 mt-5 tracking-[0.15em]">
                  REDESIGN LAB · Lima, Perú
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
