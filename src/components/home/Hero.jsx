// src/components/home/Hero.jsx
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero({ title, subclaim, primary, secondary }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 pb-20">
      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center motion-safe:animate-fade-in">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-6 text-light">
            {/* Mantén tu estética de gradiente envolviendo una palabra si quieres */}
            {title}
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base text-brand-cream/90 md:text-lg">
            {subclaim}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Button href={primary.href} variant="gradient">
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
