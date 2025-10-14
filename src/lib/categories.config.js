// src/lib/categories.config.js

/**
 * Categorías oficiales (usar estos slugs en todo el sitio y en Sanity)
 * Nota: mismo slug para EN y ES para simplificar filtros/rutas.
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
    { id: "branding", slug: "branding", title: "Branding" },
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
      title: "Sistema de Marca Integral",
    },
  ],
};

/**
 * Aliases de compatibilidad (slugs antiguos => slugs nuevos)
 * Esto evita romper páginas/queries mientras migras datos en Sanity.
 */
const LEGACY_SLUG_ALIASES = {
  "web-design": "web-development",
  "ui-ux": "web-development", // si lo usabas para casos web/app, cae en Web Dev
  "branding-web": "full-brand-system",
  "digital-marketing": "digital-strategy",
  // agrega aquí cualquier otro alias que detectes en proyectos antiguos
};

/**
 * Normaliza un slug al estándar actual (aplica alias si corresponde)
 */
export function normalizeCategorySlug(slug) {
  if (!slug) return slug;
  return LEGACY_SLUG_ALIASES[slug] || slug;
}

/**
 * Helper: Obtener categorías por idioma (EN por defecto)
 */
export function getCategories(lang = "en") {
  return CATEGORIES[lang] || CATEGORIES.en;
}

/**
 * Helper: Buscar en las categorías activas por slug (respetando alias)
 */
export function getCategoryBySlug(slug, lang = "en") {
  const normalized = normalizeCategorySlug(slug);
  const categories = getCategories(lang);
  return categories.find((cat) => cat.slug === normalized);
}

/**
 * Helper: Título localizado de categoría (o devuelve el slug si no se encuentra)
 */
export function getCategoryTitle(slug, lang = "en") {
  const cat = getCategoryBySlug(slug, lang);
  return cat?.title || normalizeCategorySlug(slug);
}

/**
 * Helper: Lista de slugs válidos (estándar actual)
 */
export function getValidCategorySlugs() {
  return CATEGORIES.en.map((c) => c.slug);
}
