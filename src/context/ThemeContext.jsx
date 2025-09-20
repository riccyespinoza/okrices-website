"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 🔧 SOLUCIÓN: Iniciar con null para evitar hydration mismatch
  const [theme, setTheme] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Primer efecto: determinar el tema inicial
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Segundo efecto: aplicar el tema al DOM
  useEffect(() => {
    if (!theme || !mounted) return;

    const root = document.documentElement;

    // Limpiar clases anteriores
    root.classList.remove("light", "dark");

    // Aplicar nueva clase
    root.classList.add(theme);

    // Guardar en localStorage
    localStorage.setItem("theme", theme);

    // 🔧 NUEVO: Forzar re-aplicación de fuentes después del cambio de tema
    setTimeout(() => {
      document.body.style.fontFamily =
        "var(--font-outfit), ui-sans-serif, system-ui, sans-serif";
    }, 50);
  }, [theme, mounted]);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // 🔧 CRÍTICO: No renderizar hasta que esté montado para evitar hydration mismatch
  if (!mounted) {
    return (
      <div
        style={{
          fontFamily:
            "var(--font-outfit), ui-sans-serif, system-ui, sans-serif",
          visibility: "hidden",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
