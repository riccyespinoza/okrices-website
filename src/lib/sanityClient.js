import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "tu_projectId", // ← Copia esto desde sanity.config.js
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
