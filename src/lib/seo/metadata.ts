// src/lib/seo/metadata.js
const site = {
  name: "Okrices — Visual Identity & Web",
  url: "https://okrices.com",
  defaultDescription:
    "Premium visual identity & web studio. Fort Lauderdale — global reach.",
  twitter: "@okrices", // si aún no, déjalo vacío
};

export function buildMetadata({
  title,
  description = site.defaultDescription,
  path = "/",
  images = ["/images/og-default.jpg"], // pon una imagen en /public/images
}) {
  const absoluteUrl = new URL(path, site.url).toString();
  const fullTitle = title ? `${title} — ${site.name}` : site.name;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: absoluteUrl },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: site.name,
      images,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
      site: site.twitter || undefined,
    },
  };
}
