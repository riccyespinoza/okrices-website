// src/components/home/FeaturedProjectsGrid.jsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function FeaturedProjectsGrid({ projects, className }) {
  return (
    // Usamos 'twMerge' para combinar las clases base con el padding que viene de 'className'.
    // El 'max-w-screen-2xl' evita que la grilla se estire demasiado en pantallas muy anchas.
    <div
      className={twMerge(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-screen-2xl mx-auto",
        className
      )}
    >
      {projects.map((p, i) => (
        <motion.div
          key={p._id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.45 }}
          className="group relative block rounded-xl overflow-hidden shadow-lg"
        >
          <Link href={`/projects/${p.slug.current}`} className="block">
            {/* 
              La clase 'aspect-video' fuerza una proporción horizontal de 16:9,
              dando a las tarjetas la forma de rectángulo horizontal.
            */}
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={p.cardImage?.asset?.url}
                alt={p.cardImage?.alt || p.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* 
              Este es el overlay con el título y la descripción que aparece
              suavemente cuando el usuario pasa el mouse sobre la tarjeta.
            */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent
                         opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-300 ease-in-out"
            >
              <h3 className="font-bold text-xl text-white mb-1">{p.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {p.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
