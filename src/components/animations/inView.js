// src/components/animations/inView.js

// Fade básico (para títulos, párrafos, botones)
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Contenedor que hace "stagger" a sus hijos
export const staggerContainer = (stagger = 0.2) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger },
  },
});
