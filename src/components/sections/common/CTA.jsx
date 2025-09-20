"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/components/animations/inView";

function SiteCTA({
  id = "site-cta",
  title,
  description,
  primary,
  secondary,
  spacing = "py-24 md:py-32",
  headingClassName = "text-3xl md:text-4xl font-bold mb-6 text-light",
  bodyClassName = "text-lg md:text-xl text-gray-300 mb-10",
}) {
  const prefersReduced = useReducedMotion();

  const containerAnim = prefersReduced
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.5 },
        variants: staggerContainer(0.2),
      };

  const itemAnim = prefersReduced ? {} : { variants: fadeUp };

  return (
    <Section spacing={spacing} aria-labelledby={id}>
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          {...containerAnim}
        >
          <motion.h2 id={id} className={headingClassName} {...itemAnim}>
            {title}
          </motion.h2>

          {description && (
            <motion.p className={bodyClassName} {...itemAnim}>
              {description}
            </motion.p>
          )}

          <motion.div className="flex gap-4 justify-center" {...itemAnim}>
            {primary && (
              <Button
                href={primary.href}
                variant={primary.variant || "gradient"}
              >
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button
                href={secondary.href}
                variant={secondary.variant || "ghost"}
              >
                {secondary.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default SiteCTA;
