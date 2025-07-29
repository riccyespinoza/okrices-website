import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * Componente para títulos de sección con formato consistente y opción de destacar palabras
 *
 * @param {Object} props - Las propiedades del componente
 * @param {string} props.title - El texto principal del título
 * @param {string} props.highlight - Texto a destacar dentro del título (opcional)
 * @param {string} props.subtitle - Subtítulo opcional
 * @param {string} props.align - Alineación del texto ('left', 'center', 'right')
 * @param {string} props.className - Clases CSS adicionales
 * @param {string} props.titleClassName - Clases CSS adicionales para el título
 * @param {string} props.subtitleClassName - Clases CSS adicionales para el subtítulo
 */
const SectionTitle = ({
  title,
  highlight,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  ...props
}) => {
  // Determinar clases de alineación
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  // Procesar el título para destacar la parte especificada
  const renderTitle = () => {
    if (!highlight) return title;

    const parts = title.split(highlight);

    if (parts.length === 1) return title;

    return (
      <>
        {parts[0]}
        <span className="text-accent">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={twMerge(alignClasses[align], "max-w-2xl mb-12", className)}
      {...props}
    >
      <h2
        className={twMerge(
          "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight",
          titleClassName
        )}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={twMerge(
            "mt-4 text-base md:text-lg text-gray-light",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
