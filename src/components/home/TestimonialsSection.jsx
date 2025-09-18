// src/components/home/TestimonialsSection.jsx

import Section from "../shared/Section";
import Container from "../shared/Container";
import TestimonialsInner from "./TestimonialsInner"; // Asumimos que este es el componente interactivo

export default function TestimonialsSection() {
  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="home-testimonials">
      <Container>
        <h2
          id="home-testimonials"
          className="mb-16 text-center text-3xl font-bold md:text-4xl"
        >
          What our clients say
        </h2>

        {/* 👇 CAMBIO: Hemos eliminado el div 'section-lazy' para simplificar el código.
           El componente interno ahora se renderiza directamente. */}
        <TestimonialsInner />
      </Container>
    </Section>
  );
}
