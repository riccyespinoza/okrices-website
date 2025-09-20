// src/app/[lang]/projects/layout.js - LAYOUT ANIDADO (NO debe tener html/body)

export default function ProjectsLayout({ children }) {
  return (
    // Solo el contenido, SIN html, body, head, main
    <div className="projects-layout">{children}</div>
  );
}
