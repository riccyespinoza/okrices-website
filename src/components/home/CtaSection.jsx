"use client";
import CTA from "@/components/sections/common/CTA";

export default function CtaSection() {
  return (
    <CTA
      id="home-cta"
      title="Ready to enhance your business presence?"
      // description opcional: añade si quieres una línea de apoyo
      // description="Let’s build a premium brand and website experience that actually converts."
      primary={{
        label: "Start Your Project",
        href: "/contact",
        variant: "gradient",
      }}
      secondary={{ label: "See Projects", href: "/projects", variant: "ghost" }}
    />
  );
}
