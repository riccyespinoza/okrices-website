import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Branding for Creative Agency",
    description: "A bold, modern identity system for a digital-first business.",
  },
  {
    title: "Website for Architecture Studio",
    description:
      "A responsive, elegant portfolio with motion and case studies.",
  },
  {
    title: "Minimal eCommerce Redesign",
    description:
      "Focus on clarity, usability and conversion for a better shopping experience.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-semibold mb-8">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
