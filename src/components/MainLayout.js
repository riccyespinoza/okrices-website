import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-background text-text-primary px-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
