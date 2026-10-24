import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: "sage" | "primary" | "white" | "ink";
  className?: string;
}

const colorClasses: Record<string, string> = {
  sage:    "text-fi-sage",
  primary: "text-fi-primary",
  white:   "text-white",
  ink:     "text-fi-ink",
};

export function Badge({ children, color = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "eyebrow",
        colorClasses[color] ?? "text-fi-primary",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
