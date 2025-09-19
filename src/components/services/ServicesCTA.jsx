"use client";
import CTA from "@/components/sections/common/CTA";

export default function ServicesCTA() {
  return (
    <CTA
      id="services-cta"
      title="Ready to Begin?"
      description="Discuss your project with us — clarity, quality and professionalism guaranteed."
      primary={{
        label: "Request Your Quote",
        href: "/contact",
        variant: "gradient",
      }}
      secondary={{ label: "Our Process", href: "/about", variant: "ghost" }}
    />
  );
}
