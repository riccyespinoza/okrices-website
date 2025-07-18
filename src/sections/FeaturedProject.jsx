import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <img
          src="/projects/bluewave-mockup.jpg"
          alt="BlueWave Surf Shop"
          className="rounded-lg w-full lg:w-3/5"
        />

        <div className="space-y-4 lg:w-2/5">
          <h3 className="text-xl font-semibold text-light">
            BlueWave Surf Shop <span className="text-xs">(E-commerce)</span>
          </h3>

          <p className="text-text-muted text-sm">
            WordPress + WooCommerce + Stripe integration.
          </p>

          <span className="inline-block bg-[#a55130]/20 text-[#a55130] px-3 py-1 rounded-full text-xs">
            +37 % conversion in 3 months
          </span>
          {/* If no metric yet: [COMING SOON] Measurable results */}

          <Link
            href="/projects/bluewave-surf-shop"
            className="inline-block bg-accent text-white px-6 py-2 rounded-lg text-sm font-medium hover:scale-105 transition"
          >
            View case study →
          </Link>
        </div>
      </div>
    </section>
  );
}
