import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: "primary" | "endemics" | "rareby" | "sage" | "white";
  className?: string;
}

const colorClasses = {
  primary:  "bg-fi-primary/10 text-fi-primary border border-fi-primary/20",
  endemics: "bg-endemics text-white",
  rareby:   "bg-rareby text-white",
  sage:     "bg-fi-sage/20 text-fi-sage border border-fi-sage/30",
  white:    "bg-white/10 text-white border border-white/20",
};

export function Badge({ children, color = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1 rounded-full",
        "text-xs font-semibold tracking-widest uppercase",
        colorClasses[color],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
