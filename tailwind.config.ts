import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        ink: "#0A0E27",
        "ink-soft": "#0E1535",
        "ink-muted": "#131E42",
        silver: "#F5F7FA",
        "silver-dim": "#A8B5C4",
        accent: "#FFB800",
        "accent-glow": "#FFC933",
        "accent-dim": "#CC9200",
        teal: "#00D4B8",
        "teal-dim": "#00A896",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(39,100%,59%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(39,100%,59%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(39,100%,59%,0.08) 0px, transparent 50%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
