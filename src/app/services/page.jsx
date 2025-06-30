// src/app/services/page.jsx
import { services } from "@/data/services"; // 1️⃣ importar datos
import Link from "next/link";

export const metadata = {
  title: "Services – Okrices",
  description:
    "Brand identity and web design services crafted remotely from Fort Lauderdale, FL.",
};

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 space-y-16 px-6">
      {/* Encabezado de la página */}
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-primary">Services</h1>
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">
          Digital-first branding & web solutions crafted remotely from Fort
          Lauderdale, FL. Choose the block you need or combine both for an
          end-to-end experience.
        </p>
      </header>

      {/* 2️⃣ Recorremos (map) la lista */}
      {services.map((s) => (
        <section key={s.id} id={s.slug} className="space-y-4">
          <h2 className="text-2xl font-bold text-light">{s.title_en}</h2>
          <p className="text-text-muted">{s.tagline_en}</p>

          <ul className="list-disc list-inside ml-4 text-text-muted space-y-1">
            {s.bullets_en.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>
      ))}

      {/* Llamada a la acción */}
      <div className="text-center pt-8">
        <Link
          href="/contact"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg text-sm font-semibold transition hover:scale-105"
        >
          Request a free consultation →
        </Link>
      </div>
    </section>
  );
}
