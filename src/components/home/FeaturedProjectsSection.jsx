// src/components/FeaturedProjectsSection.jsx

import Link from "next/link";
import { getFeaturedProjects } from "@/lib/getProjects"; // Asegúrate de que la ruta sea correcta
import Section from "../shared/Section"; // Asegúrate de que la ruta sea correcta
import FeaturedProjectsGrid from "../FeaturedProjectsGrid"; // Asegúrate de que la ruta sea correcta

export default async function FeaturedProjectsSection() {
  const projects = await getFeaturedProjects();

  if (!projects?.length) return null;

  return (
    <Section spacing="py-24 md:py-32">
      {/* 
        MODIFICACIÓN: El título ahora tiene su propio contenedor para mantenerse
        centrado, mientras que la grilla de proyectos se deja fuera para que 
        pueda ocupar el ancho completo.
      */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-accent">Projects</span>
        </h2>
      </div>

      {/* 
        MODIFICACIÓN: Se pasa una clase de padding ('px-...') directamente a la grilla.
        Esto permite que la sección ocupe el 100% del ancho, pero las tarjetas
        mantienen un margen seguro con los bordes de la pantalla.
      */}
      <FeaturedProjectsGrid
        projects={projects}
        className="px-4 sm:px-6 lg:px-8"
      />

      {/* 
        MODIFICACIÓN: El botón "View All" también se envuelve en un contenedor 
        para que mantenga la misma alineación que el título.
      */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <a
          href="/projects"
          className="inline-block text-light px-6 py-3 rounded-md font-medium transition-all duration-300 btn-gradient"
        >
          View All
        </a>
      </div>
    </Section>
  );
}
