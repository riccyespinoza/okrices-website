import Link from "next/link";
import { getFeaturedProjects } from "@/lib/getProjects";

import FeaturedProjectsGrid from "../FeaturedProjectsGrid"; // cliente

export default async function FeaturedProjectsSection() {
  const projects = await getFeaturedProjects(); // ✅ await permitido aquí

  if (!projects?.length) return null;

  return (
    <section className="bg-primary text-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <Link
            href="/projects"
            className="text-accent hover:underline text-sm font-medium"
          >
            View all →
          </Link>
        </div>

        {/* Grid animado */}
        <FeaturedProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
