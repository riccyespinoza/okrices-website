// src/lib/getProjects.js
import { client } from "./sanityClient";

/** ▸ Todos los proyectos (la query que ya usabas) */
export async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    slug,
    description,
    image{
      asset->{_id, url},
      alt
    },
    url
  }`;

  return await client.fetch(query);
}

/** ▸ Un proyecto por slug (ya existente) */
export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    image{
      asset->{_id, url},
      alt
    },
    url,
    date,
    gallery[]{
      asset->{_id, url}
    }
  }`;

  return await client.fetch(query, { slug });
}

/** ▸ 🆕 Proyectos destacados
 *    - Aquí devolvemos los 3 más recientes.
 *    - Si prefieres marcarlos con un campo boolean `featured`
 *      en tu schema, cámbialo a:
 *      `*[_type=="project" && featured==true]{ … }`
 */
export async function getFeaturedProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    slug,
    description,
    image{
      asset->{_id, url},
      alt
    },
    url
  }`;

  return await client.fetch(query);
}
