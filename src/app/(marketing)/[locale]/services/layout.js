// src/app/[lang]/services/layout.js
export const metadata = {
  title: "Services · Okrices",
  description: "Our service offerings.",
};

export default function ServicesLayout({ children }) {
  // Los layouts de segmento NO deben renderizar <html> ni <body>.
  // Deja solo un wrapper opcional o devuelve {children} directamente.
  return <>{children}</>;
}
