import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17110d",
        umber: "#2d201a",
        clay: "#7a5842",
        gold: "#b98b4b",
        "gold-light": "#e7d0a1",
        cream: "#f5f0ea",
        "cream-dim": "#efe1d2",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        warm: "0 24px 60px rgba(32,21,13,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
