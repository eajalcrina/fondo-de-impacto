import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fi-dark":    "#132617",
        "fi-primary": "#994215",
        "fi-light":   "#f4f4f4",
        "fi-sage":    "#7ca07f",
        endemics:     "#2c2c2a",
        rareby:       "#f82605",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 20% 60%, rgba(153,66,21,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(124,160,127,0.08) 0%, transparent 45%), linear-gradient(160deg, #132617 0%, #1a3020 60%, #132617 100%)",
        "cta-gradient":  "linear-gradient(135deg, #994215 0%, #b85418 100%)",
      },
      boxShadow: {
        "primary-glow": "0 12px 40px -8px rgba(153, 66, 21, 0.45)",
        "dark-glow":    "0 12px 40px -8px rgba(19, 38, 23, 0.35)",
        "sage-glow":    "0 8px 32px -8px rgba(124, 160, 127, 0.3)",
        "card-dark":    "0 4px 24px -4px rgba(19, 38, 23, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float:     "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
