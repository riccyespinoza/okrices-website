// src/components/shared/TestimonialCard.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TestimonialCard({
  name,
  role,
  quote,
  authorId,
  className = "", // <- NUEVO
}) {
  const prefersReduced = useReducedMotion();
  const itemAnim = prefersReduced ? {} : { variants: itemVariants };

  const hasMeta = Boolean(name || role);

  return (
    <motion.figure
      {...itemAnim}
      whileHover={prefersReduced ? undefined : { scale: 1.03 }}
      className={`glass-effect text-light rounded-lg p-6
                  flex flex-col h-full          /* <- llena alto disponible */
                  ${className}`}
      aria-labelledby={authorId}
    >
      {/* Contenido centrado verticalmente */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-3xl text-accent mb-2" aria-hidden="true">
          "
        </div>

        <blockquote>
          <p className="italic text-brand-cream/90">{quote}</p>
        </blockquote>
      </div>

      {/* Meta solo si existe, para no alterar alturas */}
      {hasMeta && (
        <figcaption className="mt-4">
          {name && (
            <h3 id={authorId} className="mb-1 font-semibold">
              {name}
            </h3>
          )}
          {role && <p className="text-sm text-brand-cream/70">{role}</p>}
        </figcaption>
      )}
    </motion.figure>
  );
}
