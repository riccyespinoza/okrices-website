"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Regla: si ya estamos en "/es", quitamos "/es"; si no, lo agregamos.
  const isSpanish = pathname.startsWith("/es");
  const enPath = isSpanish ? pathname.replace(/^\/es/, "") || "/" : pathname;
  const esPath = isSpanish
    ? pathname
    : "/es" + (pathname === "/" ? "" : pathname);

  return (
    <div className="inline-flex items-center gap-2 ml-4">
      <Link
        href={enPath}
        className={`px-2 py-1 rounded font-medium ${!isSpanish ? "bg-accent text-light" : "hover:bg-accent/10 text-accent"}`}
      >
        EN
      </Link>
      <span className="text-gray-500">|</span>
      <Link
        href={esPath}
        className={`px-2 py-1 rounded font-medium ${isSpanish ? "bg-accent text-light" : "hover:bg-accent/10 text-accent"}`}
      >
        ES
      </Link>
    </div>
  );
}
