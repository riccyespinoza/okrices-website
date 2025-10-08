import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import TestimonialsInner from "./TestimonialsInner";

const FALLBACK_QUOTES = [
  "Okrices transformed our identity into a real growth tool.",
  "Our new website doesn’t just look better: it now attracts new clients every week.",
  "A clear, professional process that made everything simpler.",
];

export default function TestimonialsSection({ title, quotes }) {
  const data =
    Array.isArray(quotes) && quotes.length
      ? quotes.slice(0, 3)
      : FALLBACK_QUOTES;

  return (
    <Section spacing="py-24 md:py-32" aria-labelledby="home-testimonials">
      <Container>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="home-testimonials"
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            {title || "What our clients say"}
          </h2>
          <TestimonialsInner quotes={data} />
        </div>
      </Container>
    </Section>
  );
}
