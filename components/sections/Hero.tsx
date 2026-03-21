"use client";

import React, { useEffect, useState } from "react";
import { Calendar, Mail, MessageCircle, ChevronDown } from "lucide-react";
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-fi-dark"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #994215 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7ca07f 0%, transparent 40%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full border border-white/5" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
      <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-fi-primary/5 blur-3xl" />

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
              "text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6",
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
                  <span className="text-white/80 text-sm font-medium">{term}</span>
                  {i < 3 && (
                    <span className="w-1 h-1 rounded-full bg-fi-primary" />
                  )}
                </React.Fragment>
              )
            )}
          </div>

          {/* Description */}
          <p
            className={[
              "text-white/60 text-lg leading-relaxed max-w-2xl mb-10",
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

          {/* Metric chips */}
          <div
            className={[
              "flex flex-wrap gap-4 transition-all duration-700 delay-500",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            {metrics.map((m) => (
              <div
                key={m.value}
                className="flex flex-col gap-0.5 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm"
              >
                <span className="text-white font-bold text-lg leading-none">
                  {m.value}
                </span>
                <span className="text-white/40 text-xs font-light">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
