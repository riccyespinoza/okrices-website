// src/components/shared/TestimonialCard.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

// Definimos las variantes de animación dentro del componente que las usa
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TestimonialCard({ name, role, quote, authorId }) {
  const prefersReduced = useReducedMotion();

  const itemAnim = prefersReduced ? {} : { variants: itemVariants };

  return (
    <motion.figure
      {...itemAnim}
      whileHover={prefersReduced ? undefined : { scale: 1.03 }}
      // 👇 --- CAMBIO PRINCIPAL APLICADO AQUÍ --- 👇
      // Reemplazamos las clases de fondo, borde y desenfoque por ".glass-effect"
      className="flex flex-col rounded-lg p-6 text-light glass-effect"
      aria-labelledby={authorId}
    >
      <div className="text-3xl text-accent mb-2" aria-hidden="true">
        "
      </div>

      <blockquote className="flex-1">
        <p className="italic text-brand-cream/90">{quote}</p>
      </blockquote>

      <figcaption className="mt-4">
        <h3 id={authorId} className="mb-1 font-semibold">
          {name}
        </h3>
        <p className="text-sm text-brand-cream/70">{role}</p>
      </figcaption>
    </motion.figure>
  );
}
