export const metadata = {
  title: "Web Design & Development | Okrices",
  description:
    "Web design Fort Lauderdale, premium website design, responsive web development, professional e-commerce sites Florida, web design packages.",
};

export default function WebDesignPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-4">
        Websites Designed to Convert & Captivate
      </h1>
      <p className="mb-8 text-lg">
        At Okrices, we craft minimalist, responsive websites that enhance your
        online presence, increase leads, and deliver a premium user experience.
        Whether you need a simple landing page, robust e-commerce, or advanced
        custom integrations, we have tailored packages to meet your goals.
      </p>

      <h2 className="text-xl font-bold mt-12 mb-4">Our Web Packages</h2>

      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Basic Website <span className="font-normal">(1-2 Weeks)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Ideal for startups needing a professional online presence quickly.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Landing page (up to 5 sections)</li>
            <li>Responsive design & Core Web Vitals 90+</li>
            <li>Basic SEO (tags, sitemap)</li>
            <li>Platform: WordPress + Elementor or Wix</li>
            <li>Support: 7 days post-launch</li>
            <li>PDF guide provided</li>
          </ul>
          <p className="font-semibold mb-2">Price: $900 – $1,500 USD</p>
          <a
            href="/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Start Basic
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Pro Website <span className="font-normal">(3-4 Weeks)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Perfect for growing businesses needing dynamic content and enhanced
            SEO.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Everything in Basic, plus:</li>
            <li>Blog & editable CMS</li>
            <li>Multilingual (2 languages)</li>
            <li>Gallery / Portfolio</li>
            <li>Advanced SEO setup</li>
            <li>WhatsApp / Maps integration</li>
            <li>Platform: WordPress + WooCommerce or Shopify</li>
            <li>Support: 30 days post-launch</li>
            <li>Training: 15-minute video tutorial</li>
          </ul>
          <p className="font-semibold mb-2">Price: $1,600 – $3,200 USD</p>
          <a
            href="/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Start Pro
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Premium Website <span className="font-normal">(5-8 Weeks)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Comprehensive e-commerce or advanced functionality tailored for
            scaling businesses.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Everything in Pro, plus:</li>
            <li>E-commerce (up to 50 products)</li>
            <li>Advanced animations</li>
            <li>CRM / Booking integrations</li>
            <li>
              Platform: Shopify, WooCommerce advanced, or Next.js (Headless)
            </li>
            <li>Support: 60 days post-launch</li>
            <li>Training: 1-hour live session</li>
          </ul>
          <p className="font-semibold mb-2">Price: $3,800 – $6,500 USD</p>
          <a
            href="/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Start Premium
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Extra: Hosting, domain, and premium plugins billed separately at direct
        cost.
      </p>

      <section className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-2">
          Ready to Enhance Your Online Presence?
        </h3>
        <p className="mb-3">
          Contact us today and let's start building your perfect website.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-primary-400 text-white font-bold rounded-2xl shadow-lg hover:bg-primary-500 transition"
        >
          Contact Okrices
        </a>
      </section>
    </main>
  );
}
