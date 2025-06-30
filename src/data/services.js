// src/data/services.js
// Centralizamos los servicios en un array de objetos.
// Más adelante podrás añadir title_es, tagline_es, etc. para traducción.

export const services = [
  {
    id: "branding",
    slug: "brand-identity", // ancla #brand-identity
    title_en: "Brand Identity & Graphic Design",
    tagline_en:
      "We translate your purpose into a memorable visual system that scales across every touch-point.",
    bullets_en: [
      "Logo design & variants",
      "Color palette & typography",
      "Brand style guide (PDF)",
      "Business stationery & social media kits",
      "Key visuals & mock-ups for presentations",
      "2 revision rounds + 30-day post-launch support",
    ],
  },
  {
    id: "web",
    slug: "web-design",
    title_en: "Web Design & Development",
    tagline_en:
      "Fast, responsive WordPress or Next.js websites built for usability and performance.",
    bullets_en: [
      "Custom design (landing pages, corporate, e-commerce)",
      "Mobile-first, accessibility-aware layouts",
      "Contact forms, booking or online store",
      "Basic on-page SEO & speed optimisation",
      "Client training manual + 30-day support",
      "Optional monthly maintenance & backups",
    ],
  },
];
