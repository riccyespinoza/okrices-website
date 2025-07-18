"use client";
import { useRef, useEffect } from "react";

export default function LogoGallery() {
  const ref = useRef(null);

  // Auto-scroll loop
  useEffect(() => {
    const el = ref.current;
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
          <img key={i} src={src} alt="" className="h-20 shrink-0" />
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
