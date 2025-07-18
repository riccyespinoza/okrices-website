// src/components/FadeInWhenVisible.jsx
"use client";
import { useRef } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";

export default function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
