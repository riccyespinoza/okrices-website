// src/components/home/TestimonialsSection.jsx

import Section from "../shared/Section";
import Container from "../shared/Container";
import TestimonialsInner from "./TestimonialsInner";

export default function TestimonialsSection() {
  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="home-testimonials">
      <Container>
        <h2
          id="home-testimonials"
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What our clients say
        </h2>

        <TestimonialsInner />
      </Container>
    </Section>
  );
}
