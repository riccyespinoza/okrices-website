"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../shared/Container";

export default function ParallaxHero() {
  const [isMobile, setIsMobile] = useState(false);

  // Deshabilitar parallax en dispositivos móviles
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollY } = useScroll();

  // Valores de transformación (ya no los usaremos para los circulitos)
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Variantes de animación para el contenido
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      {/*
      {!isMobile && (
        <>
          <motion.div
            style={{ y: y1, opacity }}
            className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-accent/10 filter-hero-blur"
          />
          <motion.div
            style={{ y: y2, opacity }}
            className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-beige/10 filter-hero-blur"
          />
          <motion.div
            style={{ y: y3, opacity }}
            className="absolute bottom-1/3 right-1/3 w-[25vw] h-[25vw] rounded-full bg-navy/10 filter-hero-blur"
          />
        </>
      )}
      */}

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
            Transform Your Brand with{" "}
            <span className="text-accent">Elegance</span> and Precision
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto mb-10 text-base md:text-lg text-gray-300"
            variants={itemVariants}
          >
            At Okrices, we craft distinctive brands and elegant websites
            designed to elevate your business. Inspired by the intelligence and
            adaptability of the octopus, we deliver tailored, creative solutions
            that resonate.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            variants={itemVariants}
          >
            <a
              href="/services"
              className="btn-gradient inline-block text-light px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="btn-secondary inline-block border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator (lo dejamos) */}
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
    </section>
  );
}
