"use client";
import AnimatedLogo from "@/components/AnimatedLogo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-primary text-light overflow-hidden">
      {/* Logo flotante al fondo */}
      <AnimatedLogo className="absolute -z-10 bottom-10 right-10" />

      {/* Fade-in container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          We turn business ideas into <br className="hidden md:block" />
          clear, functional brands.
        </h1>

        <p className="mt-6 text-lg text-cream">
          We are a visual identity & web development studio that creates
          strategic solutions to communicate exactly what you need to say.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium transition hover:scale-105"
          >
            Explore Our Work
          </Link>
          <Link
            href="/services"
            className="border border-accent text-accent px-6 py-3 rounded-lg text-sm font-medium transition hover:bg-accent hover:text-white"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
