import { aboutData } from "@/data/about";

export const metadata = {
  title: "About – Okrices",
  description:
    "Learn how Okrices combines branding, web design and strategic research to build clear, functional brands.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
      {/* Hero / Intro */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-primary">
          {aboutData.headline_en}
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          {aboutData.subhead_en}
        </p>
      </header>

      {/* Core values */}
      <section className="grid gap-8 md:grid-cols-2">
        {aboutData.values_en.map((v) => (
          <article
            key={v.title}
            className="bg-background/80 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-light">{v.title}</h3>
            <p className="text-text-muted">{v.desc}</p>
          </article>
        ))}
      </section>

      {/* Call to action */}
      <section className="text-center">
        <a
          href="/contact"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg text-sm font-semibold transition hover:scale-105"
        >
          Start your project with us →
        </a>
      </section>
    </main>
  );
}
