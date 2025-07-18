"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center space-y-6">
      <h2 className="text-3xl font-bold text-primary">
        What our future clients will say
      </h2>
      <motion.p
        className="text-text-muted"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Your review could be here soon — stay tuned!
      </motion.p>
    </section>
  );
}
