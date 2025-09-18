// src/components/home/BenefitsSection.jsx
"use client";

import { motion } from "framer-motion";
import { FiHexagon, FiCpu, FiFeather } from "react-icons/fi";
import BenefitCard from "../BenefitCard";

// 🔹 Declaramos los beneficios DENTRO del mismo Client Component
const benefits = [
  {
    icon: FiHexagon,
    title: "Clear visual language",
    text: "We turn complex ideas into designs that speak for themselves.",
  },
  {
    icon: FiCpu,
    title: "Functional websites",
    text: "Sites optimised for speed, SEO and accessibility.",
  },
  {
    icon: FiFeather,
    title: "Elegant interactions",
    text: "Micro-animations that enhance, never distract.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {benefits.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BenefitCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
