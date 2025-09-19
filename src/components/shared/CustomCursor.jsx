// src/components/shared/CustomCursor.jsx
"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Inicia fuera de la pantalla
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Controla la opacidad

  useEffect(() => {
    // Evitar en dispositivos táctiles o con movimiento reducido
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");
      setIsHovering(Boolean(isInteractive));
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Añadir listeners y la clase al body
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.body.classList.add("custom-cursor");

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  // 👇 CAMBIO 1: El estilo ahora se maneja con clases de Tailwind y nuestro sistema de diseño
  const outerCursorClasses = `
    fixed pointer-events-none z-[100] rounded-full mix-blend-difference
    transition-all duration-300 -translate-x-1/2 -translate-y-1/2
    ${isHovering ? "w-12 h-12 bg-accent/10 border-light/80" : "w-4 h-4 border-light/30"}
    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
  `;

  const innerDotClasses = `
    fixed pointer-events-none z-[100] rounded-full w-1.5 h-1.5
    -translate-x-1/2 -translate-y-1/2 bg-accent
    transition-opacity duration-300
    ${isVisible ? "opacity-100" : "opacity-0"}
  `;

  return (
    <>
      {/* Círculo exterior */}
      <div
        aria-hidden="true"
        className={outerCursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Punto interior */}
      <div
        aria-hidden="true"
        className={innerDotClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
