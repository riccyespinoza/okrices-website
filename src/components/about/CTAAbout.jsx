export default function CTAAbout({ text, buttonLabel, buttonHref }) {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h4 className="text-3xl md:text-4xl font-bold mb-6 text-light">
          {text}
        </h4>
        <a
          href={buttonHref}
          className="inline-block bg-accent text-light font-medium px-6 py-3 rounded-xl hover:bg-accent/80 transition"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
