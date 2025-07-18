import Image from "next/image";

export default function HeroAbout({ title, subtitle, description, image }) {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      {/* Ilustración / foto redonda encima del texto */}
      {image && (
        <Image
          src={image}
          alt="Founder portrait"
          width={128}
          height={128}
          className="rounded-full object-cover mb-8 border-4 border-white/20 shadow-lg"
          priority
        />
      )}

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-light drop-shadow max-w-3xl">
        {title}
      </h1>
      <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
        {subtitle}
      </h2>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
        {description}
      </p>
    </section>
  );
}
