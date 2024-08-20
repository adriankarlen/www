const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        rp: {
          base: "hsl(var(--rp-base) / <alpha-value>)",
          surface: "hsl(var(--rp-surface) / <alpha-value>)",
          overlay: "hsl(var(--rp-overlay) / <alpha-value>)",
          muted: "hsl(var(--rp-muted) / <alpha-value>)",
          subtle: "hsl(var(--rp-subtle) / <alpha-value>)",
          text: "hsl(var(--rp-text) / <alpha-value>)",
          love: "hsl(var(--rp-love) / <alpha-value>)",
          gold: "hsl(var(--rp-gold) / <alpha-value>)",
          rose: "hsl(var(--rp-rose) / <alpha-value>)",
          pine: "hsl(var(--rp-pine) / <alpha-value>)",
          foam: "hsl(var(--rp-foam) / <alpha-value>)",
          iris: "hsl(var(--rp-iris) / <alpha-value>)",
          highlightLow: "hsl(var(--rp-highlightLow) / <alpha-value>)",
          highlightMed: "hsl(var(--rp-highlightMed) / <alpha-value>)",
          highlightHigh: "hsl(var(--rp-highlightHigh) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["DM Mono", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        nb: "4px 4px 0 hsl(var(--rp-text))"
      }
    }
  },
  plugins: []
};
