// src/components/home/WhyOkricesSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ServiceCard from "../shared/ServiceCard"; // 🔹 1. ¡USAMOS EL COMPONENTE CORRECTO!
import { FaRegEye, FaUsers, FaChartLine, FaCheckCircle } from "react-icons/fa";

// Los datos se mantienen, ya que su estructura es compatible con las props de ServiceCard
const whyPoints = [
  {
    id: 1,
    icon: <FaRegEye className="mb-4 text-3xl text-accent" />,
    title: "Clarity",
    description: "Visual identities that communicate with purpose.",
  },
  {
    id: 2,
    icon: <FaUsers className="mb-4 text-3xl text-accent" />,
    title: "Conversion",
    description: "Websites designed to turn visitors into clients.",
  },
  {
    id: 3,
    icon: <FaChartLine className="mb-4 text-3xl text-accent" />,
    title: "Growth",
    description: "Strategy focused on real business results.",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="mb-4 text-3xl text-accent" />,
    title: "Guidance",
    description: "Partnership from the initial idea to the final launch.",
  },
];

// Mismas variantes de animación que en ServicesSection para consistencia total
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function WhyOkricesSection() {
  const prefersReduced = useReducedMotion();

  const containerAnimProps = prefersReduced
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.4 },
      };

  return (
    // Se mantiene el mismo espaciado que las otras secciones
    <Section spacing="py-24 md:py-32" aria-labelledby="why-okrices-title">
      <Container>
        <motion.div className="text-center" {...containerAnimProps}>
          <h2
            id="why-okrices-title"
            className="mb-16 text-3xl font-bold md:text-4xl"
          >
            Why <span className="text-accent">Okrices</span>?
          </h2>

          {/* 🔹 2. El grid ahora renderiza ServiceCard, garantizando el mismo estilo */}
          <ul className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((point) => (
              <ServiceCard
                key={point.id}
                icon={point.icon}
                title={point.title}
                description={point.description}
              />
            ))}
          </ul>

          {/* 🔹 3. Usamos tu componente Button estándar */}
          <div>
            <Button href="/services" variant="secondary">
              Discover Our Process
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
