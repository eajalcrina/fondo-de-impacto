"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Hairline } from "@/components/ui/Hairline";
import { INVESTOR_PROFILES, CTA } from "@/lib/constants";

export function InvestorProfiles() {
  return (
    <section className="bg-fi-light py-20 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Asymmetric header */}
        <SectionReveal className="mb-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow text-fi-primary mb-4 block">Perfiles de inversionista</span>
              <h2 className="font-display text-display-lg text-fi-ink">
                ¿Cuál es tu perfil?
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="font-sans text-[18px] text-fi-ink/60 leading-relaxed">
                Ambos perfiles reciben el mismo retorno: 10% anual fijo,
                pago bullet mes 12, respaldado por contrato notarial.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {INVESTOR_PROFILES.map((profile, i) => (
            <SectionReveal key={profile.tier} delay={i * 150}>
              <div
                className={[
                  "rounded p-6 sm:p-10 h-full border relative overflow-hidden",
                  profile.highlighted
                    ? "bg-fi-dark border-white/10"
                    : "bg-white border-fi-line",
                ].join(" ")}
              >
                {/* Strategic investor label */}
                {profile.highlighted && (
                  <div className="hidden md:block absolute top-8 right-8">
                    <span className="eyebrow text-fi-sage">
                      Para inversionistas estratégicos
                    </span>
                  </div>
                )}

                {/* Tier */}
                <div className="mb-8">
                  <h3
                    className={[
                      "font-display text-[2rem] font-[500] mb-1",
                      profile.highlighted ? "text-white" : "text-fi-ink",
                    ].join(" ")}
                  >
                    {profile.tier}
                  </h3>
                  <p className="eyebrow text-fi-primary mt-1 mb-4">
                    {profile.subtitle}
                  </p>
                  {/* Range with hairline underline */}
                  <div className="relative inline-block">
                    <span
                      className={[
                        "font-sans text-[14px] font-semibold",
                        profile.highlighted ? "text-white" : "text-fi-ink",
                      ].join(" ")}
                    >
                      {profile.range}
                    </span>
                    <div
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{ backgroundColor: "#994215" }}
                    />
                  </div>
                </div>

                <p
                  className={[
                    "font-sans text-[14px] leading-relaxed mb-8",
                    profile.highlighted ? "text-white/60" : "text-fi-ink/60",
                  ].join(" ")}
                >
                  {profile.description}
                </p>

                <Hairline
                  color={profile.highlighted ? "rgba(255,255,255,0.1)" : "#e6e3da"}
                  className="mb-6"
                />

                {/* Ideal para */}
                <div className="mb-6">
                  <p
                    className={[
                      "eyebrow mb-3",
                      profile.highlighted ? "text-white/40" : "text-fi-ink/40",
                    ].join(" ")}
                  >
                    Ideal para
                  </p>
                  <ul className="space-y-1.5">
                    {profile.forWhom.map((item) => (
                      <li
                        key={item}
                        className={[
                          "font-sans text-[14px] flex gap-3 items-start",
                          profile.highlighted ? "text-white/70" : "text-fi-ink/70",
                        ].join(" ")}
                      >
                        <span className="shrink-0 mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Hairline
                  color={profile.highlighted ? "rgba(255,255,255,0.1)" : "#e6e3da"}
                  className="mb-6"
                />

                {/* Benefits */}
                <div>
                  <p
                    className={[
                      "eyebrow mb-3",
                      profile.highlighted ? "text-white/40" : "text-fi-ink/40",
                    ].join(" ")}
                  >
                    Beneficios
                  </p>
                  <ul className="space-y-2">
                    {profile.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className={[
                          "font-sans text-[14px] flex gap-3 items-start",
                          profile.highlighted ? "text-white/70" : "text-fi-ink/70",
                        ].join(" ")}
                      >
                        <span className="shrink-0 text-fi-primary mt-0.5">—</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Note */}
        <SectionReveal>
          <p className="font-sans text-[14px] italic text-fi-ink/50 text-center">
            &ldquo;Ambos perfiles reciben el mismo retorno: 10% anual fijo, pago bullet mes 12,
            respaldado por contrato notarial firmado por los co-fundadores.&rdquo;
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
