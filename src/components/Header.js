"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Header() {
  // --- Estados y Lógica del Idioma ---
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const prefix = isSpanish ? "/es" : "";

  // Lógica para detectar si estamos en una página de detalle de proyecto (ej: /projects/oka-wise)
  const isProjectDetailPage =
    /^\/projects\/[^/]+$/.test(pathname) ||
    /^\/es\/projects\/[^/]+$/.test(pathname);

  // --- Estados para la Interfaz y el Scroll ---
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef(null);
  const servicesRef = useRef(null);

  // --- Textos para Internacionalización ---
  const texts = isSpanish
    ? {
        about: "Sobre Nosotros",
        services: "Servicios",
        branding: "Identidad Visual & Branding",
        web: "Diseño y Desarrollo Web",
        projects: "Proyectos",
        contact: "Contacto",
      }
    : {
        about: "About",
        services: "Services",
        branding: "Branding & Visual Identity",
        web: "Web Design & Development",
        projects: "Projects",
        contact: "Contact",
      };

  // --- Efectos (Hooks) ---

  // Efecto para controlar la visibilidad del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (mobileOpen) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  // Efecto para cerrar el menú móvil al hacer clic fuera
  useEffect(() => {
    function onClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // --- Renderizado del Componente ---

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-deepblue/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* --- Logo Dinámico --- */}
        <Link href={isSpanish ? "/es" : "/"} className="flex items-center">
          {/* Logo para Desktop y Tablet (oculto en móvil) */}
          <div className="hidden md:block">
            <Image
              src={
                isProjectDetailPage && !scrolled
                  ? "/logo-okrices_white.svg"
                  : "/logo-okrices.svg"
              }
              alt="Okrices logo"
              width={150}
              height={45}
              priority
            />
          </div>

          {/* Logo para Móvil (visible solo en móvil) */}
          {/* NOTA: Asegúrate de tener 'logo-octopus_white.svg' en tu carpeta /public */}
          <div className="block md:hidden">
            <Image
              src={
                isProjectDetailPage && !scrolled
                  ? "/logo-octopus_white.svg"
                  : "/logo-octopus.svg"
              }
              alt="Okrices isotype"
              width={40}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* --- Navegación Desktop --- */}
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <Link
            href={`${prefix}/about`}
            className="hover:text-accent transition-colors duration-300"
          >
            {texts.about}
          </Link>

          <div ref={servicesRef} className="relative group">
            <Link
              href={`${prefix}/services`}
              className="flex items-center hover:text-accent transition-colors duration-300"
            >
              {texts.services} <FaChevronDown className="ml-1" />
            </Link>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full left-0 mt-2 w-56 bg-deepblue/90 backdrop-blur-md border border-white/10 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              <Link
                href={`${prefix}/services/branding`}
                className="block px-4 py-2 hover:bg-accent/10 transition-colors duration-300"
              >
                {texts.branding}
              </Link>
              <Link
                href={`${prefix}/services/web-design`}
                className="block px-4 py-2 hover:bg-accent/10 transition-colors duration-300"
              >
                {texts.web}
              </Link>
            </div>
          </div>

          <Link
            href={`${prefix}/projects`}
            className="hover:text-accent transition-colors duration-300"
          >
            {texts.projects}
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="hover:text-accent transition-colors duration-300"
          >
            {texts.contact}
          </Link>
        </nav>

        {/* --- Botón Hamburger móvil --- */}
        <button
          className="md:hidden text-2xl"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setServicesOpen(false);
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* --- Panel Móvil --- */}
      {mobileOpen && (
        <div
          ref={panelRef}
          className="md:hidden bg-deepblue/90 backdrop-blur-md border-t border-white/10"
        >
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href={`${prefix}/about`}
              onClick={() => setMobileOpen(false)}
              className="hover:text-accent transition-colors duration-300"
            >
              {texts.about}
            </Link>

            <div>
              <div className="flex items-center justify-between">
                <Link
                  href={`${prefix}/services`}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {texts.services}
                </Link>
                <button
                  className="p-1"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <FaChevronDown
                    className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {servicesOpen && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link
                    href={`${prefix}/services/branding`}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {texts.branding}
                  </Link>
                  <Link
                    href={`${prefix}/services/web-design`}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {texts.web}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`${prefix}/projects`}
              onClick={() => setMobileOpen(false)}
              className="hover:text-accent transition-colors duration-300"
            >
              {texts.projects}
            </Link>
            <Link
              href={`${prefix}/contact`}
              onClick={() => setMobileOpen(false)}
              className="hover:text-accent transition-colors duration-300"
            >
              {texts.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
