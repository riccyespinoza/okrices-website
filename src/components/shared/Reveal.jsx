// src/components/shared/Reveal.jsx
"use client";

import { motion } from "framer-motion";

/**
 *  Envuelve a sus hijos con un fade-up + desplazamiento suave.
 *
 *  <Reveal delay={0.2}> … </Reveal>
 */
export default function Reveal({ delay = 0, children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
