// src/app/projects/page.jsx
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/getProjects";
import Reveal from "@/components/shared/Reveal";
import Section from "@/components/shared/Section";

export const metadata = {
  title: "Projects | Okrices",
  description: "A selection of branding and web projects crafted by Okrices.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">No projects available.</p>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* HERO */}
      <Section withContainer spacing="pt-40 pb-20">
        <Reveal className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-variable">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300">
            A selection of brands and websites crafted for ambitious clients.
          </p>
        </Reveal>
      </Section>

      {/* GRID */}
      <Section withContainer={false} spacing="pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
          {projects.map((p, i) => (
            <Reveal key={p._id} delay={i * 0.1}>
              <Link
                href={`/projects/${p.slug.current}`}
                className="group relative block rounded-xl overflow-hidden shadow-lg"
                aria-label={`View case study: ${p.title}`}
              >
                {/* Imagen de tarjeta */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={p.cardImage?.asset?.url}
                    alt={
                      p.cardImage?.alt ||
                      `${p.title} — ${p.overview?.slice(0, 80) || "case study"}`
                    }
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Overlay texto (sin transition-all) */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent
                             opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                             transition-opacity transition-transform duration-300 ease-in-out"
                >
                  <h3 className="font-bold text-xl text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {p.overview}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
