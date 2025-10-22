// src/components/home/FeaturedProjectsSection.jsx
import { getFeaturedProjects } from "@/lib/getProjects";
import Section from "@/components/ui/Section";
import FeaturedProjectsGrid from "../FeaturedProjectsGrid";
import Button from "@/components/ui/Button";
import EdgeContainer from "@/components/ui/EdgeContainer"; // ✅ mantenemos consistencia visual

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
    <Section
      spacing="py-24 md:py-32"
      aria-labelledby="home-projects"
      withContainer={false}
    >
      {/* Header con su estilo original (sin cambios tipográficos) */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="home-projects" className="mb-6 text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        {intro && (
          <p className="mx-auto mb-10 max-w-3xl text-brand-cream/90">{intro}</p>
        )}
      </div>

      {/* ✅ Galería con márgenes iguales a Projects */}
      <EdgeContainer rounded={false}>
        <FeaturedProjectsGrid projects={projects} className="px-0" />
      </EdgeContainer>

      {/* ✅ CTA con el mismo margen lateral uniforme */}
      <EdgeContainer rounded={false} className="mt-16 text-center">
        <Button href={cta.href} variant="gradient">
          {cta.label}
        </Button>
      </EdgeContainer>
    </Section>
  );
}
