import React from "react";

interface RedesignLabLogoProps {
  color?: "white" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { text: "text-[13px]", dot: 5 },
  md: { text: "text-[16px]", dot: 6 },
  lg: { text: "text-[20px]", dot: 8 },
};

export function RedesignLabLogo({
  color = "white",
  size = "md",
  className = "",
}: RedesignLabLogoProps) {
  const textColor = color === "white" ? "text-white" : "text-fi-ink";
  const { text, dot } = sizeMap[size];

  return (
    <a
      href="https://redesignlab.org"
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center gap-[2px] font-sans font-bold tracking-tight leading-none select-none",
        "hover:opacity-80 transition-opacity duration-200",
        textColor,
        text,
        className,
      ].join(" ")}
      aria-label="Redesign Lab"
    >
      Redesign Lab
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: dot,
          height: dot,
          borderRadius: "50%",
          backgroundColor: "#FF1744",
          marginLeft: 1,
          flexShrink: 0,
        }}
      />
    </a>
  );
}
