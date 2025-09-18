import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

// 1. Especifica los idiomas que soportarás.
const locales = ["en", "es"];
const defaultLocale = "en";

// Función para obtener el idioma preferido del navegador del usuario.
function getLocale(request) {
  const headers = {};
  request.headers.forEach((value, key) => (headers[key] = value));

  // Usa Negotiator para comparar los idiomas del navegador con los tuyos.
  const languages = new Negotiator({ headers }).languages();

  // Usa el matcher para encontrar la mejor coincidencia.
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 2. Revisa si la URL ya tiene un prefijo de idioma (ej. /en/about).
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // Si ya tiene idioma, no hagas nada.
  }

  // 3. Si no tiene idioma, detecta el mejor y redirige.
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // Redirige a la nueva URL (ej. de /about a /en/about).
  return NextResponse.redirect(request.nextUrl);
}

// Configuración para que el middleware solo se ejecute en las rutas necesarias.
// Código Corregido (La Solución)
export const config = {
  matcher: [
    // Omitir todas las rutas que contienen un punto (archivos estáticos) o que son internas de Next.js.
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
