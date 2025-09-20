// middleware.js (raíz)
import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

const locales = ["en", "es"];
const defaultLocale = "en";

function getLocale(request) {
  const headers = {};
  request.headers.forEach((v, k) => (headers[k] = v));
  const languages = new Negotiator({ headers }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ya viene con prefijo de locale (/en, /es) → continuar
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Redirigir /… → /{locale}/…
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Ignora archivos estáticos y rutas internas
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
