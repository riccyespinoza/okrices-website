// src/components/home/IntroSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../shared/Section";
import Container from "../shared/Container";

export default function IntroSection() {
  const prefersReduced = useReducedMotion();

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 },
    },
  };

  // Desactivar animaciones si el usuario lo prefiere
  const containerAnimProps = prefersReduced
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.5 },
      };

  const titleAnimProps = prefersReduced ? {} : { variants: titleVariants };
  const descAnimProps = prefersReduced ? {} : { variants: descriptionVariants };

  return (
    <Section spacing="py-16 md:py-24" aria-labelledby="home-intro">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          {...containerAnimProps}
        >
          <motion.h2
            id="home-intro"
            className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl"
            {...titleAnimProps}
          >
            Premium Branding
            <span className="md:block">&amp; Web Design in Florida</span>
          </motion.h2>

          {/* 👇 CAMBIO: Actualizamos el color al nuevo sistema de diseño para consistencia */}
          <motion.p
            className="text-base text-brand-cream/90 md:text-lg"
            {...descAnimProps}
          >
            We specialize in creating visually stunning brands and responsive,
            SEO-optimized websites. At Okrices, your vision meets sophisticated,
            high-quality design.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
