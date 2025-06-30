// src/sections/ServicesPreview.jsx
import { services } from "@/data/services"; // misma fuente
import Link from "next/link";

export default function ServicesPreview() {
  // mostramos sólo los 3 primeros (slice)
  return (
    <section id="services" className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl font-bold text-primary text-center mb-10">
        Our Services
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.slice(0, 3).map((s) => (
          <article
            key={s.id}
            className="bg-background/80 border border-white/10 rounded-xl p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-light">{s.title_en}</h3>
            <p className="text-text-muted mt-2">{s.tagline_en}</p>

            {/* sólo 3 bullets para preview */}
            <ul className="mt-4 space-y-1 text-sm text-text-muted">
              {s.bullets_en.slice(0, 3).map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>

            <Link
              href={`/services#${s.slug}`}
              className="mt-auto inline-block bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:scale-105"
            >
              Learn more →
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg text-sm font-semibold transition hover:scale-105"
        >
          View full service catalog
        </Link>
      </div>
    </section>
  );
}
