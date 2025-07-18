import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Servicios | Okrices",
  description:
    "Servicios de branding Florida, diseño web profesional, paquetes identidad visual, sitios web elegantes, proceso desarrollo web, diseño creativo, diseñador WordPress Fort Lauderdale.",
};

export default function ServicesPageEs() {
  return (
    <main>
      <ServicesHero
        title="Nuestros Servicios"
        description="Nos enfocamos en dos áreas clave para elevar tu marca y hacer crecer tu negocio: Branding e Identidad Visual, y Diseño y Desarrollo Web. Ofrecemos soluciones claras, adaptadas a tus necesidades, presupuesto y objetivos."
      />
      <ServiceCard
        title="Branding e Identidad Visual"
        description="Tu marca es más que un logo—es tu historia. Ayudamos a empresas cuya identidad visual es inconsistente, lo que afecta la confianza del cliente y las ventas. A través de identidades visuales elegantes, aseguramos claridad, coherencia y reconocimiento inmediato."
        list={[
          "Logo profesional con variantes (horizontal, vertical, ícono).",
          "Paleta de colores personalizada y selección tipográfica.",
          "Guía esencial de marca o brand book detallado (según tu paquete).",
          "Mockups visuales (tarjetas, perfiles redes sociales).",
        ]}
        benefits={[
          "Consigue un reconocimiento de marca más rápido—habitualmente en 5-7 interacciones en lugar de 10 o más—elevando directamente la confianza y las ventas.",
        ]}
        cta="Ver paquetes de Branding"
        href="/es/services/branding"
      />
      <ServiceCard
        title="Diseño y Desarrollo Web"
        description="Creamos sitios web diseñados para convertir, solucionando problemas como velocidad lenta, mala experiencia de usuario o falta de presencia online. Nuestros diseños son responsive, fáciles de administrar, amigables con SEO y adaptados a tus objetivos comerciales—generar prospectos, ventas online o reservas."
        list={[
          "Sitio web elegante y responsive.",
          "CMS fácil de usar (sistema de administración de contenido).",
          "SEO básico incluido (optimización local).",
          "Opciones para comercio electrónico o integraciones de reservas.",
        ]}
        benefits={[
          "Obtén aproximadamente 30% más prospectos gracias a una mejor velocidad y experiencia optimizada para usuarios.",
        ]}
        cta="Ver paquetes Web"
        href="/es/services/web-design"
      />
      <section className="text-center py-4 text-gray-400 text-xs">
        <p>
          <b>Plataformas que utilizamos:</b> Elegimos estratégicamente entre
          plataformas líderes como WordPress, Shopify, WooCommerce o Webflow,
          dependiendo de tus objetivos y presupuesto. Para funcionalidades más
          personalizadas o avanzadas, utilizamos frameworks modernos adaptados
          específicamente a tus necesidades.
        </p>
      </section>
      <ProcessSection
        title="Nuestro Proceso"
        steps={[
          "Consulta: Entendemos tu visión, objetivos y presupuesto.",
          "Propuesta: Alcance claro y transparente, precios y entregables.",
          "Diseño & Desarrollo: Soluciones elegantes y colaborativas.",
          "Entrega & Capacitación: Entrega final y capacitación básica para que administres tu marca o sitio web con facilidad.",
        ]}
      />
      <ServicesCTA
        title="¿Listo para empezar?"
        description="Habla con nosotros sobre tu proyecto—claridad, calidad y profesionalismo garantizados."
        button="Solicita tu cotización"
        href="/es/contact"
      />
    </main>
  );
}
