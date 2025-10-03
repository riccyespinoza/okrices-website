// src/components/about/AboutPhilosophy.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/components/animations/inView";
import Container from "@/components/ui/Container";

export default function AboutPhilosophy({
  id = "about-philosophy",
  title,
  text,
}) {
  const prefersReduced = useReducedMotion();

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 md:py-28">
      <Container>
        <motion.div
          initial={prefersReduced ? undefined : "hidden"}
          whileInView={prefersReduced ? undefined : "show"}
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id={`${id}-title`}
            className="text-3xl md:text-4xl font-bold text-light mb-6"
          >
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            {text}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
