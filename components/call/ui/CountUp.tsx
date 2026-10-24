"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export type CountUpFormat = "currency-soles" | "percent" | "int" | "float";

interface CountUpProps {
  value: number;
  format: CountUpFormat;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function formatValue(n: number, format: CountUpFormat): string {
  const rounded = Math.round(n);
  switch (format) {
    case "currency-soles":
      return `S/ ${rounded.toLocaleString("en-US")}`;
    case "percent":
      return `${rounded}%`;
    case "float":
      return n.toFixed(1);
    case "int":
    default:
      return rounded.toLocaleString("en-US");
  }
}

export function CountUp({
  value,
  format,
  prefix = "",
  suffix = "",
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(
    prefersReducedMotion ? formatValue(value, format) : formatValue(0, format)
  );
  const animated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(formatValue(value, format));
      return;
    }
    if (!inView || animated.current) return;
    animated.current = true;

    const start = performance.now();
    const easeEditorial = (t: number): number => {
      const p1x = 0.22, p1y = 1, p2x = 0.36, p2y = 1;
      let lo = 0, hi = 1, s = t;
      for (let i = 0; i < 10; i++) {
        const x = 3 * p1x * s * (1 - s) ** 2 + 3 * p2x * s ** 2 * (1 - s) + s ** 3;
        if (Math.abs(x - t) < 0.0001) break;
        if (x < t) lo = s;
        else hi = s;
        s = (lo + hi) / 2;
      }
      return 3 * p1y * s * (1 - s) ** 2 + 3 * p2y * s ** 2 * (1 - s) + s ** 3;
    };

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayed(formatValue(easeEditorial(progress) * value, format));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value, format, duration, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}
