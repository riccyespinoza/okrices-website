"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProjectsGrid({ projects }) {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {projects.map((p, i) => (
        <motion.div
          key={p._id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md border border-white/10
                     rounded-xl overflow-hidden hover:shadow-lg
                     hover:-translate-y-1 transition"
        >
          <Link href={`/projects/${p.slug.current}`}>
            <img
              src={p.image?.asset?.url}
              alt={p.image?.alt || p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-mutedgray text-sm line-clamp-3">
                {p.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
