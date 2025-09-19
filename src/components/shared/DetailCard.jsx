// src/components/shared/DetailCard.jsx
"use client";

// Este es un componente simple y no necesita 'motion' directamente.
export default function DetailCard({ icon, title, text }) {
  if (!text) return null;
  return (
    <div className="flex flex-col items-center text-center">
      {/* 👇 CAMBIO: Estilos unificados */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-neutral-700/50 bg-brand-steel-dark/30">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      {/* 👇 CAMBIO: Estilos unificados */}
      <p className="text-sm leading-relaxed text-brand-cream/80">{text}</p>
    </div>
  );
}
