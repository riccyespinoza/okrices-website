// src/components/shared/FeaturePointCard.jsx
"use client";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export default function FeaturePointCard({ icon, title, description }) {
  return (
    <motion.li className="h-full" variants={itemVariants}>
      <motion.div
        className={
          "relative h-full glass-card-advanced p-8 rounded-lg " +
          // 👇 AQUÍ ESTÁ EL CAMBIO:
          "border border-transparent " + // Borde transparente por defecto (elimina el "marco blanco")
          "flex flex-col items-center text-center transition-colors duration-300"
        }
        whileHover={{
          y: -10,
          borderColor: "rgba(165, 81, 48, 0.3)", // Borde de acento al hacer hover
          boxShadow: "0 8px 30px rgba(165, 81, 48, 0.2)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {icon}
        <h3 className="text-xl font-bold text-brand-cream mb-2">{title}</h3>
        <p className="text-base text-brand-cream/80">{description}</p>
      </motion.div>
    </motion.li>
  );
}
