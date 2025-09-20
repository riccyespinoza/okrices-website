import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTA from "@/components/sections/common/CTA.jsx"; // <- extensión para fijar resolución

// (opcional) Pre-render de /en y /es
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t.pages.home.title,
    path: `/${params.locale}`,
    // images: ["/images/og-home.jpg"], // si quieres OG específico
  });
}

export default function Home({ params }) {
  const t = getDic(params.locale);

  return (
    <main id="main-content">
      <Hero />
      <section className="section-lazy">
        <FeaturedProjectsSection />
      </section>
      <section className="section-lazy">
        <IntroSection />
      </section>
      <section className="section-lazy">
        <ServicesSection />
      </section>
      <section className="section-lazy">
        <TestimonialsSection />
      </section>
      <section className="section-lazy">
        <CTA
          id="home-cta"
          title={t.cta.title}
          description={t.cta.description}
          primary={{
            label: t.cta.primary,
            href: `/${params.locale}/contact`,
            variant: "gradient",
          }}
          secondary={{
            label: t.cta.secondary,
            href: `/${params.locale}/projects`,
            variant: "ghost", // o "secondary" según tu Button
          }}
        />
      </section>
    </main>
  );
}
