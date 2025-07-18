// src/app/services/web-design/page.jsx
export const metadata = {
  title: "Web Design & Development | Okrices",
  description:
    "Web design Fort Lauderdale, premium website design, responsive web development, professional e-commerce sites Florida, web design packages.",
};

const packages = [
  {
    name: "Basic Website",
    time: "1-2 Weeks",
    desc: "Ideal for startups needing a professional online presence quickly.",
    bullet: [
      "Landing page (up to 5 sections)",
      "Responsive design & Core Web Vitals 90+",
      "Basic SEO (tags, sitemap)",
      "Platform: WordPress + Elementor or Wix",
      "Support: 7 days post-launch",
      "PDF guide provided",
    ],
    // price: "$900 – $1,500 USD",
    cta: "Start Basic",
  },
  {
    name: "Pro Website",
    time: "3-4 Weeks",
    desc: "Perfect for growing businesses needing dynamic content and enhanced SEO.",
    bullet: [
      "Everything in Basic, plus:",
      "Blog & editable CMS",
      "Multilingual (2 languages)",
      "Gallery / Portfolio",
      "Advanced SEO setup",
      "WhatsApp / Maps integration",
      "Platform: WordPress + WooCommerce or Shopify",
      "Support: 30 days post-launch",
      "Training: 15-min video tutorial",
    ],
    // price: "$1,600 – $3,200 USD",
    cta: "Start Pro",
  },
  {
    name: "Premium Website",
    time: "5-8 Weeks",
    desc: "Comprehensive e-commerce or advanced functionality tailored for scaling businesses.",
    bullet: [
      "Everything in Pro, plus:",
      "E-commerce (up to 50 products)",
      "Advanced animations",
      "CRM / Booking integrations",
      "Platform: Shopify, WooCommerce advanced, or Next.js (Headless)",
      "Support: 60 days post-launch",
      "Training: 1-hour live session",
    ],
    // price: "$3,800 – $6,500 USD",
    cta: "Start Premium",
  },
];

export default function WebDesignPage() {
  return (
    <main className="py-24 px-6 max-w-5xl mx-auto">
      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-light">
          Websites&nbsp;Designed to&nbsp;
          <span className="text-accent">Convert</span>&nbsp;&amp;&nbsp;Captivate
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          We craft minimalist, responsive websites that enhance your online
          presence, increase leads and deliver a premium user&nbsp;experience.
          From landing pages to e-commerce, we tailor packages to meet your
          goals.
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

      {/* Nota de costes extra */}
      <p className="mt-10 text-sm text-gray-400 text-center">
        Extra: Hosting, domain and premium plugins billed separately at direct
        cost.
      </p>

      {/* CTA */}
      <section className="text-center mt-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-light">
          Ready to Enhance Your Online Presence?
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us today and let’s start building your perfect website.
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
