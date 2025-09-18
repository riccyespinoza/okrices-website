// src/sections/ProjectsPreview.jsx
// Propósito: traer los proyectos desde Sanity (vía getProjects) y mostrar
// solo los 3 más recientes en la Home. Cada tarjeta enlaza a /projects/[slug].

import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/getProjects";

export default async function ProjectsPreview() {
  const projects = await getProjects();
  const featured = (projects || []).slice(0, 3);

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
              <Link
                href={`/projects/${p.slug.current}`}
                aria-label={`View case study: ${p.title}`}
              >
                {/* Imagen de la tarjeta */}
                {p.image?.asset?.url && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={p.image.asset.url}
                      alt={p.image.alt || `${p.title} — preview`}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold text-light">
                    {p.title}
                  </h3>
                  {/* <span className="text-xs text-accent">Brand Identity</span> */}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      <div className="text-center">
        <Link href="/projects" className="btn btn-gradient">
          See all projects →
        </Link>
      </div>
    </section>
  );
}
