// src/components/ProjectContent.jsx
"use client";

import Image from "next/image";
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
} from "react-icons/fi";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* --- Sub-componentes --- */
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

/* --- Componente principal --- */
export default function ProjectContent({ project }) {
  const getImageUrl = (source) => source?.asset?.url || null;
  const mainImageUrl = getImageUrl(project.mainImage);

  return (
    <main className="min-h-screen text-light">
      {/* 1) HERO con imagen prioritaria */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex flex-col justify-end items-start p-8 md:p-12 text-left"
      >
        {mainImageUrl && (
          <div className="absolute inset-0 z-0">
            <Image
              src={mainImageUrl}
              alt={`${project.title} — case study cover`}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width:768px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </div>
        )}

        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300 mt-4"
          >
            {project.projectType}
          </motion.p>
        </div>
      </motion.header>

      {/* 2) Datos clave */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-24 md:py-32"
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

        {/* 3) Overview + Detalles */}
        <div className="space-y-24 md:space-y-32">
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
      </div>

      {/* 4) Visual Gallery (ancho completo) */}
      {project.gallery?.length > 0 && (
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full mt-24 md:mt-32"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 gap-8">
              {project.gallery.map((img, index) => {
                if (index % 2 !== 0) return null;
                const nextImg = project.gallery[index + 1];
                const isReversed = (index / 2) % 2 !== 0;

                return (
                  <div
                    key={img.asset?._id || index}
                    className="grid md:grid-cols-5 gap-8 items-stretch"
                  >
                    <motion.div
                      className={isReversed ? "md:col-span-2" : "md:col-span-3"}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800 aspect-[4/3] md:aspect-auto">
                        <Image
                          src={getImageUrl(img)}
                          alt={img.alt || `Gallery image ${index + 1}`}
                          fill
                          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 800px"
                          className="object-cover"
                        />
                      </div>
                    </motion.div>

                    {nextImg && (
                      <motion.div
                        className={
                          isReversed ? "md:col-span-3" : "md:col-span-2"
                        }
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800 aspect-[4/3] md:aspect-auto">
                          <Image
                            src={getImageUrl(nextImg)}
                            alt={nextImg.alt || `Gallery image ${index + 2}`}
                            fill
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 700px"
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}

      {/* 5) CTA final */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-24 md:mt-32 pb-16"
        >
          <Link href="/projects" className="btn btn-secondary text-lg">
            View More Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
