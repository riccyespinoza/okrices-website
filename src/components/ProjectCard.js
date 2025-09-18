// src/components/ProjectCard.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  // Espera: { title, description, slug, cardImage{asset{url}, alt} }
  const { title, description, slug, cardImage } = project || {};
  const imgUrl = cardImage?.asset?.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{
        delay: index * 0.12,
        duration: 0.45,
        type: "spring",
        stiffness: 300,
      }}
      className="bg-mutedgray/10 border border-darkgray rounded-xl overflow-hidden hover:border-accent transition-transform"
    >
      <Link
        href={`/projects/${slug?.current ?? ""}`}
        className="block"
        aria-label={`View case study: ${title}`}
      >
        {/* Imagen de la tarjeta */}
        {imgUrl ? (
          <div className="relative aspect-video w-full">
            <Image
              src={imgUrl}
              alt={
                cardImage?.alt ||
                `${title} — ${description?.slice(0, 80) || "case study"}`
              }
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ) : (
          // Fallback visual por si no hay imagen
          <div className="relative aspect-video w-full bg-darkgray/40 flex items-center justify-center">
            <span className="text-sm text-text-muted">Image coming soon</span>
          </div>
        )}

        {/* Contenido */}
        <div className="p-6">
          {title && (
            <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-text-muted line-clamp-3">{description}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
