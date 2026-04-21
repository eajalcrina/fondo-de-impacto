"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { INVESTOR_PROFILES, CTA } from "@/lib/constants";

export function InvestorProfiles() {
  return (
    <section className="bg-fi-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-label text-fi-primary mb-4 block">
                Perfiles de inversionista
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-fi-dark leading-tight">
                ¿Cuál es tu perfil?
              </h2>
            </div>
            <p className="text-fi-dark/50 text-base max-w-sm leading-relaxed lg:text-right">
              Ambos perfiles reciben el mismo retorno: 10% anual fijo,
              pago bullet mes 12, respaldado por contrato notarial.
            </p>
          </div>
        </SectionReveal>

        {/* Profile cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {INVESTOR_PROFILES.map((profile, i) => (
            <SectionReveal key={profile.tier} delay={i * 150}>
              <div
                className={[
                  "rounded-2xl p-8 h-full transition-all duration-300 relative overflow-hidden",
                  profile.highlighted
                    ? "bg-fi-dark text-white shadow-dark-glow"
                    : "bg-white text-fi-dark shadow-card-dark",
                ].join(" ")}
              >
                {/* Highlighted accent top bar */}
                {profile.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-fi-primary rounded-t-2xl" />
                )}

                {/* Recommended badge */}
                {profile.highlighted && (
                  <div className="absolute top-5 right-6">
                    <span className="flex items-center gap-1.5 bg-fi-primary/20 text-fi-primary text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-wider uppercase">
                      Recomendado
                    </span>
                  </div>
                )}

                {/* Tier */}
                <div className="mb-7">
                  <div className="flex items-start gap-3 mb-3">
                    <h3
                      className={[
                        "text-2xl font-bold leading-tight",
                        profile.highlighted ? "text-white" : "text-fi-dark",
                      ].join(" ")}
                    >
                      {profile.tier}
                    </h3>
                  </div>
                  <p className="text-fi-primary text-xs font-semibold tracking-wider uppercase mb-4">
                    {profile.subtitle}
                  </p>
                  <div
                    className={[
                      "inline-block px-4 py-1.5 rounded-sm text-sm font-bold tracking-tight",
                      profile.highlighted
                        ? "bg-fi-primary text-white"
                        : "bg-fi-dark text-white",
                    ].join(" ")}
                  >
                    {profile.range}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={[
                    "text-sm leading-relaxed mb-7 max-w-[44ch]",
                    profile.highlighted ? "text-white/55" : "text-fi-dark/55",
                  ].join(" ")}
                >
                  {profile.description}
                </p>

                {/* For whom */}
                <div className="mb-7">
                  <p
                    className={[
                      "text-[10px] font-semibold tracking-[0.2em] uppercase mb-3",
                      profile.highlighted ? "text-white/35" : "text-fi-dark/35",
                    ].join(" ")}
                  >
                    Ideal para
                  </p>
                  <ul className="space-y-2">
                    {profile.forWhom.map((item) => (
                      <li
                        key={item}
                        className={[
                          "text-sm flex gap-2.5 items-start",
                          profile.highlighted ? "text-white/65" : "text-fi-dark/65",
                        ].join(" ")}
                      >
                        <ArrowRight
                          size={12}
                          className={[
                            "mt-1 shrink-0",
                            profile.highlighted ? "text-fi-sage" : "text-fi-sage",
                          ].join(" ")}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div
                  className={[
                    "h-px mb-7",
                    profile.highlighted ? "bg-white/8" : "bg-fi-dark/8",
                  ].join(" ")}
                />

                {/* Benefits */}
                <div>
                  <p
                    className={[
                      "text-[10px] font-semibold tracking-[0.2em] uppercase mb-4",
                      profile.highlighted ? "text-white/35" : "text-fi-dark/35",
                    ].join(" ")}
                  >
                    Beneficios
                  </p>
                  <ul className="space-y-2.5">
                    {profile.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 items-start">
                        <div
                          className={[
                            "w-4 h-4 rounded-sm flex items-center justify-center shrink-0 mt-0.5",
                            profile.highlighted
                              ? "bg-fi-primary/25"
                              : "bg-fi-dark/8",
                          ].join(" ")}
                        >
                          <Check
                            size={9}
                            strokeWidth={3}
                            className={
                              profile.highlighted ? "text-fi-primary" : "text-fi-dark/60"
                            }
                          />
                        </div>
                        <span
                          className={[
                            "text-sm leading-snug",
                            profile.highlighted ? "text-white/65" : "text-fi-dark/65",
                          ].join(" ")}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA row */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            <p className="text-fi-dark/40 text-sm italic max-w-md">
              &ldquo;El mismo retorno, el mismo contrato, el mismo propósito — independientemente del ticket.&rdquo;
            </p>
            <Button
              href={CTA.calendar}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-dark"
              size="md"
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              Elegir mi perfil
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
