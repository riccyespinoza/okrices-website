// src/components/home/FeaturedProjectsGrid.jsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function FeaturedProjectsGrid({
  projects = [],
  className = "",
}) {
  if (!projects.length) return null;

  return (
    // Semántica: lista de proyectos. twMerge permite pasar paddings externos.
    <ul
      className={twMerge(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-screen-2xl mx-auto",
        className
      )}
    >
      {projects.map((p, i) => {
        const href = `/projects/${p?.slug?.current ?? ""}`;
        const imgUrl = p?.cardImage?.asset?.url;
        const imgAlt =
          p?.cardImage?.alt ||
          `${p?.title ?? "Case study"} — ${
            p?.description?.slice(0, 80) || "visual overview"
          }`;

        return (
          <motion.li
            key={p?._id ?? `${href}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="group relative block rounded-xl overflow-hidden shadow-lg"
          >
            <Link
              href={href}
              className="block"
              aria-label={`View case study: ${p?.title}`}
            >
              {/* Contenedor con proporción 16:9 */}
              <div className="relative aspect-video w-full overflow-hidden">
                {imgUrl ? (
                  <Image
                    src={imgUrl}
                    alt={imgAlt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    // Si tienes LQIP desde Sanity, descomenta estas dos líneas:
                    // placeholder={p.cardImage?.blurDataURL ? "blur" : undefined}
                    // blurDataURL={p.cardImage?.blurDataURL}
                  />
                ) : (
                  // Fallback por si faltara imagen (evita layout shift)
                  <div
                    className="w-full h-full bg-gray-dark/20"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Overlay con título/desc. Sin transition-all (solo lo necesario). */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent
                           opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                           transition-opacity transition-transform duration-300 ease-in-out"
              >
                <h3 className="font-bold text-xl text-white mb-1">
                  {p?.title}
                </h3>
                {p?.description && (
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {p.description}
                  </p>
                )}
              </div>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
