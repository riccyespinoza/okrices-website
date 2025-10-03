// src/app/(marketing)/[locale]/services/page.jsx
import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesBranding from "@/components/services/ServicesBranding";
import ServicesWeb from "@/components/services/ServicesWeb";
import ServicesCTA from "@/components/services/ServicesCTA";

export async function generateMetadata({ params }) {
  const t = getDic(params?.locale ?? "en");
  return buildMetadata({
    title: t.pages.services.title,
    path: `/${params?.locale}/services`,
  });
}

export default function ServicesPage({ params }) {
  const locale = params?.locale ?? "en";
  const t = getDic(locale);

  return (
    <main id="main-content">
      {/* 1) Hero */}
      <ServicesHero
        title={t.pages.services.title}
        description={t.pages.services.hero.description}
        ctaLabel={t.pages.services.hero.ctaLabel}
        ctaHref={`/${locale}/projects`}
      />

      {/* 2) Strategic Branding */}
      <ServicesBranding
        id="strategic-branding"
        title={t.pages.services.branding.title}
        intro={t.pages.services.branding.intro}
        options={t.pages.services.branding.options}
        ctaLabel={t.pages.services.branding.ctaLabel}
        ctaHref={`/${locale}/contact`}
      />

      {/* 3) Web Development */}
      <ServicesWeb
        id="web-development"
        title={t.pages.services.web.title}
        intro={t.pages.services.web.intro}
        options={t.pages.services.web.options}
        ctaLabel={t.pages.services.web.ctaLabel}
        ctaHref={`/${locale}/projects`}
      />

      {/* 4) Cierre */}
      <ServicesCTA
        title={t.pages.services.closing.title}
        description={t.pages.services.closing.description}
        primaryLabel={t.cta.primary}
        primaryHref={`/${locale}/contact`}
      />
    </main>
  );
}
