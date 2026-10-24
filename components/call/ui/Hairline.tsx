"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HairlineProps {
  direction?: "horizontal" | "vertical";
  color?: string;
  animated?: boolean;
  delay?: number;
  className?: string;
}

export function Hairline({
  direction = "horizontal",
  color,
  animated = false,
  delay = 0,
  className = "",
}: HairlineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const isH = direction === "horizontal";

  const baseClass = isH ? "hairline-h" : "hairline-v";
  const colorStyle = color ? { backgroundColor: color } : {};

  if (!animated) {
    return (
      <div
        ref={ref}
        className={[baseClass, className].join(" ")}
        style={colorStyle}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      className={[baseClass, className].join(" ")}
      style={{ ...colorStyle, transformOrigin: isH ? "left" : "top" }}
      initial={isH ? { scaleX: 0 } : { scaleY: 0 }}
      animate={inView ? (isH ? { scaleX: 1 } : { scaleY: 1 }) : {}}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
