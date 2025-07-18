import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Services | Okrices",
  description:
    "Branding services Florida, professional web design, brand identity packages, elegant websites, web development process, creative design, WordPress designer Fort Lauderdale.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceCard
        title="Branding & Visual Identity"
        description="Your brand is more than a logo—it's your story. We help businesses facing inconsistent branding that undermines customer trust and impacts sales. Through elegant visual identities, we ensure clarity, consistency, and immediate recognition."
        list={[
          "Professional logo with variations (horizontal, vertical, icon).",
          "Custom color palette & typography selection.",
          "Essential brand guide or detailed brand book (according to your package).",
          "Visual mockups (cards, social media profiles).",
        ]}
        benefits={[
          "Achieve brand recognition quicker—usually within 5-7 interactions, instead of 10 or more—directly boosting trust and sales.",
        ]}
        cta="View Branding Packages"
        href="/services/branding"
      />
      <ServiceCard
        title="Web Design & Development"
        description="We create websites designed to convert, solving problems such as slow load times, poor user experience, or lack of online presence. Our designs are responsive, easy to manage, SEO-friendly, and tailored to your business goals—be it generating leads, online sales, or reservations."
        list={[
          "Elegant, responsive website.",
          "Easy-to-use CMS (Content Management System).",
          "SEO basics included (local optimization).",
          "Options for e-commerce or booking integrations.",
        ]}
        benefits={[
          "Expect approximately 30% more leads thanks to improved speed and optimized user experience.",
        ]}
        cta="View Web Packages"
        href="/services/web-design"
      />
      <section className="text-center py-4 text-gray-400 text-xs">
        <p>
          <b>Platforms we use:</b> We strategically choose between leading
          platforms like WordPress, Shopify, WooCommerce, or Webflow depending
          on your goals and budget. For highly customized or advanced
          functionality, we use modern frameworks tailored specifically to your
          needs.
        </p>
      </section>
      <ProcessSection />
      <ServicesCTA />
    </main>
  );
}
