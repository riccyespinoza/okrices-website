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
  const t = getDic(locale);

  // 🔹 HERO — se obtiene directo del diccionario
  const hero = t?.pages?.projects?.hero ?? {};

  // 🔹 Datos dinámicos
  const [projects, categories] = await Promise.all([
    getProjects(locale),
    getAllCategories(locale),
  ]);

  // 🔹 Etiquetas auxiliares (estas puedes mover a t.common más adelante)
  const emptyLabel =
    locale === "es"
      ? "No hay proyectos disponibles."
      : "No projects available.";
  const allLabel = locale === "es" ? "Todos" : "All";

  // 🔹 Filtros
  const filters = [
    { label: allLabel, slug: null },
    ...categories.map((cat) => ({
      label: cat.title,
      slug: cat.slug,
    })),
  ];

  // 🔹 Vista vacía si no hay proyectos
  if (!projects?.length) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-brand-cream/70">{emptyLabel}</p>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* HERO */}
      <Section withContainer spacing="pt-40 pb-20">
        <Reveal className="text-center">
          <ProjectsHero
            title={t?.pages?.projects?.title}
            subtitle={hero.subtitle}
            ctaLabel={hero.cta?.label}
            ctaHref={`/${locale}${hero.cta?.href}`}
          />
        </Reveal>
      </Section>

      {/* GALERÍA */}
      <Section withContainer spacing="pb-24 md:pb-32">
        <ProjectsGallery
          projects={projects}
          locale={locale}
          filterItems={filters}
          emptyLabel={emptyLabel}
        />
      </Section>
    </main>
  );
}
