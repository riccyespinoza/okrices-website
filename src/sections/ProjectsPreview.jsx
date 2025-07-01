// src/sections/ProjectsPreview.jsx
// Propósito: traer los proyectos desde Sanity (vía getProjects) y mostrar
// solo los 3 más recientes en la Home.  Cada tarjeta enlaza a /projects/[slug].

import Link from "next/link";
import { getProjects } from "@/lib/getProjects";

export default async function ProjectsPreview() {
  // 1. Traemos TODOS los proyectos y nos quedamos con los 3 primeros
  const projects = await getProjects();
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 space-y-10">
      <h2 className="text-3xl font-bold text-primary text-center">
        Our Work in Action
      </h2>

      {featured.length === 0 ? (
        <p className="text-center text-text-muted">
          No projects available right now.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p._id}
              className="bg-background/80 border border-white/10 rounded-xl overflow-hidden group"
            >
              <Link href={`/projects/${p.slug.current}`}>
                {p.image?.asset?.url && (
                  <img
                    src={p.image.asset.url}
                    alt={p.image.alt || p.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold text-light">
                    {p.title}
                  </h3>
                  {/* Puedes mostrar la categoría si la tienes:
                      <span className="text-xs text-accent">Brand Identity</span>
                  */}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      <div className="text-center">
        <Link
          href="/projects"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg text-sm font-semibold transition hover:scale-105"
        >
          See all projects →
        </Link>
      </div>
    </section>
  );
}
