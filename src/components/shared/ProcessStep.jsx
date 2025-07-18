"use client";
import { motion } from "framer-motion";

export default function ProcessStep({ icon, title, text, index }) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
    >
      {/* Nodo de la línea (desktop) */}
      <span className="hidden md:inline-block w-3 h-3 rounded-full bg-accent mb-6" />

      {icon}
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-text-muted text-sm">{text}</p>
    </motion.div>
  );
}
