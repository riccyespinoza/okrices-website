// src/components/services/ServicesHero.jsx
"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServicesHero({
  title,
  description,
  ctaLabel,
  ctaHref,
}) {
  return (
    <Section
      id="services-hero"
      spacing="pt-24 pb-32"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center motion-safe:animate-fade-in">
          <h1 className="mb-6 text-light">{title}</h1>

          <p className="mx-auto mb-10 max-w-3xl text-gray-300">{description}</p>

          <div className="mt-2">
            <Button href={ctaHref} variant="gradient">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
