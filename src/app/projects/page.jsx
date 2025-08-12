// src/app/projects/page.jsx
import Link from "next/link";
import { getProjects } from "@/lib/getProjects";
import Reveal from "@/components/shared/Reveal"; // nuevo wrapper

export const metadata = {
  title: "Projects | Okrices",
  description: "A selection of branding and web projects crafted by Okrices.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects?.length) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">No projects available.</p>
      </main>
    );
  }

  return (
    <main>
      {/* HERO – igual que Branding/Web */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
        <Reveal className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-variable">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300">
            A selection of brands and websites crafted for ambitious clients.
          </p>
        </Reveal>

        {/* Indicador de scroll (opcional) */}
        <Reveal
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          delay={1.2}
        >
          <div className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 animate-bounce" />
          </div>
        </Reveal>
      </section>

      {/* GRID de proyectos */}
      <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              as={Link}
              key={p._id}
              href={`/projects/${p.slug.current}`}
              delay={i * 0.1}
              className="project-card group"
            >
              {/* Cover */}
              <img
                src={p.image?.asset?.url}
                alt={p.image?.alt || p.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Caption */}
              <div className="p-5">
                <h2 className="font-semibold text-lg mb-1 text-light">
                  {p.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
