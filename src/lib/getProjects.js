// lib/getProjects.js

import { client } from "./sanityClient"; // Asegúrate de que esta ruta a tu cliente de Sanity sea correcta

/**
 * Fetches ALL projects with the necessary data for card views (like /projects page).
 */
export async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    slug,
    overview, // Usamos overview para la descripción en las tarjetas
    cardImage{
      asset->{_id, url},
      alt
    }
  }`;
  return await client.fetch(query);
}

/**
 * Fetches ONE single project with the complete data structure for the detail page.
 */
export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    // --- Hero Info ---
    title,
    projectType,
    url,
    showUrlButton,
    mainImage{ asset->{_id, url}, alt },
    
    // --- Key Data ---
    client,
    services,
    year,
    location,
    
    // --- Text Content ---
    overview,
    challenge,
    solution,
    impact,
    
    // --- Visuals ---
    gallery[]{ asset->{_id, url}, alt }
  }`;
  return await client.fetch(query, { slug });
}

/**
 * Fetches the 3 most recent projects for the featured section on the homepage.
 */
export async function getFeaturedProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    slug,
    overview, // Usamos overview para la descripción en las tarjetas
    cardImage{
      asset->{_id, url},
      alt
    }
  }`;
  return await client.fetch(query);
}
