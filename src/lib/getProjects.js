// src/lib/getProjects.js
import { client } from "./sanityClient";

const PROJECTION = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  language,
  overview,
  description,
  projectType,
  url,
  showUrlButton,
  cardImage{
    asset->{url},
    alt
  },
  mainImage{
    asset->{url},
    alt
  },
  gallery[]{
    asset->{url},
    alt,
    caption
  },
  categories[]->{
    _id,
    title,
    "slug": slug.current,
    language
  }
`;

/**
 * Helper: filtra las categorías para que coincidan con el idioma del proyecto
 */
const filterCategoriesToLanguage = (projects) =>
  (projects || []).map((p) => ({
    ...p,
    categories: (p.categories || []).filter((c) => c?.language === p.language),
  }));

/**
 * 1) OBTENER TODOS LOS PROYECTOS por idioma
 */
export async function getProjects(lang = "en") {
  const query = /* groq */ `
    *[_type == "project" && language == $lang]
      | order(_createdAt desc){ ${PROJECTION} }
  `;

  const projects = await client.fetch(
    query,
    { lang },
    { next: { revalidate: 60 } }
  );

  return filterCategoriesToLanguage(projects);
}

/**
 * 2) PROYECTOS DESTACADOS por idioma
 */
export async function getFeaturedProjects(lang = "en", limit = 6) {
  const query = /* groq */ `
    *[_type == "project" && language == $lang]
      | order(_createdAt desc)[0...$limit]{ ${PROJECTION} }
  `;

  const projects = await client.fetch(
    query,
    { lang, limit },
    { next: { revalidate: 60 } }
  );

  return filterCategoriesToLanguage(projects);
}

/**
 * 3) OBTENER TODAS LAS CATEGORÍAS por idioma
 */
export async function getAllCategories(lang = "en") {
  const query = /* groq */ `
    *[_type == "category" && language == $lang]
      | order(title asc){
        _id,
        title,
        "slug": slug.current,
        language
      }
  `;

  return await client.fetch(query, { lang }, { next: { revalidate: 300 } });
}

/**
 * 4) OBTENER PROYECTO POR SLUG
 * Busca primero en el idioma solicitado, si no encuentra, busca en inglés
 */
export async function getProjectBySlug(slug, lang = "en") {
  const query = /* groq */ `
    *[_type == "project" && slug.current == $slug && language == $lang][0]{
      ${PROJECTION}
    }
  `;

  let project = await client.fetch(
    query,
    { slug, lang },
    { next: { revalidate: 60 } }
  );

  if (!project && lang !== "en") {
    const fallbackQuery = /* groq */ `
      *[_type == "project" && slug.current == $slug && language == "en"][0]{
        ${PROJECTION}
      }
    `;

    project = await client.fetch(
      fallbackQuery,
      { slug },
      { next: { revalidate: 60 } }
    );
  }

  if (!project) return null;

  return {
    ...project,
    categories: (project.categories || []).filter(
      (c) => c?.language === project.language
    ),
  };
}

/**
 * 5) OBTENER PROYECTOS POR CATEGORÍA
 */
export async function getProjectsByCategory(categorySlug, lang = "en") {
  const query = /* groq */ `
    *[_type == "project" 
      && language == $lang 
      && references(*[_type == "category" && slug.current == $categorySlug && language == $lang]._id)]
      | order(_createdAt desc){ ${PROJECTION} }
  `;

  const projects = await client.fetch(
    query,
    { categorySlug, lang },
    { next: { revalidate: 60 } }
  );

  return filterCategoriesToLanguage(projects);
}

/**
 * 6) OBTENER SLUGS DE TODOS LOS PROYECTOS (para generateStaticParams)
 */
export async function getAllProjectSlugs() {
  const query = /* groq */ `
    *[_type == "project"]{
      "slug": slug.current,
      language
    }
  `;

  return await client.fetch(query, {}, { next: { revalidate: 3600 } });
}

/**
 * 7) VERIFICAR SI EXISTE UN PROYECTO
 */
export async function projectExists(slug, lang = "en") {
  const query = /* groq */ `
    count(*[_type == "project" && slug.current == $slug && language == $lang]) > 0
  `;

  return await client.fetch(
    query,
    { slug, lang },
    { next: { revalidate: 60 } }
  );
}
