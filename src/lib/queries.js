export const projectsQuery = `*[_type == "project"]{
  _id,
  title,
  description,
  "imageUrl": image.asset->url
}`;
