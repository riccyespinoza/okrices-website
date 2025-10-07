// src/components/ProjectContent.jsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/shared/ServiceCard";
import {
  FiUser,
  FiSettings,
  FiCalendar,
  FiMapPin,
  FiTrendingUp,
  FiAlertCircle,
  FiZap,
} from "react-icons/fi";
import { FaCheckCircle, FaLayerGroup, FaTabletAlt } from "react-icons/fa";

// Variantes de animación para las secciones con tarjetas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function ProjectContent({ project }) {
  const prefersReduced = useReducedMotion();

  // --- Lógica de preparación de datos (sin cambios) ---
  const getImageUrl = (img) => img?.asset?.url || null;
  const mainImageUrl = getImageUrl(project?.mainImage);

  const gallery = Array.isArray(project?.gallery)
    ? project.gallery.filter((img) => getImageUrl(img))
    : [];

  const contextLine =
    project?.contextLine ??
    (project?.overview ? String(project.overview).slice(0, 140) : "");

  const deliverables =
    Array.isArray(project?.deliverables) && project.deliverables.length > 0
      ? project.deliverables
      : project?.services
        ? String(project.services)
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : [];
  // --- Fin de la lógica de datos ---

  return (
    <main className="min-h-screen text-light">
      {/* =======================================================
          1) Hero visual
          ======================================================= */}
      <Section
        spacing="pt-24 pb-32"
        className="relative flex min-h-screen items-end justify-start overflow-hidden"
        withContainer={false}
        aria-labelledby="project-hero-title"
      >
        {mainImageUrl && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={mainImageUrl}
              alt={project?.mainImage?.alt || `${project?.title} hero`}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
          </div>
        )}
        <Container>
          <h1
            id="project-hero-title"
            className="text-gradient text-5xl font-bold md:text-7xl"
          >
            {project?.title}
          </h1>
          {project?.projectType && (
            <p className="mt-3 text-lg text-brand-sand">
              {project.projectType}
            </p>
          )}
          {contextLine && (
            <p className="mt-4 max-w-3xl text-brand-cream opacity-90 md:text-xl">
              {contextLine}
            </p>
          )}
        </Container>
      </Section>

      {/* =======================================================
          2) Descripción breve
          ======================================================= */}
      {project?.overview && (
        <Section spacing="py-24 md:py-32" aria-labelledby="brief-title">
          <Container>
            <h2
              id="brief-title"
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              El <span className="highlight">Resumen</span>
            </h2>
            <p className="max-w-4xl text-lg text-brand-cream opacity-90 text-justify md:text-xl leading-relaxed">
              {project.overview}
            </p>
          </Container>
        </Section>
      )}

      {/* =======================================================
          3) Datos clave
          ======================================================= */}
      {(project?.client ||
        project?.services ||
        project?.year ||
        project?.location) && (
        <Section spacing="py-24 md:py-32" aria-labelledby="key-data-title">
          <Container>
            <motion.div
              className="text-center"
              variants={prefersReduced ? {} : containerVariants}
              initial={prefersReduced ? undefined : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={
                prefersReduced ? undefined : { once: true, amount: 0.3 }
              }
            >
              <h2
                id="key-data-title"
                className="mb-12 text-3xl font-bold md:text-4xl"
              >
                Datos <span className="highlight">Clave</span>
              </h2>
              <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {project?.client && (
                  <ServiceCard
                    icon={<FiUser className="mb-4 text-3xl text-accent" />}
                    title="Cliente"
                    description={project.client}
                  />
                )}
                {project?.services && (
                  <ServiceCard
                    icon={<FiSettings className="mb-4 text-3xl text-accent" />}
                    title="Servicios"
                    description={project.services}
                  />
                )}
                {project?.year && (
                  <ServiceCard
                    icon={<FiCalendar className="mb-4 text-3xl text-accent" />}
                    title="Año"
                    description={project.year}
                  />
                )}
                {project?.location && (
                  <ServiceCard
                    icon={<FiMapPin className="mb-4 text-3xl text-accent" />}
                    title="Ubicación"
                    description={project.location}
                  />
                )}
              </ul>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* =======================================================
          4) Entregables del Proyecto
          ======================================================= */}
      {deliverables.length > 0 && (
        <Section spacing="py-24 md:py-32" aria-labelledby="deliverables-title">
          <Container>
            <motion.div
              className="text-center"
              variants={prefersReduced ? {} : containerVariants}
              initial={prefersReduced ? undefined : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={
                prefersReduced ? undefined : { once: true, amount: 0.3 }
              }
            >
              <h2
                id="deliverables-title"
                className="mb-12 text-3xl font-bold md:text-4xl"
              >
                Entregables del <span className="highlight">Proyecto</span>
              </h2>
              <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {deliverables.map((item, i) => {
                  const icons = [FaCheckCircle, FaLayerGroup, FaTabletAlt];
                  const Icon = icons[i % icons.length];
                  return (
                    <ServiceCard
                      key={`${item}-${i}`}
                      icon={<Icon className="mb-4 text-3xl text-accent" />}
                      title={item}
                      description=""
                    />
                  );
                })}
              </ul>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* =======================================================
          5) Resultados del Proyecto (✨ SECCIÓN RESTAURADA)
          ======================================================= */}
      {(project?.challenge || project?.solution || project?.impact) && (
        <Section spacing="py-24 md:py-32" aria-labelledby="results-title">
          <Container>
            <motion.div
              className="text-center"
              variants={prefersReduced ? {} : containerVariants}
              initial={prefersReduced ? undefined : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={
                prefersReduced ? undefined : { once: true, amount: 0.3 }
              }
            >
              <h2
                id="results-title"
                className="mb-12 text-3xl font-bold md:text-4xl"
              >
                Resultados del <span className="highlight">Proyecto</span>
              </h2>
              <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {project?.challenge && (
                  <ServiceCard
                    icon={
                      <FiAlertCircle className="mb-4 text-3xl text-accent" />
                    }
                    title="El Reto"
                    description={project.challenge}
                  />
                )}
                {project?.solution && (
                  <ServiceCard
                    icon={<FiZap className="mb-4 text-3xl text-accent" />}
                    title="La Solución"
                    description={project.solution}
                  />
                )}
                {project?.impact && (
                  <ServiceCard
                    icon={
                      <FiTrendingUp className="mb-4 text-3xl text-accent" />
                    }
                    title="El Impacto"
                    description={project.impact}
                  />
                )}
              </ul>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* =======================================================
          6) Galería visual
          ======================================================= */}
      {gallery.length > 0 && (
        <Section spacing="py-24 md:py-32" aria-labelledby="gallery-title">
          <Container fluid>
            <div className="text-center mb-12">
              <h2 id="gallery-title" className="text-3xl md:text-4xl font-bold">
                Galería <span className="text-gradient">Visual</span>
              </h2>
              <p className="mt-4 text-lg text-brand-cream opacity-90 max-w-2xl mx-auto">
                Un vistazo detallado a los entregables y la identidad visual
                desarrollada para el proyecto.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {gallery.map((img, index) => {
                if (index % 2 !== 0) return null;
                const nextImg = gallery[index + 1];
                const isReversed = (index / 2) % 2 !== 0;

                return (
                  <div
                    key={img.asset?._id || index}
                    className="grid min-h-[450px] items-stretch gap-8 md:grid-cols-5"
                  >
                    <div
                      className={isReversed ? "md:col-span-2" : "md:col-span-3"}
                    >
                      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-800">
                        <Image
                          src={img.asset.url}
                          alt={img.alt || `Imagen de galería ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    {nextImg && (
                      <div
                        className={
                          isReversed ? "md:col-span-3" : "md:col-span-2"
                        }
                      >
                        <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-800">
                          <Image
                            src={nextImg.asset.url}
                            alt={
                              nextImg.alt || `Imagen de galería ${index + 2}`
                            }
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 700px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* =======================================================
          7) CTA final
          ======================================================= */}
      <Section spacing="py-24 md:py-32" aria-labelledby="project-cta-title">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="project-cta-title"
              className="text-3xl font-bold md:text-4xl"
            >
              ¿Listo para que tu proyecto luzca así de{" "}
              <span className="text-gradient">profesional</span>?
            </h2>
            <p className="mt-4 mb-8 text-lg text-brand-cream opacity-90">
              Hablemos sobre tu marca y cómo podemos llevarla al siguiente
              nivel.
            </p>
            <Button href="/contact" variant="gradient">
              Iniciar una Conversación
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
