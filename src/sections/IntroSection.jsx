// src/sections/IntroSection.jsx
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";

export default function IntroSection() {
  return (
    <ScrollFade>
      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2">
        {/* Branding */}
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-light">
            Strategic Brand Identity
          </h2>
          <p className="text-text-muted">
            We design memorable visual systems aligned with your target audience
            and built to adapt as your business grows.
          </p>
          <Link
            href="/services#brand-identity"
            className="text-accent underline text-sm font-medium"
          >
            Learn more →
          </Link>
        </article>

        {/* Web */}
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-light">
            Custom Web Development
          </h2>
          <p className="text-text-muted">
            We create beautiful, user-focused websites that prioritise usability
            and commercial impact, giving you the tools to communicate your
            value effectively.
          </p>
          <Link
            href="/services#web-design"
            className="text-accent underline text-sm font-medium"
          >
            Learn more →
          </Link>
        </article>
      </section>
    </ScrollFade>
  );
}
