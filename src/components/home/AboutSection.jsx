// src/components/home/AboutSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutSection({ title, text, cta }) {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const containerAnimProps = prefersReduced
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.5 },
      };

  const itemAnimProps = prefersReduced ? {} : { variants: itemVariants };

  return (
    <Section spacing="py-16 md:py-24" aria-labelledby="home-about-mini">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        {...containerAnimProps}
      >
        <motion.h2
          id="home-about-mini"
          className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl"
          {...itemAnimProps}
        >
          {title}
        </motion.h2>

        <motion.p
          className="mb-8 text-base text-brand-cream/90 md:text-lg"
          {...itemAnimProps}
        >
          {text}
        </motion.p>

        {cta?.href && (
          <motion.div {...itemAnimProps}>
            <Button href={cta.href} variant="gradient">
              {cta.label}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
}
