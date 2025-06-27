// src/app/projects/[slug]/page.jsx
import { getProjectBySlug } from "@/lib/getProjects";
import Link from "next/link";

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return <div className="p-6">Proyecto no encontrado</div>;
  }

  return (
    <main className="min-h-screen p-6 max-w-4xl mx-auto">
      <Link
        href="/projects"
        className="inline-block mb-6 text-sm text-white bg-[#a55130] hover:bg-[#7d3d23] px-4 py-2 rounded transition"
      >
        ← Volver a proyectos
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {project.image?.asset?.url && (
        <img
          src={project.image.asset.url}
          alt={project.image?.alt || project.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}

      <p className="text-lg text-gray-700 mb-4">{project.description}</p>

      {project.gallery?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Galería</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((img, index) => (
              <img
                key={index}
                src={img.asset?.url}
                alt={`Imagen ${index + 1}`}
                className="rounded object-cover h-40 w-full transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      )}

      {project.url && (
        <p className="mt-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a55130] hover:underline"
          >
            Ver sitio del proyecto →
          </a>
        </p>
      )}
    </main>
  );
}
