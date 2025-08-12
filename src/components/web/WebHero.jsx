// src/components/web/WebHero.jsx
"use client";

import { motion } from "framer-motion";

export default function WebHero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-variable"
          >
            Websites Designed to&nbsp;
            <span className="text-accent">Convert</span>&nbsp;and Captivate
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-3xl mx-auto mb-10 text-base md:text-lg text-gray-300"
          >
            We craft minimalist, responsive websites that enhance your online
            presence, increase leads and deliver a premium user experience.
          </motion.p>
        </motion.div>
      </div>

      {/* indicador scroll idéntico al de Branding */}
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
