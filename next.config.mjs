// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ No bloquear el build por ESLint en producción
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],

    // ⬇️ CLAVE para nitidez en monitores grandes y pantallas retina
    // Next generará (y elegirá vía srcset + DPR) estos anchos cuando aplique.
    deviceSizes: [
      360, 640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2560, 3200, 3840,
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

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
