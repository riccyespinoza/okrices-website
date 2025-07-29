// app/layout.jsx
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import Script from "next/script";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

// 1) Importa Google Font Outfit
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Okrices – Visual Identity & Web Studio",
  description: "Transforming ideas into clear and functional brands.",
};

export default function RootLayout({ children }) {
  const enableAnalytics =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

  return (
    <html lang="en" className={outfit.variable}>
      <body className="relative min-h-screen font-sans text-light">
        {/* Plausible (solo en producción) */}
        {enableAnalytics && (
          <Script
            strategy="lazyOnload"
            data-domain="okrices.com"
            src="https://plausible.io/js/script.js"
          />
        )}

        {/* Fondo estático exacto */}
        <div className="background-exact"></div>

        {/* Ruido sutil */}
        <div className="noise-overlay"></div>

        {/* Contenido principal */}
        <MainLayout>{children}</MainLayout>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
