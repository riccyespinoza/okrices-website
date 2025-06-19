// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d1419", // Color principal (fondo oscuro)
        accent: "#a55130", // Secundario claro (terracota)
        beige: "#c1a17a", // Apoyo cálido
        cream: "#d9d2c6", // Neutro suave
        navy: "#2a4d69", // Azul profundo
        deepblue: "#0d1b2a", // Azul casi negro
        darkgray: "#333333", // Gris medio
        mutedgray: "#515151", // Gris claro
        light: "#ffffff", // Blanco
      },
    },
  },
  plugins: [],
};
