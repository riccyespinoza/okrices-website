// src/components/AnimatedLogo.jsx
// Animación: el SVG flota arriba/abajo infinitamente.
"use client";
import { motion } from "framer-motion";

export default function AnimatedLogo({ className = "" }) {
  return (
    <motion.img
      src="/logo-octopus.svg" // 👉 coloca tu SVG en /public
      alt="Okrices Logo"
      className={`w-52 opacity-20 ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
