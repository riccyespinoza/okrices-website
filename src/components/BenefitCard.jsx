"use client";

export default function BenefitCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-xl border border-mutedgray/20 bg-mutedgray/5 p-6 hover:border-accent transition">
      <Icon className="h-8 w-8 text-accent mb-4" />

      <h3 className="text-light font-semibold mb-2">{title}</h3>
      <p className="text-mutedgray text-sm leading-relaxed">{text}</p>
    </div>
  );
}
