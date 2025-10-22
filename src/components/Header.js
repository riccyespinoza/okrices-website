"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// --- Analiza la ruta actual ---
function parsePath(pathname = "/") {
  const parts = pathname.split("/").filter(Boolean);
  const hasLocale = parts[0] === "en" || parts[0] === "es";
  const root = hasLocale ? (parts[1] ?? "") : (parts[0] ?? "");
  const depth = hasLocale ? parts.length - 1 : parts.length;
  const locale = hasLocale ? parts[0] : "en";
  return { locale, root, depth };
}

export default function Header() {
  const pathname = usePathname() || "/";
  const { locale, root, depth } = parsePath(pathname);
  const isSpanish = locale === "es";
  const prefix = isSpanish ? "/es" : "";

  const isProjectDetailPage =
    (root === "projects" && depth > 1) ||
    /^\/projects\/[^/]+$/.test(pathname) ||
    /^\/es\/projects\/[^/]+$/.test(pathname);

  // Solo marcar activo en raíz (no en home ni slugs)
  const isActive = (targetRoot) => {
    if (!targetRoot) return false;
    if (root === "projects" && depth > 1) return false;
    return root === targetRoot && depth === 1;
  };

  // --- Scroll / UI ---
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef(null);

  const texts = isSpanish
    ? {
        about: "Sobre Nosotros",
        services: "Servicios",
        projects: "Proyectos",
        contact: "Contacto",
      }
    : {
        about: "About",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
      };

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

  useEffect(() => {
    function onClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // 🔹 Clases visuales (mantiene tamaño de texto)
  const navIdle =
    "text-brand-cream/80 hover:text-brand-sand transition-colors duration-300";
  const navActive =
    "text-accent hover:text-accent-light font-semibold transition-colors duration-300";

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
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-base">
          <Link
            href={`${prefix}/about`}
            className={isActive("about") ? navActive : navIdle}
            aria-current={isActive("about") ? "page" : undefined}
          >
            {texts.about}
          </Link>

          <Link
            href={`${prefix}/services`}
            className={isActive("services") ? navActive : navIdle}
            aria-current={isActive("services") ? "page" : undefined}
          >
            {texts.services}
          </Link>

          <Link
            href={`${prefix}/projects`}
            className={isActive("projects") ? navActive : navIdle}
            aria-current={isActive("projects") ? "page" : undefined}
          >
            {texts.projects}
          </Link>

          <Link
            href={`${prefix}/contact`}
            className={isActive("contact") ? navActive : navIdle}
            aria-current={isActive("contact") ? "page" : undefined}
          >
            {texts.contact}
          </Link>
        </nav>

        {/* Botón móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Panel móvil */}
      {mobileOpen && (
        <div
          ref={panelRef}
          className="md:hidden bg-transparent border-t border-white/10"
        >
          <nav className="flex flex-col px-6 py-4 space-y-5 text-base">
            <Link
              href={`${prefix}/about`}
              onClick={() => setMobileOpen(false)}
              className={isActive("about") ? navActive : navIdle}
            >
              {texts.about}
            </Link>

            <Link
              href={`${prefix}/services`}
              onClick={() => setMobileOpen(false)}
              className={isActive("services") ? navActive : navIdle}
            >
              {texts.services}
            </Link>

            <Link
              href={`${prefix}/projects`}
              onClick={() => setMobileOpen(false)}
              className={isActive("projects") ? navActive : navIdle}
            >
              {texts.projects}
            </Link>

            <Link
              href={`${prefix}/contact`}
              onClick={() => setMobileOpen(false)}
              className={isActive("contact") ? navActive : navIdle}
            >
              {texts.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
