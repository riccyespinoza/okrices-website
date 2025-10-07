"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ project, index = 0, locale = "en" }) {
  const {
    title,
    overview, // ← descripción corta viene como "overview"
    projectType, // ← opcional, lo mostramos como badge
    cardImage, // ← imagen para la tarjeta
    slug, // ← string (ya coalesce en getProjects)
  } = project || {};

  const imgUrl = cardImage?.asset?.url;
  const alt = cardImage?.alt || `${title} – card image`;
  const href = `/${locale}/projects/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="overflow-hidden rounded-xl border border-darkgray bg-mutedgray/10 transition hover:border-accent"
    >
      <Link href={href}>
        {/* Imagen */}
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={alt}
            className="h-44 w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-44 w-full bg-white/5" />
        )}

        {/* Contenido */}
        <div className="p-6">
          {projectType ? (
            <span className="mb-2 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-brand-cream/80">
              {projectType}
            </span>
          ) : null}

          <h3 className="mb-2 text-xl font-semibold text-light">{title}</h3>

          {overview ? (
            <p className="text-text-muted line-clamp-3">{overview}</p>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
