// src/components/shared/FontLoader.js
"use client";

import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    // Función para detectar cuando las fuentes están cargadas
    const checkFontsLoaded = async () => {
      try {
        // Usar la Font Loading API si está disponible
        if ("fonts" in document) {
          await document.fonts.ready;
          document.documentElement.classList.add("fonts-loaded");
        } else {
          // Fallback para navegadores que no soportan Font Loading API
          const checkFont = () => {
            const testElement = document.createElement("div");
            testElement.style.fontFamily = "var(--font-outfit), Outfit";
            testElement.style.fontSize = "100px";
            testElement.style.position = "absolute";
            testElement.style.left = "-9999px";
            testElement.textContent = "Test";
            document.body.appendChild(testElement);

            const initialWidth = testElement.offsetWidth;

            // Cambiar a fuente fallback
            testElement.style.fontFamily = "Arial, sans-serif";
            const fallbackWidth = testElement.offsetWidth;

            document.body.removeChild(testElement);

            // Si las medidas son diferentes, Outfit está cargada
            if (initialWidth !== fallbackWidth) {
              document.documentElement.classList.add("fonts-loaded");
              return true;
            }
            return false;
          };

          // Intentar cada 100ms durante máximo 3 segundos
          let attempts = 0;
          const maxAttempts = 30;

          const interval = setInterval(() => {
            attempts++;
            if (checkFont() || attempts >= maxAttempts) {
              clearInterval(interval);
              if (attempts >= maxAttempts) {
                // Si no se detecta después de 3 segundos, asumir que está cargada
                document.documentElement.classList.add("fonts-loaded");
              }
            }
          }, 100);
        }
      } catch (error) {
        console.warn("Error checking font loading:", error);
        // En caso de error, asumir que las fuentes están cargadas
        document.documentElement.classList.add("fonts-loaded");
      }
    };

    // Ejecutar verificación
    checkFontsLoaded();

    // También verificar en cambios de visibilidad (útil para navegación SPA)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkFontsLoaded();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; // Este componente no renderiza nada
}
