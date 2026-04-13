import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

const locales = ["en", "es"]; // Ajusta según tus idiomas configurados
const defaultLocale = "es";
const MAINTENANCE_MODE = true; // Control maestro

function getLocale(request) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  const headers = {};
  request.headers.forEach((v, k) => (headers[k] = v));
  const languages = new Negotiator({ headers }).languages();

  try {
    return matchLocale(languages, locales, defaultLocale);
  } catch (e) {
    return defaultLocale;
  }
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Exclusiones para que el sitio no se rompa
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.includes(".") || // Archivos con extensión (favicon.ico, imágenes)
    pathname === "/maintenance"
  ) {
    return NextResponse.next();
  }

  // 2. Bloqueo de Mantenimiento
  if (MAINTENANCE_MODE) {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    return NextResponse.rewrite(url);
  }

  // 3. Lógica original de Idiomas (solo si mantenimiento está OFF)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}
