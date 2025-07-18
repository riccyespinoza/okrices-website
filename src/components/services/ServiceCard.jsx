import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  list,
  benefits,
  cta,
  href,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-8 max-w-2xl mx-auto my-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="mb-4 text-gray-200">{description}</p>
      <ul className="mb-3 list-disc list-inside text-gray-300">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="mb-3">
        <b>Benefits:</b>
        <ul className="list-disc list-inside text-gray-300">
          {benefits.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <Link
        href={href}
        className="inline-block mt-4 px-6 py-2 rounded-xl bg-primary-400 text-white font-bold shadow hover:bg-primary-500 transition"
      >
        {cta}
      </Link>
    </div>
  );
}
