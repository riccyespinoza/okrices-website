// src/lib/sanityClient.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fc3g5u62",
  dataset: "production",
  apiVersion: "2025-06-27",
  useCdn: false,
});
