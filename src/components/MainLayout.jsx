// src/app/components/MainLayout.jsx

import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
