import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Okrices",
  description: "Visual Identity & Web Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={outfit.variable} suppressHydrationWarning>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
