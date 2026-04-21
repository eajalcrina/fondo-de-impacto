"use client";

import React, { useEffect, useState } from "react";
import { Calendar, MessageCircle, ChevronDown } from "lucide-react";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const metrics = [
  { value: "S/ 300,000", label: "Meta de levantamiento" },
  { value: "10% Anual",  label: "Tasa fija garantizada" },
  { value: "12 Meses",   label: "Plazo de retorno" },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 18% 65%, rgba(153,66,21,0.18) 0%, transparent 52%), radial-gradient(ellipse at 82% 18%, rgba(124,160,127,0.09) 0%, transparent 42%), #132617" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative rings — asymmetric, broken */}
      <div className="absolute right-[-8%] top-1/2 -translate-y-[55%] w-[560px] h-[560px] rounded-full border border-white/[0.06]" />
      <div className="absolute right-[-18%] top-1/2 -translate-y-[48%] w-[760px] h-[760px] rounded-full border border-white/[0.03]" />
      <div className="absolute -left-48 bottom-[-5%] w-[480px] h-[480px] rounded-full bg-fi-primary/[0.06] blur-3xl" />
      <div className="absolute right-[10%] top-[15%] w-[220px] h-[220px] rounded-full bg-fi-sage/[0.05] blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">

          {/* Badge */}
          <div
            className={[
              "transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <Badge color="white" className="mb-8">
              Investment Call 2026 · I
            </Badge>
          </div>

          {/* Headline */}
          <h1
            className={[
              "text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.04] tracking-[-0.02em] mb-6",
              "transition-all duration-700 delay-100",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            Invierte en el futuro
            <br />
            <span className="text-fi-primary">de la bioeconomía</span>
            <br />
            peruana.
          </h1>

          {/* Key terms strip */}
          <div
            className={[
              "flex flex-wrap items-center gap-2 mb-8 transition-all duration-700 delay-200",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            {["10% fijo anual", "12 meses", "Deuda sin dilución", "Desde S/ 10,000"].map(
              (term, i) => (
                <React.Fragment key={term}>
                  <span className="text-white/70 text-sm font-medium">{term}</span>
                  {i < 3 && (
                    <span className="w-[3px] h-[3px] rounded-full bg-fi-primary/70" />
                  )}
                </React.Fragment>
              )
            )}
          </div>

          {/* Description */}
          <p
            className={[
              "text-white/55 text-lg leading-[1.75] max-w-[58ch] mb-10",
              "transition-all duration-700 delay-300",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            Fondo de Impacto conecta capital ángel con marcas sostenibles de la
            biodiversidad peruana. Un instrumento de deuda simple, con retorno
            garantizado por contrato notarial y respaldo de Redesign Lab.
          </p>

          {/* CTA Buttons */}
          <div
            className={[
              "flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-[400ms]",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
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
          </div>

          {/* Metric chips — left-border accent style */}
          <div
            className={[
              "flex flex-wrap gap-6 transition-all duration-700 delay-500",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            {metrics.map((m) => (
              <div
                key={m.value}
                className="flex flex-col gap-1 pl-4 border-l-2 border-fi-primary/50"
              >
                <span className="text-white font-bold text-xl leading-none tabular-nums">
                  {m.value}
                </span>
                <span className="text-white/40 text-xs font-light tracking-wide">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
