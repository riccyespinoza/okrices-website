import Hero from "@/components/Hero";
import IntroSection from "@/sections/IntroSection";
import OurApproach from "@/sections/OurApproach";
import ServicesPreview from "@/sections/ServicesPreview";
import ProjectsPreview from "@/sections/ProjectsPreview";
import AboutSnippet from "@/sections/AboutSnippet";
import ContactCTA from "@/sections/ContactCTA";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24">
      {/* 1️⃣ Hero */}
      <Hero />

      <IntroSection />

      {/* 2️⃣ Our approach section */}
      <OurApproach />

      {/* 2️⃣ Services preview – 3 key services in cards */}
      <ServicesPreview />

      {/* 3️⃣ Latest projects carousel/grid */}
      <ProjectsPreview />

      {/* 4️⃣ About snippet (short paragraph + CTA) */}
      <AboutSnippet />

      {/* 5️⃣ Contact call‑to‑action */}
      <ContactCTA />
    </main>
  );
}

// export default function HomePage() {
//   return (
//     <main className="bg-primary text-light flex flex-col items-center justify-center min-h-screen text-center px-6">
//       <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//         Welcome to <span className="text-accent">Okrices</span>
//       </h1>
//       <p className="mt-4 text-lg text-cream max-w-xl">
//         Your brand deserves to be clear, functional, and elegant. Let’s build it
//         together.
//       </p>
//       <a
//         href="/services"
//         className="mt-8 bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-105"
//       >
//         Explore our services
//       </a>
//     </main>
//   );
// }
