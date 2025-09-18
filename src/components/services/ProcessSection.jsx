// src/components/services/ProcessSection.jsx
"use client";

import { motion } from "framer-motion";
import { FiSearch, FiPenTool, FiCode, FiPackage } from "react-icons/fi";

const steps = [
  {
    icon: <FiSearch className="text-accent text-2xl mb-4" />,
    title: "Discover",
    text: "Brief, research and goal-setting so we’re aligned from day one.",
  },
  {
    icon: <FiPenTool className="text-accent text-2xl mb-4" />,
    title: "Design",
    text: "Brand visuals, wireframes and feedback loops until it feels right.",
  },
  {
    icon: <FiCode className="text-accent text-2xl mb-4" />,
    title: "Develop",
    text: "Pixel-perfect, responsive and accessible website build-out.",
  },
  {
    icon: <FiPackage className="text-accent text-2xl mb-4" />,
    title: "Deliver",
    text: "Launch, training and optional care plan for peace of mind.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-primary text-light py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our&nbsp;Process
        </h2>
        <p className="text-text-muted max-w-3xl mx-auto mb-10">
          A transparent, step-by-step workflow that keeps you in the loop from
          concept to launch.
        </p>

        <div className="relative">
          {/* línea conectora */}
          <div
            className="hidden md:block absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full h-px bg-darkgray/60" />
          </div>

          <div className="grid gap-14 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* “badge” circular */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full bg-deepblue border border-white/10 grid place-items-center mb-6
                                transition-transform transition-colors duration-300 hover:scale-105 hover:border-accent/50"
                >
                  {step.icon}
                </div>

                {/* tarjetita */}
                <div
                  className="glass-card-advanced p-6 rounded-lg border border-white/5
                                transition-transform transition-colors duration-300 hover:-translate-y-1 hover:border-accent/30"
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* “dot” inferior opcional */}
                <div className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <div
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30
                                  transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
