// src/components/home/FeaturedProjectsSection.jsx

// 👇 CAMBIO 1: Importamos el componente Button y eliminamos Link (ya que Button lo maneja)
import { getFeaturedProjects } from "@/lib/getProjects";
import Section from "@/components/ui/Section";
import FeaturedProjectsGrid from "../FeaturedProjectsGrid";
import Button from "@/components/ui/Button"; // Importamos nuestro botón reutilizable

export default async function FeaturedProjectsSection({ lang = "en" }) {
  const projects = await getFeaturedProjects(lang);

  if (!projects?.length) return null;

  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="home-projects">
      {/* Título centrado con ancho controlado */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2
          id="home-projects"
          className="mb-16 text-center text-3xl font-bold md:text-4xl"
        >
          Featured <span className="text-accent">Projects</span>
        </h2>
      </div>

      {/* Contenido diferible */}
      {/* El div 'section-lazy' ya no es necesario aquí, lo hemos movido a una utilidad más general si se necesita.
          El navegador moderno es muy bueno optimizando el renderizado de elementos fuera de la pantalla. */}
      <div>
        {/* Grilla a ancho completo con padding seguro */}
        <FeaturedProjectsGrid
          projects={projects}
          className="px-4 sm:px-6 lg:px-8"
        />

        {/* 👇 CAMBIO 2: Reemplazamos el Link manual con nuestro componente Button */}
        <div className="mx-auto mt-16 max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
          <Button href="/projects" variant="gradient">
            View All
          </Button>
        </div>
      </div>
    </Section>
  );
}
