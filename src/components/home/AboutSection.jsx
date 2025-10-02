// src/components/home/AboutMiniSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button"; // 👈 ¡CORREGIDO! Importamos el componente Button

export default function AboutMiniSection() {
  const prefersReduced = useReducedMotion();

  // Mismas variantes de animación para consistencia
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
    // 👈 Usamos tu componente Section estándar, que ya incluye el Container
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
          About Okrices
        </motion.h2>

        <motion.p
          className="mb-8 text-base text-brand-cream/90 md:text-lg"
          {...itemAnimProps}
        >
          Okrices is a branding and web development studio based in South
          Florida. We create clear identities and functional websites that
          inspire trust and support each business’s growth.
        </motion.p>

        {/* 👇 ¡CORREGIDO! Ahora usamos tu componente Button estándar */}
        <motion.div {...itemAnimProps}>
          <Button href="/about" variant="secondary">
            About Us
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
