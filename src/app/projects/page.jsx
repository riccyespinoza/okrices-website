// src/app/projects/page.jsx
import Link from "next/link";
import { getProjects } from "@/lib/getProjects";

export const metadata = {
  title: "Projects | Okrices",
  description: "A selection of branding and web projects crafted by Okrices.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">No projects available.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-24 px-6 max-w-6xl mx-auto">
      {/* Hero heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-14">
        <span className="text-light">Our&nbsp;</span>
        <span className="text-accent">Projects</span>
      </h1>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p._id}
            href={`/projects/${p.slug.current}`}
            className="group bg-white/5 backdrop-blur-sm border border-white/10
                       rounded-xl overflow-hidden hover:shadow-lg
                       hover:-translate-y-1 transition"
          >
            {/* Cover */}
            <img
              src={p.image?.asset?.url}
              alt={p.image?.alt || p.title}
              className="w-full h-48 object-cover transition-transform
                         duration-300 group-hover:scale-105"
            />

            {/* Caption */}
            <div className="p-5">
              <h2 className="font-semibold text-lg mb-1 text-light">
                {p.title}
              </h2>
              <p className="text-gray-400 text-sm line-clamp-2">
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

// // src/app/projects/page.jsx
// import Link from "next/link";
// import { getProjects } from "@/lib/getProjects";

// export default async function ProjectsPage() {
//   const projects = await getProjects();

//   if (!projects || projects.length === 0) {
//     return <div className="p-6">No hay proyectos disponibles</div>;
//   }

//   return (
//     <main className="min-h-screen p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8">Projects</h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div key={project._id} className="bg-white rounded shadow p-4">
//             <Link href={`/projects/${project.slug.current}`}>
//               <img
//                 src={project.image?.asset?.url}
//                 alt={project.image?.alt || project.title}
//                 className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 hover:scale-105"
//               />
//               <h2 className="text-xl font-semibold">{project.title}</h2>
//               <p className="text-gray-700">{project.description}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
