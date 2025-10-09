// src/app/(marketing)/[locale]/projects/page.jsx
import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import { getProjects, getAllCategories } from "@/lib/getProjects";
import Section from "@/components/ui/Section";
import Reveal from "@/components/shared/Reveal";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGallery from "@/components/projects/ProjectsGallery";

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t?.pages?.projects?.title ?? "Projects",
    path: `/${params.locale}/projects`,
  });
}

export default async function ProjectsPage({ params }) {
  const locale = params?.locale ?? "en";

  // Obtener proyectos y categorías
  const [projects, categories] = await Promise.all([
    getProjects(locale),
    getAllCategories(locale),
  ]);

  // Textos traducidos
  const copy = {
    en: {
      title: "Projects",
      subtitle:
        "Each brand we work with reflects our way of creating: clarity, purpose, and results that inspire trust.",
      cta: "Let's talk about your brand",
      empty: "No projects available.",
      all: "All",
    },
    es: {
      title: "Proyectos",
      subtitle:
        "Cada marca con la que trabajamos refleja nuestra manera de crear: claridad, propósito y resultados que generan confianza.",
      cta: "Hablemos de tu marca",
      empty: "No hay proyectos disponibles.",
      all: "Todos",
    },
  }[locale];

  // Construir filtros para el gallery
  // Ahora categories viene directamente del archivo de configuración
  const filters = [
    { label: copy.all, slug: null },
    ...categories.map((cat) => ({
      label: cat.title,
      slug: cat.slug,
    })),
  ];

  if (!projects?.length) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-brand-cream/70">{copy.empty}</p>
      </main>
    );
  }

  return (
    <main id="main-content">
      <Section withContainer spacing="pt-40 pb-20">
        <Reveal className="text-center">
          <ProjectsHero
            title={copy.title}
            subtitle={copy.subtitle}
            locale={locale}
            ctaLabel={copy.cta}
          />
        </Reveal>
      </Section>

      <Section withContainer spacing="pb-24 md:pb-32">
        <ProjectsGallery
          projects={projects}
          locale={locale}
          filterItems={filters}
          emptyLabel={copy.empty}
        />
      </Section>
    </main>
  );
}
