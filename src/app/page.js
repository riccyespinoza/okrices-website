// src/app/page.jsx
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FeaturedProjectsSection />

      <CtaSection />
    </>
  );
}
