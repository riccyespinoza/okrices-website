// src/components/shared/ServiceCard.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

// Definimos las variantes de animación dentro del componente que las usa
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceCard({ icon, title, description }) {
  const prefersReduced = useReducedMotion();

  const itemAnimProps = prefersReduced ? {} : { variants: itemVariants };

  return (
    <motion.li
      {...itemAnimProps}
      whileHover={{ scale: prefersReduced ? 1 : 1.05 }}
      // 👇 --- CAMBIO: Se han eliminado las clases "border" y "border-white/10" --- 👇
      className="rounded-lg p-6 glass-effect"
    >
      <div className="flex flex-col items-center">
        {icon}
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-brand-cream/70">{description}</p>
      </div>
    </motion.li>
  );
}
