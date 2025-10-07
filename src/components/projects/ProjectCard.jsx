// src/components/ProjectCard.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ project, index = 0, locale = "en" }) {
  // Normaliza datos
  const title = project?.title ?? "Untitled";
  const overview = project?.overview ?? project?.description ?? "";
  const img = project?.cardImage || project?.image;

  // slug puede ser string o { current }
  const slugValue =
    typeof project?.slug === "string"
      ? project.slug
      : project?.slug?.current || "";

  // Si no hay slug, renderizamos sin link (evita tarjeta muerta)
  if (!slugValue) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12, duration: 0.45 }}
        className="border border-white/5 rounded-xl overflow-hidden"
      >
        {img?.asset?.url && (
          <img
            src={img.asset.url}
            alt={img?.alt || title}
            className="w-full aspect-[16/10] object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
          {overview ? (
            <p className="text-text-muted line-clamp-3">{overview}</p>
          ) : null}
        </div>
      </motion.div>
    );
  }

  const href = `/${locale}/projects/${slugValue}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
    >
      <Link
        href={href}
        className="group block border border-white/5 hover:border-accent rounded-xl overflow-hidden transition"
      >
        {img?.asset?.url && (
          <img
            src={img.asset.url}
            alt={img?.alt || title}
            className="w-full aspect-[16/10] object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
          {overview ? (
            <p className="text-text-muted line-clamp-3">{overview}</p>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
