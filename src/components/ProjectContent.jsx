// src/components/ProjectContent.jsx
"use client";

import Image from "next/image";
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
import DetailCard from "./shared/DetailCard"; // Importamos el nuevo componente
import KeyDataCard from "./shared/KeyDataCard"; // Importamos el nuevo componente
import Button from "./ui/Button"; // Importamos nuestro botón

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectContent({ project }) {
  const getImageUrl = (source) => source?.asset?.url || null;
  const mainImageUrl = getImageUrl(project.mainImage);

  return (
    <main className="min-h-screen text-light">
      {/* HERO */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex min-h-screen flex-col items-start justify-end p-8 text-left md:p-12"
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
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold md:text-7xl"
          >
            {project.title}
          </motion.h1>
          {/* 👇 CAMBIO: Consistencia de color */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-brand-cream/80"
          >
            {project.projectType}
          </motion.p>
        </div>
      </motion.header>

      <div className="mx-auto max-w-5xl px-6">
        {/* Datos Clave */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 py-24 md:grid-cols-4 md:gap-6 md:py-32"
          aria-labelledby="key-data-title"
        >
          {/* 👇 CAMBIO (ACCESIBILIDAD): Añadimos <h2> */}
          <h2 id="key-data-title" className="sr-only">
            Key Project Data
          </h2>
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

        {/* Overview + Detalles */}
        <div className="space-y-24 md:space-y-32">
          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="mb-6 text-3xl font-bold">
              Project <span className="text-accent">Overview</span>
            </h2>
            {/* 👇 CAMBIO: Consistencia de color */}
            <p className="max-w-3xl text-lg leading-relaxed text-brand-cream/80">
              {project.overview}
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-3 md:gap-16"
          >
            <DetailCard
              icon={<FiAlertCircle className="text-3xl text-accent" />}
              title="The Challenge"
              text={project.challenge}
            />
            <DetailCard
              icon={<FiZap className="text-3xl text-accent" />}
              title="The Solution"
              text={project.solution}
            />
            <DetailCard
              icon={<FiTrendingUp className="text-3xl text-accent" />}
              title="The Impact"
              text={project.impact}
            />
          </motion.section>
        </div>
      </div>

      {/* Galería de Imágenes */}
      {project.gallery?.length > 0 && (
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 w-full md:mt-32"
          aria-labelledby="gallery-title"
        >
          <div className="mx-auto max-w-7xl px-6">
            {/* 👇 CAMBIO (ACCESIBILIDAD): Añadimos <h2> */}
            <h2 id="gallery-title" className="sr-only">
              Image Gallery
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {/* ...el resto del código de la galería se mantiene igual... */}
              {project.gallery.map((img, index) => {
                if (index % 2 !== 0) return null;
                const nextImg = project.gallery[index + 1];
                const isReversed = (index / 2) % 2 !== 0;

                return (
                  <div
                    key={img.asset?._id || index}
                    className="grid items-stretch gap-8 md:grid-cols-5"
                  >
                    <motion.div
                      className={isReversed ? "md:col-span-2" : "md:col-span-3"}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* 👇 CAMBIO: Consistencia de estilo */}
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-neutral-800 aspect-[4/3] md:aspect-auto">
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
                        {/* 👇 CAMBIO: Consistencia de estilo */}
                        <div className="relative h-full w-full overflow-hidden rounded-lg bg-neutral-800 aspect-[4/3] md:aspect-auto">
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

      {/* CTA Final */}
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 pb-16 text-center md:mt-32"
        >
          {/* 👇 CAMBIO: Usamos nuestro componente Button */}
          <Button href="/projects" variant="secondary">
            View More Projects
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
