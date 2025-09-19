// src/components/shared/KeyDataCard.jsx
"use client";

export default function KeyDataCard({ icon, title, value }) {
  if (!value) return null;
  return (
    // 👇 CAMBIO: Estilos unificados
    <div className="w-full rounded-lg border border-neutral-700/50 bg-brand-steel-dark/30 p-5 text-center md:text-left">
      <div className="mb-2 flex items-center justify-center text-accent md:justify-start">
        {icon}
        {/* 👇 CAMBIO: Estilos unificados */}
        <h3 className="ml-2 text-sm font-normal text-brand-cream/70">
          {title}
        </h3>
      </div>
      <p className="text-lg font-semibold text-light">{value}</p>
    </div>
  );
}
