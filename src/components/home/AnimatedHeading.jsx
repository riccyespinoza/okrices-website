// src/components/home/AnimatedHeading.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeading({ children, className, ...props }) {
  const [weight, setWeight] = useState(700);

  return (
    <motion.h1
      className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${className}`}
      onMouseEnter={() => setWeight(800)}
      onMouseLeave={() => setWeight(700)}
      style={{
        fontVariationSettings: `'wght' ${weight}`,
        transition: "font-variation-settings 0.3s ease",
      }}
      {...props}
    >
      {children}
    </motion.h1>
  );
}
