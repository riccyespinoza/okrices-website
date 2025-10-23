"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getDic } from "@/lib/i18n/config";

export default function ContactForm({ locale }) {
  const t = getDic(locale);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "UNKNOWN");

      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message || "UNKNOWN");
    }
  }

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

      <form className="space-y-6" onSubmit={onSubmit} noValidate>
        {/* Honeypot oculto */}
        <input
          type="text"
          name="hp"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

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
            inputMode="email"
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

        {/* Servicio */}
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
              <option key={i} className="text-neutral-900" value={opt}>
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

        <Button
          type="submit"
          variant="gradient"
          className="w-full rounded-lg"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? (t.pages.contact.form.sendingLabel ?? "Sending…")
            : t.pages.contact.form.submitLabel}
        </Button>

        {status === "ok" && (
          <p role="status" className="text-sm text-green-400">
            {t.pages.contact.form.successLabel ??
              "Message sent. We’ll be in touch soon."}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            {t.pages.contact.form.errorLabel ??
              "We couldn’t send your message. Please try again later."}
            {process.env.NODE_ENV !== "production" ? ` (${error})` : null}
          </p>
        )}
      </form>
    </motion.section>
  );
}
