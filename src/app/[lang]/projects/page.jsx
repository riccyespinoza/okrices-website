// src/app/projects/page.jsx
import { getProjects } from "@/lib/getProjects";
import Section from "@/components/shared/Section";
import ProjectCard from "@/components/ProjectCard"; // Importamos nuestro componente unificado
import Reveal from "@/components/shared/Reveal";

export const metadata = {
  title: "Projects | Okrices",
  description: "A selection of branding and web projects crafted by Okrices.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-brand-cream/70">No projects available.</p>
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
          <p className="mx-auto max-w-3xl text-brand-cream/90">
            A selection of brands and websites crafted for ambitious clients.
          </p>
        </Reveal>
      </Section>

      {/* GRID */}
      <Section
        withContainer={false}
        spacing="pb-24 md:pb-32"
        aria-labelledby="project-grid-title"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 id="project-grid-title" className="sr-only">
            All Projects
          </h2>
          {/* Usamos <ul> para la lista de proyectos por semántica */}
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              // Y aquí usamos el mismo ProjectCard que en la página de inicio
              <ProjectCard key={p._id} project={p} index={i} />
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}
