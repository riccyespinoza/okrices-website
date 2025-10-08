// src/components/home/FeaturedProjectsGrid.jsx
"use client";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjectsGrid({
  projects = [],
  className = "",
}) {
  if (!projects.length) return null;

  const pathname = usePathname();
  const locale = pathname?.split("/")?.[1] || "en";

  return (
    <ul
      className={twMerge(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-screen-2xl mx-auto",
        className
      )}
    >
      {projects.map((p, i) => (
        <ProjectCard key={p?._id ?? i} project={p} index={i} locale={locale} />
      ))}
    </ul>
  );
}
