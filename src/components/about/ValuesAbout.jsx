// src/components/about/ValuesAbout.jsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCheckCircle,
  FaPalette,
  FaFeather,
  FaBullseye,
  FaPuzzlePiece,
} from "react-icons/fa";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const icons = [FaCheckCircle, FaPalette, FaFeather, FaBullseye, FaPuzzlePiece];

export default function ValuesAbout({ values, title = "Our Values" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
            Our <span className="text-accent">Values</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            The principles that guide every project and interaction
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const Icon = icons[index];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  className="relative h-full p-6 rounded-lg glass-card-advanced border border-white/5 cursor-pointer transition-transform transition-colors duration-300"
                  animate={{
                    y: isHovered ? -5 : 0,
                    borderColor: isHovered
                      ? "rgba(165, 81, 48, 0.3)"
                      : "rgba(255, 255, 255, 0.05)",
                  }}
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(165, 81, 48, 0.15)",
                  }}
                >
                  {/* Icon container */}
                  <motion.div
                    className="mb-4 relative"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 w-14 h-14 mx-auto rounded-full bg-accent/20 blur-xl"
                      animate={{
                        opacity: isHovered ? 0.5 : 0,
                        scale: isHovered ? 1.5 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-light text-center">
                    {value.label}
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
