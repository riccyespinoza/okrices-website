// src/app/page.jsx
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    // Eliminamos el bg-page-gradient ya que ahora el fondo se define a nivel global en layout.js
    <main>
      <Hero />
      <FeaturedProjectsSection />
      <IntroSection />

      <ServicesSection />

      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
