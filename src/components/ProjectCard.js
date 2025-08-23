// src/components/ProjectCard.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  // Espera que el fetch traiga: title, slug, description, cardImage{asset->{url}}
  const { title, description, slug, cardImage } = project || {};
  const imgUrl = cardImage?.asset?.url;

  // 🔎 DEBUG
  console.log("ProjectCard -> project:", project);
  console.log("ProjectCard -> imgUrl:", imgUrl);

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
      <Link href={`/projects/${slug?.current ?? ""}`} className="block">
        {/* Imagen de la tarjeta */}
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={title || "Project image"}
            className="w-full h-44 object-cover"
            loading="lazy"
          />
        ) : (
          // Fallback visual por si algún proyecto no tiene cardImage
          <div className="w-full h-44 bg-darkgray/40 flex items-center justify-center">
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
