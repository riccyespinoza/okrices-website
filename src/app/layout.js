// app/layout.jsx
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import Script from "next/script"; // ← importa Script

export const metadata = {
  title: "Okrices – Visual Identity & Web Studio",
  description: "Transforming ideas into clear and functional brands.",
};

export default function RootLayout({ children }) {
  // Solo cargaremos Plausible cuando:
  // 1) El build sea production, y
  // 2) El flag esté en "true" (hoy es "false")
  const enableAnalytics =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-primary text-light">
        {/* Plausible */}
        {enableAnalytics && (
          <Script
            strategy="lazyOnload" // no bloquea el render
            data-domain="okrices.com" // tu dominio canónico
            src="https://plausible.io/js/script.js"
          />
        )}

        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
