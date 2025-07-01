// src/sections/ContactCTA.jsx
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-background py-20 text-center px-6">
      <h2 className="text-3xl font-bold text-light">
        Ready to bring clarity to your brand?
      </h2>
      <p className="text-text-muted max-w-xl mx-auto mt-4">
        Let’s discuss your project and how we can create a clear, functional and
        beautiful solution tailored to your needs.
      </p>
      <Link
        href="/contact"
        className="inline-block mt-8 bg-accent text-white px-8 py-3 rounded-lg text-sm font-semibold transition hover:scale-105"
      >
        Let's Talk
      </Link>
    </section>
  );
}
