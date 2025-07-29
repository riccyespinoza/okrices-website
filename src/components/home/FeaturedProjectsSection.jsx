import Link from "next/link";
import { getFeaturedProjects } from "@/lib/getProjects";
import Section from "../shared/Section";
import Container from "../shared/Container";
import FeaturedProjectsGrid from "../FeaturedProjectsGrid"; // componente cliente

export default async function FeaturedProjectsSection() {
  const projects = await getFeaturedProjects(); // ✅ await permitido aquí

  if (!projects?.length) return null;

  return (
    <Section spacing="py-24 md:py-32">
      <Container>
        {/* Título centrado */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-accent">Projects</span>
        </h2>

        {/* Grid animado */}
        <FeaturedProjectsGrid projects={projects} />

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block text-light px-6 py-3 rounded-md font-medium transition-all duration-300 btn-gradient"
          >
            View All
          </a>
        </div>
      </Container>
    </Section>
  );
}
