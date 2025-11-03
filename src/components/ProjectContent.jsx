// src/components/ProjectContent.jsx
"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import EdgeContainer from "@/components/ui/EdgeContainer";

export default function ProjectContent({ project, t = {} }) {
  const getImageUrl = (img) => img?.asset?.url || null;
  const mainImageUrl = getImageUrl(project?.mainImage);
  const gallery = Array.isArray(project?.gallery)
    ? project.gallery.filter((img) => getImageUrl(img))
    : [];

  const TitleWithHighlight = ({ text }) => {
    if (!text) return null;
    const parts = text.split(" ");
    const lastWord = parts.pop();
    return (
      <>
        {parts.join(" ")} <span className="highlight">{lastWord}</span>
      </>
    );
  };

  return (
    <main className="min-h-screen text-light">
      {/* =======================================================
    Hero visual con bordes redondeados y márgenes laterales
    ======================================================= */}
      <Section
        spacing="pt-24 pb-8"
        className="relative overflow-hidden"
        withContainer={false}
        aria-label="project-hero"
      >
        {mainImageUrl && (
          <EdgeContainer className="relative" shadow>
            {/* 🔸 En móvil: fija el aspect ratio (igual que las miniaturas) */}
            {/* 4:3 en xs, 16:9 en sm; en md+ usamos altura en viewport */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:h-[70vh] lg:h-[80vh]">
              <Image
                src={mainImageUrl}
                alt={project?.mainImage?.alt || `${project?.title} hero`}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                className="object-cover"
              />
            </div>
          </EdgeContainer>
        )}
      </Section>

      {/* =======================================================
    2) Título + tipo de proyecto + overview (centrado verticalmente)
    ======================================================= */}
      <Section spacing="py-24 md:py-32" aria-labelledby="project-title">
        <Container>
          <div className="flex flex-col gap-6 md:gap-8 justify-center">
            <div>
              <h1
                id="project-title"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-3 md:mb-4"
              >
                {project?.title}
              </h1>
              {project?.projectType && (
                <p className="text-brand-cream/90 md:text-lg mb-4">
                  {project.projectType}
                </p>
              )}
            </div>

            {project?.overview && (
              <p className="max-w-4xl text-lg text-brand-cream opacity-90 text-justify md:text-xl leading-relaxed">
                {project.overview}
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* =======================================================
          4) Galería visual
          ======================================================= */}
      {gallery.length > 0 && (
        <Section
          spacing="py-24 md:py-32"
          aria-labelledby="gallery-title"
          withContainer={false}
        >
          <EdgeContainer className="grid grid-cols-1 gap-8">
            {gallery.map((img, index) => {
              if (index % 2 !== 0) return null;
              const nextImg = gallery[index + 1];
              const isReversed = (index / 2) % 2 !== 0;

              return (
                <div
                  key={img.asset?._id || index}
                  className="grid min-h-[650px] items-stretch gap-8 md:grid-cols-5"
                >
                  <div
                    className={isReversed ? "md:col-span-2" : "md:col-span-3"}
                  >
                    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-800">
                      <Image
                        src={img.asset.url}
                        alt={img.alt || `Gallery image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {nextImg && (
                    <div
                      className={isReversed ? "md:col-span-3" : "md:col-span-2"}
                    >
                      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-800">
                        <Image
                          src={nextImg.asset.url}
                          alt={nextImg.alt || `Gallery image ${index + 2}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 700px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </EdgeContainer>
        </Section>
      )}

      {/* =======================================================
          5) CTA final
          ======================================================= */}
      <Section spacing="py-24 md:py-32" aria-labelledby="project-cta-title">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="project-cta-title"
              className="text-3xl font-bold md:text-4xl"
            >
              {t?.cta?.title?.before ?? "Ready for your project to look this"}{" "}
              <span className="text-gradient">
                {t?.cta?.title?.highlight ?? "professional"}
              </span>
              {t?.cta?.title?.after ?? "?"}
            </h2>
            <p className="mt-4 mb-8 text-lg text-brand-cream opacity-90">
              {t?.cta?.description ??
                "Let’s talk about your brand and how we can take it to the next level."}
            </p>
            <Button href="/contact" variant="gradient">
              {t?.cta?.primary ?? "Start a Conversation"}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
