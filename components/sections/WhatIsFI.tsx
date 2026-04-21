"use client";

import React from "react";
import { Leaf, Shield, Network } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const pillars = [
  {
    icon: <Leaf size={22} />,
    title: "Impacto real",
    description:
      "Negocios que generan valor económico, social y ambiental en comunidades de la Amazonía y los Andes peruanos.",
  },
  {
    icon: <Shield size={22} />,
    title: "Retorno garantizado",
    description:
      "Instrumento de deuda con tasa fija del 10% anual, pago bullet al mes 12 y contrato notarial firmado por los fundadores.",
  },
  {
    icon: <Network size={22} />,
    title: "Ecosistema vivo",
    description:
      "Al invertir, formas parte de una red de innovación con presencia global y alianzas con IDB, MIT, GIZ, WWF y más.",
  },
];

export function WhatIsFI() {
  return (
    <section id="que-es" className="bg-fi-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header — left-aligned, asymmetric */}
        <SectionReveal className="mb-20 max-w-3xl">
          <span className="section-label text-fi-primary mb-4 block">
            Quiénes somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-fi-dark leading-tight mb-6">
            Aceleramos negocios
            <br />
            con capital de impacto.
          </h2>
          <p className="text-fi-dark/60 text-lg leading-[1.8] max-w-[60ch]">
            Fondo de Impacto es la plataforma de inversión de Redesign Lab: un
            ecosistema de financiamiento que conecta inversionistas ángel con
            marcas peruanas construidas sobre la biodiversidad amazónica y
            andina. No es un fondo de riesgo. Es retorno garantizado con
            propósito real.
          </p>
        </SectionReveal>

        {/* Pillars — zig-zag rows, no cards */}
        <div className="mb-20">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 100}>
              <div
                className={[
                  "flex gap-10 lg:gap-20 items-start py-10 border-b border-fi-dark/10",
                  i % 2 === 1 ? "flex-row-reverse" : "",
                ].join(" ")}
              >
                {/* Icon block */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-fi-primary/10 flex items-center justify-center text-fi-primary">
                    {pillar.icon}
                  </div>
                </div>

                {/* Text block */}
                <div className="flex-1 pt-1">
                  <div className="w-6 h-[2px] bg-fi-primary mb-4" />
                  <h3 className="text-xl font-bold text-fi-dark mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-fi-dark/60 text-base leading-[1.75] max-w-[55ch]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Tagline */}
        <SectionReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-fi-primary/30" />
            <p className="text-fi-primary italic text-lg font-medium">
              &ldquo;Invertimos en los negocios que el planeta necesita hoy.&rdquo;
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
