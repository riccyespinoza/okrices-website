"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getDic } from "@/lib/i18n/config";

export default function ContactHero({ locale }) {
  const t = getDic(locale);

  return (
    <Section
      spacing="pt-24 pb-32"
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-center"
      aria-labelledby="contact-hero-title"
    >
      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center motion-safe:animate-fade-in">
          {/* Igual que Home */}
          <h1
            id="contact-hero-title"
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-6 text-light"
          >
            {t.pages.contact.hero.title}
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base text-gray-300 md:text-lg">
            {t.pages.contact.hero.text}
          </p>

          <Button href="#contact-form" variant="gradient">
            {t.pages.contact.hero.ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
