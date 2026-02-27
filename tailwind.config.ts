import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#05010d",
        abyss: "#0e0424",
        aurora: {
          DEFAULT: "#7f5bff",
          light: "#a88bff",
          soft: "rgba(127, 91, 255, 0.18)",
        },
        mint: {
          DEFAULT: "#32f5c8",
          soft: "rgba(50, 245, 200, 0.28)",
        },
        text: {
          primary: "#f5f2ff",
          secondary: "#b5b0d0",
          muted: "#837aab",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        glow: "0 45px 120px -60px rgba(127, 91, 255, 0.6)",
        card: "0 20px 60px -30px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1, start) infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(50,245,200,0.22) 0%, rgba(127,91,255,0.24) 35%, rgba(8,2,30,0.94) 100%)",
        "section-grid":
          "radial-gradient(circle at center, rgba(127,91,255,0.12) 0%, rgba(5,1,13,0.92) 60%)",
      },
      borderRadius: {
        xl: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
