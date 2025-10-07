// src/app/(marketing)/[locale]/projects/page.jsx
import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import { getProjects } from "@/lib/getProjects";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/shared/Reveal";

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t.pages.projects.title,
    path: `/${params.locale}/projects`,
  });
}

export default async function ProjectsPage({ params }) {
  // ✅ define el locale desde la ruta
  const locale = params?.locale ?? "en";

  // ✅ pásalo al fetch (aunque tu getProjects ya tolera docs sin lang)
  const projects = await getProjects(locale);

  if (!projects?.length) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-brand-cream/70">No projects available.</p>
      </main>
    );
  }

  return (
    <main id="main-content">
      <Section withContainer spacing="pt-40 pb-20">
        <Reveal className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-light">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="mx-auto max-w-3xl text-brand-cream/90">
            A selection of brands and websites crafted for ambitious clients.
          </p>
        </Reveal>
      </Section>

      <Section
        withContainer={false}
        spacing="pb-24 md:pb-32"
        aria-labelledby="project-grid-title"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 id="project-grid-title" className="sr-only">
            All Projects
          </h2>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              // ✅ ahora sí existe `locale`
              <ProjectCard key={p._id} project={p} index={i} locale={locale} />
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}
