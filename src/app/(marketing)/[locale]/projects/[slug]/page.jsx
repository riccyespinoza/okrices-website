// src/app/(marketing)/[locale]/projects/[slug]/page.jsx
import { getProjectBySlug } from "@/lib/getProjects";
import ProjectContent from "@/components/ProjectContent";

export default async function ProjectDetailPage({ params }) {
  const locale = params?.locale ?? "en";
  const project = await getProjectBySlug(params.slug, locale);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return <ProjectContent project={project} />;
}
