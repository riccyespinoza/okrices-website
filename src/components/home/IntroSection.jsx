// Ejemplo para mejorar la IntroSection
"use client";
import { motion } from "framer-motion";
import Section from "../shared/Section";
import Container from "../shared/Container";

export default function IntroSection() {
  // Variantes con trayectorias no lineales
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Diferentes direcciones y timing para cada elemento
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.2,
      },
    },
  };

  return (
    <Section spacing="py-16 md:py-24">
      <Container>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            variants={titleVariants}
          >
            Premium Branding
            <span className="md:block">&amp; Web Design in Florida</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-300"
            variants={descriptionVariants}
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
