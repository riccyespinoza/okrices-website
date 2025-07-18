export default function CTAAbout({ text, buttonLabel, buttonHref }) {
  return (
    <section className="py-12 flex justify-center">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-8 text-center">
        <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white">
          {text}
        </h4>
        <a
          href={buttonHref}
          className="inline-block mt-6 px-6 py-3 bg-primary-400 text-white font-bold rounded-2xl shadow-lg hover:bg-primary-500 transition"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
