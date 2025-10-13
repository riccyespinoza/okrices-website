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
      className="glass-effect rounded-2xl border border-white/5 p-6 md:p-8 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h2
        id="contact-form-title"
        className="mb-6 text-2xl font-bold text-light"
      >
        {t.pages.contact.form.title}
      </h2>

      <form className="space-y-6">
        {/* Nombre */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            {t.pages.contact.form.fields.name.label}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-field"
            placeholder={t.pages.contact.form.fields.name.placeholder}
          />
        </div>

        {/* Correo */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            {t.pages.contact.form.fields.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-field"
            placeholder={t.pages.contact.form.fields.email.placeholder}
          />
        </div>

        {/* Empresa */}
        <div className="form-group">
          <label htmlFor="company" className="form-label">
            {t.pages.contact.form.fields.company.label}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="form-field"
            placeholder={t.pages.contact.form.fields.company.placeholder}
          />
        </div>

        {/* Servicio de interés */}
        <div className="form-group">
          <label htmlFor="service" className="form-label">
            {t.pages.contact.form.fields.service.label}
          </label>
          <select
            id="service"
            name="service"
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled hidden>
              {t.pages.contact.form.fields.service.placeholder ??
                "Select an option"}
            </option>
            {t.pages.contact.form.serviceOptions.map((opt, i) => (
              <option key={i} className="text-neutral-900">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Mensaje */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            {t.pages.contact.form.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="form-textarea"
            placeholder={t.pages.contact.form.fields.message.placeholder}
          />
        </div>

        <Button type="submit" variant="secondary" className="w-full rounded-lg">
          {t.pages.contact.form.submitLabel}
        </Button>
      </form>
    </motion.section>
  );
}
