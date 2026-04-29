"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatBlock } from "@/components/ui/StatBlock";
import { Hairline } from "@/components/ui/Hairline";
import { STATS_TRACK_RECORD, ALLIES, TEAM } from "@/lib/constants";

export function TrackRecord() {
  return (
    <section id="track-record" className="bg-fi-light py-20 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <span className="eyebrow text-fi-primary mb-4 block">
            Powered by{" "}
            <a
              href="https://www.redesignlab.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-fi-ink transition-colors duration-200"
            >
              Redesign Lab
            </a>
          </span>
          <h2 className="font-display text-display-lg text-fi-ink mb-6">
            Más de 5 años construyendo
            <br />
            negocios de impacto en Perú.
          </h2>
          <p className="font-sans text-[18px] text-fi-ink/70 leading-relaxed max-w-3xl">
            Redesign Lab ha diseñado, financiado y escalado más de 10 empresas
            sostenibles en Loreto, Madre de Dios, Ucayali, San Martín, Ancash,
            Lima e Ica — con alianzas activas en tres continentes.
          </p>
        </SectionReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-10 mb-20">
          {STATS_TRACK_RECORD.map((stat, i) => {
            const isNumeric = stat.value === "10" || stat.value === "+120";
            return (
              <SectionReveal key={stat.value} delay={i * 100}>
                <StatBlock
                  value={stat.value}
                  label={stat.label}
                  accent="primary"
                  numeric={isNumeric}
                />
              </SectionReveal>
            );
          })}
        </div>

        <Hairline color="#e6e3da" className="mb-14" />

        {/* Institutional allies */}
        <SectionReveal className="mb-14">
          <h3 className="eyebrow text-fi-ink/40 mb-8">Aliados del Ecosistema</h3>
          <div className="grid md:grid-cols-3 gap-0">
            {ALLIES.map((group, i) => (
              <SectionReveal key={group.group} delay={i * 100}>
                <div className="pl-8 relative">
                  <div className="absolute left-0 top-0 bottom-0 flex">
                    <Hairline direction="vertical" color="#e6e3da" animated delay={i * 100} className="h-full" />
                  </div>
                  <p className="eyebrow text-fi-ink/40 mb-4">{group.group}</p>
                  <p className="font-sans text-[14px] text-fi-ink leading-relaxed">
                    {group.names.join(" · ")}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        <Hairline color="#e6e3da" className="mb-14" />

        {/* Cofounders — no card container */}
        <SectionReveal className="mb-8">
          <h3 className="eyebrow text-fi-ink/40 mb-10">Co-fundadores</h3>
        </SectionReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {TEAM.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 120}>
              <div className="flex flex-col sm:flex-row gap-0 overflow-hidden">
                {/* Photo */}
                <div className="w-full sm:w-2/5 shrink-0 relative" style={{ aspectRatio: "4/5" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Bio */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h4 className="font-display text-[28px] font-[500] text-fi-ink mb-1 relative inline-block group">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:text-fi-primary transition-colors duration-200 group"
                      >
                        {member.name}
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-fi-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-editorial" />
                      </a>
                    ) : (
                      member.name
                    )}
                  </h4>
                  <p className="eyebrow text-fi-primary mt-1 mb-6">{member.role}</p>
                  <ul className="space-y-2">
                    {member.highlights.map((h) => (
                      <li key={h} className="font-sans text-[14px] text-fi-ink/70 flex gap-3 items-start leading-relaxed">
                        <span className="shrink-0 mt-0.5 text-fi-ink/30">—</span>
                        {h}
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
