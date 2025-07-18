export default function CtaSection() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="backdrop-blur-md bg-light/5 border border-darkgray/50 rounded-2xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to enhance your business presence?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-accent text-light font-medium px-6 py-3 rounded-lg hover:bg-accent/80 transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
