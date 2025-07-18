import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function ServiceCard({
  title,
  description,
  list,
  benefits,
  cta,
  href,
}) {
  return (
    <article
      className="bg-white/5 backdrop-blur-sm border border-white/10
                 rounded-2xl p-8 max-w-3xl mx-auto my-12
                 hover:shadow-lg hover:-translate-y-1 transition"
    >
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-light drop-shadow">
        {title}
      </h2>

      {/* Intro */}
      <p className="text-gray-300 mb-6">{description}</p>

      {/* Lo que incluye */}
      <ul className="space-y-2 mb-6">
        {list.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-200">
            <FiCheck className="text-accent mt-1" />
            {item}
          </li>
        ))}
      </ul>

      {/* Beneficios */}
      {benefits?.length > 0 && (
        <div className="mb-8">
          <h4 className="font-semibold text-light mb-2">Benefits</h4>
          <ul className="space-y-2">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-200">
                <FiCheck className="text-accent mt-1" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <Link
        href={href}
        className="inline-block bg-accent text-light font-medium px-6 py-3
                   rounded-xl hover:bg-accent/80 transition"
      >
        {cta}
      </Link>
    </article>
  );
}
