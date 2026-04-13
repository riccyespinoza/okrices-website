import Image from "next/image"; // Importación necesaria al inicio
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "En Reestructuración | Okrices",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://instagram.com/okrices",
      label: "Instagram",
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      href: "https://facebook.com/okrices",
      label: "Facebook",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/7542714741",
      label: "WhatsApp",
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-page-gradient flex flex-col items-center justify-center p-4 sm:p-6 text-light font-sans animate-fade-in overflow-hidden relative">
      {/* Reflejos Ambientales (Fondo Limpio) */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-steel/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Contenedor Principal - Espaciado de Flujo Variable */}
      <div className="w-full max-w-2xl text-center space-y-10 md:space-y-16">
        {/* Logo / Branding */}
        <div className="flex justify-center">
          <div className="flex items-center justify-center">
            <img
              src="/logo-okrices.svg"
              alt="Okrices Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain" // Tamaño grande y responsivo
              fetchPriority="high" // Esta es la forma correcta para <img>
            />
          </div>
        </div>
        {/* BLOQUE DE TEXTO */}
        <div className="space-y-5 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-light leading-tight md:leading-[1.1]">
            Reestructurando nuestra <br className="hidden md:block" />{" "}
            plataforma.
          </h1>
          <p className="text-base md:text-xl text-brand-cream/60 max-w-sm md:max-w-lg mx-auto font-light leading-relaxed">
            Nuestra web vuelve pronto, pero nuestro equipo sigue trabajando en
            nuevos proyectos.
          </p>
        </div>

        {/* ACCIONES DE INTERACCIÓN */}
        <div className="flex flex-col items-center space-y-5 w-full max-w-xs mx-auto">
          {/* WhatsApp Primary CTA */}
          <a
            href="https://wa.me/7542714741"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-accent-gradient text-light font-semibold rounded-full shadow-accent hover:scale-[1.02] transition-transform active:scale-95"
          >
            <FaWhatsapp className="w-5 h-5 shrink-0" />
            <span>Contactar por WhatsApp</span>
          </a>

          {/* Email Secondary Link */}
          <a
            href="mailto:hello@okrices.com"
            className="flex items-center gap-2 text-brand-sand hover:text-light transition-colors duration-300 text-sm md:text-base border-b border-transparent hover:border-brand-sand pb-1 px-3" // Padding aumentado
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>Enviar Email</span>
          </a>
        </div>

        {/* FOOTER MINIMALISTA */}
        <footer className="pt-10 md:pt-16 w-full flex justify-center gap-6 md:gap-8 border-t border-white/5 text-brand-cream/30">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors p-2"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </footer>
      </div>
    </main>
  );
}
