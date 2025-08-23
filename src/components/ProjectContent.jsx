// src/components/ProjectContent.jsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUser,
  FiSettings,
  FiCalendar,
  FiMapPin,
  FiZap,
  FiTrendingUp,
  FiAlertCircle,
  FiArrowUpRight,
} from "react-icons/fi";

// --- Animaciones ---
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Sub-componentes para un código limpio ---

const DetailCard = ({ icon, title, text }) => {
  if (!text) return null;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center mb-4 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

const KeyDataCard = ({ icon, title, value }) => {
  if (!value) return null;
  return (
    <div className="bg-white/5 p-5 rounded-lg border border-white/10 w-full text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start text-accent mb-2">
        {icon}
        <h3 className="font-normal text-sm text-gray-400 ml-2">{title}</h3>
      </div>
      <p className="text-lg font-semibold text-light">{value}</p>
    </div>
  );
};

// --- Componente Principal ---

export default function ProjectContent({ project }) {
  const getImageUrl = (source) => source?.asset?.url || null;
  const mainImageUrl = getImageUrl(project.mainImage);

  return (
    <main className="text-light">
      {/* --- 1. HERO "STICKY" --- */}
      <header className="sticky top-0 h-screen flex flex-col justify-end items-start p-8 md:p-12 text-left -z-10">
        {mainImageUrl && (
          <div className="absolute inset-0 z-0">
            <img
              src={mainImageUrl}
              alt={`Hero background for ${project.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </div>
        )}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-300 mt-4"
          >
            {project.projectType}
          </motion.p>
        </div>
      </header>

      {/* --- 2. CONTENIDO PRINCIPAL (La capa que se desliza por encima) --- */}
      <div className="relative z-20 bg-deepblue">
        <div className="max-w-5xl mx-auto px-6">
          {/* --- FICHA RÁPIDA CON DATOS CLAVE --- */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-24 md:pt-32"
          >
            <KeyDataCard
              icon={<FiUser />}
              title="Client"
              value={project.client}
            />
            <KeyDataCard
              icon={<FiSettings />}
              title="Services"
              value={project.services}
            />
            <KeyDataCard
              icon={<FiCalendar />}
              title="Year"
              value={project.year}
            />
            <KeyDataCard
              icon={<FiMapPin />}
              title="Location"
              value={project.location}
            />
          </motion.section>

          {/* --- OVERVIEW Y DETALLES --- */}
          <div className="space-y-24 md:space-y-32 py-24 md:py-32">
            <motion.section
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl font-bold mb-6">
                Project <span className="text-accent">Overview</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                {project.overview}
              </p>
            </motion.section>

            <motion.section
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12 md:gap-16"
            >
              <DetailCard
                icon={<FiAlertCircle className="text-accent text-3xl" />}
                title="The Challenge"
                text={project.challenge}
              />
              <DetailCard
                icon={<FiZap className="text-accent text-3xl" />}
                title="The Solution"
                text={project.solution}
              />
              <DetailCard
                icon={<FiTrendingUp className="text-accent text-3xl" />}
                title="The Impact"
                text={project.impact}
              />
            </motion.section>
          </div>

          {/* --- VISUAL GALLERY --- */}
          {project.gallery?.length > 0 && (
            <motion.section
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={img.asset?._id || index}
                    className="w-full aspect-video rounded-lg overflow-hidden bg-gray-800"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src={getImageUrl(img)}
                      alt={img.alt || `Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* --- CTA FINAL --- */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center py-24 md:py-32"
          >
            <Link href="/projects" className="btn btn-secondary text-lg">
              View More Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
