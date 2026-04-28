"use client";

import { useRef } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CountUp } from "@/components/ui/CountUp";
import { Hairline } from "@/components/ui/Hairline";

// Noise texture via SVG feTurbulence
const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const snapshot = [
  { label: "CAPITAL OBJETIVO", value: 300000, format: "currency-soles" as const, accent: false },
  { label: "TASA FIJA ANUAL",  value: 10,     format: "percent" as const,         accent: true  },
  { label: "PLAZO",            value: 12,     format: "int" as const,             accent: false, suffix: " meses" },
  { label: "TICKET MÍNIMO",   value: 10000,  format: "currency-soles" as const,  accent: false, small: true },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -40]
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-fi-dark overflow-hidden"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: NOISE }}
        aria-hidden
      />

      {/* Horizontal hairline at 1/3 height */}
      <div
        className="absolute left-0 right-0 h-px bg-white/10 pointer-events-none"
        style={{ top: "33.333%" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left: 7 columns */}
          <div className="col-span-12 lg:col-span-7">
            <Badge color="sage" className="mb-8">
              Investment Call 2026 · I
            </Badge>

            <h1 className="font-display text-display-xl text-white mb-8 leading-[1.05]">
              Invierte en el futuro
              <br />
              de la{" "}
              <span className="relative inline-block">
                bioeconomía
                <motion.span
                  className="absolute left-0 right-0 h-[1.5px] bg-fi-primary origin-left"
                  style={{ bottom: "-4px" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden
                />
              </span>
              <br />
              peruana.
            </h1>

            <p className="font-sans text-[18px] text-white/70 leading-relaxed max-w-xl mb-10">
              Fondo de Impacto conecta capital ángel con marcas sostenibles de la
              biodiversidad peruana. Un instrumento de deuda simple, con retorno
              garantizado por contrato notarial y respaldo de Redesign Lab.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={CTA.calendar}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<Calendar size={16} />}
              >
                Agendar entrevista 1:1
              </Button>
              <Button
                href={CTA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-white"
                size="lg"
                icon={<MessageCircle size={16} />}
              >
                Escribir por WhatsApp
              </Button>
            </div>
          </div>

          {/* Right: snapshot ficha — cols 9-12 with parallax */}
          <motion.div
            className="col-span-12 lg:col-span-4 lg:col-start-9"
            style={{ y: parallaxY }}
          >
            <div className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-fi-sage mb-3">
              Snapshot
            </div>
            <Hairline color="rgba(255,255,255,0.15)" />

            {snapshot.map((item, i) => (
              <div key={item.label}>
                <div className="py-5">
                  <div className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-1">
                    {item.label}
                  </div>
                  <div
                    className={[
                      "font-display font-[400] leading-none",
                      item.small ? "text-[2.25rem] text-white/70" : "text-numeric-lg",
                      item.accent ? "text-fi-primary" : "text-white",
                    ].join(" ")}
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    <CountUp
                      value={item.value}
                      format={item.format}
                      suffix={"suffix" in item ? item.suffix : undefined}
                    />
                  </div>
                </div>
                {i < snapshot.length - 1 && <Hairline color="rgba(255,255,255,0.1)" />}
              </div>
            ))}

            <Hairline color="rgba(255,255,255,0.15)" />
            <div className="pt-4 font-sans text-[12px] text-white/60 leading-relaxed">
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40">
                Estructura
              </span>
              <br />
              Deuda · Sin dilución · Contrato notarial
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
