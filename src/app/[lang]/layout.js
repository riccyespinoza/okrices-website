// src/app/[lang]/layout.js - LAYOUT PRINCIPAL (ROOT)
import CustomCursor from "@/components/shared/CustomCursor";
import SkipToContent from "@/components/shared/SkipToContent";
import "../globals.css";
import MainLayout from "@/components/MainLayout";
import Script from "next/script";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { ThemeProvider } from "@/context/ThemeContext";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata = {
  title: "Okrices – Visual Identity & Web Studio",
  description: "Transforming ideas into clear and functional brands.",
  themeColor: "#060a12",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children, params }) {
  const enableAnalytics =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

  return (
    <html
      lang={params.lang}
      className={`${outfit.variable} ${outfit.className}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen font-sans">
        <SkipToContent />
        <ThemeProvider>
          {enableAnalytics && (
            <Script
              strategy="afterInteractive"
              data-domain="okrices.com"
              src="https://plausible.io/js/script.tagged-events.js"
            />
          )}

          <div className="background-exact with-noise" aria-hidden="true" />
          <MainLayout>{children}</MainLayout>
          <ScrollToTopButton />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
