// app/layout.jsx
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import Script from "next/script";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { ThemeProvider } from "@/context/ThemeContext";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-outfit", // Esto crea la variable CSS
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
    // La variable de la fuente se aplica al <html>
    <html lang="en" className={outfit.variable}>
      {/* El body ya no tiene clases de color o fuente que creen conflictos */}
      <body className="relative min-h-screen">
        <ThemeProvider>
          {enableAnalytics && (
            <Script
              strategy="lazyOnload"
              data-domain="okrices.com"
              src="https://plausible.io/js/script.js"
            />
          )}

          {/* Estos elementos de fondo son correctos aquí */}
          <div className="background-exact"></div>
          <div className="noise-overlay"></div>

          <MainLayout>{children}</MainLayout>
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
