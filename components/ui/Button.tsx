"use client";

import React from "react";

type Variant = "primary" | "outline-white" | "outline-dark" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-fi-primary text-white hover:brightness-110 active:scale-[0.98] active:brightness-95 transition-[filter,transform] duration-150 ease-soft",
  "outline-white":
    "border-[1.5px] border-white text-white hover:bg-white/10 active:scale-[0.98] active:bg-white/15 transition-[colors,transform] duration-150 ease-soft",
  "outline-dark":
    "border-[1.5px] border-fi-ink text-fi-ink hover:bg-fi-ink/5 active:scale-[0.98] transition-[colors,transform] duration-150 ease-soft",
  ghost:
    "text-fi-primary font-semibold hover:underline underline-offset-2 active:opacity-70 transition-all duration-150 ease-soft",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[12px] gap-1.5",
  md: "px-6 py-3 text-[13px] gap-2",
  lg: "px-8 py-[14px] text-[14px] gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={[
        "inline-flex items-center justify-center font-semibold rounded",
        "cursor-pointer select-none tracking-wide",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </a>
  );
}
