// src/components/shared/Button.js
import Link from "next/link";
import { twMerge } from "tailwind-merge";

// --- Definimos los estilos base y las variantes aquí ---

// 👇 CAMBIO: Corregimos 'rounded-xl' a 'rounded-lg' para que coincida con las tarjetas.
const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-accent/50";

const variants = {
  gradient:
    "text-light bg-gradient-to-r from-accent to-accent-light shadow-md shadow-accent/30 hover:from-accent-light hover:to-accent hover:shadow-lg hover:shadow-accent/40",

  // Ajustamos el borde del secundario a 1px que es más elegante y común.
  secondary:
    "bg-transparent border border-accent text-accent hover:bg-accent/10",
};

const hoverEffects = "hover:-translate-y-1 active:scale-[0.98]";

const Button = ({
  href,
  children,
  variant = "gradient",
  className = "",
  ...props
}) => {
  const finalClassName = twMerge(
    baseStyles,
    variants[variant],
    hoverEffects,
    className
  );

  if (href) {
    return (
      <Link href={href} className={finalClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
