// src/lib/getProjects.js
import { client } from "./sanityClient";

/**
 * Proyectos (con categorías) por idioma con fallback a EN si no hay resultados.
 */
export async function getProjects(lang = "en", { fallbackToBase = true } = {}) {
  const query = `*[
    _type == "project" &&
    (!defined(__i18n_lang) || __i18n_lang == $lang)
  ] | order(_createdAt desc){
    _id,
    title,
    // 👇 CORRECCIÓN AQUÍ: Pide siempre slug.current.
    // Si no existe, devolverá null, lo cual es predecible.
    "slug": slug.current,
    projectType,
    overview,
    cardImage{ asset->{_id, url}, alt },
    "categories": categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }`;

  let rows = await client.fetch(query, { lang }, { next: { revalidate: 60 } });

  // Fallback a inglés si no hay nada en el idioma actual
  if ((!rows || rows.length === 0) && fallbackToBase && lang !== "en") {
    rows = await client.fetch(
      query,
      { lang: "en" },
      { next: { revalidate: 60 } }
    );
  }

  return rows;
}

/**
 * Todas las categorías disponibles (para construir los chips de filtro).
 */
export async function getAllCategories(lang = "en") {
  const query = `*[
    _type == "category" &&
    (!defined(__i18n_lang) || __i18n_lang == $lang)
  ] | order(title asc){
    _id,
    title,
    "slug": slug.current
  }`;

  return client.fetch(query, { lang }, { next: { revalidate: 300 } });
}

/**
 * 3 proyectos destacados (Home).
 */
export async function getFeaturedProjects(lang = "en") {
  const query = `*[
    _type == "project" &&
    (!defined(__i18n_lang) || __i18n_lang == $lang)
  ] | order(_createdAt desc)[0...3]{
    _id,
    title,
    "slug": coalesce(slug.current, slug),
    overview,
    cardImage{ asset->{_id, url}, alt },
    "categories": categories[]->{
      _id, title, "slug": slug.current
    }
  }`;

  return client.fetch(query, { lang }, { next: { revalidate: 60 } });
}

/**
 * Detalle de un proyecto por slug (con i18n + fallback).
 */
export async function getProjectBySlug(
  slug,
  lang = "en",
  { fallbackToBase = true } = {}
) {
  const query = `*[
    _type == "project" &&
    slug.current == $slug &&
    (!defined(__i18n_lang) || __i18n_lang == $lang)
  ][0]{
    // --- Hero ---
    _id,
    title,
    projectType,
    url,
    showUrlButton,
    mainImage{ asset->{_id, url}, alt },

    // --- Key data ---
    client,
    services,
    year,
    location,

    // --- Text content ---
    contextLine,
    overview,
    deliverables,
    challenge,
    solution,
    impact,

    // --- Categories ---
    "categories": categories[]->{
      _id,
      title,
      "slug": slug.current
    },

    // --- Gallery ---
    "gallery": array::compact(
      coalesce(
        gallery[]{ asset->{_id, url}, alt },
        images[]{ asset->{_id, url}, alt }
      )
    )
  }`;

  // 1º intento: idioma solicitado
  let row = await client.fetch(
    query,
    { slug, lang },
    { next: { revalidate: 60 } }
  );

  // Fallback a EN si no se encontró
  if (!row && fallbackToBase && lang !== "en") {
    row = await client.fetch(
      query,
      { slug, lang: "en" },
      { next: { revalidate: 60 } }
    );
  }

  return row;
}
