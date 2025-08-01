// src/components/branding/BrandingHero.jsx
"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";

export default function BrandingHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <Container>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-variable"
            variants={itemVariants}
          >
            Build a <span className="text-accent">Premium Brand</span> That
            Stands Out
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            At Okrices we craft visual identities that communicate your brand's
            unique story, values and personality. Our elegant, minimalist
            approach makes a memorable first impression and builds customer
            trust.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
