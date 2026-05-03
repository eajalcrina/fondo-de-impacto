"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp, CountUpFormat } from "@/components/ui/CountUp";

interface StatBlockProps {
  value: string;
  label: string;
  accent?: "primary" | "white" | "sage";
  numeric?: boolean;
}

const accentClasses: Record<string, string> = {
  primary: "text-fi-primary",
  white:   "text-white",
  sage:    "text-fi-sage",
};

function parseNumeric(raw: string): {
  prefix: string;
  num: number;
  suffix: string;
  format: CountUpFormat;
} | null {
  const match = raw.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const num = parseFloat(numStr.replace(/,/g, ""));
  if (isNaN(num)) return null;
  const format: CountUpFormat =
    suffix.trim() === "%" ? "percent" : "int";
  return { prefix: prefix.trim(), num, suffix: suffix ? ` ${suffix.trim()}` : "", format };
}

export function StatBlock({
  value,
  label,
  accent = "white",
  numeric = false,
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const parsed = numeric ? parseNumeric(value) : null;

  return (
    <div ref={ref} className="flex flex-col gap-2">
      {/* Animated hairline top */}
      <motion.div
        className="h-px w-full"
        style={{ transformOrigin: "left", backgroundColor: "#e6e3da" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="pt-4">
        <span
          className={[
            "font-display text-numeric-lg leading-none block break-words",
            "font-[400]",
            accentClasses[accent] ?? "text-white",
          ].join(" ")}
          style={{ fontFeatureSettings: '"tnum"', wordBreak: "break-word", overflowWrap: "anywhere" }}
        >
          {numeric && parsed ? (
            <CountUp
              value={parsed.num}
              format={parsed.format}
              prefix={parsed.prefix}
              suffix={parsed.suffix}
            />
          ) : (
            value
          )}
        </span>
        <span className="font-sans text-[13px] leading-relaxed mt-2 block opacity-60">
          {label}
        </span>
      </div>
    </div>
  );
}
