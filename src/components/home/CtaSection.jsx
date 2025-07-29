"use client";

import { motion } from "framer-motion";
import Section from "../shared/Section";
import Container from "../shared/Container";

export default function CtaSection() {
  return (
    <Section spacing="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to enhance your business presence?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-block text-light px-6 py-3 rounded-md font-medium transition-all duration-300 btn-gradient"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
