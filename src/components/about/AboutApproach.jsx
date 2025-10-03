// src/components/about/AboutApproach.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ServiceCard from "../shared/ServiceCard";
import { FaRegEye, FaUsers, FaChartLine, FaCheckCircle } from "react-icons/fa";

// Variantes de animación (idénticas a Home)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function AboutApproach({
  id = "about-approach",
  title,
  // items puede venir como array de strings o de objetos { title, description, icon }
  items = [],
}) {
  const prefersReduced = useReducedMotion();

  // Íconos por defecto (si no vienen en items)
  const defaultIcons = [FaRegEye, FaUsers, FaChartLine, FaCheckCircle];

  // Normalizamos items para ServiceCard
  const normalized = items.map((it, idx) => {
    if (typeof it === "string") {
      const Icon = defaultIcons[idx % defaultIcons.length];
      return {
        id: idx + 1,
        icon: <Icon className="mb-4 text-3xl text-accent" />,
        title: it,
        description: "", // opcional para i18n futuro
      };
    }
    // objeto
    const Icon = it?.icon ?? defaultIcons[idx % defaultIcons.length]; // si te mandan el componente directamente, puedes remover esta línea
    return {
      id: it?.id ?? idx + 1,
      icon:
        typeof Icon === "function" ? (
          <Icon className="mb-4 text-3xl text-accent" />
        ) : (
          it.icon
        ),
      title: it?.title ?? "",
      description: it?.description ?? "",
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
          <ul className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {normalized.map((card) => (
              <ServiceCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
