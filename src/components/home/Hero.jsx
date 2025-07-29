"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";

// Variantes de animación
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20" // Ajustado para centrar mejor verticalmente
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            variants={item}
          >
            Transform Your Brand with{" "}
            <span className="text-accent">Elegance</span> and Precision
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto mb-10 text-base md:text-lg text-gray-300"
            variants={item}
          >
            At Okrices, we craft distinctive brands and elegant websites
            designed to elevate your business. Inspired by the intelligence and
            adaptability of the octopus, we deliver tailored, creative solutions
            that resonate.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            variants={item}
          >
            <a
              href="/services"
              className="inline-block text-light px-6 py-3 rounded-md font-medium transition-all duration-300 btn-gradient"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="inline-block border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
