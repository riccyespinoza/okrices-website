import Link from "next/link";
import AnimatedLogo from "../AnimatedLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-primary text-light overflow-hidden px-4">
      {/* Logo animado, sutil detrás */}
      <AnimatedLogo className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-20" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-light drop-shadow text-center leading-tight max-w-4xl mx-auto">
          Transform Your Brand with{" "}
          <span className="text-accent">Elegance</span> and Precision
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-lg md:text-xl text-gray-300 text-center">
          At Okrices, we craft distinctive brands and elegant websites designed
          to elevate your business. Inspired by the intelligence and
          adaptability of the octopus, we deliver tailored, creative solutions
          that resonate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-accent px-7 py-3 rounded-xl text-light font-medium shadow hover:bg-accent/80 transition"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="border border-accent px-7 py-3 rounded-xl text-accent font-medium shadow hover:bg-accent/10 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
