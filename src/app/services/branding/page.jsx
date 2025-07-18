export const metadata = {
  title: "Branding & Visual Identity | Okrices",
  description:
    "Branding services Florida, visual identity design, logo design Fort Lauderdale, premium branding packages, professional brand strategy.",
};

export default function BrandingPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-4">
        Build a Premium Brand That Stands Out
      </h1>
      <p className="mb-8 text-lg">
        At Okrices, we craft visual identities that clearly communicate your
        brand’s unique story, values, and personality. Our elegant, minimalist
        approach ensures your brand makes a memorable first impression and
        builds trust with your customers.
      </p>

      <h2 className="text-xl font-bold mt-12 mb-2">
        Why Invest in Professional Branding?
      </h2>
      <p className="mb-8">
        An inconsistent brand weakens trust and reduces customer engagement. Our
        strategically designed identities help businesses achieve quicker
        recognition, building credibility within fewer interactions.
      </p>

      <h2 className="text-xl font-bold mt-12 mb-4">Our Branding Packages</h2>

      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Basic Identity <span className="font-normal">(1 Week)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Perfect for freelancers or startups needing professional brand
            basics quickly.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Master logo (2 concepts, 1 revision round)</li>
            <li>Custom color palette & typography</li>
            <li>Essential brand guide (2 pages)</li>
            <li>Files delivered: SVG, PNG, JPG, PDF, AI</li>
          </ul>
          <p className="font-semibold mb-2">Price: $900 – $1,400 USD</p>
          <a
            href="/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Start Basic
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Pro Identity <span className="font-normal">(2-3 Weeks)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Ideal for growing businesses looking to enhance their visual
            presence across multiple channels.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Everything in Basic, plus:</li>
            <li>Logo variants (horizontal, icon, inverse)</li>
            <li>Expanded brand guide (5 pages)</li>
            <li>Social media kit (3 posts)</li>
            <li>Business card & favicon templates</li>
            <li>Moodboard & visual inspiration</li>
          </ul>
          <p className="font-semibold mb-2">Price: $2,500 – $3,800 USD</p>
          <a
            href="/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Start Pro
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Premium Identity <span className="font-normal">(4-5 Weeks)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Comprehensive branding for businesses ready to strategically scale.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Everything in Pro, plus:</li>
            <li>Strategy workshop (2-hour session)</li>
            <li>Complete social media kit (12 posts)</li>
            <li>Extended brand guide (12 pages)</li>
            <li>Extra applications (packaging, uniforms, mockups)</li>
            <li>Dynamic identity (animations, adaptable colors)</li>
          </ul>
          <p className="font-semibold mb-2">Price: $6,000 – $8,500 USD</p>
          <a
            href="/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Start Premium
          </a>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12 mb-2">FAQ</h2>
      <ul className="list-disc ml-5 text-gray-300 mb-6">
        <li>
          <b>What about revisions?</b> Each package includes up to 2 revision
          rounds.
        </li>
        <li>
          <b>Extra costs?</b> Printing, premium fonts, and advanced mockups
          quoted separately.
        </li>
      </ul>

      <section className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-2">
          Ready to Elevate Your Brand?
        </h3>
        <p className="mb-3">
          Start your project today with confidence and clarity.
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
