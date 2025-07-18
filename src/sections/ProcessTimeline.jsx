import { motion } from "framer-motion";

const steps = [
  {
    icon: "🔍",
    title: "Discover",
    desc: "Deep-dive questionnaire & competitor scan.",
  },
  { icon: "📊", title: "Strategy", desc: "Positioning, personas & UX flows." },
  {
    icon: "🎨",
    title: "Design",
    desc: "High-fidelity prototypes & brand kit.",
  },
  {
    icon: "🚀",
    title: "Launch",
    desc: "Optimised build, training & 30-day support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 space-y-12">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        A Process Built on Clarity and Results
      </h2>

      <div className="grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="flex flex-col items-center text-center space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <motion.div
              className="text-4xl"
              initial={{ pathLength: 0, rotate: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
            >
              {s.icon}
            </motion.div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-text-muted text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
