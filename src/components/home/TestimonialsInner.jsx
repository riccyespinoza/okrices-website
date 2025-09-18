// src/components/home/TestimonialsInner.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import TestimonialCard from "../shared/TestimonialCard"; // Importamos el nuevo componente

const testimonials = [
  { name: "Sarah L.", role: "CEO, BloomTech", quote: "Okrices elevated ..." },
  {
    name: "Jason R.",
    role: "Founder, GreenHub",
    quote: "The website is fast ...",
  },
  {
    name: "María E.",
    role: "Marketing Lead, Viva Health",
    quote: "Working bilingually ...",
  },
];

// Variantes de animación
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function TestimonialsInner() {
  const prefersReduced = useReducedMotion();

  const containerAnim = prefersReduced
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        variants: containerVariants,
        viewport: { once: true },
      };

  return (
    <motion.div className="grid gap-8 md:grid-cols-3" {...containerAnim}>
      {/* 👇 CAMBIO: Mapeo mucho más limpio usando el componente TestimonialCard */}
      {testimonials.map((t, i) => (
        <TestimonialCard
          key={i}
          name={t.name}
          role={t.role}
          quote={t.quote}
          authorId={`testimonial-author-${i}`}
        />
      ))}
    </motion.div>
  );
}
