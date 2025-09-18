// src/components/shared/SkipToContent.jsx
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-3 left-3 z-[200] bg-accent text-light px-3 py-2 rounded transition-transform duration-200"
    >
      Skip to content
    </a>
  );
}
