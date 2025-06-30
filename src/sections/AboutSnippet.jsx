import Link from "next/link";
import { aboutData } from "@/data/about";

export default function AboutSnippet() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">
        {aboutData.headline_en}
      </h2>
      <p className="text-text-muted mb-6">{aboutData.subhead_en}</p>

      <ul className="list-disc list-inside max-w-xl mx-auto text-text-muted space-y-1 text-sm text-left">
        {aboutData.bullets_en.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <Link
        href="/about"
        className="inline-block mt-8 bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium transition hover:scale-105"
      >
        Learn more about us →
      </Link>
    </section>
  );
}
