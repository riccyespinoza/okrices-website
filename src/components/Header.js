"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // ⬅️ sin FaChevronDown

export default function Header() {
  // --- Idioma ---
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const prefix = isSpanish ? "/es" : "";

  // ¿Detalle de proyecto?
  const isProjectDetailPage =
    /^\/projects\/[^/]+$/.test(pathname) ||
    /^\/es\/projects\/[^/]+$/.test(pathname);

  // --- UI / Scroll ---
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef(null);

  // --- i18n ---
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

  // --- Efectos ---
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

  // Cerrar panel móvil al hacer clic fuera
  useEffect(() => {
    function onClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // --- Render ---
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
        scrolled || mobileOpen ? "glass-effect" : "bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={isSpanish ? "/es" : "/"} className="flex items-center">
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

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <Link
            href={`${prefix}/about`}
            className="hover:text-accent transition-colors duration-300"
          >
            {texts.about}
          </Link>

          {/* Services sin ícono */}
          <Link
            href={`${prefix}/services`}
            className="hover:text-accent transition-colors duration-300"
          >
            {texts.services}
          </Link>

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
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Panel Móvil */}
      {mobileOpen && (
        <div
          ref={panelRef}
          className="md:hidden bg-transparent border-t border-white/10" // sin glass-effect en móvil
        >
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href={`${prefix}/about`}
              onClick={() => setMobileOpen(false)}
              className="hover:text-accent transition-colors duration-300"
            >
              {texts.about}
            </Link>

            {/* Services como link simple (sin flecha) */}
            <Link
              href={`${prefix}/services`}
              onClick={() => setMobileOpen(false)}
              className="hover:text-accent transition-colors duration-300"
            >
              {texts.services}
            </Link>

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
