// src/components/home/Hero.jsx - CORREGIDO

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 pb-20">
      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center motion-safe:animate-fade-in">
          {/* 🔧 SOLUCIÓN: Cambiar text-variable por text-light */}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-6 text-light">
            Beyond <span className="text-gradient">the brand</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base text-brand-cream/90 md:text-lg">
            We create identities, experiences, and strategies that drive your
            brand's growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Button href="/contact" variant="gradient">
              Start your project
            </Button>
            <Button href="/portfolio" variant="secondary">
              View portfolio
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator (decorativo) */}
      {/* <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-80 motion-safe:animate-fade-in"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border-2 border-light/30">
          <span className="mt-2 block h-1.5 w-1.5 animate-scroll-dot rounded-full bg-accent" />
        </div>
      </div> */}
    </section>
  );
}
