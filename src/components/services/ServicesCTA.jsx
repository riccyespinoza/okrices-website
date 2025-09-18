// src/components/services/ServicesCTA.jsx
"use client";

import { motion } from "framer-motion";
import Section from "../shared/Section";
import Container from "../shared/Container";

export default function ServicesCTA() {
  return (
    <Section spacing="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Begin?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discuss your project with us — clarity, quality and professionalism
            guaranteed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="btn btn-gradient"
              aria-label="Request Your Quote"
            >
              Request Your Quote
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
