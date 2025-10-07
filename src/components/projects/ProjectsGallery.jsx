// src/components/projects/ProjectsGallery.jsx
"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsGallery({
  projects,
  locale = "en",
  filterLabels = ["All", "Branding", "Web", "Branding + Web"],
  emptyLabel = "No projects available.",
}) {
  const [active, setActive] = useState(filterLabels[0]); // "All" / "Todos"

  // Normaliza los tipos comparando por palabras clave
  const filtered = useMemo(() => {
    if (!Array.isArray(projects)) return [];
    if (active === filterLabels[0]) return projects; // All/Todos

    const key = active.toLowerCase();
    return projects.filter((p) => {
      const t = (p?.projectType || "").toLowerCase();
      if (key.includes("branding") && key.includes("web")) {
        // "Branding + Web"
        return t.includes("branding") && t.includes("web");
      }
      if (key.includes("branding")) return t.includes("branding");
      if (key.includes("web")) return t.includes("web");
      return true;
    });
  }, [projects, active, filterLabels]);

  return (
    <div>
      {/* Filtros */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {filterLabels.map((label) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={[
                "px-4 py-2 rounded-lg text-sm transition-colors",
                "border",
                isActive
                  ? "bg-accent text-light border-accent"
                  : "bg-transparent text-brand-cream/90 border-white/10 hover:border-accent/40",
              ].join(" ")}
              type="button"
            >
              {label}
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
