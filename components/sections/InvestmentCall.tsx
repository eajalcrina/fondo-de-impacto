"use client";

import React from "react";
import { ArrowRight, Lock } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PROJECTS, CTA } from "@/lib/constants";

export function InvestmentCall() {
  return (
    <section id="call-2026" className="bg-fi-dark py-24 lg:py-32 overflow-hidden relative">

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-fi-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-fi-sage/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16 text-center">
          <Badge color="white" className="mb-6">
            Investment Call 2026 · I
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Una sola oportunidad.
            <br />
            <span className="text-fi-primary">Dos mercados de alto potencial.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Levantamos S/ 300,000 bajo un instrumento de deuda sin dilución, a 12 meses
            con 10% de retorno fijo anual. El capital se distribuye en dos marcas con
            operaciones activas y mercado validado.
          </p>
        </SectionReveal>

        {/* Highlight box */}
        <SectionReveal className="mb-16">
          <div className="bg-fi-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                {/* Capital */}
                <div className="text-center md:text-left">
                  <p className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    Capital objetivo
                  </p>
                  <p className="text-white font-bold text-5xl md:text-6xl tracking-tight">
                    S/ 300,000
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                  <span className="text-white/50 text-xs">mes 12</span>
                </div>

                {/* Return */}
                <div className="text-center md:text-right">
                  <p className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    Retorno garantizado
                  </p>
                  <p className="text-white font-bold text-5xl md:text-6xl tracking-tight">
                    S/ 330,000
                  </p>
                </div>
              </div>

              {/* Terms strip */}
              <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-white/20">
                {[
                  "10% fijo anual",
                  "12 meses",
                  "Deuda · Sin dilución",
                  "Ticket mín. S/ 10,000",
                  "Contrato notarial",
                ].map((term) => (
                  <span
                    key={term}
                    className="bg-white/15 text-white text-xs font-semibold px-4 py-2 rounded-full"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Project cards */}
        <div id="proyectos" className="grid md:grid-cols-2 gap-6 mb-8">
          {PROJECTS.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 150}>
              <div
                className="border border-white/10 rounded-3xl p-8 h-full hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group shadow-xl"
                style={{ backgroundColor: project.color }}
              >
                {/* Subtle highlight glow instead of border color */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] bg-white/20"
                />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-3 bg-black/20 border border-white/10"
                    >
                      {project.name}
                    </span>
                    <p className={`text-xs tracking-wider uppercase font-medium ${project.id === "rareby" ? "text-white/90" : "text-white/50"}`}>
                      {project.category}
                    </p>
                  </div>
                </div>

                <h3 className="text-white font-bold text-2xl mb-3 leading-tight">
                  {project.tagline}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${project.id === "rareby" ? "text-white/90" : "text-white/50"}`}>
                  {project.description}
                </p>

                <div className={`flex gap-4 pt-6 border-t ${project.id === "rareby" ? "border-white/30" : "border-white/10"}`}>
                  <div>
                    <p className={`text-xs uppercase tracking-wider mb-1 ${project.id === "rareby" ? "text-white/80" : "text-white/40"}`}>
                      Inversión
                    </p>
                    <p className="text-white font-bold text-lg">
                      {project.investment}
                    </p>
                  </div>
                  <div className={`w-px ${project.id === "rareby" ? "bg-white/30" : "bg-white/10"}`} />
                  <div>
                    <p className={`text-xs uppercase tracking-wider mb-1 ${project.id === "rareby" ? "text-white/80" : "text-white/40"}`}>
                      Hito principal
                    </p>
                    <p className="text-white font-bold text-lg">{project.margin}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Confidentiality note */}
        <SectionReveal>
          <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-5 border border-white/10">
            <Lock size={14} className="text-fi-sage mt-0.5 shrink-0" />
            <p className="text-fi-sage text-xs leading-relaxed">
              La información financiera detallada de cada proyecto —proyecciones,
              uso de fondos y modelo operativo— está disponible en el{" "}
              <strong className="font-semibold">data room</strong>, accesible
              desde el paso 3 del proceso de inversión.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
