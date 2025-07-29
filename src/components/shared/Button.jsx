import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

/**
 * Componente Button reutilizable que puede renderizarse como un botón o un enlace
 *
 * @param {Object} props - Las propiedades del componente
 * @param {string} props.variant - 'primary', 'secondary', 'light' o 'text'
 * @param {string} props.size - 'sm', 'md' o 'lg'
 * @param {string} props.href - Si se proporciona, el botón se renderiza como un enlace
 * @param {boolean} props.fullWidth - Si es true, el botón ocupará todo el ancho disponible
 * @param {React.ReactNode} props.children - El contenido del botón
 * @param {string} props.className - Clases CSS adicionales
 * @param {function} props.onClick - Función a ejecutar al hacer clic
 */
const Button = ({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  children,
  className,
  onClick,
  ...props
}) => {
  // Configuraciones de estilo según la variante
  const variants = {
    primary:
      "bg-accent text-light hover:bg-accent-light focus:ring-2 focus:ring-accent/50",
    secondary:
      "bg-transparent border border-accent text-accent hover:bg-accent/10 focus:ring-2 focus:ring-accent/50",
    light:
      "bg-light text-primary hover:bg-gray-100 focus:ring-2 focus:ring-light/50",
    text: "bg-transparent text-accent hover:text-accent-light underline focus:ring-2 focus:ring-accent/30",
  };

  // Configuraciones de tamaño
  const sizes = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-lg py-3.5 px-8",
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition duration-300 focus:outline-none";

  // Combinamos todas las clases
  const buttonClasses = twMerge(
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className
  );

  // Renderiza un enlace si se proporciona href, de lo contrario, un botón
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
