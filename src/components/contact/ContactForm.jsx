// src/components/contact/ContactForm.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card-advanced p-6 md:p-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-6">Quick Contact Form</h2>

      <form
        action="https://formspree.io/f/YOUR_FORMSPREE_ID"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm mb-1 text-gray-300">Name *</label>
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-md bg-[#0D1521]/40 border border-white/10 px-4 py-3 text-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-md bg-[#0D1521]/40 border border-white/10 px-4 py-3 text-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Phone</label>
          <input
            name="phone"
            placeholder="(optional)"
            className="w-full rounded-md bg-[#0D1521]/40 border border-white/10 px-4 py-3 text-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Tell us briefly about your project *
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Goals, timeline, references…"
            className="w-full rounded-md bg-[#0D1521]/40 border border-white/10 px-4 py-3 text-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-gradient">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
