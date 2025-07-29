export const metadata = {
  title: "Diseño y Desarrollo Web | Okrices",
  description:
    "Diseño web Fort Lauderdale, diseño de sitios premium, desarrollo web responsivo, sitios e-commerce profesionales Florida, paquetes de diseño web.",
};

export default function WebDesignPageEs() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-4">
        Sitios Web Diseñados para Convertir y Sorprender
      </h1>
      <p className="mb-8 text-lg">
        En Okrices creamos sitios web minimalistas y responsivos que potencian
        tu presencia online, aumentan los prospectos y ofrecen una experiencia
        premium. Ya sea una landing page, e-commerce robusto o integraciones
        avanzadas, tenemos paquetes a tu medida.
      </p>

      <h2 className="text-xl font-bold mt-12 mb-4">Nuestros Paquetes Web</h2>

      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Web Básica <span className="font-normal">(1-2 semanas)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Ideal para startups que necesitan presencia profesional online
            rápidamente.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Landing page (hasta 5 secciones)</li>
            <li>Diseño responsivo y Core Web Vitals 90+</li>
            <li>SEO básico (etiquetas, sitemap)</li>
            <li>Plataforma: WordPress + Elementor o Wix</li>
            <li>Soporte: 7 días post-lanzamiento</li>
            <li>Guía PDF incluida</li>
          </ul>
          <p className="font-semibold mb-2">Precio: $900 – $1,500 USD</p>
          <a
            href="/es/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Iniciar Básico
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Web Pro <span className="font-normal">(3-4 semanas)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            Perfecta para negocios en crecimiento que necesitan contenido
            dinámico y SEO avanzado.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Todo lo de Básica, además:</li>
            <li>Blog y CMS editable</li>
            <li>Multi-idioma (2 idiomas)</li>
            <li>Galería / Portafolio</li>
            <li>SEO avanzado</li>
            <li>Integración WhatsApp / Maps</li>
            <li>Plataforma: WordPress + WooCommerce o Shopify</li>
            <li>Soporte: 30 días post-lanzamiento</li>
            <li>Capacitación: video tutorial 15 minutos</li>
          </ul>
          <p className="font-semibold mb-2">Precio: $1,600 – $3,200 USD</p>
          <a
            href="/es/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Iniciar Pro
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h3 className="font-bold text-lg mb-1">
            Web Premium <span className="font-normal">(5-8 semanas)</span>
          </h3>
          <p className="mb-2 text-gray-300">
            E-commerce avanzado o funcionalidades personalizadas para empresas
            en expansión.
          </p>
          <ul className="list-disc ml-5 text-gray-300 mb-2">
            <li>Todo lo de Pro, además:</li>
            <li>E-commerce (hasta 50 productos)</li>
            <li>Animaciones avanzadas</li>
            <li>Integraciones CRM / reservas</li>
            <li>
              Plataforma: Shopify, WooCommerce avanzado o Next.js (Headless)
            </li>
            <li>Soporte: 60 días post-lanzamiento</li>
            <li>Capacitación: sesión en vivo 1 hora</li>
          </ul>
          <p className="font-semibold mb-2">Precio: $3,800 – $6,500 USD</p>
          <a
            href="/es/contact"
            className="inline-block mt-2 px-5 py-2 bg-primary-400 text-white rounded-2xl font-bold shadow hover:bg-primary-500 transition"
          >
            Iniciar Premium
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Extra: Hosting, dominio y plugins premium se facturan aparte a costo
        directo.
      </p>

      <section className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-2">
          ¿Listo para potenciar tu presencia online?
        </h3>
        <p className="mb-3">
          Contáctanos hoy y empecemos a construir tu sitio ideal.
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
