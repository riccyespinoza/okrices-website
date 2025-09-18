// src/components/home/CtaSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../shared/Section";
import Container from "../shared/Container";
import Button from "../shared/Button"; // Importamos nuestro componente Button

// 👇 CAMBIO 1: Estructuramos las animaciones con 'variants' para un código más limpio
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CtaSection() {
  const prefersReduced = useReducedMotion();

  // Desactivamos las animaciones si el usuario lo prefiere
  const containerAnim = prefersReduced
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.5 },
        variants: containerVariants,
      };

  const itemAnim = prefersReduced ? {} : { variants: itemVariants };

  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="home-cta">
      <Container>
        {/* 👇 CAMBIO 2: Usamos un motion.div como contenedor para la animación secuencial */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          {...containerAnim}
        >
          <motion.h2
            id="home-cta"
            className="mb-8 text-3xl font-bold text-light md:text-4xl"
            {...itemAnim}
          >
            Ready to enhance your business presence?
          </motion.h2>

          <motion.div {...itemAnim}>
            {/* 👇 CAMBIO 3: Reemplazamos el <a> manual con el componente <Button> */}
            <Button href="/contact" variant="gradient">
              Start Your Project
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
