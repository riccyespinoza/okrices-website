// src/components/home/FeaturedProjectsSection.jsx
import { getFeaturedProjects } from "@/lib/getProjects";
import Section from "@/components/ui/Section";
import FeaturedProjectsGrid from "../FeaturedProjectsGrid";
import Button from "@/components/ui/Button";

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
    <Section spacing="py-24 md:py-32" aria-labelledby="home-projects">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2
          id="home-projects"
          className="mb-6 text-center text-3xl font-bold md:text-4xl"
        >
          {title}
        </h2>
        {intro && (
          <p className="mx-auto mb-10 max-w-3xl text-center text-brand-cream/90">
            {intro}
          </p>
        )}
      </div>

      <FeaturedProjectsGrid
        projects={projects}
        className="px-4 sm:px-6 lg:px-8"
      />

      <div className="mx-auto mt-16 max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
        <Button href={cta.href} variant="gradient">
          {cta.label}
        </Button>
      </div>
    </Section>
  );
}
