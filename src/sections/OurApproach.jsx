// src/sections/OurApproach.jsx
// Propósito: explicar la filosofía de trabajo en 3 pasos claros
// (estrategia, diseño, lanzamiento) con iconos y copy bilingüe‑listo.

export default function OurApproach() {
  const steps = [
    {
      id: 1,
      title_en: "Strategy & Research",
      desc_en:
        "We start by analyzing your market and identifying opportunities to create a unique visual proposition.",
      icon: "📊", // remplaza por componente <IconStrategy /> si tienes SVG
    },
    {
      id: 2,
      title_en: "Design & Development",
      desc_en:
        "We craft visual identities and websites that merge elegance with function, ensuring a seamless user experience.",
      icon: "🎨",
    },
    {
      id: 3,
      title_en: "Launch & Empower",
      desc_en:
        "We deliver a complete, ready‑to‑use solution and provide the guidance you need to manage your new brand assets confidently.",
      icon: "🚀",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center space-y-12">
      <h2 className="text-3xl font-bold text-primary">
        A Process Built on Clarity and Results
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.id}
            className="bg-background/80 border border-white/10 rounded-xl p-8 space-y-4 flex flex-col items-center"
          >
            <span className="text-4xl">{step.icon}</span>
            <h3 className="text-xl font-semibold text-light">
              {step.title_en}
            </h3>
            <p className="text-text-muted text-sm">{step.desc_en}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
