"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 text-text-primary">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6"
      >
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Our website is coming soon
        </h1>
        <p className="text-text-muted text-lg max-w-xl mx-auto">
          We’re working on something beautiful. Soon you’ll be able to explore
          our branding and web development services.
        </p>
        <a
          href="mailto:hello@okrices.com"
          className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </main>
  );
}
