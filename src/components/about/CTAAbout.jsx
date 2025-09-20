// src/components/about/CTAAbout.jsx
"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function CTAAbout({
  text = "Ready to enhance your business presence?",
  buttonLabel = "Start Your Project",
  buttonHref = "/contact",
}) {
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
            {text.split(" ").map((word, index) => (
              <span key={index}>
                {word === "enhance" || word === "presence?" ? (
                  <span>{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={buttonHref}
              className="btn btn-gradient"
              aria-label={buttonLabel}
            >
              {buttonLabel}
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
