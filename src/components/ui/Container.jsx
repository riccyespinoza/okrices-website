// src/components/ui/Container.jsx

import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className, fluid = false, ...props }) => {
  return (
    <div
      className={twMerge(
        // ✅ Perilla 1: Padding reducido a 1rem (16px) a los lados.
        "mx-auto px-4",

        // ✅ Perilla 2: Ancho máximo aumentado a 2xl.
        fluid ? "max-w-screen-2xl" : "max-w-7xl",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
