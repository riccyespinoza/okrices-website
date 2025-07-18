import Link from "next/link";

export default function BilingualCTA() {
  return (
    <section className="bg-[#0d1419] text-center py-16 px-6 space-y-6">
      <h2 className="text-3xl font-bold text-light">
        Ready to elevate your brand?
        <br />
        <span className="opacity-60 text-xl">¡Hablemos hoy mismo!</span>
      </h2>

      <Link
        href="/contact"
        className="inline-block bg-[#a55130] px-8 py-3 rounded-lg text-sm font-semibold hover:translate-y-1 transition"
      >
        Book a discovery call
      </Link>
    </section>
  );
}
