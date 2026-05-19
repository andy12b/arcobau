import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ArcoBau Brand Colors
        "charcoal": "#2C3539",
        "gold-ochre": "#C5A059",
        "pure-white": "#FFFFFF",
        "off-white": "#F8F9FA",
        // Surface tokens
        "surface": "#fcf9f8",
        "surface-dim": "#dcd9d9",
        "surface-bright": "#fcf9f8",
        "surface-container": "#f0eded",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e4e2e2",
        "surface-container-low": "#f6f3f3",
        "surface-container-lowest": "#ffffff",
        // On-surface tokens
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#43474a",
        "inverse-surface": "#303030",
        "inverse-on-surface": "#f3f0f0",
        // Outline
        "outline": "#74787a",
        "outline-variant": "#c3c7c9",
        "surface-tint": "#576064",
        // Primary (deepest charcoal/dark navy)
        "primary": "#172024",
        "on-primary": "#ffffff",
        "primary-container": "#2c3539",
        "on-primary-container": "#949da2",
        "inverse-primary": "#bec8cd",
        // Secondary (gold)
        "secondary": "#775a19",
        "on-secondary": "#ffffff",
        "secondary-container": "#fed488",
        "on-secondary-container": "#785a1a",
        // Other
        "background": "#fcf9f8",
        "on-background": "#1b1c1c",
        "surface-variant": "#e4e2e2",
      },
      fontFamily: {
        "sans": ["Hanken Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["64px", { lineHeight: "1.1", fontWeight: "700" }],
        "display-xl-mobile": ["42px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-base": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["14px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
      },
      spacing: {
        "unit": "4px",
        "xs": "8px",
        "sm": "16px",
        "gutter": "24px",
        "md": "32px",
        "lg": "64px",
        "xl": "112px",
        "margin-mobile": "20px",
        "margin-desktop": "40px",
      },
      maxWidth: {
        "content": "1200px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
