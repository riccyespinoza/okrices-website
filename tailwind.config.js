// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Modo oscuro por clase (coincide con tu ThemeProvider si lo usas)
  darkMode: "class",

  // Rutas que Tailwind debe escanear
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}", // por si usas Providers/Hooks
  ],

  theme: {
    extend: {
      // 🎨 Paleta alineada con tu proyecto
      colors: {
        // Base
        primary: "#060a12", // Fondo principal oscuro (usado en globals.css)
        dark: "#0d1419", // Variante oscura
        light: "#ffffff", // Blanco puro

        // Acento
        accent: {
          DEFAULT: "#a55130",
          light: "#b66e41",
          dark: "#8d4226",
        },

        // Marca secundaria
        brand: {
          sand: "#c1a17a",
          cream: "#d9d2c6",
          steel: "#2a4d69",
          "steel-dark": "#0d1b2a",
        },

        // Neutros semánticos
        neutral: {
          900: "#0c0c0a",
          800: "#1a1a1a",
          700: "#333333",
          600: "#515151",
          // El gris claro lo representas con brand.cream
        },
      },

      // 🔤 Fuente global: usa la variable inyectada por next/font en el layout
      fontFamily: {
        sans: [
          "var(--font-outfit)", // Outfit desde tu layout
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

      // 📏 Tipografías base
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }], // 10px
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.2" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1.2" }], // 60px
      },

      // 🧱 Espaciados y radios (como tenías)
      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        128: "32rem", // 512px
      },
      borderRadius: {
        xl: "1rem", // 16px
        "2xl": "1.5rem", // 24px
      },

      // 🌈 Gradientes utilitarios
      backgroundImage: {
        "page-gradient":
          "linear-gradient(180deg, theme('colors.primary'), theme('colors.brand.steel-dark'))",
        "accent-gradient":
          "linear-gradient(90deg, theme('colors.accent.DEFAULT'), theme('colors.accent.light'))",
      },

      // 🕶 Sombras
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        accent: "0 8px 30px rgba(165, 81, 48, 0.2)",
      },

      // 🎞 Animaciones utilitarias
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-dot": "scrollDot 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
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

  // 🔌 Plugins que ya usas
  plugins: [require("@tailwindcss/line-clamp")],
};
