// src/components/projects/ProjectsHero.jsx
"use client";

import Button from "@/components/ui/Button";

export default function ProjectsHero({ title, subtitle, ctaLabel, ctaHref }) {
  return (
    <header className="text-center">
      {title && (
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-light">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="mx-auto max-w-3xl text-brand-cream/90 md:text-lg">
          {subtitle}
        </p>
      )}
      {ctaLabel && ctaHref && (
        <div className="mt-8">
          <Button href={ctaHref} variant="secondary" aria-label={ctaLabel}>
            {ctaLabel}
          </Button>
        </div>
      )}
    </header>
  );
}
