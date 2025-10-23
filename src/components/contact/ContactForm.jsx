"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getDic } from "@/lib/i18n/config";

/* ---------------- Toast ---------------- */
function Toast({ open, type = "success", message, onClose }) {
  if (typeof document === "undefined") return null;

  const color =
    type === "success"
      ? "border-emerald-500/40 text-emerald-200"
      : type === "warn"
        ? "border-yellow-500/40 text-yellow-200"
        : "border-red-500/40 text-red-200";

  const Icon = () =>
    type === "success" ? (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mt-0.5"
      >
        <path
          fill="currentColor"
          d="M12 22a10 10 0 1 1 0-20a10 10 0 0 1 0 20m-1.1-6.2l6.2-6.2l-1.4-1.4l-4.8 4.8l-2.5-2.5l-1.4 1.4z"
        />
      </svg>
    ) : type === "warn" ? (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mt-0.5"
      >
        <path
          fill="currentColor"
          d="M1 21h22L12 2zM12 16h-1v-5h2v5zm0 4h-2v-2h2z"
        />
      </svg>
    ) : (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mt-0.5"
      >
        <path
          fill="currentColor"
          d="M12 22a10 10 0 1 1 0-20a10 10 0 0 1 0 20m-1-6h2v2h-2zm0-8h2v6h-2z"
        />
      </svg>
    );

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.18 }}
          className="fixed bottom-6 right-6 z-[100]"
          role="status"
          aria-live="polite"
        >
          <div
            className={`flex items-start gap-3 rounded-xl border ${color} bg-neutral-900/80 backdrop-blur p-4 shadow-xl`}
          >
            <Icon />
            <p className="text-sm leading-snug">{message}</p>
            <button
              onClick={onClose}
              aria-label="Close notification"
              className="ml-3 rounded text-white/60 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="m13.41 12l5.3-5.29l-1.42-1.42L12 10.59L6.71 5.29L5.29 6.71L10.59 12l-5.3 5.29l1.42 1.42L12 13.41l5.29 5.3l1.42-1.42z"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
/* -------------- /Toast ----------------- */

export default function ContactForm({ locale }) {
  const t = getDic(locale);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | invalid | error
  const [error, setError] = useState("");

  // Toast state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("success"); // success | warn | error

  function showToast(msg, type = "success") {
    setToastMsg(msg);
    setToastType(type);
    setToastOpen(true);
    // auto-close in 4s
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToastOpen(false), 4000);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return; // avoid double submit
    setStatus("sending");
    setError("");

    const form = e.currentTarget; // keep a stable ref
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json") ? await res.json() : null;

      if (res.status === 400 || data?.error === "INVALID_INPUT") {
        setStatus("invalid");
        showToast(
          t.pages.contact.form.invalidLabel ??
            "Please complete all required fields.",
          "warn"
        );
        return;
      }

      if (!res.ok || !data?.ok)
        throw new Error(data?.error || `HTTP_${res.status}`);

      form.reset();
      setStatus("ok");
      showToast(
        t.pages.contact.form.successLabel ??
          "Your message was sent successfully. We'll get back to you soon.",
        "success"
      );
    } catch (err) {
      setStatus("error");
      setError(err?.message || "UNKNOWN");
      showToast(
        t.pages.contact.form.errorLabel ??
          "We couldn’t send your message. Please try again later.",
        "error"
      );
    }
  }

  function handleChange() {
    if (status === "error" || status === "invalid") {
      setStatus("idle");
      setError("");
    }
  }

  return (
    <>
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

        <form
          className="space-y-6"
          onSubmit={onSubmit}
          onChange={handleChange}
          noValidate
        >
          {/* Honeypot */}
          <input
            type="text"
            name="hp"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          {/* Locale para auto-reply */}
          <input type="hidden" name="locale" value={locale} />

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

          {/* Si quieres, puedes dejar estos mensajes inline además del toast */}
          <div aria-live="polite" aria-atomic="true">
            {status === "ok" && (
              <p className="mt-4 rounded-md bg-green-800/30 border border-green-600/50 text-green-300 p-3 text-sm text-center">
                {t.pages.contact.form.successLabel ??
                  "Message sent. We’ll be in touch soon."}
              </p>
            )}
            {status === "invalid" && (
              <p className="mt-4 rounded-md bg-yellow-800/30 border border-yellow-600/50 text-yellow-200 p-3 text-sm text-center">
                {t.pages.contact.form.invalidLabel ??
                  "Please complete all required fields."}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-md bg-red-800/30 border border-red-600/50 text-red-300 p-3 text-sm text-center">
                {t.pages.contact.form.errorLabel ??
                  "We couldn’t send your message. Please try again later."}
                {process.env.NODE_ENV !== "production" ? ` (${error})` : null}
              </p>
            )}
          </div>
        </form>
      </motion.section>

      {/* Toast */}
      <Toast
        open={toastOpen}
        type={toastType}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}
