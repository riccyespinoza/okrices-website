/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.okrices.com", // ⚠️ usa tu dominio canónico
  generateRobotsTxt: true, // crea robots.txt automáticamente
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000, // divide si superas 7 k URLs
  exclude: ["/admin/*", "/drafts/*"], // rutas que NO quieres indexar
  alternateRefs: [
    { href: "https://www.okrices.com/es", hrefLang: "es" }, // versión ES
    { href: "https://www.okrices.com", hrefLang: "en" }, // versión EN
  ],
};
