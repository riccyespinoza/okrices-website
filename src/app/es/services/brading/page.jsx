// src/app/services/branding/page.jsx
export const metadata = {
  title: "Branding & Visual Identity | Okrices",
  description:
    "Branding services Florida, visual identity design, logo design Fort Lauderdale, premium branding packages, professional brand strategy.",
};

const packages = [
  {
    name: "Basic Identity",
    time: "1 Week",
    desc: "Perfect for freelancers or startups needing professional brand basics quickly.",
    bullet: [
      "Master logo (2 concepts, 1 revision round)",
      "Custom color palette & typography",
      "Essential brand guide (2 pages)",
      "Files delivered: SVG, PNG, JPG, PDF, AI",
    ],
    price: "$900 – $1,400 USD",
    cta: "Start Basic",
  },
  {
    name: "Pro Identity",
    time: "2-3 Weeks",
    desc: "Ideal for growing businesses looking to enhance their visual presence across multiple channels.",
    bullet: [
      "Everything in Basic, plus:",
      "Logo variants (horizontal, icon, inverse)",
      "Expanded brand guide (5 pages)",
      "Social media kit (3 posts)",
      "Business card & favicon templates",
      "Moodboard & visual inspiration",
    ],
    price: "$2,500 – $3,800 USD",
    cta: "Start Pro",
  },
  {
    name: "Premium Identity",
    time: "4-5 Weeks",
    desc: "Comprehensive branding for businesses ready to strategically scale.",
    bullet: [
      "Everything in Pro, plus:",
      "Strategy workshop (2-hour session)",
      "Complete social media kit (12 posts)",
      "Extended brand guide (12 pages)",
      "Extra applications (packaging, uniforms, mockups)",
      "Dynamic identity (animations, adaptable colors)",
    ],
    price: "$6,000 – $8,500 USD",
    cta: "Start Premium",
  },
];

export default function BrandingPage() {
  return (
    <main className="py-24 px-6 max-w-5xl mx-auto">
      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-light">
          Build a&nbsp;<span className="text-accent">Premium Brand</span>
          &nbsp;That Stands&nbsp;Out
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          At Okrices we craft visual identities that communicate your brand’s
          unique story, values and personality. Our elegant, minimalist approach
          makes a memorable first impression and builds customer trust.
        </p>
      </section>

      {/* WHY INVEST */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-light">
          Why Invest in Professional Branding?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          An inconsistent brand weakens trust and reduces engagement. Our
          strategic identities achieve quicker recognition, building credibility
          within fewer interactions.
        </p>
      </section>

      {/* PACKAGES */}
      <section className="space-y-12">
        {packages.map((pkg) => (
          <article
            key={pkg.name}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8
                       hover:shadow-lg hover:-translate-y-1 transition"
          >
            <h3 className="text-xl md:text-2xl font-bold text-light mb-1">
              {pkg.name}{" "}
              <span className="font-normal text-gray-400">({pkg.time})</span>
            </h3>
            <p className="text-gray-300 mb-4">{pkg.desc}</p>

            <ul className="space-y-2 mb-4 list-disc list-inside text-gray-300">
              {pkg.bullet.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <p className="font-semibold text-light mb-4">{pkg.price}</p>

            <a
              href="/contact"
              className="inline-block bg-accent text-light font-medium px-6 py-3 rounded-xl hover:bg-accent/80 transition"
            >
              {pkg.cta}
            </a>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-24">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-light">
          Ready to Elevate Your Brand?
        </h3>
        <p className="text-gray-300 mb-6">
          Start your project today with confidence and clarity.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-light font-medium px-7 py-3 rounded-xl hover:bg-accent/80 transition"
        >
          Contact&nbsp;Okrices
        </a>
      </section>
    </main>
  );
}
