import { sanity } from "@/lib/sanityClient";
import { projectsQuery } from "@/lib/queries";

export default async function ProjectsPage() {
  const projects = await sanity.fetch(projectsQuery);

  return (
    <main className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project._id} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="mt-2 rounded"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
