"use client";
import { motion, useReducedMotion } from "framer-motion";
import TestimonialCard from "../shared/TestimonialCard";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function TestimonialsInner({ quotes = [] }) {
  const prefersReducedMotion = useReducedMotion();
  const containerAnim = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        variants: containerVariants,
        viewport: { once: true, amount: 0.3 },
      };

  return (
    <motion.div
      className="
        grid gap-8
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        items-stretch            /* estira las celdas */
        auto-rows-fr             /* todas las filas con la misma altura */
      "
      {...containerAnim}
    >
      {quotes.map((q, i) => (
        <div key={i} className="h-full">
          <TestimonialCard
            className="h-full" /* <- la tarjeta ocupa toda la celda */
            name=""
            role=""
            quote={q}
            authorId={`testimonial-${i}`}
          />
        </div>
      ))}
    </motion.div>
  );
}
