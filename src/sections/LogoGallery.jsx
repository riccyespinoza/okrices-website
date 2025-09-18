// src/sections/LogoGallery.jsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function LogoGallery() {
  const ref = useRef(null);

  // Auto-scroll loop
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = setInterval(() => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 20);
    return () => clearInterval(id);
  }, []);

  const logos = Array.from(
    { length: 12 },
    (_, i) => `/logos/logo-${i + 1}.png`
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 space-y-6">
      <h2 className="text-2xl md:text-3xl font-medium text-light text-center">
        Selected Logos
      </h2>

      <div ref={ref} className="flex gap-10 overflow-x-auto scrollbar-hide">
        {logos.concat(logos).map((src, i) => (
          <span key={i} className="relative h-20 w-[120px] shrink-0">
            <Image
              src={src}
              alt="" /* decorativo */
              fill
              sizes="120px"
              className="object-contain"
            />
          </span>
        ))}
      </div>

      <p className="text-center">
        <a href="/projects?filter=logo" className="text-accent underline">
          View full logo gallery →
        </a>
      </p>
    </section>
  );
}
