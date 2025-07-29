"use client";

import { motion } from "framer-motion";
import Section from "../shared/Section";
import Container from "../shared/Container";

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function IntroSection() {
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
            variants={itemVariants}
          >
            Premium Branding
            <span className="md:block">&amp; Web Design in Florida</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-300"
            variants={itemVariants}
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
