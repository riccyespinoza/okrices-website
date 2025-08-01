// src/components/services/ServiceCards.jsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function ServiceCards({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!Array.isArray(services) || services.length === 0) {
    return (
      <section className="text-center py-12">
        <p className="text-gray-400">No services found.</p>
      </section>
    );
  }

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

  // Find the middle package to mark as popular (or check if any has a popular flag)
  const middleIndex = Math.floor(services.length / 2);

  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: 0.2 }}
    >
      {services.map((service, index) => {
        const isHovered = hoveredIndex === index;
        const isPopular = service.popular || index === middleIndex;

        return (
          <motion.article
            key={service._id}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            {/* Popular badge */}
            {isPopular && services.length > 1 && (
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-accent text-light px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </motion.div>
            )}

            <motion.div
              className={`relative h-full glass-card-advanced p-8 rounded-lg border transition-all duration-300 ${
                isPopular ? "border-accent/30" : "border-white/5"
              }`}
              animate={{
                y: isHovered ? -10 : 0,
                borderColor: isHovered
                  ? "rgba(165, 81, 48, 0.5)"
                  : isPopular
                    ? "rgba(165, 81, 48, 0.3)"
                    : "rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                boxShadow: "0 20px 40px rgba(165, 81, 48, 0.15)",
              }}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-light mb-2">
                  {service.title_en}
                </h3>
                {service.duration && (
                  <span className="text-sm text-gray-400">
                    {service.duration}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {service.desc_en}
              </p>

              {/* Features/Bullets */}
              {service.bullets_en && service.bullets_en.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {service.bullets_en.map((bullet, bIndex) => (
                    <motion.li
                      key={bIndex}
                      className="flex items-start text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * bIndex }}
                    >
                      <FaCheck className="text-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {/* Price */}
              {service.price && (
                <div className="mb-6 text-center">
                  <p className="text-3xl font-bold text-accent">
                    {service.price}
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <motion.a
                href="/contact"
                className={`block text-center px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  isPopular
                    ? "btn-gradient text-light"
                    : "border border-accent text-accent hover:bg-accent/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.article>
        );
      })}
    </motion.section>
  );
}
