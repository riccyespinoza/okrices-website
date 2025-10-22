// src/components/projects/ProjectCard.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({
  project,
  index = 0,
  locale = "en",
  className = "",
}) {
  const title = project?.title ?? "Untitled";
  const img = project?.cardImage || project?.image;
  const slugValue = project?.slug || "";
  const href = slugValue ? `/${locale}/projects/${slugValue}` : null;

  // === Estilos de tarjeta ===
  const CARD_CLASSES =
    "relative glass-effect border border-white/5 rounded-xl shadow-soft " +
    "overflow-hidden transition-all duration-300 ease-out " +
    "hover:-translate-y-1 hover:shadow-lg/30 " +
    "focus-within:-translate-y-1 focus-within:shadow-lg/30 " +
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-accent/40 " +
    className;

  // === Efecto de aura (halo al hover) ===
  const Aura = () => (
    <span
      aria-hidden="true"
      className="
        pointer-events-none absolute inset-0 -z-10 rounded-[inherit]
        bg-[radial-gradient(120%_120%_at_100%_0%,rgba(165,81,48,0.35),rgba(165,81,48,0)_60%)]
        opacity-0 blur-md transition-opacity duration-300
        group-hover:opacity-100 group-focus-within:opacity-100
      "
    />
  );

  // === Imagen principal ===
  const ImageBlock = () =>
    img?.asset?.url ? (
      <div className="relative overflow-hidden">
        <img
          src={img.asset.url}
          alt={img?.alt || title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-300

                     group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
        />
      </div>
    ) : null;

  // === Animación de aparición ===
  const Wrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="group"
    >
      {children}
    </motion.div>
  );

  // --- Tarjeta sin enlace ---
  if (!href) {
    return (
      <Wrapper>
        <article className="flex flex-col items-start">
          <div className={CARD_CLASSES} aria-label={title}>
            <Aura />
            <ImageBlock />
          </div>
          {/* 🔹 Sangría del caption igual al radio del card (rounded-xl ≈ 1rem) */}
          <h3 className="mt-4 ml-4 text-lg md:text-xl font-semibold text-light">
            {title}
          </h3>
        </article>
      </Wrapper>
    );
  }

  // --- Tarjeta con enlace ---
  return (
    <Wrapper>
      <Link href={href} aria-label={`Open project: ${title}`} className="block">
        <div className="flex flex-col items-start">
          <div className={CARD_CLASSES}>
            <Aura />
            <ImageBlock />
          </div>
          {/* 🔹 Caption con sangría alineada al borde redondeado */}
          <h3 className="mt-4 ml-4 text-lg md:text-xl font-semibold text-light">
            {title}
          </h3>
        </div>
      </Link>
    </Wrapper>
  );
}
