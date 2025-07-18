// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary text-light">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen o ilustración */}
        <img
          src="/about/me.webp"
          alt="Riccy Espinoza – Founder"
          className="rounded-lg shadow-lg w-full h-72 object-cover"
        />

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-accent">Okrices</span>
          </h2>
          <p className="text-mutedgray mb-6">
            We’re a bilingual creative studio based in Florida, focused on
            transforming ideas into clear, functional and elegant brands — from
            strategic identities to high-performance websites.
          </p>
          <a
            href="/about"
            className="inline-block bg-accent text-light px-5 py-2 rounded hover:bg-accent/80 transition"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}
