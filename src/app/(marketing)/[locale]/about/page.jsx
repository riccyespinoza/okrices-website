import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import HeroAbout from "@/components/about/HeroAbout";
import TimelineAbout from "@/components/about/TimelineAbout";
import ValuesAbout from "@/components/about/ValuesAbout";
import CTA from "@/components/sections/common/CTA.jsx";

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t.pages.about.title,
    path: `/${params.locale}/about`,
    // images: ["/images/og-about.jpg"],
  });
}

export default function AboutPage({ params }) {
  const t = getDic(params.locale);

  return (
    <main id="main-content">
      <HeroAbout
        title="Who We Are"
        subtitle="Premium Visual Identity & Web Studio"
        description="At Okrices, we believe exceptional design empowers businesses to connect deeply with their audiences. Based in Florida, we specialize in creating premium visual identities and sophisticated, minimalist websites tailored to each client’s unique vision and goals."
        image="/about/hero.jpg"
      />

      <TimelineAbout
        founder="Riccy Espinoza"
        history="Founded by Riccy Espinoza, Okrices was born from a passion for creativity, innovation, and elegance. Inspired by the octopus—symbolizing adaptability, intelligence, and versatility—our studio helps entrepreneurs and businesses clearly communicate their identity, stand out in competitive markets, and foster lasting connections with their customers."
      />

      <ValuesAbout
        values={[
          {
            label: "Professionalism",
            desc: "We deliver high-quality, polished designs and always meet our promises.",
          },
          {
            label: "Creativity",
            desc: "Every project receives fresh, innovative ideas tailored to client needs.",
          },
          {
            label: "Elegance",
            desc: "Our minimalist aesthetic ensures clarity, sophistication, and timeless appeal.",
          },
          {
            label: "Precision",
            desc: "Attention to detail is at the heart of our work, delivering flawless results.",
          },
          {
            label: "Adaptability",
            desc: "Like the octopus, we quickly adapt to each client’s unique challenges and goals.",
          },
        ]}
      />

      <section className="section-lazy">
        <CTA
          id="about-cta"
          title="Let’s Create Together"
          description="We craft clear, elegant brands and fast, accessible websites."
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
