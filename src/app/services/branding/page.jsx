// src/app/services/branding/page.jsx
import BrandingHero from "@/components/branding/BrandingHero"; // ya es "use client"
import ServiceCards from "@/components/services/ServiceCards"; // "use client"
import Reveal from "@/components/shared/Reveal"; // nuevo wrapper
import { getServices } from "@/lib/getServices";

export const metadata = {
  title: "Branding & Visual Identity | Okrices",
  description:
    "Branding services Florida, visual identity design, premium branding packages, professional brand strategy.",
};

// ⬇️  Server Component (NO "use client")
export default async function BrandingPage() {
  const services = await getServices("en", "branding"); // siempre llega con datos

  return (
    <main>
      {/* 1️⃣ Hero con animaciones propias */}
      <BrandingHero />

      {/* 2️⃣ WHY INVEST ---------------------------------------------------------------- */}
      <section className="py-24 md:py-32">
        <Reveal className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
            Why Invest in{" "}
            <span className="text-accent">Professional Branding?</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            An inconsistent brand weakens trust and reduces engagement. Our
            strategic identities achieve quicker recognition, building
            credibility within fewer interactions.
          </p>
        </Reveal>

        {/* Tarjetas estáticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto px-6">
          {[
            [
              "Instant Recognition",
              "Build a memorable presence customers identify at first glance.",
            ],
            [
              "Trust & Credibility",
              "Professional branding establishes authority in your industry.",
            ],
            [
              "Consistent Experience",
              "Unified messaging across all touch-points and platforms.",
            ],
          ].map(([title, desc], i) => (
            <Reveal key={title} delay={0.1 * i}>
              <div className="glass-card-advanced p-6 rounded-lg h-full text-center">
                <h3 className="text-xl font-bold mb-3 text-light">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3️⃣ PACKAGES -------------------------------------------------------------------- */}
      <section className="py-24 md:py-32">
        <Reveal className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
            Choose Your <span className="text-accent">Branding Package</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Select the perfect solution tailored to your business needs and
            budget.
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto px-6">
          <ServiceCards services={services} /> {/* animaciones internas */}
        </div>
      </section>

      {/* 4️⃣ CTA ------------------------------------------------------------------------ */}
      <section className="py-24 md:py-32">
        <Reveal className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-light">
            Ready to Elevate Your Brand?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Start your project today with confidence and clarity.
          </p>
          <a
            href="/contact"
            className="btn-gradient inline-block px-7 py-3 rounded-md font-medium text-light"
          >
            Contact Okrices
          </a>
        </Reveal>
      </section>
    </main>
  );
}
