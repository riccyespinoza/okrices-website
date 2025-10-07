// src/components/contact/ContactCTA.jsx
"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getDic } from "@/lib/i18n/config";

export default function ContactCTA({ locale }) {
  const t = getDic(locale);

  return (
    <Section spacing="py-24 md:py-32" className="text-center">
      <Container>
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          {t.pages.contact.closing.title}
        </h2>
        <Button href={`/${locale}/contact`} variant="gradient">
          {t.pages.contact.closing.ctaLabel}
        </Button>
      </Container>
    </Section>
  );
}
