import { client } from "./sanityClient"; // ← el mismo que ya usas en getProjects

/**
 * Devuelve los servicios ordenados.
 * @param {"en"|"es"} locale  Idioma
 * @param {"branding"|"web"|undefined} category  Filtra por categoría
 */
export async function getServices(locale = "en", category) {
  const i18n = `
    title_${locale},
    desc_${locale},
    bullets_${locale}
  `;

  const filter = category ? `&& category == "${category}"` : "";
  const query = /* groq */ `
    *[_type == "service"${filter}] | order(order asc){
      _id,
      category,
      duration,
      price,
      ${i18n}
    }
  `;
  return client.fetch(query);
}
