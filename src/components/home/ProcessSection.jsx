// src/components/home/ProcessSection.jsx
// *** Server Component ***
import { FiSearch, FiPenTool, FiCode, FiPackage } from "react-icons/fi";
import ProcessStep from "@/components/shared/ProcessStep";

export default function ProcessSection() {
  const steps = [
    {
      icon: <FiSearch className="text-accent text-2xl mb-4" />,
      title: "Discover",
      text: "Brief, research and goal-setting so we’re aligned from day one.",
    },
    {
      icon: <FiPenTool className="text-accent text-2xl mb-4" />,
      title: "Design",
      text: "Brand visuals, wireframes and feedback loops until it feels right.",
    },
    {
      icon: <FiCode className="text-accent text-2xl mb-4" />,
      title: "Develop",
      text: "Pixel-perfect, responsive and accessible website build-out.",
    },
    {
      icon: <FiPackage className="text-accent text-2xl mb-4" />,
      title: "Deliver",
      text: "Launch, training and optional care plan for peace of mind.",
    },
  ];

  return (
    <section id="process" className="bg-primary text-light py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our&nbsp;Process
        </h2>
        <p className="text-text-muted max-w-3xl mx-auto mb-10">
          A transparent, step-by-step workflow that keeps you in the loop from
          concept to launch.
        </p>

        <div className="relative">
          {/* Línea de conexión — visible solo en screens ≥ md */}
          <div
            className="hidden md:block absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full h-px bg-darkgray/60" />
          </div>

          <div className="grid gap-14 md:grid-cols-4">
            {steps.map((step, i) => (
              <ProcessStep key={step.title} {...step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
