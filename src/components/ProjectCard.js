// src/components/ProjectCard.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  // Extraemos los datos de forma segura
  const href = `/projects/${project?.slug?.current ?? ""}`;
  const imgUrl = project?.cardImage?.asset?.url;
  const imgAlt =
    project?.cardImage?.alt ||
    `${project?.title ?? "Case study"} — visual overview`;

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      // 👇 CAMBIO 1: Aplicamos los estilos consistentes (borde, sombra, etc.)
      className="group relative block overflow-hidden rounded-lg shadow-lg"
    >
      <Link
        href={href}
        className="block"
        aria-label={`View case study: ${project?.title}`}
      >
        {/* Contenedor de la Imagen */}
        <div className="relative aspect-video w-full overflow-hidden">
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={imgAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          ) : (
            // Fallback en caso de que no haya imagen
            <div className="h-full w-full bg-neutral-800" aria-hidden="true" />
          )}
        </div>

        {/* 👇 CAMBIO 2: Este es el overlay con el texto que te gusta */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6
                     translate-y-4 opacity-0 transition-all duration-300 ease-in-out 
                     group-hover:translate-y-0 group-hover:opacity-100"
        >
          {/* 👇 CAMBIO 3: Usamos los colores de nuestro sistema de diseño */}
          <h3 className="mb-1 font-bold text-xl text-light">
            {project?.title}
          </h3>
          {project?.description && (
            <p className="text-sm text-brand-cream/90 line-clamp-2">
              {project.description}
            </p>
          )}
        </div>
      </Link>
    </motion.li>
  );
}
