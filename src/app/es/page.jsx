import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomeEs() {
  return (
    <>
      <Hero
        title="Transforma tu marca con elegancia y precisión"
        description="En Okrices, creamos marcas distintivas y sitios web elegantes para elevar tu negocio. Inspirados en la inteligencia y adaptabilidad del pulpo, entregamos soluciones creativas y personalizadas que generan impacto."
        button1="Ver Servicios"
        button2="Contáctanos"
      />

      <IntroSection
        title="Branding y Diseño Web Premium en Florida"
        description="Especializados en crear marcas visualmente atractivas y sitios web responsive y optimizados para SEO. En Okrices, tu visión se une al diseño sofisticado y de alta calidad."
      />

      <ServicesSection
        services={[
          {
            title: "Identidad Visual & Branding",
            desc: "Define tu marca de manera clara y atractiva.",
          },
          {
            title: "Diseño y Desarrollo Web",
            desc: "Construye sitios web elegantes y funcionales.",
          },
        ]}
        discoverMore="Descubre Más"
      />

      <FeaturedProjectsSection
        title="Proyectos Destacados"
        soon="(Proyectos próximamente)"
      />

      <TestimonialsSection
        title="Testimonios"
        soon="(Testimonios próximamente)"
      />

      <CtaSection
        title="¿Listo para potenciar la presencia de tu negocio?"
        button="Inicia tu Proyecto"
      />
    </>
  );
}
