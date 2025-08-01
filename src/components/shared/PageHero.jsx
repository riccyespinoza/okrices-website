"use client";
import { motion } from "framer-motion";
import Container from "./Container";

export default function PageHero({ title, subtitle, description }) {
  return (
    <section className="pt-28 pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center glass-card-advanced p-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
          {subtitle && (
            <h2 className="text-xl md:text-2xl font-light mb-4 text-accent">
              {subtitle}
            </h2>
          )}
          <p className="text-lg md:text-xl text-gray-300">{description}</p>
        </motion.div>
      </Container>
    </section>
  );
}
