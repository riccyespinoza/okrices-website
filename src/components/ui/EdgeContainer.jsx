// src/components/ui/EdgeContainer.jsx
"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * EdgeContainer
 * Marco reutilizable con mismos márgenes laterales que el Hero
 * - Controla ancho (%) responsivo
 * - Centrado
 * - Esquinas redondeadas y overflow opcionales
 * - Permite clases extra (altura, grid, etc.)
 */
export default function EdgeContainer({
  as: Tag = "div",
  children,
  className,
  width = "default", // "default" | "tight" | "loose"
  rounded = true, // esquinas redondeadas + overflow-hidden
  shadow = false, // sombra opcional
}) {
  const widthMap = {
    // Igual al Hero actual
    default: "w-[92%] md:w-[90%]",
    // (por si en el futuro quieres un poquito más estrecho o amplio)
    tight: "w-[90%] md:w-[88%]",
    loose: "w-[94%] md:w-[92%]",
  };

  return (
    <Tag
      className={twMerge(
        "mx-auto", // centrado
        widthMap[width] || widthMap.default,
        rounded && "rounded-3xl overflow-hidden",
        shadow && "shadow-lg",
        className
      )}
    >
      {children}
    </Tag>
  );
}
