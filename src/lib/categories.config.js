// src/lib/categories.config.js

/**
 * Configuración de categorías fijas
 * Mantén el mismo slug para ambos idiomas para simplificar
 */
export const CATEGORIES = {
  en: [
    { id: "branding", slug: "branding", title: "Branding" },
    {
      id: "web-development",
      slug: "web-development",
      title: "Web Development",
    },
    {
      id: "digital-strategy",
      slug: "digital-strategy",
      title: "Digital Strategy",
    },
    {
      id: "consulting-growth",
      slug: "consulting-growth",
      title: "Consulting & Growth",
    },
    {
      id: "full-brand-system",
      slug: "full-brand-system",
      title: "Full Brand System",
    },
  ],
  es: [
    { id: "branding", slug: "branding", title: "Diseño de Marca" },
    { id: "web-development", slug: "web-development", title: "Desarrollo Web" },
    {
      id: "digital-strategy",
      slug: "digital-strategy",
      title: "Estrategia Digital",
    },
    {
      id: "consulting-growth",
      slug: "consulting-growth",
      title: "Consultoría y Crecimiento",
    },
    {
      id: "full-brand-system",
      slug: "full-brand-system",
      title: "Sistema de Marca Completo",
    },
  ],
};

/**
 * Helper: Obtener categorías por idioma
 */
export function getCategories(lang = "en") {
  return CATEGORIES[lang] || CATEGORIES.en;
}

/**
 * Helper: Obtener una categoría específica
 */
export function getCategoryBySlug(slug, lang = "en") {
  const categories = getCategories(lang);
  return categories.find((cat) => cat.slug === slug);
}

/**
 * Helper: Obtener título de categoría
 */
export function getCategoryTitle(slug, lang = "en") {
  const category = getCategoryBySlug(slug, lang);
  return category?.title || slug;
}
