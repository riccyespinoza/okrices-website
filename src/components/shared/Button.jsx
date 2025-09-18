// src/components/shared/Button.js
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-accent/50";

const variants = {
  gradient:
    "text-light bg-gradient-to-r from-accent to-accent-light shadow-md shadow-accent/30 hover:from-accent-light hover:to-accent hover:shadow-lg hover:shadow-accent/40",

  // 👇 CAMBIO AQUÍ: Usamos el color de acento más claro para el texto
  secondary:
    "bg-transparent border border-accent text-accent-light hover:bg-accent/10",
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
