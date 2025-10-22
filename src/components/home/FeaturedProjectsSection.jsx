// src/components/home/FeaturedProjectsSection.jsx
import { getFeaturedProjects } from "@/lib/getProjects";
import Section from "@/components/ui/Section";
import FeaturedProjectsGrid from "../FeaturedProjectsGrid";
import Button from "@/components/ui/Button";
import EdgeContainer from "@/components/ui/EdgeContainer"; // ⬅️ NUEVO

export default async function FeaturedProjectsSection({
  title,
  intro,
  examples = [],
  cta,
  locale = "en",
}) {
  const projects = await getFeaturedProjects(locale);
  if (!projects?.length) return null;

  return (
    // ⬇️ IMPORTANT: sin Container para que mande EdgeContainer
    <Section
      spacing="py-24 md:py-32"
      aria-labelledby="home-projects"
      withContainer={false}
    >
      {/* Header con el mismo margen lateral que Projects */}
      <EdgeContainer rounded={false} className="text-center mb-10">
        <h2
          id="home-projects"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-4"
        >
          {title}
        </h2>
        {intro && (
          <p className="mx-auto max-w-3xl text-brand-cream/90 md:text-lg">
            {intro}
          </p>
        )}
      </EdgeContainer>

      {/* Grid con el mismo margen que el Hero/Projects */}
      <EdgeContainer rounded={false}>
        <FeaturedProjectsGrid
          projects={projects}
          className="" // ⬅️ sin px internos
        />
      </EdgeContainer>

      {/* CTA centrado con el mismo margen lateral */}
      <EdgeContainer rounded={false} className="mt-16 text-center">
        <Button href={cta.href} variant="gradient">
          {cta.label}
        </Button>
      </EdgeContainer>
    </Section>
  );
}
