"use client";

import { useRef } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CountUp } from "@/components/ui/CountUp";

// Noise texture via SVG feTurbulence
const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const stats = [
  { label: "Capital",       value: 300000, format: "currency-soles" as const },
  { label: "Retorno anual", value: 10,     format: "percent" as const },
  { label: "Plazo",         value: 12,     format: "int" as const, suffix: " meses" },
  { label: "Ticket mín.",   value: 10000,  format: "currency-soles" as const },
];

const terms = [
  "Deuda sin dilución",
  "Contrato notarial",
  "Ticket mín. S/ 10,000",
  "Pago bullet mes 12",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-fi-dark overflow-hidden"
    >
      {/* Forest image — top 55%, fades into fi-dark */}
      <div className="absolute inset-x-0 top-0 h-[55%] pointer-events-none" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.45 }}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(12,28,31,0.3) 0%, #0c1c1f 100%)" }}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: NOISE }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-20 sm:pt-36 sm:pb-28 text-center">

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge color="sage">Investment Call 2026 · I</Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-[700] text-white leading-[1.03] tracking-[-0.035em] mb-8 mx-auto break-words"
          style={{ fontSize: "clamp(2.25rem, 7vw, 6rem)", overflowWrap: "break-word" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Invierte en el futuro
          <br />
          de la{" "}
          <span className="relative inline-block">
            bioeconomía
            <motion.span
              className="absolute left-0 right-0 h-[2px] bg-fi-primary origin-left"
              style={{ bottom: "-2px" }}
              initial={{ scaleX: 0 }}
              animate={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            />
          </span>
          <br />
          peruana.
        </motion.h1>

        {/* Body */}
        <motion.p
          className="font-sans text-[17px] font-[300] text-white/60 leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Fondo de Impacto conecta capital ángel con marcas sostenibles de la
          biodiversidad peruana. Un instrumento de deuda simple, con retorno
          garantizado por contrato notarial.
        </motion.p>

        {/* Vertical divider */}
        <motion.div
          className="w-px h-10 bg-white/20 mx-auto mb-10"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:flex sm:justify-center sm:items-stretch gap-y-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-stretch min-w-0">
              {i > 0 && (
                <div className="hidden sm:block w-px bg-white/10 mx-6 md:mx-8 self-stretch" aria-hidden />
              )}
              <div className="text-center min-w-0 flex-1 px-2 sm:px-0">
                <div
                  className="font-display text-white leading-none tracking-[-0.02em] break-words"
                  style={{ fontSize: "clamp(1.25rem, 4.5vw, 2.5rem)", fontFeatureSettings: '"tnum"', overflowWrap: "anywhere" }}
                >
                  <CountUp
                    value={stat.value}
                    format={stat.format}
                    suffix={"suffix" in stat ? stat.suffix : undefined}
                  />
                </div>
                <div className="font-sans text-[10px] font-[500] tracking-[0.25em] uppercase text-white/35 mt-2">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Accent line */}
        <motion.div
          className="w-10 h-px bg-fi-primary mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />

        {/* Terms tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {terms.map((term) => (
            <span
              key={term}
              className="font-sans text-[11px] font-[400] tracking-[0.08em] text-white/45 border border-white/12 px-3 py-1.5"
            >
              {term}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

      </div>
    </section>
  );
}
