// src/components/contact/ContactHero.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-3xl text-center mx-auto px-6 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-variable"
          >
            Let’s Bring Your Vision to Life
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-300 text-lg leading-relaxed"
          >
            At Okrices, we’re always excited to hear about your ideas and goals.
            Whether you're ready to start a project or just exploring
            possibilities, get in touch using the form below. We promise
            clarity, professionalism, and prompt responses.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
