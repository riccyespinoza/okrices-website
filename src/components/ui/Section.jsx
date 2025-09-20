import React from "react";
import { twMerge } from "tailwind-merge";
import Container from "./Container";

/**
 * Componente Section que proporciona una estructura consistente para las secciones
 * Sin fondos individuales para mantener el fondo uniforme de toda la página
 *
 * @param {Object} props - Las propiedades del componente
 * @param {React.ReactNode} props.children - El contenido de la sección
 * @param {string} props.className - Clases CSS adicionales
 * @param {string} props.id - ID de la sección para navegación con anclas
 * @param {boolean} props.withContainer - Si es true, envuelve el contenido en un Container
 * @param {string} props.spacing - Espaciado vertical (py-X)
 */
const Section = ({
  children,
  className,
  id,
  withContainer = true,
  spacing = "py-24 md:py-32",
  ...props
}) => {
  const content = withContainer ? <Container>{children}</Container> : children;

  return (
    <section id={id} className={twMerge(spacing, className)} {...props}>
      {content}
    </section>
  );
};

export default Section;
