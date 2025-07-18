import TestimonialsInner from "./TestimonialsInner";

export default function TestimonialsSection() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What our clients say
        </h2>

        <TestimonialsInner />
      </div>
    </section>
  );
}
