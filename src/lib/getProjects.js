// src/lib/getProjects.js
import { client } from "./sanityClient";

export async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    slug,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    url
  }`;

  return await client.fetch(query);
}

export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    image {
      asset->{_id, url},
      alt
    },
    url,
    date,
    gallery[] {
      asset->{_id, url}
    }
  }`;

  const project = await client.fetch(query, { slug });
  return project;
}
