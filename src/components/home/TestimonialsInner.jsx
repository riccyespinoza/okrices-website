// src/components/home/TestimonialsInner.jsx

"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah L.",
    role: "CEO, BloomTech",
    quote: "Okrices elevated ...",
  },
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
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TestimonialsInner() {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-deepblue/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-light flex flex-col"
        >
          <div className="text-accent text-3xl mb-2">"</div>
          <h4 className="font-semibold mb-1">{t.name}</h4>
          <p className="text-sm text-gray-400 mb-4">{t.role}</p>
          <p className="flex-1 text-gray-300 italic">{t.quote}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
