export default function ServiceCards({ services }) {
  return (
    <section className="space-y-12">
      {services.map((s) => (
        <article
          key={s._id}
          className="bg-white/5 backdrop-blur-sm border border-white/10
                     rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition"
        >
          <h3 className="text-xl md:text-2xl font-bold text-light mb-1">
            {s.title_en}{" "}
            {s.duration && (
              <span className="font-normal text-gray-400">({s.duration})</span>
            )}
          </h3>

          <p className="text-gray-300 mb-4">{s.desc_en}</p>

          <ul className="space-y-2 mb-4 list-disc list-inside text-gray-300">
            {s.bullets_en?.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {s.price && (
            <p className="font-semibold text-light mb-4">{s.price}</p>
          )}

          <a
            href="/contact"
            className="inline-block bg-accent text-light font-medium px-6 py-3 rounded-xl hover:bg-accent/80 transition"
          >
            Contact&nbsp;us
          </a>
        </article>
      ))}
    </section>
  );
}
