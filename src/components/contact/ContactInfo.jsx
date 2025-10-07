// src/components/contact/ContactInfo.jsx
"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { getDic } from "@/lib/i18n/config";

export default function ContactInfo({ locale }) {
  const t = getDic(locale);
  const email = t.pages.contact.info.email;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-xl border border-white/5 p-8 space-y-6"
      aria-labelledby="contact-info-title"
    >
      <h3 id="contact-info-title" className="mb-4 text-xl font-bold text-light">
        {t.pages.contact.info.title}
      </h3>

      <div className="space-y-3 text-brand-cream/90">
        <p className="flex items-center gap-3">
          <FaEnvelope className="text-accent" aria-hidden="true" />
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </p>

        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-accent" aria-hidden="true" />
          <span>{t.pages.contact.info.location}</span>
        </p>
      </div>
    </motion.aside>
  );
}
