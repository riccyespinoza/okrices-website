// src/app/(marketing)/[locale]/page.jsx
import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import WhyOkricesSection from "@/components/home/WhyOkricesSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTA from "@/components/sections/common/CTA.jsx";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t.pages.home.title,
    path: `/${params.locale}`,
  });
}

export default function Home({ params }) {
  const { locale } = params;
  const t = getDic(locale).pages.home;
  const withLocale = (href) => `/${locale}${href}`;

  return (
    <main id="main-content">
      <Hero
        title={t.hero.title}
        subclaim={t.hero.subclaim}
        primary={{
          label: t.hero.primary.label,
          href: withLocale(t.hero.primary.href),
        }}
        secondary={{
          label: t.hero.secondary.label,
          href: withLocale(t.hero.secondary.href),
        }}
      />

      <section className="section-lazy">
        <FeaturedProjectsSection
          title={t.projects.title}
          intro={t.projects.intro}
          examples={t.projects.examples}
          cta={{
            label: t.projects.cta.label,
            href: withLocale(t.projects.cta.href),
          }}
          locale={locale}
        />
      </section>

      <section className="section-lazy">
        <WhyOkricesSection
          title={t.why.title}
          intro={t.why.intro}
          bullets={t.why.bullets}
          cta={{ label: t.why.cta.label, href: withLocale(t.why.cta.href) }}
        />
      </section>

      <section className="section-lazy">
        <ServicesSection
          title={t.services.title}
          intro={t.services.intro}
          items={t.services.items}
          cta={{
            label: t.services.cta.label,
            href: withLocale(t.services.cta.href),
          }}
        />
      </section>

      <section className="section-lazy">
        <TestimonialsSection
          title={t.testimonials.title}
          quotes={t.testimonials.quotes}
        />
      </section>

      <section className="section-lazy">
        <AboutSection
          title={t.aboutMini.title}
          text={t.aboutMini.text}
          cta={{
            label: t.aboutMini.cta.label,
            href: withLocale(t.aboutMini.cta.href),
          }}
        />
      </section>

      {/* Si prefieres usar el CTA global, déjalo como lo tenías; 
         si quieres usar el de Home (ctaFinal), usa t.ctaFinal.* */}
      <section className="section-lazy">
        <CTA
          id="home-cta"
          title={t.ctaFinal.title}
          description={t.ctaFinal.text}
          primary={{
            label: t.ctaFinal.primary.label,
            href: withLocale(t.ctaFinal.primary.href),
            variant: "gradient",
          }}
          secondary={{
            label: t.ctaFinal.secondary.label,
            href: withLocale(t.ctaFinal.secondary.href),
            variant: "secondary",
          }}
        />
      </section>
    </main>
  );
}
