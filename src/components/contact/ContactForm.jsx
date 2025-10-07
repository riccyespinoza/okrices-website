// src/components/contact/ContactForm.jsx
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getDic } from "@/lib/i18n/config";

export default function ContactForm({ locale }) {
  const t = getDic(locale);

  return (
    <motion.section
      id="contact-form"
      aria-labelledby="contact-form-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-xl border border-white/5 p-8 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h2
        id="contact-form-title"
        className="mb-6 text-2xl font-bold text-light"
      >
        {t.pages.contact.form.title}
      </h2>

      <form className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-gray-300">
            {t.pages.contact.form.fields.name.label}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input-field w-full"
            placeholder={t.pages.contact.form.fields.name.placeholder}
          />
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-gray-300">
            {t.pages.contact.form.fields.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-field w-full"
            placeholder={t.pages.contact.form.fields.email.placeholder}
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="company" className="mb-1 block text-sm text-gray-300">
            {t.pages.contact.form.fields.company.label}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="input-field w-full"
            placeholder={t.pages.contact.form.fields.company.placeholder}
          />
        </div>

        {/* Servicio de interés */}
        <div>
          <label htmlFor="service" className="mb-1 block text-sm text-gray-300">
            {t.pages.contact.form.fields.service.label}
          </label>
          <select id="service" name="service" className="input-field w-full">
            {t.pages.contact.form.serviceOptions.map((opt, i) => (
              <option key={i}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-gray-300">
            {t.pages.contact.form.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="input-field w-full resize-none"
            placeholder={t.pages.contact.form.fields.message.placeholder}
          />
        </div>

        <Button type="submit" variant="secondary" className="w-full">
          {t.pages.contact.form.submitLabel}
        </Button>
      </form>
    </motion.section>
  );
}
