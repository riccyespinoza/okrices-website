"use client";

import { motion } from "framer-motion";
import Section from "../shared/Section";
import Container from "../shared/Container";
import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: <FaPaintBrush className="text-accent text-3xl mb-4" />,
      title: "Branding & Visual Identity",
      description: "Define your brand clearly and attractively.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-accent text-3xl mb-4" />,
      title: "Web Design & Development",
      description: "Build elegant, functional websites.",
    },
  ];

  return (
    <Section spacing="py-24 md:py-32">
      <Container>
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Featured <span className="text-accent">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-deepblue/30 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              >
                <div className="flex flex-col items-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <a
              href="/services"
              className="inline-block text-light px-6 py-3 rounded-md font-medium transition-all duration-300 btn-gradient"
            >
              Discover More
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
