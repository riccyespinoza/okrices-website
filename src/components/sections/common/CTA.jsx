"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section, Container, Button } from "@/components/ui";

const containerVariants = (stagger = 0.2) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: stagger } },
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CTA({
  id = "site-cta",
  title,
  description,
  primary, // { label: string, href: string, variant?: string }
  secondary, // { label: string, href: string, variant?: string }
  spacing = "py-24 md:py-32",
  headingClassName = "text-3xl md:text-4xl font-bold mb-6 text-light",
  bodyClassName = "text-lg md:text-xl text-gray-300 mb-10",
}) {
  const prefersReduced = useReducedMotion();

  const containerAnim = prefersReduced
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.5 },
        variants: containerVariants(0.2),
      };

  const itemAnim = prefersReduced ? {} : { variants: itemVariants };

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
