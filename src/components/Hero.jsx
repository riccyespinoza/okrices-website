"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center text-center px-6 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-light mb-4">
          Welcome to <span className="text-accent">Okrices</span>
        </h1>
        <p className="text-mutedgray text-lg mb-6">
          Your brand deserves to be clear, functional, and elegant. Let’s build
          it together.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all hover:bg-opacity-80"
          >
            Let’s Talk
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
