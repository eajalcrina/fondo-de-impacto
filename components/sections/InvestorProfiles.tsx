"use client";

import React from "react";
import { Check, Star } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { INVESTOR_PROFILES, CTA } from "@/lib/constants";

export function InvestorProfiles() {
  return (
    <section className="bg-fi-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="section-label text-fi-primary mb-4 block">
            Perfiles de inversionista
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-fi-dark leading-tight mb-4">
            ¿Cuál es tu perfil?
          </h2>
          <p className="text-fi-dark/50 text-lg max-w-xl mx-auto">
            Ambos perfiles reciben el mismo retorno: 10% anual fijo,
            pago bullet mes 12, respaldado por contrato notarial.
          </p>
        </SectionReveal>

        {/* Profile cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {INVESTOR_PROFILES.map((profile, i) => (
            <SectionReveal key={profile.tier} delay={i * 150}>
              <div
                className={[
                  "rounded-3xl p-8 h-full border transition-all duration-300 relative overflow-hidden",
                  profile.highlighted
                    ? "bg-fi-dark text-white border-fi-primary shadow-xl shadow-fi-dark/20"
                    : "bg-white text-fi-dark border-fi-dark/10 shadow-sm",
                ].join(" ")}
              >
                {/* Highlighted label */}
                {profile.highlighted && (
                  <div className="absolute top-6 right-6">
                    <span className="flex items-center gap-1 bg-fi-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Star size={10} fill="white" />
                      Recomendado
                    </span>
                  </div>
                )}

                {/* Tier */}
                <div className="mb-6">
                  <h3
                    className={[
                      "text-2xl font-bold mb-1",
                      profile.highlighted ? "text-white" : "text-fi-dark",
                    ].join(" ")}
                  >
                    {profile.tier}
                  </h3>
                  <p
                    className={[
                      "text-xs font-semibold tracking-wider uppercase mb-3",
                      profile.highlighted ? "text-fi-primary" : "text-fi-primary",
                    ].join(" ")}
                  >
                    {profile.subtitle}
                  </p>
                  <div
                    className={[
                      "inline-block px-4 py-1.5 rounded-full text-sm font-bold",
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
                    "text-sm leading-relaxed mb-6",
                    profile.highlighted ? "text-white/60" : "text-fi-dark/60",
                  ].join(" ")}
                >
                  {profile.description}
                </p>

                {/* For whom */}
                <div className="mb-6">
                  <p
                    className={[
                      "text-xs font-semibold tracking-wider uppercase mb-3",
                      profile.highlighted ? "text-white/40" : "text-fi-dark/40",
                    ].join(" ")}
                  >
                    Ideal para
                  </p>
                  <ul className="space-y-1.5">
                    {profile.forWhom.map((item) => (
                      <li
                        key={item}
                        className={[
                          "text-sm flex gap-2 items-start",
                          profile.highlighted ? "text-white/70" : "text-fi-dark/70",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "mt-1 shrink-0",
                            profile.highlighted ? "text-fi-sage" : "text-fi-sage",
                          ].join(" ")}
                        >
                          ·
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div
                  className={[
                    "h-px mb-6",
                    profile.highlighted ? "bg-white/10" : "bg-fi-dark/10",
                  ].join(" ")}
                />

                {/* Benefits */}
                <div>
                  <p
                    className={[
                      "text-xs font-semibold tracking-wider uppercase mb-3",
                      profile.highlighted ? "text-white/40" : "text-fi-dark/40",
                    ].join(" ")}
                  >
                    Beneficios
                  </p>
                  <ul className="space-y-2">
                    {profile.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 items-start">
                        <div
                          className={[
                            "w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                            profile.highlighted
                              ? "bg-fi-primary/20"
                              : "bg-fi-dark/10",
                          ].join(" ")}
                        >
                          <Check
                            size={10}
                            className={
                              profile.highlighted ? "text-fi-primary" : "text-fi-dark"
                            }
                          />
                        </div>
                        <span
                          className={[
                            "text-sm",
                            profile.highlighted ? "text-white/70" : "text-fi-dark/70",
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

        {/* Unifying note */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-fi-dark/50 text-sm italic">
              &ldquo;Ambos perfiles reciben el mismo retorno: 10% anual fijo, pago bullet mes 12,
              respaldado por contrato notarial firmado por los co-fundadores.&rdquo;
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
