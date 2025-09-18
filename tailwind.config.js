// tailwind.config.js

module.exports = {
  // ✅ Mantenemos el modo oscuro por clase
  darkMode: "class",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 SECCIÓN DE COLORES REFACTORIZADA
      // Hemos consolidado los colores duplicados para crear una paleta más limpia y fácil de mantener.
      colors: {
        // Colores base de la aplicación
        primary: "#060a12", // Fondo principal oscuro
        dark: "#0d1419", // Variante oscura (antes en midnight)
        light: "#ffffff", // Blanco puro

        // Color de acento principal
        accent: {
          DEFAULT: "#a55130", // CONSOLIDADO: Unifica 'accent' y 'terracota'
          light: "#b66e41",
          dark: "#8d4226",
        },

        // Paleta de colores de marca secundarios
        brand: {
          sand: "#c1a17a", // CONSOLIDADO: Unifica 'beige' y 'sand'
          cream: "#d9d2c6", // CONSOLIDADO: Unifica 'cream', 'offwhite' y 'gray.light'
          steel: "#2a4d69", // CONSOLIDADO: Unifica 'navy' y 'steel'
          "steel-dark": "#0d1b2a", // CONSOLIDADO: Unifica 'deepblue' y 'midnight.DEFAULT'
        },

        // Escala de grises semántica para texto y fondos neutros
        neutral: {
          900: "#0c0c0a", // CONSOLIDADO: 'black.pure' y 'midnight.darker'
          800: "#1a1a1a", // CONSOLIDADO: 'black.DEFAULT' y 'charcoal.DEFAULT'
          700: "#333333", // CONSOLIDADO: 'gray.dark' y 'charcoal.light'
          600: "#515151", // CONSOLIDADO: 'gray.medium'
          // El color 'gray.light' ahora es 'brand.cream' por ser el mismo valor.
        },
      },

      // --- El resto de tu configuración se mantiene igual, ya que está muy bien estructurada. ---

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
      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        128: "32rem", // 512px
      },
      borderRadius: {
        xl: "1rem", // 16px
        "2xl": "1.5rem", // 24px
      },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(180deg, theme('colors.primary'), theme('colors.brand.steel-dark'))", // Actualizado para usar los nuevos nombres
        "accent-gradient":
          "linear-gradient(90deg, theme('colors.accent.DEFAULT'), theme('colors.accent.light'))", // Actualizado para usar los nuevos nombres
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
  plugins: [require("@tailwindcss/line-clamp")],
};
