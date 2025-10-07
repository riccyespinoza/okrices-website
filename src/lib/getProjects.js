// src/lib/getProjects.js
import { client } from "./sanityClient";

/**
 * Base fragment para las cards (mismo shape que usa ProjectCard).
 */
const CARD_FIELDS = `
  _id,
  title,
  "slug": coalesce(slug.current, slug),     // siempre string usable en <Link>
  projectType,
  overview,                                 // descripción corta
  cardImage{
    asset->{ _id, url },
    alt
  }
`;

/**
 * Listado de proyectos (página /projects), con filtro por idioma y fallback.
 */
export async function getProjects(lang = "en", { fallbackToBase = true } = {}) {
  const q = `*[
    _type == "project" &&
    (!defined(__i18n_lang) || __i18n_lang == $lang)
  ] | order(_createdAt desc){ ${CARD_FIELDS} }`;

  let rows = await client.fetch(q, { lang }, { next: { revalidate: 60 } });

  if ((!rows || rows.length === 0) && fallbackToBase && lang !== "en") {
    rows = await client.fetch(q, { lang: "en" }, { next: { revalidate: 60 } });
  }

  return rows;
}

/**
 * 3 proyectos recientes para Home (Featured).
 * Mantiene el mismo shape que las cards.
 */
export async function getFeaturedProjects(
  lang = "en",
  { fallbackToBase = true } = {}
) {
  const q = `*[
    _type == "project" &&
    (!defined(__i18n_lang) || __i18n_lang == $lang)
  ] | order(_createdAt desc)[0...3]{ ${CARD_FIELDS} }`;

  let rows = await client.fetch(q, { lang }, { next: { revalidate: 60 } });

  if ((!rows || rows.length === 0) && fallbackToBase && lang !== "en") {
    rows = await client.fetch(q, { lang: "en" }, { next: { revalidate: 60 } });
  }

  return rows;
}

/**
 * Detalle de proyecto por slug (vista individual).
 */
export async function getProjectBySlug(slug) {
  const q = `*[_type == "project" && slug.current == $slug][0]{
    // Hero
    title,
    projectType,
    url,
    showUrlButton,
    mainImage{ asset->{ _id, url }, alt },

    // Datos clave
    client,
    services,
    year,
    location,

    // Texto
    overview,
    challenge,
    solution,
    impact,

    // Galería
    gallery[]{ asset->{ _id, url }, alt }
  }`;

  return await client.fetch(q, { slug }, { next: { revalidate: 60 } });
}
