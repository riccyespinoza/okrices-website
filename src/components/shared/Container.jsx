import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * Componente Container que proporciona un contenedor con ancho máximo y padding
 * útil para mantener la consistencia en las secciones del sitio
 *
 * @param {Object} props - Las propiedades del componente
 * @param {React.ReactNode} props.children - El contenido del contenedor
 * @param {string} props.className - Clases CSS adicionales
 * @param {boolean} props.fluid - Si es true, el contenedor tendrá un ancho mayor
 */
const Container = ({ children, className, fluid = false, ...props }) => {
  return (
    <div
      className={twMerge(
        "mx-auto px-4 sm:px-6 lg:px-8",
        fluid ? "max-w-7xl" : "max-w-6xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
