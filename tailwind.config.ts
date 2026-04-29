import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fi-dark":    "#0c1c1f",
        "fi-primary": "#c0541c",
        "fi-light":   "#faf8f3",
        "fi-sage":    "#9ab8bb",
        "fi-ink":     "#0e0e0c",
        "fi-line":    "#e6e3da",
        endemics:     "#2c2c2a",
        rareby:       "#f82605",
      },
      fontFamily: {
        sans:    ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow:       "0.25em",
        "eyebrow-wide": "0.3em",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.25rem)",    { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem",                        { lineHeight: "1.1" }],
        "display-sm": ["1.75rem",                       { lineHeight: "1.15" }],
        "numeric-xl": ["clamp(3rem, 5vw, 4.5rem)",                  { lineHeight: "1", letterSpacing: "-0.02em" }],
        "numeric-lg": ["clamp(2rem, 7.5vw, 3.5rem)",                { lineHeight: "1", letterSpacing: "-0.02em" }],
        "numeric-md": ["clamp(1.5rem, 5vw, 2rem)",                  { lineHeight: "1", letterSpacing: "-0.01em" }],
        eyebrow:      ["0.6875rem",                     { letterSpacing: "0.25em", lineHeight: "1.6" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        soft:      "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-draw": {
          "0%":   { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "line-draw": "line-draw 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
