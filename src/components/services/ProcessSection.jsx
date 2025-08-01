// src/components/services/ProcessSection.jsx
"use client";

import { motion } from "framer-motion";
import { FiSearch, FiPenTool, FiCode, FiPackage } from "react-icons/fi";
import Section from "../shared/Section";
import Container from "../shared/Container";

const steps = [
  {
    icon: FiSearch,
    title: "Consultation",
    text: "Understand your vision, goals and budget.",
  },
  {
    icon: FiPenTool,
    title: "Proposal",
    text: "Transparent scope, pricing and deliverables.",
  },
  {
    icon: FiCode,
    title: "Design & Development",
    text: "Collaborative, elegant design solutions.",
  },
  {
    icon: FiPackage,
    title: "Delivery & Training",
    text: "Hand-over and training so you manage with ease.",
  },
];

export default function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <Section spacing="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light">
            Our <span className="text-accent">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Línea horizontal - solo desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <motion.div
            className="grid gap-8 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative group"
              >
                <motion.div
                  className="relative flex flex-col items-center text-center glass-card-advanced border border-white/5 rounded-lg p-6 h-full transition-all duration-300"
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(165, 81, 48, 0.3)",
                    boxShadow: "0 10px 30px rgba(165, 81, 48, 0.15)",
                  }}
                >
                  {/* Nodo de la línea - solo desktop */}
                  <motion.div
                    className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-deepblue border-2 border-accent/50 group-hover:border-accent transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="mb-4 mt-4 md:mt-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-semibold text-light mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
