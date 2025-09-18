// src/components/home/Hero.jsx  (✅ Server Component, sin "use client")
import Container from "../shared/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-variable">
            Transform Your Brand with{" "}
            <span className="text-gradient">Elegance</span> and Precision
          </h1>

          <p className="max-w-3xl mx-auto mb-10 text-base md:text-lg text-gray-light/90">
            At Okrices, we craft distinctive brands and elegant websites
            designed to elevate your business. Inspired by the intelligence and
            adaptability of the octopus, we deliver tailored, creative solutions
            that resonate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/services"
              className="btn btn-gradient inline-block px-6 py-3 rounded-md font-medium"
              aria-label="View services"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary inline-block border border-accent text-accent px-6 py-3 rounded-md font-medium"
              aria-label="Contact Okrices"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll indicator con animación CSS (barata) */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-80 animate-fade-in"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center items-start overflow-hidden">
          <span className="mt-2 block w-1.5 h-1.5 bg-accent rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
