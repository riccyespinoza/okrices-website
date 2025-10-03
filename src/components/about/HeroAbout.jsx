// src/components/about/HeroAbout.jsx
"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function HeroAbout({ title, subtitle, description }) {
  return (
    <Section
      id="about-hero"
      spacing="pt-24 pb-32" // 👈 puedes ajustar para igualar Home
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center motion-safe:animate-fade-in">
          {/* Título principal */}
          <h1 className="mb-6 text-light">{title}</h1>

          {/* Subtítulo */}
          {subtitle && (
            <p className="mb-4 text-brand-cream/90 text-xl md:text-2xl">
              {subtitle}
            </p>
          )}

          {/* Descripción */}
          {description && (
            <p className="mx-auto mb-10 max-w-3xl text-gray-300">
              {description}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
