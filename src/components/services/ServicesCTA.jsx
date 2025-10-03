// src/components/services/ServicesCTA.jsx
"use client";

import CTA from "@/components/sections/common/CTA";

export default function ServicesCTA({
  title,
  description,
  primaryLabel,
  primaryHref,
}) {
  return (
    <section className="py-20 md:py-28">
      <CTA
        id="services-cta"
        title={title}
        description={description}
        primary={{
          label: primaryLabel,
          href: primaryHref,
          variant: "gradient",
        }}
        secondary={{
          label: "Our Process",
          href: "/about",
          variant: "ghost",
        }}
      />
    </section>
  );
}
