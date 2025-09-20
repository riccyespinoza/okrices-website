// src/components/services/BrandingHero.jsx
"use client";
import { motion } from "framer-motion";

export default function BrandingHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
        }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          Build a <span className="text-accent">Premium Brand</span> That Stands
          Out
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl"
        >
          At Okrices we craft visual identities that communicate …
        </motion.p>
      </motion.div>
    </section>
  );
}
