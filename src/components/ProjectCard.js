export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-mutedgray/10 border border-darkgray rounded-xl p-6 hover:border-accent transition">
      <h2 className="text-xl font-semibold text-light mb-2">{title}</h2>
      <p className="text-text-muted">{description}</p>
    </div>
  );
}
