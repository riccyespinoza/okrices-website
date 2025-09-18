// src/app/services/web-design/page.jsx
import WebHero from "@/components/web/WebHero";
import { getServices } from "@/lib/getServices";
import ServiceCards from "@/components/services/ServiceCards";

export const metadata = {
  title: "Web Design & Development | Okrices",
  description:
    "Web design Fort Lauderdale, premium website design, responsive web development, professional e-commerce sites Florida, web design packages.",
};

export default async function WebDesignPage() {
  // fetch de paquetes Web desde Sanity
  const services = await getServices("en", "web");

  return (
    <main id="main-content">
      {/* hero con mismo look & feel que Branding */}
      <WebHero />

      {/* paquetes */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Choose Your <span className="text-accent">Web Package</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Pick the solution that best fits your goals and budget.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ServiceCards services={services} />
          </div>
        </div>
      </section>

      {/* nota extra + CTA idéntica a Branding */}
      <p className="mt-10 text-sm text-gray-400 text-center">
        Extra: Hosting, domain and premium plugins billed separately at direct
        cost.
      </p>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-light">
            Ready to Enhance Your Online Presence?
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Let’s build something exceptional together.
          </p>
          <a
            href="/contact"
            className="btn btn-gradient"
            aria-label="Contact Okrices"
          >
            Contact&nbsp;Okrices
          </a>
        </div>
      </section>
    </main>
  );
}
