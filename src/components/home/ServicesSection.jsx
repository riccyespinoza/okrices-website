// src/components/home/ServicesSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ServiceCard from "../shared/ServiceCard";
import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function ServicesSection({ title, intro, items = [], cta }) {
  const prefersReduced = useReducedMotion();
  const containerAnimProps = prefersReduced
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.4 },
      };

  const defaultIcons = [FaPaintBrush, FaLaptopCode];

  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="home-services">
      <Container>
        <motion.div className="text-center" {...containerAnimProps}>
          <h2
            id="home-services"
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mb-12 max-w-3xl text-brand-cream/90">
              {intro}
            </p>
          )}

          <ul className="mb-12 grid gap-10 md:grid-cols-2">
            {items.map((s, i) => {
              const Icon = defaultIcons[i % defaultIcons.length];
              return (
                <ServiceCard
                  key={i}
                  icon={<Icon className="mb-4 text-3xl text-accent" />}
                  title={s.title}
                  description={s.description}
                />
              );
            })}
          </ul>

          {cta?.href && (
            <div>
              <Button href={cta.href} variant="gradient">
                {cta.label}
              </Button>
            </div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
