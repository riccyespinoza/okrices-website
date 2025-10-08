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
  const overview = project?.overview ?? project?.description ?? "";
  const img = project?.cardImage || project?.image;
  const slugValue = project?.slug || "";
  const href = slugValue ? `/${locale}/projects/${slugValue}` : null;

  // === MISMA ESTÉTICA QUE WHY OKRICES ===
  // (mismas utilidades: glass-effect + border + rounded + shadow + hover lift + ring accesible)
  const CARD_CLASSES =
    "relative glass-effect border border-white/5 rounded-xl shadow-soft " +
    "flex h-full flex-col overflow-hidden " +
    "transition-all duration-300 ease-out " +
    "hover:-translate-y-1 hover:shadow-lg/30 " +
    "focus-within:-translate-y-1 focus-within:shadow-lg/30 " +
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-accent/40 " +
    className;

  const Aura = () => (
    // Halo/acento como en Why Okrices (sin CSS extra)
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

  const ImageBlock = () =>
    img?.asset?.url ? (
      <div className="relative overflow-hidden">
        <img
          src={img.asset.url}
          alt={img?.alt || title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-300
                     group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
        />
      </div>
    ) : null;

  const Content = () => (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
      {overview ? (
        <p className="text-text-muted line-clamp-3">{overview}</p>
      ) : null}
    </div>
  );

  const Wrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="group h-full" // habilita :hover para aura/imagen
    >
      {children}
    </motion.div>
  );

  // --- tarjeta NO clickeable (sin slug) ---
  if (!href) {
    return (
      <Wrapper>
        <article className={CARD_CLASSES} aria-label={title}>
          <Aura />
          <ImageBlock />
          <Content />
        </article>
      </Wrapper>
    );
  }

  // --- tarjeta clickeable (con slug) ---
  return (
    <Wrapper>
      <Link
        href={href}
        aria-label={`Open project: ${title}`}
        className="block h-full"
      >
        <div className={CARD_CLASSES}>
          <Aura />
          <ImageBlock />
          <Content />
        </div>
      </Link>
    </Wrapper>
  );
}
