// middleware.js
function getLocale(request) {
  // 1. Prioridad: Cookie (elección manual del usuario)
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  // 2. Segunda opción: Cabeceras del navegador
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

  // Validar si la URL ya tiene un locale válido
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirección si no hay locale en la URL
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}
