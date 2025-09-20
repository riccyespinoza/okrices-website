// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔧 SOLUCIÓN: Configuración para Next.js 15 cache behavior
  experimental: {
    staleTimes: {
      dynamic: 30, // Cache páginas dinámicas por 30 segundos
      static: 180, // Cache páginas estáticas por 3 minutos
    },
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**", // /images/<projectId>/production/...
      },
    ],
  },

  // 🔧 SOLUCIÓN: Headers para optimizar cache de fuentes y CSS
  headers: async () => {
    return [
      {
        source: "/_next/static/css/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/media/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache para fuentes auto-hospedadas por next/font
      {
        source: "/_next/static/chunks/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
