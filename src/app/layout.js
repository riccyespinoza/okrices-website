import "./globals.css";

export const metadata = {
  title: "OkRices Website", 
  description: "Website con Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
