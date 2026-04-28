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
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayed(formatValue(easeOut(progress) * value, format));
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
