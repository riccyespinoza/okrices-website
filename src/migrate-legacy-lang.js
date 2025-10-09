// migrate-legacy-lang.js
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "fc3g5u62", // tu projectId
  dataset: "production", // tu dataset
  apiVersion: "2025-06-27", // igual que usas en lectura
  token: process.env.SANITY_WRITE_TOKEN, // << token con permisos de escritura
  useCdn: false,
});

async function main() {
  // 1) Ver qué legacy hay
  const legacy = await client.fetch(
    `*[_type=="project" && !defined(__i18n_lang)]{_id, title, "slug": slug.current}`
  );
  console.log(`Legacy encontrados: ${legacy.length}`);
  legacy.forEach((d) => console.log(`- ${d._id} :: ${d.title} (${d.slug})`));

  if (!legacy.length) {
    console.log("No hay documentos legacy. Nada que migrar.");
    return;
  }

  // 2) Parchear todos a EN (ajusta a "es" si correspondiera)
  const tx = client.transaction();
  for (const d of legacy) {
    tx.patch(d._id, { set: { __i18n_lang: "en" } }); // <<< cambia a "es" si esos docs están en español
  }

  const res = await tx.commit();
  console.log(
    `Migrados ${res.results?.length || 0} documentos a __i18n_lang:"en"`
  );
}

main().catch((err) => {
  console.error("Error en la migración:", err);
  process.exit(1);
});
