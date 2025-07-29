import { getServices } from "@/lib/getServices";
import ServiceCards from "@/components/services/ServiceCards";

export const metadata = {
  title: "Branding & Visual Identity | Okrices",
  description:
    "Branding services Florida, visual identity design, logo design Fort Lauderdale, premium branding packages, professional brand strategy.",
};

export default async function BrandingPage() {
  const services = await getServices("en", "branding");

  return (
    <main className="py-24 px-6 sm:px-8 lg:px-0 max-w-5xl mx-auto">
      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-light">
          Build a <span className="text-accent">Premium Brand</span> That Stands
          Out
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          At Okrices we craft visual identities that communicate your brand’s
          unique story, values and personality. Our elegant, minimalist approach
          makes a memorable first impression and builds customer trust.
        </p>
      </section>

      {/* WHY INVEST */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-light">
          Why Invest in Professional Branding?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          An inconsistent brand weakens trust and reduces engagement. Our
          strategic identities achieve quicker recognition, building credibility
          within fewer interactions.
        </p>
      </section>

      {/* PACKAGES from Sanity */}
      <div className="px-0">
        <ServiceCards services={services} />
      </div>

      {/* CTA */}
      <section className="text-center mt-24">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-light">
          Ready to Elevate Your Brand?
        </h3>
        <p className="text-gray-300 mb-6">
          Start your project today with confidence and clarity.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-light font-medium px-7 py-3 rounded-xl hover:bg-accent/80 transition"
        >
          Contact Okrices
        </a>
      </section>
    </main>
  );
}
