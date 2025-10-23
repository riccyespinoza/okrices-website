// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#060a12",
        dark: "#0d1419",
        light: "#ffffff",
        accent: { DEFAULT: "#a55130", light: "#b66e41", dark: "#8d4226" },
        brand: {
          sand: "#c1a17a",
          cream: "#d9d2c6",
          steel: "#2a4d69",
          "steel-dark": "#0d1b2a",
        },
        neutral: {
          900: "#0c0c0a",
          800: "#1a1a1a",
          700: "#333333",
          600: "#515151",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-outfit)",
          "Outfit",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.2" }],
      },
      spacing: { 18: "4.5rem", 88: "22rem", 128: "32rem" },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(180deg, theme('colors.primary'), theme('colors.brand.steel-dark'))",
        "accent-gradient":
          "linear-gradient(90deg, theme('colors.accent.DEFAULT'), theme('colors.accent.light'))",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        accent: "0 8px 30px rgba(165, 81, 48, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-dot": "scrollDot 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scrollDot: {
          "0%": { transform: "translateY(0)", opacity: ".9" },
          "50%": { transform: "translateY(16px)", opacity: ".4" },
          "100%": { transform: "translateY(0)", opacity: ".9" },
        },
      },
    },
  },
  // ✅ sin plugins extra (line-clamp ya viene incluido en Tailwind 3.3+)
  plugins: [],
};
