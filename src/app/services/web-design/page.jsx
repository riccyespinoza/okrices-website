import { getServices } from "@/lib/getServices";
import ServiceCards from "@/components/services/ServiceCards";

export const metadata = {
  title: "Web Design & Development | Okrices",
  description:
    "Web design Fort Lauderdale, premium website design, responsive web development, professional e-commerce sites Florida, web design packages.",
};

export default async function WebDesignPage() {
  const services = await getServices("en", "web");

  return (
    <main className="py-24 px-6 sm:px-8 lg:px-0 max-w-5xl mx-auto">
      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-light">
          Websites Designed to <span className="text-accent">Convert</span> &
          Captivate
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          We craft minimalist, responsive websites that enhance your online
          presence, increase leads and deliver a premium user experience. From
          landing pages to e-commerce, we tailor packages to meet your goals.
        </p>
      </section>

      {/* PACKAGES */}
      <div className="px-0">
        <ServiceCards services={services} />
      </div>

      {/* EXTRA NOTE */}
      <p className="mt-10 text-sm text-gray-400 text-center">
        Extra: Hosting, domain and premium plugins billed separately at direct
        cost.
      </p>

      {/* CTA */}
      <section className="text-center mt-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-light">
          Ready to Enhance Your Online Presence?
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us today and let’s start building your perfect website.
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
