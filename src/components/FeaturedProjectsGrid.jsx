// src/components/home/FeaturedProjectsGrid.jsx
"use client";

import { twMerge } from "tailwind-merge";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjectsGrid({
  projects = [],
  className = "",
}) {
  if (!projects.length) return null;

  return (
    <ul
      className={twMerge(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-screen-2xl mx-auto",
        className
      )}
    >
      {projects.map((p, i) => (
        // Ahora simplemente renderizamos el componente ProjectCard
        <ProjectCard key={p?._id ?? i} project={p} index={i} />
      ))}
    </ul>
  );
}
