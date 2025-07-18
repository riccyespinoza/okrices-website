import { FiSearch, FiPenTool, FiCode, FiPackage } from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Consultation",
    text: "Understand your vision, goals and budget.",
  },
  {
    icon: FiPenTool,
    title: "Proposal",
    text: "Transparent scope, pricing and deliverables.",
  },
  {
    icon: FiCode,
    title: "Design & Development",
    text: "Collaborative, elegant design solutions.",
  },
  {
    icon: FiPackage,
    title: "Delivery & Training",
    text: "Hand-over and training so you manage with ease.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-primary py-24 px-4">
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Our&nbsp;<span className="text-accent">Process</span>
      </h3>

      <div className="relative max-w-6xl mx-auto">
        {/* línea horizontal en desktop */}
        <div className="hidden md:block absolute inset-0 flex items-center">
          <div className="w-full h-px bg-darkgray/60" />
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative flex flex-col items-center text-center
                         bg-white/5 backdrop-blur-sm border border-white/10
                         rounded-xl p-6 hover:scale-105 transition"
            >
              {/* nodo de la línea (solo desktop) */}
              <span className="hidden md:inline-block w-3 h-3 rounded-full bg-accent mb-6" />

              <s.icon className="text-accent text-3xl mb-4" />
              <h4 className="font-semibold text-light mb-2">{s.title}</h4>
              <p className="text-gray-300 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
