import HeroAbout from "@/components/about/HeroAbout";
import TimelineAbout from "@/components/about/TimelineAbout";
import ValuesAbout from "@/components/about/ValuesAbout";
import CTAAbout from "@/components/about/CTAAbout";

export const metadata = {
  title: "About Us | Okrices",
  description:
    "Branding expert Florida, web design professional, premium creative agency.",
};

export default function AboutPage() {
  return (
    <main>
      <HeroAbout
        title="Who We Are"
        subtitle="Premium Visual Identity & Web Studio"
        description="At Okrices, we believe exceptional design empowers businesses to connect deeply with their audiences. Based in Florida, we specialize in creating premium visual identities and sophisticated, minimalist websites tailored to each client’s unique vision and goals."
        image="/about/hero.jpg" // Cambia por tu imagen
      />

      <TimelineAbout
        founder="Riccy Espinoza"
        history="Founded by Riccy Espinoza, Okrices was born from a passion for creativity, innovation, and elegance. Inspired by the octopus—symbolizing adaptability, intelligence, and versatility—our studio helps entrepreneurs and businesses clearly communicate their identity, stand out in competitive markets, and foster lasting connections with their customers."
      />

      <ValuesAbout
        values={[
          {
            label: "Professionalism",
            desc: "We deliver high-quality, polished designs and always meet our promises.",
          },
          {
            label: "Creativity",
            desc: "Every project receives fresh, innovative ideas tailored to client needs.",
          },
          {
            label: "Elegance",
            desc: "Our minimalist aesthetic ensures clarity, sophistication, and timeless appeal.",
          },
          {
            label: "Precision",
            desc: "Attention to detail is at the heart of our work, delivering flawless results.",
          },
          {
            label: "Adaptability",
            desc: "Like the octopus, we quickly adapt to each client’s unique challenges and goals.",
          },
        ]}
      />

      <CTAAbout
        title="Let's Create Together"
        text="Ready to elevate your brand? Tell us about your project—we're here to help you succeed."
        buttonLabel="Work With Us"
        buttonHref="/contact"
      />
    </main>
  );
}

// import { aboutData } from "@/data/about";

// export const metadata = {
//   title: "About – Okrices",
//   description:
//     "Learn how Okrices combines branding, web design and strategic research to build clear, functional brands.",
// };

// export default function AboutPage() {
//   return (
//     <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
//       {/* Hero / Intro */}
//       <header className="text-center space-y-4">
//         <h1 className="text-4xl font-extrabold text-primary">
//           {aboutData.headline_en}
//         </h1>
//         <p className="text-text-muted max-w-2xl mx-auto">
//           {aboutData.subhead_en}
//         </p>
//       </header>

//       {/* Core values */}
//       <section className="grid gap-8 md:grid-cols-2">
//         {aboutData.values_en.map((v) => (
//           <article
//             key={v.title}
//             className="bg-background/80 border border-white/10 rounded-xl p-6"
//           >
//             <h3 className="text-xl font-semibold text-light">{v.title}</h3>
//             <p className="text-text-muted">{v.desc}</p>
//           </article>
//         ))}
//       </section>

//       {/* Call to action */}
//       <section className="text-center">
//         <a
//           href="/contact"
//           className="inline-block bg-accent text-white px-8 py-3 rounded-lg text-sm font-semibold transition hover:scale-105"
//         >
//           Start your project with us →
//         </a>
//       </section>
//     </main>
//   );
// }
