// src/components/home/AboutSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 text-light">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about/me.webp" // desde /public/about/me.webp
            alt="Riccy Espinoza – Founder"
            fill
            sizes="(max-width:768px) 100vw, 600px" // 1 columna en móvil, ~600px en desktop
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-accent">Okrices</span>
          </h2>
          <p className="text-mutedgray mb-6">
            We’re a bilingual creative studio based in Florida, focused on
            transforming ideas into clear, functional and elegant brands — from
            strategic identities to high-performance websites.
          </p>

          <Link href="/about" className="btn btn-gradient">
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  );
}
