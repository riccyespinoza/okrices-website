// src/components/about/TimelineAbout.jsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Section from "../shared/Section";
import Container from "../shared/Container";

export default function TimelineAbout({ founder, history }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Timeline data
  const timelineData = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started with a vision to transform digital experiences",
    },
    {
      year: "2022",
      title: "Growing Team",
      description: "Expanded our expertise and welcomed new talent",
    },
    {
      year: "2024",
      title: "New Horizons",
      description: "Launched innovative solutions for modern businesses",
    },
  ];

  return (
    <Section spacing="py-24 md:py-32">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
            Our <span className="text-accent">Story</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            {history}
          </p>
        </motion.div>
        {/* Timeline Horizontal */}
        <div className="relative mb-20">
          {/* Línea horizontal */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Círculo del timeline */}
                <motion.div
                  className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent/50 bg-deepblue mb-6 transition-all duration-300"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    borderColor:
                      hoveredIndex === index
                        ? "#a55130"
                        : "rgba(165, 81, 48, 0.5)",
                    backgroundColor:
                      hoveredIndex === index
                        ? "rgba(165, 81, 48, 0.1)"
                        : "rgba(13, 21, 33, 1)",
                  }}
                >
                  <span className="text-accent font-bold">{item.year}</span>
                </motion.div>

                {/* Contenido */}
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold mb-2 text-light">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="glass-card-advanced p-8 rounded-lg max-w-2xl w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-3xl font-bold text-light">
                  {founder[0][0]}
                </span>
              </motion.div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-1 text-light">
                  {founder[0]}
                </h3>
                <p className="text-accent mb-3">Founder & Creative Director</p>
                <p className="text-gray-300 leading-relaxed">
                  {founder[1] ||
                    "Passionate about creating digital experiences that inspire and transform businesses through the perfect blend of creativity and strategy."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
