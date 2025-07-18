"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ project, index }) {
  const { title, description, image, slug } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="bg-mutedgray/10 border border-darkgray rounded-xl
                 overflow-hidden hover:border-accent transition"
    >
      <Link href={`/projects/${slug.current}`}>
        {image?.asset?.url && (
          <img
            src={image.asset.url}
            alt={image?.alt || title}
            className="w-full h-44 object-cover"
          />
        )}

        <div className="p-6">
          <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
          <p className="text-text-muted line-clamp-3">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
