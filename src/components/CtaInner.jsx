"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaInner() {
  return (
    <motion.div
      className="backdrop-blur-md bg-light/5 border border-darkgray/50 rounded-2xl p-10 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to elevate your brand?
      </h2>
      <p className="text-text-muted mb-8">
        Let’s craft something clear, functional and elegant&nbsp;— together.
      </p>

      <Link
        href="/contact"
        className="inline-block bg-accent text-light font-medium px-6 py-3 rounded-lg hover:bg-accent/80 transition"
      >
        Get in touch
      </Link>
    </motion.div>
  );
}
