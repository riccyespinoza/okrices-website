"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function HeroAbout({ title, subtitle, description }) {
  return (
    <Section
      id="about-hero"
      spacing="pt-24 pb-32"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center motion-safe:animate-fade-in">
          {/* Igual que Home */}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-6 text-light">
            {title}
          </h1>

          {subtitle && (
            <p className="mb-4 text-brand-cream/90 text-xl md:text-2xl">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="mx-auto mb-10 max-w-3xl text-base text-gray-300 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
