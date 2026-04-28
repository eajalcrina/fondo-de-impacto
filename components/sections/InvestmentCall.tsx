"use client";

import { Lock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { CountUp } from "@/components/ui/CountUp";
import { Hairline } from "@/components/ui/Hairline";
import { PROJECTS } from "@/lib/constants";

export function InvestmentCall() {
  return (
    <section id="call-2026" className="bg-fi-dark py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <Badge color="sage" className="mb-6">Investment Call 2026 · I</Badge>
          <h2 className="font-display text-display-lg text-white mb-6">
            Una sola oportunidad.
            <br />
            Dos mercados.
          </h2>
          <p className="font-sans text-[18px] text-white/60 max-w-2xl leading-relaxed">
            Levantamos S/ 300,000 bajo un instrumento de deuda sin dilución, a 12 meses
            con 10% de retorno fijo anual. El capital se distribuye en dos marcas con
            operaciones activas y mercado validado.
          </p>
        </SectionReveal>

        {/* Highlight fringe — editorial 3-column strip */}
        <SectionReveal className="mb-16">
          <div className="py-16 relative">
            <Hairline color="rgba(255,255,255,0.15)" />
            <div className="pt-12 pb-12 grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Capital */}
              <div className="text-center md:text-left md:pr-8">
                <div className="eyebrow text-white/40 mb-4">Capital</div>
                <div className="font-display font-[400] leading-none text-white mb-2" style={{ fontSize: "4.5rem", fontFeatureSettings: '"tnum"' }}>
                  <CountUp value={300000} format="currency-soles" />
                </div>
              </div>

              {/* Vertical divider + Retorno */}
              <div className="relative text-center md:px-8 mt-10 md:mt-0">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/10" />
                <div className="eyebrow text-white/40 mb-4">Retorno</div>
                <div className="font-display font-[400] leading-none text-white mb-2" style={{ fontSize: "4.5rem", fontFeatureSettings: '"tnum"' }}>
                  <CountUp value={10} format="percent" />
                  <span className="font-sans text-[13px] text-white/50 ml-2 align-middle">anual</span>
                </div>
              </div>

              {/* Devolución */}
              <div className="text-center md:text-right md:pl-8 mt-10 md:mt-0">
                <div className="eyebrow text-white/40 mb-4">Devolución</div>
                <div className="font-display font-[400] leading-none text-white mb-2" style={{ fontSize: "4.5rem", fontFeatureSettings: '"tnum"' }}>
                  <CountUp value={330000} format="currency-soles" />
                </div>
                <div className="font-sans text-[12px] text-white/40 mt-1">Mes 12</div>
              </div>
            </div>

            {/* Mobile horizontal dividers */}
            <div className="md:hidden">
              <Hairline color="rgba(255,255,255,0.1)" className="my-4" />
            </div>

            <Hairline color="rgba(255,255,255,0.15)" />

            {/* Terms — plain text, no pills */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
              {[
                "10% fijo",
                "12 meses",
                "Deuda sin dilución",
                "Ticket mín. S/ 10,000",
                "Contrato notarial",
              ].map((term, i) => (
                <span key={term} className="font-sans text-[13px] text-white/50 tracking-wide flex items-center gap-4">
                  {i > 0 && <span className="text-white/20">·</span>}
                  {term}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Project cards — split panel díptico */}
        <div id="proyectos" className="grid md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Confidentiality note */}
        <SectionReveal>
          <div className="py-5">
            <Hairline color="rgba(255,255,255,0.1)" className="mb-5" />
            <div className="flex items-start gap-3">
              <Lock size={12} className="text-white/40 mt-0.5 shrink-0" />
              <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                La información financiera detallada de cada proyecto —proyecciones,
                uso de fondos y modelo operativo— está disponible en el{" "}
                <strong className="font-semibold text-white/60">data room</strong>,
                accesible desde el paso 3 del proceso de inversión.
              </p>
            </div>
            <Hairline color="rgba(255,255,255,0.1)" className="mt-5" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  // Split margin field "Concept Store - Cuzco" → ["Concept Store", "Cuzco"]
  const [hitoMain, hitoSub] = project.margin.split(" - ");

  return (
    <SectionReveal delay={index * 100}>
      <div
        ref={cardRef}
        className="relative overflow-hidden group"
        style={{ aspectRatio: "5/6" }}
      >
        {/* Animated hairline top — project color */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px z-20 origin-left"
          style={{ backgroundColor: project.color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid grid-cols-12 h-full">
          {/* Left panel — project color (7 cols) */}
          <div
            className="col-span-7 relative overflow-hidden p-6 md:p-10 lg:p-14 flex flex-col justify-between"
            style={{ backgroundColor: project.color }}
          >
            {/* Content */}
            <div className="relative z-10">
              <div className="font-display text-[12px] tracking-widest text-white/40 mb-1">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-white mb-6">
                {project.name}
              </div>

              <h3 className="font-display text-[clamp(1.25rem,3.5vw,3rem)] font-[400] text-white leading-[1.05]">
                {project.tagline}
              </h3>
            </div>

            <div className="relative z-10">
              <span className="eyebrow text-white/50">
                {project.category}
              </span>
            </div>
          </div>

          {/* Right panel — fi-dark ficha (5 cols) */}
          <div className="col-span-5 bg-fi-dark p-4 md:p-8 lg:p-10 flex flex-col">
            <div className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-fi-sage mb-3">
              Ficha
            </div>
            <div className="h-px bg-white/15 mb-6" />

            <div className="space-y-0 flex-1">
              {/* Inversión */}
              <div className="pb-5">
                <div className="eyebrow text-white/40 mb-2">Inversión</div>
                <div className="font-display text-[clamp(1.1rem,2.5vw,2rem)] font-[400] text-white leading-none" style={{ fontFeatureSettings: '"tnum"' }}>
                  {project.investment}
                </div>
              </div>
              <div className="h-px bg-white/15" />

              {/* Hito principal */}
              <div className="py-5">
                <div className="eyebrow text-white/40 mb-2">Hito principal</div>
                <div className="font-sans text-[18px] font-[500] text-white leading-tight">
                  {hitoMain}
                </div>
                {hitoSub && (
                  <div className="font-sans text-[14px] text-white/60 mt-0.5">{hitoSub}</div>
                )}
              </div>
              <div className="h-px bg-white/15" />

              {/* Descripción */}
              <div className="pt-5">
                <div className="eyebrow text-white/40 mb-2">Descripción</div>
                <p className="font-sans text-[13px] text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
