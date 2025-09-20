// src/components/services/ServicesHero.jsx
"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ServicesHero() {
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
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepblue/5 to-transparent" />
      </div>

      <Container>
        <motion.div
          className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-variable"
            variants={itemVariants}
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            We focus on two key areas to elevate your brand and grow your
            business:{" "}
            <span className="text-light font-medium">
              Branding & Visual Identity
            </span>{" "}
            and{" "}
            <span className="text-light font-medium">
              Web Design & Development
            </span>
            . We offer clear solutions adapted to your needs, budget, and goals.
          </motion.p>

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
