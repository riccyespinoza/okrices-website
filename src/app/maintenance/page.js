import { Mail } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "En Reestructuración | Okrices",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/okrices.studio/",
      label: "Instagram",
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      href: "https://www.facebook.com/okrices.studio",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/message/75QJF6LYZ45SK1",
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-page-gradient flex flex-col items-center justify-center p-4 sm:p-6 text-light font-sans animate-fade-in overflow-hidden">
      {/* Reflejos de fondo */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-steel/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-2xl text-center space-y-10 md:space-y-16">
        {/* Logo - Tamaño incrementado */}
        <div className="flex justify-center">
          <img
            src="/logo-okrices.svg"
            alt="Okrices Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
            fetchPriority="high"
          />
        </div>

        {/* Texto */}
        <div className="space-y-5 px-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-light leading-tight">
            Reestructurando nuestra <br className="hidden md:block" />{" "}
            plataforma.
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/60 max-w-lg mx-auto font-light">
            Nuestra web vuelve pronto, pero nuestro equipo sigue trabajando en
            nuevos proyectos.
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col items-center space-y-5 w-full max-w-xs mx-auto">
          <a
            href="https://wa.me/message/75QJF6LYZ45SK1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-accent-gradient text-light font-semibold rounded-full shadow-accent hover:scale-[1.02] transition-transform active:scale-95"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Contactar por WhatsApp</span>
          </a>

          <a
            href="mailto:hello@okrices.com"
            className="flex items-center gap-2 text-brand-sand hover:text-light transition-colors border-b border-transparent hover:border-brand-sand pb-1"
          >
            <Mail className="w-4 h-4" />
            <span>Enviar Email</span>
          </a>
        </div>

        {/* Redes sociales */}
        <footer className="pt-10 md:pt-16 w-full flex justify-center gap-8 border-t border-white/5 text-brand-cream/30">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              className="hover:text-accent transition-colors p-2"
            >
              {link.icon}
            </a>
          ))}
        </footer>
      </div>
    </main>
  );
}
