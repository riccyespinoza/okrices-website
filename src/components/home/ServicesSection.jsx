import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="bg-primary text-light py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Featured Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <FaPaintBrush className="text-accent text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Branding & Visual Identity
            </h3>
            <p className="text-mutedgray text-sm">
              Define your brand clearly and attractively.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <FaLaptopCode className="text-accent text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Web Design & Development
            </h3>
            <p className="text-mutedgray text-sm">
              Build elegant, functional websites.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/services"
            className="inline-block bg-accent text-light px-6 py-3 rounded-lg hover:bg-accent/80 transition"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
