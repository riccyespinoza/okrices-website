export const metadata = {
  title: "Identidad Visual & Branding | Okrices",
  description:
    "Branding profesional Florida, diseño identidad visual, diseño de logos Fort Lauderdale, paquetes branding premium, estrategia profesional de marca.",
};

export default function BrandingPageEs() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-4">
        Construye una Marca Premium Que Destaque
      </h1>
      <p className="mb-8 text-lg">
        En Okrices creamos identidades visuales que comunican claramente la
        historia única, valores y personalidad de tu marca. Nuestro enfoque
        elegante y minimalista asegura que tu marca cause una primera impresión
        memorable y genere confianza en tus clientes.
      </p>

      <h2 className="text-xl font-bold mt-12 mb-2">
        ¿Por qué invertir en Branding profesional?
      </h2>
      <p className="mb-8">
        Una identidad inconsistente debilita la confianza y reduce la conexión
        con los clientes. Nuestras identidades diseñadas estratégicamente ayudan
        a las empresas a lograr reconocimiento más rápido, generando
        credibilidad en menos interacciones.
      </p>

      <h2 className="text-xl font-bold mt-12 mb-4">
        Nuestros Paquetes de Branding
      </h2>

      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Identidad Básica <span className="font-normal">(1 semana)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Ideal para freelancers o startups que necesitan rápido lo esencial
            de una marca profesional.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Logo maestro (2 conceptos, 1 ronda de revisión)</li>
            <li>Paleta de colores & tipografía personalizada</li>
            <li>Guía básica de marca (2 páginas)</li>
            <li>Archivos entregados: SVG, PNG, JPG, PDF, AI</li>
          </ul>
          <p className="font-semibold mb-2">Precio: $900 – $1,400 USD</p>
          <a
            href="/es/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Iniciar Básico
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Identidad Pro <span className="font-normal">(2-3 semanas)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Ideal para negocios en crecimiento que buscan mejorar su presencia
            visual en múltiples canales.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Todo lo Básico, además:</li>
            <li>Variantes logo (horizontal, ícono, inverso)</li>
            <li>Guía extendida de marca (5 páginas)</li>
            <li>Kit redes sociales (3 posts)</li>
            <li>Plantilla tarjeta & favicon</li>
            <li>Moodboard & inspiración visual</li>
          </ul>
          <p className="font-semibold mb-2">Precio: $2,500 – $3,800 USD</p>
          <a
            href="/es/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Iniciar Pro
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Identidad Premium <span className="font-normal">(4-5 semanas)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Branding integral para empresas listas para escalar
            estratégicamente.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Todo lo Pro, además:</li>
            <li>Workshop estrategia (sesión 2 horas)</li>
            <li>Kit completo redes sociales (12 posts)</li>
            <li>Guía extendida de marca (12 páginas)</li>
            <li>Aplicaciones extra (packaging, uniforme, mockups)</li>
            <li>Identidad dinámica (animaciones, colores adaptables)</li>
          </ul>
          <p className="font-semibold mb-2">Precio: $6,000 – $8,500 USD</p>
          <a
            href="/es/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Iniciar Premium
          </a>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12 mb-2">Preguntas frecuentes</h2>
      <ul className="list-disc ml-5 text-gray-300 mb-6">
        <li>
          <b>¿Cuántas revisiones tengo?</b> Cada paquete incluye hasta 2 rondas
          de revisión.
        </li>
        <li>
          <b>¿Costos extra?</b> Impresión, licencias de tipografías premium y
          mockups avanzados se cotizan aparte.
        </li>
      </ul>

      <section className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-2">
          ¿Listo para elevar tu marca?
        </h3>
        <p className="mb-3">
          Comienza tu proyecto hoy mismo con claridad y confianza.
        </p>
        <a
          href="/es/contact"
          className="inline-block px-6 py-3 bg-primary-400 text-white font-bold rounded-2xl shadow-lg hover:bg-primary-500 transition"
        >
          Contactar a Okrices
        </a>
      </section>
    </main>
  );
}
