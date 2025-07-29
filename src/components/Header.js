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

  // estados para móvil
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef(null);

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
      if (panelRef.current && !panelRef.current.contains(e.target)) {
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

          {/* Dropdown Servicios hover */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center hover:text-accent transition-colors duration-300">
              {texts.services} <FaChevronDown className="ml-1" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full mt-2 w-56 bg-deepblue/90 backdrop-blur-md border border-white/10 rounded-lg shadow-lg overflow-hidden">
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
                <div className="border-t border-white/10" />
                <Link
                  href={`${prefix}/services`}
                  className="block px-4 py-2 font-semibold hover:bg-accent/10 transition-colors duration-300"
                >
                  {texts.allServices}
                </Link>
              </div>
            )}
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
              <button
                className="flex items-center justify-between w-full hover:text-accent transition-colors duration-300"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                {texts.services}{" "}
                <FaChevronDown
                  className={`ml-1 transform transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
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
                  <Link
                    href={`${prefix}/services`}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent font-semibold transition-colors duration-300"
                  >
                    {texts.allServices}
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
