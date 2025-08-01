// src/components/about/HeroAbout.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../shared/Container";

export default function HeroAbout({ title, subtitle, description, image }) {
  // Variantes de animación similares a las de Home
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Fondo con efecto similar al Hero principal */}
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
          {/* Imagen circular con animación */}
          {image && (
            <motion.div
              className="relative w-40 h-40 md:w-52 md:h-52 mb-8"
              variants={imageVariants}
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/30">
                <Image
                  src={image}
                  alt="About Okrices"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          )}

          {/* Título con efecto de gradiente */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-variable"
            variants={itemVariants}
          >
            {title.split(" ").map((word, index) => (
              <span key={index}>
                {word === "Okrices" ? (
                  <span className="text-accent">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </motion.h1>

          {/* Subtítulo */}
          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-beige/80 mb-4 font-light"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Descripción */}
          <motion.p
            className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* Indicador de scroll animado (opcional) */}
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
