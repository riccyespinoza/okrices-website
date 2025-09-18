// src/app/projects/[slug]/page.jsx

import { getProjectBySlug } from "@/lib/getProjects";
import ProjectContent from "@/components/ProjectContent"; // 1. Import the new component

// The page remains a Server Component (async)
export default async function ProjectDetailPage({ params }) {
  // 2. Fetch the project data on the server, as before
  const project = await getProjectBySlug(params.slug);

  // 3. Handle the case where the project is not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  // 4. Render the client component, passing the project data to it
  return <ProjectContent project={project} />;
}
