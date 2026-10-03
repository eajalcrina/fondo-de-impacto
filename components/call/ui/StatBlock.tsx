"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatBlockProps {
  value: string;
  label: string;
  dark?: boolean;
}

export function StatBlock({ value, label, dark = false }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "flex flex-col gap-1 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
    >
      <span
        className={[
          "text-4xl md:text-5xl font-bold tracking-tight leading-none",
          dark ? "text-white" : "text-fi-dark",
        ].join(" ")}
      >
        {value}
      </span>
      <span
        className={[
          "text-sm font-light leading-tight max-w-[180px]",
          dark ? "text-white/70" : "text-fi-dark/60",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}
