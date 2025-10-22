// src/components/home/WhyOkricesSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ServiceCard from "../shared/ServiceCard";
import { FaRegEye, FaUsers, FaChartLine, FaCheckCircle } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function WhyOkricesSection({ title, intro, bullets = [], cta }) {
  const prefersReduced = useReducedMotion();
  const containerAnimProps = prefersReduced
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.4 },
      };

  const icons = [FaRegEye, FaUsers, FaChartLine, FaCheckCircle];

  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="why-okrices-title">
      <Container>
        <motion.div className="text-center" {...containerAnimProps}>
          <h2
            id="why-okrices-title"
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mb-12 max-w-3xl text-brand-cream/90">
              {intro}
            </p>
          )}

          <ul className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {bullets.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <ServiceCard
                  key={i}
                  icon={<Icon className="mb-4 text-3xl text-accent" />}
                  title={item.title}
                  description={item.description}
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
