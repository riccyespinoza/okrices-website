// src/components/shared/CustomCursor.jsx
"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (isTouch || reduceMotion) return;

    const update = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const t = e.target;
      const interactive =
        t.tagName.toLowerCase() === "a" ||
        t.tagName.toLowerCase() === "button" ||
        t.closest("a") ||
        t.closest("button") ||
        t.classList.contains("interactive") ||
        t.closest(".interactive");
      setIsHovering(Boolean(interactive));
    };

    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", update);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    document.body.classList.add("custom-cursor");
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-[100] rounded-full mix-blend-difference
                   transition-transform transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "48px" : "16px",
          height: isHovering ? "48px" : "16px",
          border: isHovering
            ? "1px solid rgba(255,255,255,.8)"
            : "1px solid rgba(255,255,255,.3)",
          backgroundColor: isHovering ? "rgba(165,81,48,.1)" : "transparent",
          opacity: 1,
        }}
      />
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-[100] rounded-full bg-accent/80 w-1.5 h-1.5
                   transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%,-50%)",
        }}
      />
    </>
  );
}
