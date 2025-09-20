import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import ServicesHero from "@/components/services/ServicesHero";
import ProcessSection from "@/components/services/ProcessSection";
import CTA from "@/components/sections/common/CTA.jsx";

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t.pages.services.title,
    path: `/${params.locale}/services`,
    // images: ["/images/og-services.jpg"],
  });
}

export default function ServicesPage({ params }) {
  const t = getDic(params.locale);

  return (
    <main id="main-content">
      <ServicesHero />
      <ProcessSection />
      <section className="section-lazy">
        <CTA
          id="services-cta"
          title="Launch fast. Scale confidently."
          description="Modular services for branding, web and SEO."
          primary={{
            label: t.cta.primary,
            href: `/${params.locale}/contact`,
            variant: "gradient",
          }}
          secondary={{
            label: t.cta.secondary,
            href: `/${params.locale}/projects`,
            variant: "ghost",
          }}
        />
      </section>
    </main>
  );
}
