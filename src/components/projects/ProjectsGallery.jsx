// src/components/projects/ProjectsGallery.jsx
"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";

/**
 * props:
 * - projects: [{ title, slug, cardImage, categories:[{slug,title}] }]
 * - locale: 'en' | 'es'
 * - filterItems: [{label, slug}]  // slug=null => "All"
 * - emptyLabel: string
 */
export default function ProjectsGallery({
  projects = [],
  locale = "en",
  filterItems = [{ label: "All", slug: null }],
  emptyLabel = "No projects available.",
}) {
  const [activeSlug, setActiveSlug] = useState(filterItems?.[0]?.slug ?? null);

  const filtered = useMemo(() => {
    if (!Array.isArray(projects)) return [];
    // "All"
    if (!activeSlug) return projects;

    return projects.filter((p) => {
      const slugs =
        p?.categories?.map((c) =>
          typeof c?.slug === "string" ? c.slug : null
        ) || [];
      return slugs.includes(activeSlug);
    });
  }, [projects, activeSlug]);

  return (
    <div>
      {/* Filtros */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {filterItems.map((item) => {
          const isActive = activeSlug === item.slug;
          return (
            <button
              key={item.slug ?? "__all__"}
              onClick={() => setActiveSlug(item.slug ?? null)}
              className={[
                "px-4 py-2 rounded-lg text-sm transition-colors border",
                isActive
                  ? "bg-accent text-light border-accent"
                  : "bg-transparent text-brand-cream/90 border-white/10 hover:border-accent/40",
              ].join(" ")}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-brand-cream/70">{emptyLabel}</p>
      ) : (
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p._id} project={p} index={i} locale={locale} />
          ))}
        </ul>
      )}
    </div>
  );
}
