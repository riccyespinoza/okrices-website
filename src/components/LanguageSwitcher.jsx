"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale) => {
    // 1. Guardar preferencia en cookie (expira en 1 año)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    // 2. Reconstruir la ruta
    const segments = pathname.split("/");
    segments[1] = newLocale; // Reemplaza el primer segmento (el locale)
    const newPath = segments.join("/");

    router.push(newPath);
    router.refresh(); // Asegura que los Server Components se actualicen
  };

  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="flex gap-2 text-sm font-medium">
      <button
        onClick={() => switchLanguage("es")}
        className={`${currentLocale === "es" ? "text-accent" : "text-brand-cream/60"}`}
      >
        ES
      </button>
      <span className="text-brand-cream/20">|</span>
      <button
        onClick={() => switchLanguage("en")}
        className={`${currentLocale === "en" ? "text-accent" : "text-brand-cream/60"}`}
      >
        EN
      </button>
    </div>
  );
}
