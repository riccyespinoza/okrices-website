import Section from "../shared/Section";
import Container from "../shared/Container";
import TestimonialsInner from "./TestimonialsInner";

export default function TestimonialsSection() {
  return (
    <Section spacing="py-24 md:py-32">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What our clients say
        </h2>

        <TestimonialsInner />
      </Container>
    </Section>
  );
}
