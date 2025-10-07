// src/components/projects/ProjectsHero.jsx
"use client";

import Button from "@/components/ui/Button";

export default function ProjectsHero({ title, subtitle, ctaLabel, locale }) {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-light">
        {title}
      </h1>
      <p className="mx-auto max-w-3xl text-brand-cream/90 md:text-lg">
        {subtitle}
      </p>
      {ctaLabel ? (
        <div className="mt-8">
          <Button href={`/${locale}/contact`} variant="secondary">
            {ctaLabel}
          </Button>
        </div>
      ) : null}
    </header>
  );
}
