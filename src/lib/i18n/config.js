// src/lib/i18n/config.js
import en from "./dics/en";
import es from "./dics/es";

export const locales = ["en", "es"];
export const defaultLocale = "en";

export function getDic(locale = defaultLocale) {
  return locale === "es" ? es : en;
}
