"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import { useState, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const prefix = isSpanish ? "/es" : "";

  const texts = isSpanish
    ? {
        about: "Sobre Nosotros",
        services: "Servicios",
        branding: "Identidad Visual & Branding",
        web: "Diseño y Desarrollo Web",
        allServices: "Todos los Servicios",
        projects: "Proyectos",
        contact: "Contacto",
      }
    : {
        about: "About",
        services: "Services",
        branding: "Branding & Visual Identity",
        web: "Web Design & Development",
        allServices: "All Services",
        projects: "Projects",
        contact: "Contact",
      };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur px-6 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={isSpanish ? "/es" : "/"} className="flex items-center">
          <Image
            src="/logo-okrices.svg" /* ← ruta en /public */
            alt="Okrices logo"
            width={150} /* ajusta si usas versión horizontal */
            height={45}
            priority /* precarga */
            className="select-none" /* evita arrastre accidental */
          />
        </Link>

        {/* Navegación */}
        <nav className="space-x-6 text-sm sm:text-base relative flex items-center">
          <Link
            href={`${prefix}/about`}
            className="hover:text-accent transition"
          >
            {texts.about}
          </Link>

          {/* Dropdown Services */}
          <div
            className="inline-block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
          >
            <button
              type="button"
              className="hover:text-accent transition focus:outline-none"
              aria-haspopup="true"
              aria-expanded={open}
            >
              {texts.services} <span className="ml-1">▼</span>
            </button>
            {open && (
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-primary border border-white/10 z-20">
                <Link
                  href={`${prefix}/services/branding`}
                  className="block px-5 py-3 hover:bg-accent/10 hover:text-accent transition"
                  onClick={() => setOpen(false)}
                >
                  {texts.branding}
                </Link>
                <Link
                  href={`${prefix}/services/web-design`}
                  className="block px-5 py-3 hover:bg-accent/10 hover:text-accent transition"
                  onClick={() => setOpen(false)}
                >
                  {texts.web}
                </Link>
                <div className="border-t border-white/10 my-1" />
                <Link
                  href={`${prefix}/services`}
                  className="block px-5 py-3 hover:bg-accent/10 hover:text-accent transition font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {texts.allServices}
                </Link>
              </div>
            )}
          </div>

          <Link
            href={`${prefix}/projects`}
            className="hover:text-accent transition"
          >
            {texts.projects}
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="hover:text-accent transition"
          >
            {texts.contact}
          </Link>
          {/* selector de idioma */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
