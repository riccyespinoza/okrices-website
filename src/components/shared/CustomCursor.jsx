"use client";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detectar si es dispositivo móvil (no mostrar cursor personalizado en táctiles)
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return; // No ejecutar en dispositivos táctiles
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detectar si estamos sobre elementos interactivos
      const target = e.target;
      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive") ||
        target.closest(".interactive");

      setIsHovering(isInteractive);
    };

    const showCursor = () => setIsVisible(true);
    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);

    // Agregar clase al body para ocultar cursor original
    document.body.classList.add("custom-cursor");

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed pointer-events-none z-[100] rounded-full mix-blend-difference transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "48px" : "16px",
          height: isHovering ? "48px" : "16px",
          border: isHovering
            ? "1px solid rgba(255, 255, 255, 0.8)"
            : "1px solid rgba(255, 255, 255, 0.3)",
          backgroundColor: isHovering
            ? "rgba(165, 81, 48, 0.1)"
            : "transparent",
        }}
      />

      {/* Punto central */}
      <div
        className="fixed pointer-events-none z-[100] rounded-full bg-accent/80 w-1.5 h-1.5 transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
