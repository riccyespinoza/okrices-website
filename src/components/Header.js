"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Header() {
  // detectar ruta para idioma
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const prefix = isSpanish ? "/es" : "";

  // Estado para detectar scroll
  const [scrolled, setScrolled] = useState(false);

  // textos en ambos idiomas
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

  // estados para móvil
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef(null);
  const servicesRef = useRef(null);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // cerrar panel móvil al click fuera
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-deepblue/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={isSpanish ? "/es" : "/"} className="flex items-center">
          <Image
            src="/logo-okrices.svg"
            alt="Okrices logo"
            width={150}
            height={45}
            priority
          />
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <Link
            href={`${prefix}/about`}
            className="hover:text-accent transition-colors duration-300"
          >
            {texts.about}
          </Link>

          {/* Dropdown Servicios hover mejorado */}
          <div
            ref={servicesRef}
            className="relative group" // Usamos group para mejor control del hover
          >
            <Link
              href={`${prefix}/services`}
              className="flex items-center hover:text-accent transition-colors duration-300"
            >
              {texts.services} <FaChevronDown className="ml-1" />
            </Link>

            {/* Menú desplegable - visible cuando el grupo tiene hover */}
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

        {/* Botón Hamburger móvil */}
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

      {/* Panel Móvil */}
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

            {/* Acordeón Servicios */}
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
