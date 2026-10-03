"use client";

import React from "react";

type Variant = "primary" | "outline-white" | "outline-dark" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  as?: "a" | "button";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-fi-primary text-white hover:brightness-110 shadow-lg hover:shadow-fi-primary/30",
  "outline-white":
    "border border-white text-white hover:bg-white hover:text-fi-primary",
  "outline-dark":
    "border border-fi-dark text-fi-dark hover:bg-fi-dark hover:text-white",
  ghost: "text-fi-primary hover:underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
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
        "inline-flex items-center justify-center font-semibold rounded-full",
        "transition-all duration-200 cursor-pointer select-none",
        "tracking-wide uppercase text-xs",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
    >
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </a>
  );
}
