import { motion } from "framer-motion";

const cards = [
  {
    id: "branding",
    icon: "🎨",
    title: "Branding Systems",
    body: "Logo, color, typography & a 30-page brand manual built to scale.",
  },
  {
    id: "custom-code",
    icon: "🖥️",
    title: "Custom-Code Websites",
    body: "Next.js, React & headless CMS for blazing performance and total flexibility.",
  },
  {
    id: "wordpress",
    icon: "🔧",
    title: "WordPress & WooCommerce",
    body: "Launch fast with a proven stack — perfect for growing businesses.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        We build brands that connect <br className="hidden md:block" />
        &amp; websites that convert.
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((c) => (
          <motion.article
            key={c.id}
            className="bg-[#162126]/80 backdrop-blur-lg rounded-2xl p-8 space-y-4"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="text-4xl">{c.icon}</div>
            <h3 className="text-xl font-semibold text-light">{c.title}</h3>
            <p className="text-text-muted text-sm">{c.body}</p>
          </motion.article>
        ))}
      </div>

      <p className="text-center mt-10 text-sm">
        <a href="/services" className="text-accent underline">
          Compare packages →
        </a>
      </p>
    </section>
  );
}
