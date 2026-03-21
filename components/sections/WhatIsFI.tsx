"use client";

import React from "react";
import { Leaf, Shield, Network } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const pillars = [
  {
    icon: <Leaf size={24} />,
    title: "Impacto real",
    description:
      "Negocios que generan valor económico, social y ambiental en comunidades de la Amazonía y los Andes peruanos.",
  },
  {
    icon: <Shield size={24} />,
    title: "Retorno garantizado",
    description:
      "Instrumento de deuda con tasa fija del 10% anual, pago bullet al mes 12 y contrato notarial firmado por los fundadores.",
  },
  {
    icon: <Network size={24} />,
    title: "Ecosistema vivo",
    description:
      "Al invertir, formas parte de una red de innovación con presencia global y alianzas con IDB, MIT, GIZ, WWF y más.",
  },
];

export function WhatIsFI() {
  return (
    <section id="que-es" className="bg-fi-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16 max-w-3xl">
          <span className="section-label text-fi-primary mb-4 block">
            Quiénes somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-fi-dark leading-tight mb-6">
            Aceleramos negocios
            <br />
            con capital de impacto.
          </h2>
          <p className="text-fi-dark/60 text-lg leading-relaxed">
            Fondo de Impacto es la plataforma de inversión de Redesign Lab: un
            ecosistema de financiamiento que conecta inversionistas ángel con
            marcas peruanas construidas sobre la biodiversidad amazónica y
            andina. No es un fondo de riesgo. Es una oportunidad de retorno
            garantizado con propósito real.
          </p>
        </SectionReveal>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 120}>
              <div className="bg-white rounded-3xl p-8 h-full border border-fi-dark/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-fi-primary/10 flex items-center justify-center text-fi-primary mb-6 group-hover:bg-fi-primary group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-fi-dark mb-3">
                  {pillar.title}
                </h3>
                <p className="text-fi-dark/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Tagline */}
        <SectionReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-16 bg-fi-primary/30" />
              <p className="text-fi-primary italic text-lg font-medium">
                &ldquo;Invertimos en los negocios que el planeta necesita hoy.&rdquo;
              </p>
              <div className="h-px w-16 bg-fi-primary/30" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
