// src/app/(marketing)/[locale]/about/page.jsx
import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";

import HeroAbout from "@/components/about/HeroAbout";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutApproach from "@/components/about/AboutApproach";
import ValuesAbout from "@/components/about/ValuesAbout";
import CTA from "@/components/sections/common/CTA.jsx";

export async function generateMetadata({ params }) {
  const t = getDic(params?.locale ?? "en");
  return buildMetadata({
    title: t.pages.about.hero.title,
    path: `/${params?.locale}/about`,
    // images: ["/images/og-about.jpg"],
    // Recomendado: agregar openGraph/twitter/alternates aquí si ya usas ese helper
  });
}

export default function AboutPage({ params }) {
  const locale = params?.locale ?? "en";
  const t = getDic(locale);

  return (
    <main id="main-content">
      {/* 1) Hero introductorio */}
      <HeroAbout
        title={t.pages.about.hero.title}
        subtitle={t.pages.about.hero.subtitle} // opcional (puede ser undefined)
        description={t.pages.about.hero.description}
        image="/about/hero.jpg"
      />

      {/* 2) Propósito y filosofía */}
      <AboutPhilosophy
        id="about-philosophy"
        title={t.pages.about.philosophy.title}
        text={t.pages.about.philosophy.text}
      />

      {/* 3) Enfoque de trabajo */}
      <AboutApproach
        id="about-approach"
        title={t.pages.about.approach.title}
        items={t.pages.about.approach.items}
      />

      {/* 4) Valores y visión */}
      <ValuesAbout
        title={t.pages.about.values.title} // ⬅️ aquí
        values={t.pages.about.values.items} // ⬅️ y aquí
      />

      {/* 5) Cierre con CTA */}
      <section className="py-20 md:py-28">
        <CTA
          id="about-cta"
          title={t.pages.about.cta.title}
          description={t.pages.about.cta.description}
          primary={{
            label: t.cta.primary,
            href: `/${locale}/contact`,
            variant: "gradient",
          }}
          secondary={{
            label: t.cta.secondary,
            href: `/${locale}/projects`,
            variant: "ghost",
          }}
        />
      </section>
    </main>
  );
}
