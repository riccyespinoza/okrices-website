// src/components/about/HeroAbout.jsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/animations/inView";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function HeroAbout({ title, subtitle, description, image }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Fondo con leve gradiente */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepblue/5 to-transparent" />
      </div>

      <Container>
        <motion.div
          className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Avatar/imagen */}
          {image && (
            <motion.div
              className="relative w-40 h-40 md:w-52 md:h-52 mb-8"
              variants={fadeUp}
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

          {/* Título sin split/map (evita hydration mismatch) */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-variable"
            variants={fadeUp}
          >
            {title}
          </motion.h1>

          {/* Subtítulo */}
          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-beige/80 mb-4 font-light"
              variants={fadeUp}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Descripción */}
          <motion.p
            className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed"
            variants={fadeUp}
          >
            {description}
          </motion.p>

          {/* Indicador de scroll (opcional) */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
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
