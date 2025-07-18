import HeroAbout from "@/components/about/HeroAbout";
import TimelineAbout from "@/components/about/TimelineAbout";
import ValuesAbout from "@/components/about/ValuesAbout";
import CTAAbout from "@/components/about/CTAAbout";

export const metadata = {
  title: "Sobre Nosotros | Okrices",
  description:
    "Experto en branding Florida, profesional diseño web, agencia creativa premium.",
};

export default function AboutPageEs() {
  return (
    <main>
      <HeroAbout
        title="Quiénes Somos"
        subtitle="Estudio de Identidad Visual & Web Premium"
        description="En Okrices creemos que un diseño excepcional permite a las empresas conectar profundamente con sus audiencias. Ubicados en Florida, nos especializamos en crear identidades visuales premium y sitios web elegantes y minimalistas, adaptados cuidadosamente a la visión y objetivos únicos de cada cliente."
        image="/about/hero.jpg"
      />

      <TimelineAbout
        founder="Riccy Espinoza"
        history="Fundado por Riccy Espinoza, Okrices nace de la pasión por la creatividad, la innovación y la elegancia. Inspirado en el pulpo—símbolo de adaptabilidad, inteligencia y versatilidad—nuestro estudio ayuda a emprendedores y empresas a comunicar claramente su identidad, diferenciarse en mercados competitivos y construir conexiones duraderas con sus clientes."
      />

      <ValuesAbout
        title="Nuestros Valores"
        values={[
          {
            label: "Profesionalismo",
            desc: "Entregamos diseños de alta calidad y cumplimos siempre con nuestras promesas.",
          },
          {
            label: "Creatividad",
            desc: "Cada proyecto recibe ideas frescas e innovadoras ajustadas a las necesidades del cliente.",
          },
          {
            label: "Elegancia",
            desc: "Nuestra estética minimalista asegura claridad, sofisticación y atractivo atemporal.",
          },
          {
            label: "Precisión",
            desc: "La atención al detalle es clave en nuestro trabajo, entregando resultados impecables.",
          },
          {
            label: "Adaptabilidad",
            desc: "Como el pulpo, nos adaptamos rápidamente a los desafíos y objetivos únicos de cada cliente.",
          },
        ]}
      />

      <CTAAbout
        text="¿Listo para elevar tu marca? Cuéntanos sobre tu proyecto—estamos aquí para ayudarte a alcanzar el éxito."
        buttonLabel="Trabajemos juntos"
        buttonHref="/es/contact"
      />
    </main>
  );
}
