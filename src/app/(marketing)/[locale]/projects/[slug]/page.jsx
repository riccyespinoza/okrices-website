// src/app/(marketing)/[locale]/projects/[slug]/page.jsx

import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import { getProjectBySlug } from "@/lib/getProjects";
import ProjectContent from "@/components/ProjectContent";

export async function generateMetadata({ params }) {
  // Para un mejor SEO, podrías considerar usar el título del proyecto específico.
  // const project = await getProjectBySlug(params.slug, params.locale);
  // title: project.title,
  const t = getDic(params.locale);
  return buildMetadata({
    title: t?.pages?.projects?.title ?? "Projects",
    path: `/${params.locale}/projects/${params.slug}`,
  });
}

export default async function ProjectDetailPage({ params }) {
  const { locale, slug } = params;
  const t = getDic(locale);
  const project = await getProjectBySlug(slug, locale);

  // ✅ Correcto: Pasamos solo el fragmento del diccionario que necesita el componente.
  const tProject = t?.pages?.projectDetail;

  // Renderizamos el componente cliente pasándole los datos del proyecto y las traducciones.
  return <ProjectContent project={project} t={tProject} />;
}
