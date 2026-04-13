import { Hammer, Mail, Timer } from "lucide-react";

export const metadata = {
  title: "Mantenimiento | Okrices",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-page-gradient flex flex-col items-center justify-center p-6 text-light font-sans animate-fade-in">
      {/* Círculo de fondo decorativo usando tus colores de marca */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-88 bg-accent/10 blur-[120px] rounded-full animate-pulse-slow -z-10" />

      <div className="max-w-xl w-full text-center space-y-8">
        {/* Iconografía con tu color accent */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent blur-xl opacity-20 animate-pulse" />
            <div className="relative bg-dark border border-accent/30 p-5 rounded-2xl shadow-accent">
              <Hammer className="w-12 h-12 text-accent" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-light to-brand-cream bg-clip-text text-transparent">
            Estamos evolucionando
          </h1>
          <p className="text-lg text-brand-cream/70 leading-relaxed max-w-md mx-auto">
            Actualmente estamos reestructurando nuestra plataforma para
            ofrecerte una mejor experiencia de servicios.
          </p>
        </div>

        {/* Indicador de progreso estilizado */}
        <div className="bg-dark/50 border border-brand-steel/30 p-6 rounded-2xl backdrop-blur-sm shadow-soft">
          <div className="flex items-center justify-between mb-3 text-sm font-medium">
            <span className="flex items-center gap-2 text-brand-sand">
              <Timer className="w-4 h-4" /> Progreso de actualización
            </span>
            <span className="text-accent">60%</span>
          </div>
          <div className="h-2 w-full bg-primary rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-accent-gradient shadow-[0_0_15px_rgba(165,81,48,0.5)]"
              style={{ width: "60%" }}
            />
          </div>
        </div>

        {/* Contacto */}
        <div className="pt-8 border-t border-brand-steel/20 flex flex-col items-center gap-4">
          <p className="text-sm text-brand-cream/50 uppercase tracking-widest">
            ¿Necesitas algo urgente?
          </p>
          <a
            href="mailto:tu-email@dominio.com"
            className="flex items-center gap-2 text-light hover:text-accent-light transition-colors duration-300 group"
          >
            <div className="p-2 bg-brand-steel-dark rounded-lg group-hover:bg-accent/20 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-medium underline underline-offset-4 text-base">
              contacto@okrices.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
