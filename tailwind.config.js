// tailwind.config.js

module.exports = {
  // ✅ ESTA ES LA LÍNEA CRUCIAL QUE HABILITA EL MODO OSCURO POR CLASE
  darkMode: "class",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales
        primary: "#0d1419", // Fondo principal oscuro
        accent: {
          DEFAULT: "#a55130", // Naranja/Terracota
          light: "#b66e41", // Naranja más claro
          dark: "#8d4226", // Naranja más oscuro
        },
        beige: "#c1a17a", // Beige/Café claro
        cream: "#d9d2c6", // Crema/Blanco roto
        navy: "#2a4d69", // Azul marino
        deepblue: "#0d1b2a", // Azul oscuro/Negro azulado

        // Grises
        black: {
          DEFAULT: "#1a1a1a", // Negro con un toque de gris
          pure: "#0c0c0a", // Negro puro
        },
        gray: {
          dark: "#333333", // Gris oscuro
          medium: "#515151", // Gris medio
          light: "#d9d2c6", // Gris claro (similar a cream)
        },

        // Colores adicionales de la paleta
        terracota: {
          DEFAULT: "#a55130", // R=165 G=81 B=48
          light: "#b66e41", // R=182 G=110 B=65
        },
        sand: "#c1a17a", // R=193 G=161 B=122
        offwhite: "#d9d2c6", // R=217 G=210 B=198
        steel: "#2a4d69", // R=42 G=77 B=105
        midnight: {
          DEFAULT: "#0d1b2a", // R=13 G=27 B=42
          darker: "#0c0c0a", // R=12 G=12 B=10
          blue: "#0d1419", // R=13 G=20 B=25
        },
        charcoal: {
          DEFAULT: "#1a1a1a", // R=26 G=26 B=26
          light: "#333333", // R=51 G=51 B=51
        },

        // Utilitarios
        light: "#ffffff",
        dark: "#0d1419",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
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
          "linear-gradient(180deg, theme('colors.primary'), theme('colors.deepblue'))",
        "accent-gradient":
          "linear-gradient(90deg, theme('colors.accent'), theme('colors.accent.light'))",
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
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
