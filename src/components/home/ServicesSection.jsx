// src/components/home/ServicesSection.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button"; // Importamos Button
import ServiceCard from "../shared/ServiceCard"; // Importamos el nuevo ServiceCard
import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";

// Definimos las variantes de animación para el contenedor
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function ServicesSection() {
  const prefersReduced = useReducedMotion();

  const services = [
    {
      id: 1,
      icon: <FaPaintBrush className="mb-4 text-3xl text-accent" />,
      title: "Strategic Branding ",
      description:
        "We create clear and consistent visual identities that inspire trust and purpose from the very first interaction.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="mb-4 text-3xl text-accent" />,
      title: "Web Development",
      description:
        "We design elegant and functional websites, built to attract your audience and turn visits into real clients.",
    },
  ];

  const containerAnimProps = prefersReduced
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.4 },
      };

  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="home-services">
      <Container>
        <motion.div className="text-center" {...containerAnimProps}>
          <h2
            id="home-services"
            className="mb-16 text-3xl font-bold md:text-4xl"
          >
            Our <span className="text-accent">Services</span>
          </h2>

          {/* 👇 CAMBIO: El mapeo ahora es mucho más limpio usando el componente ServiceCard */}
          <ul className="mb-12 grid gap-10 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </ul>

          {/* 👇 CAMBIO: Reemplazamos el Link con nuestro componente Button */}
          <div>
            <Button href="/services" variant="gradient">
              View services
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
