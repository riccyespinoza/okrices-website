// src/components/services/ServicesWeb.jsx
"use client";

import { useReducedMotion, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/shared/ServiceCard";
import { FaBolt, FaStore, FaCode } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function ServicesWeb({
  id,
  title,
  intro,
  options = [],
  ctaLabel,
  ctaHref,
}) {
  const prefersReduced = useReducedMotion();
  const icons = [FaBolt, FaStore, FaCode];

  const normalized = options.map((opt, i) => {
    const Icon = icons[i % icons.length];
    return {
      id: i + 1,
      icon: <Icon className="mb-4 text-3xl text-accent" />,
      title: opt.title,
      description: opt.description,
    };
  });

  const containerAnimProps = prefersReduced
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.4 },
      };

  return (
    <Section id={id} spacing="py-24 md:py-32" aria-labelledby={`${id}-title`}>
      <Container>
        <motion.div className="text-center" {...containerAnimProps}>
          <h2
            id={`${id}-title`}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            {title}
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-gray-300">{intro}</p>

          <ul className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {normalized.map((card) => (
              <ServiceCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </ul>

          <Button href={ctaHref} variant="secondary">
            {ctaLabel}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
