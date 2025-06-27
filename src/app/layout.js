import "./globals.css";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Okrices – Visual Identity & Web Studio",
  description: "Transforming ideas into clear and functional brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
