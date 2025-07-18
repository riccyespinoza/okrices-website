// src/app/projects/page.jsx
import Link from "next/link";
import { getProjects } from "@/lib/getProjects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return <div className="p-6">No hay proyectos disponibles</div>;
  }

  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white rounded shadow p-4">
            <Link href={`/projects/${project.slug.current}`}>
              <img
                src={project.image?.asset?.url}
                alt={project.image?.alt || project.title}
                className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
