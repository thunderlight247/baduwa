import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#221609",
        umber: "#4E3120",
        clay: "#8C5A38",
        gold: "#B0813A",
        "gold-light": "#D9B26E",
        cream: "#F8F2E7",
        "cream-dim": "#EFE5D3",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
