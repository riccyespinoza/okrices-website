// src/components/MainLayout.jsx - SIN main anidado

import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {/* NO usar <main> aquí para evitar anidamiento */}
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
