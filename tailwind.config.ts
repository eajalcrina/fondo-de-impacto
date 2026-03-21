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
        "hero-gradient": "linear-gradient(135deg, #132617 0%, #1e3a1f 50%, #132617 100%)",
        "cta-gradient":  "linear-gradient(135deg, #994215 0%, #b85418 100%)",
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
