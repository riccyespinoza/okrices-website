"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // El estado inicial "light" es solo temporal hasta que el useEffect se ejecute
  const [theme, setTheme] = useState("light");

  // Este efecto se ejecuta una sola vez al cargar el componente en el navegador
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    // Llamamos a setTheme para que el resto de la app sepa el tema correcto
    setTheme(initialTheme);
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez.

  // ✅ MEJORA: Un segundo useEffect dedicado a manejar los efectos secundarios
  // Este hook se ejecutará al inicio (después del primer useEffect) y cada vez que 'theme' cambie.
  useEffect(() => {
    const root = document.documentElement;

    // 1. Limpiamos ambas clases por seguridad.
    root.classList.remove("light", "dark");

    // 2. Añadimos la clase correcta basada en el estado actual.
    root.classList.add(theme);

    // 3. Guardamos la preferencia en el localStorage.
    localStorage.setItem("theme", theme);
  }, [theme]); // La dependencia [theme] es la clave.

  // La función de cambio ahora solo necesita cambiar el estado.
  // El useEffect se encargará del resto.
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
