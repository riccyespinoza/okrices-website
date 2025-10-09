// src/lib/categories.config.js

/**
 * Configuración de categorías fijas
 * Mantén el mismo slug para ambos idiomas para simplificar
 */
export const CATEGORIES = {
  en: [
    { id: "branding", slug: "branding", title: "Branding" },
    { id: "web-design", slug: "web-design", title: "Web Design" },
    { id: "ui-ux", slug: "ui-ux", title: "UI/UX Design" },
    { id: "branding-web", slug: "branding-web", title: "Branding + Web" },
    {
      id: "digital-marketing",
      slug: "digital-marketing",
      title: "Digital Marketing",
    },
  ],
  es: [
    { id: "branding", slug: "branding", title: "Diseño de Marca" },
    { id: "web-design", slug: "web-design", title: "Diseño Web" },
    { id: "ui-ux", slug: "ui-ux", title: "Diseño UI/UX" },
    { id: "branding-web", slug: "branding-web", title: "Marca + Web" },
    {
      id: "digital-marketing",
      slug: "digital-marketing",
      title: "Marketing Digital",
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
