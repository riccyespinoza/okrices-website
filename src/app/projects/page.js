export default function ProjectsPage() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <p className="text-text-muted mb-6">
        Here youll soon find a curated selection of visual identity and web
        development projects. Each one is designed with purpose, strategy, and
        elegance.
      </p>
      <ul className="space-y-4 text-text-muted">
        <li className="border-l-4 border-accent pl-4">
          <strong>Branding for Creative Agency</strong> – A bold, modern
          identity system for a digital-first business.
        </li>
        <li className="border-l-4 border-accent pl-4">
          <strong>Website for Architecture Studio</strong> – A responsive,
          elegant portfolio with motion and case studies.
        </li>
        <li className="border-l-4 border-accent pl-4">
          <strong>Minimal eCommerce Redesign</strong> – Focused on clarity,
          usability and conversion.
        </li>
      </ul>
    </section>
  );
}
