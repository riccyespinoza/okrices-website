import Image from "next/image";

export default function HeroAbout({ title, subtitle, description, image }) {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-8 flex flex-col items-center text-center">
        <div className="mb-8">
          <Image
            src={image}
            alt="About us illustration"
            width={120}
            height={120}
            className="mx-auto rounded-full object-cover shadow-lg border-4 border-white/20"
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-2 text-light drop-shadow">
          {title}
        </h1>
        <h2 className="text-xl font-light mb-4 text-primary-300">{subtitle}</h2>
        <p className="text-lg md:text-xl text-gray-200">{description}</p>
      </div>
    </section>
  );
}
