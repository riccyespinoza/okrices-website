// src/app/layout.jsx
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import Script from "next/script";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { ThemeProvider } from "@/context/ThemeContext";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // solo los que usas
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Okrices – Visual Identity & Web Studio",
  description: "Transforming ideas into clear and functional brands.",
  themeColor: "#060a12", // color del navegador (móvil)
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  const enableAnalytics =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="relative min-h-screen">
        <ThemeProvider>
          {enableAnalytics && (
            <Script
              strategy="afterInteractive" // no bloquea el render
              data-domain="okrices.com" // o tu dominio/vercel domain
              src="https://plausible.io/js/script.tagged-events.js"
            />
          )}

          {/* Fondo unificado y barato de pintar */}
          <div className="background-exact with-noise" aria-hidden="true" />

          <MainLayout>{children}</MainLayout>
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
