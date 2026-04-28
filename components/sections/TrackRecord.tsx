"use client";

import React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatBlock } from "@/components/ui/StatBlock";
import { STATS_TRACK_RECORD, ALLIES, TEAM } from "@/lib/constants";

export function TrackRecord() {
  return (
    <section id="track-record" className="bg-fi-primary py-24 lg:py-32 overflow-hidden relative">

      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <span className="section-label text-white/50 mb-4 block">
            Powered by{" "}
            <a
              href="https://www.redesignlab.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Redesign Lab
            </a>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Más de 5 años construyendo negocios de impacto en Perú.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Redesign Lab ha diseñado, financiado y escalado más de 10 empresas
            sostenibles en Loreto, Madre de Dios, Ucayali, San Martín, Ancash,
            Lima e Ica — con alianzas activas en tres continentes.
          </p>
        </SectionReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-20">
          {STATS_TRACK_RECORD.map((stat, i) => (
            <SectionReveal key={stat.value} delay={i * 100}>
              <StatBlock value={stat.value} label={stat.label} accent="white" />
            </SectionReveal>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-14" />

        {/* Institutional allies */}
        <SectionReveal className="mb-14">
          <h3 className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            Aliados del Ecosistema
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ALLIES.map((group, i) => (
              <SectionReveal key={group.group} delay={i * 100}>
                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
                  <p className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-3">
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.names.map((name) => (
                      <span
                        key={name}
                        className="bg-white/10 text-white text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-14" />

        {/* Cofounders */}
        <SectionReveal className="mb-4">
          <h3 className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            Co-fundadores
          </h3>
        </SectionReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {TEAM.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 120}>
              <div className="bg-white/10 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden flex flex-col sm:flex-row h-full min-h-[220px]">
                {/* @ts-ignore */}
                {member.image ? (
                  <div className="w-full sm:w-2/5 shrink-0 relative min-h-[240px] sm:min-h-full">
                    <img
                      src={(member as any).image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full sm:w-2/5 shrink-0 bg-white/5 flex items-center justify-center min-h-[240px] sm:min-h-full">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                )}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <h4 className="text-white font-bold text-lg mb-0.5">
                    {/* @ts-ignore - handled dynamically */}
                    {member.linkedin ? (
                      <a
                        href={(member as any).linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fi-light transition-colors hover:underline"
                      >
                        {member.name}
                      </a>
                    ) : (
                      member.name
                    )}
                  </h4>
                  <p className="text-fi-light/60 text-xs uppercase tracking-wider font-medium mb-4 mt-1">
                    {member.role}
                  </p>
                  <ul className="space-y-2">
                    {member.highlights.map((h) => (
                      <li key={h} className="text-white/60 text-sm flex gap-3 items-start">
                        <span className="text-fi-light/40 mt-1 uppercase text-xs">·</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
