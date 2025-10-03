// src/components/about/AboutApproach.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/animations/inView";
import Container from "@/components/ui/Container";

export default function AboutApproach({
  id = "about-approach",
  title,
  items = [],
}) {
  const prefersReduced = useReducedMotion();

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 md:py-28">
      <Container>
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={prefersReduced ? undefined : "hidden"}
          whileInView={prefersReduced ? undefined : "show"}
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2
            id={`${id}-title`}
            className="text-3xl md:text-4xl font-bold text-light"
          >
            {title}
          </h2>
        </motion.div>

        <motion.ul
          role="list"
          className="mx-auto max-w-3xl grid gap-4 md:gap-5"
          variants={prefersReduced ? undefined : staggerContainer(0.08)}
          initial={prefersReduced ? undefined : "hidden"}
          whileInView={prefersReduced ? undefined : "show"}
          viewport={{ once: true }}
        >
          {items.map((line, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed text-gray-300 pl-6 relative"
            >
              {/* Bullet minimalista */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent"
              />
              {line}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
