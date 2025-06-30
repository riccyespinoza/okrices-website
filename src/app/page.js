export default function HomePage() {
  return (
    <main className="bg-primary text-light flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Welcome to <span className="text-accent">Okrices</span>
      </h1>
      <p className="mt-4 text-lg text-cream max-w-xl">
        Your brand deserves to be clear, functional, and elegant. Let’s build it
        together.
      </p>
      <a
        href="/services"
        className="mt-8 bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-105"
      >
        Explore our services
      </a>
    </main>
  );
}
