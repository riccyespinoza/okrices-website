// src/components/about/ValuesAbout.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ServiceCard from "../shared/ServiceCard";
import { FaRegEye, FaUsers, FaChartLine, FaCheckCircle } from "react-icons/fa";

// Animaciones consistentes con otras secciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function ValuesAbout({
  id = "about-values",
  title = "Our Values",
  values = [],
}) {
  const prefersReduced = useReducedMotion();

  // Íconos por defecto (si no los mandas desde props)
  const defaultIcons = [FaRegEye, FaUsers, FaChartLine, FaCheckCircle];

  // Normalizamos los valores para pasarlos a ServiceCard
  const normalized = values.map((val, idx) => {
    const Icon = defaultIcons[idx % defaultIcons.length];
    return {
      id: idx + 1,
      icon: <Icon className="mb-4 text-3xl text-accent" />,
      title: val?.label ?? "",
      description: val?.desc ?? "",
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
    <Section spacing="py-24 md:py-32" aria-labelledby={`${id}-title`}>
      <Container>
        <motion.div className="text-center" {...containerAnimProps}>
          <h2
            id={`${id}-title`}
            className="mb-16 text-3xl font-bold md:text-4xl"
          >
            {title?.split(" ")[0]}{" "}
            <span className="text-accent">
              {title?.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          {/* Grid idéntico al de WhyOkricesSection */}
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {normalized.map((val) => (
              <ServiceCard
                key={val.id}
                icon={val.icon}
                title={val.title}
                description={val.description}
              />
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
