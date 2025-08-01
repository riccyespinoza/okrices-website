// src/app/services/page.jsx
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCards from "@/components/services/ServiceCards";
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

      <ProcessSection />
      <ServicesCTA />
    </main>
  );
}
