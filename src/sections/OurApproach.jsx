// src/sections/OurApproach.jsx
export default function OurApproach() {
  const steps = [
    {
      id: 1,
      icon: "📊",
      title: "Strategy & Research",
      desc: "We start by analysing your market and identifying opportunities to create a unique visual proposition.",
    },
    {
      id: 2,
      icon: "🎨",
      title: "Design & Development",
      desc: "We craft visual identities and websites that merge elegance with function, ensuring a seamless user experience.",
    },
    {
      id: 3,
      icon: "🚀",
      title: "Launch & Empower",
      desc: "We deliver a ready-to-use solution and guide you to manage your new brand assets confidently.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 space-y-12">
      <h2 className="text-3xl font-bold text-primary text-center">
        A Process Built on Clarity and Results
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <article
            key={s.id}
            className="bg-background/80 border border-white/10 rounded-xl p-6 text-center space-y-4"
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="text-xl font-semibold text-light">{s.title}</h3>
            <p className="text-text-muted text-sm">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
