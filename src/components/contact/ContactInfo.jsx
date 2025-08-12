// src/components/contact/ContactInfo.jsx
"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      {/* Other Ways to Connect */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card-advanced p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition"
      >
        <h3 className="text-lg font-semibold mb-4">Other Ways to Connect</h3>

        <div className="space-y-3 text-gray-300">
          <p className="flex items-center gap-2">
            <FaWhatsapp className="text-accent" />
            <span>WhatsApp: +1 (234) 567 8900</span>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-accent" />
            <a href="mailto:info@okrices.com" className="hover:underline">
              info@okrices.com
            </a>
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Location & Hours */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="glass-card-advanced p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition"
      >
        <h3 className="text-lg font-semibold mb-3">Location & Hours</h3>
        <p className="text-gray-300">
          We’re proudly based in Fort Lauderdale, Florida, serving clients
          locally and remotely.
        </p>
        <p className="text-gray-300 mt-2">
          <strong>Hours:</strong> Mon–Fri, 9:00 AM – 5:00 PM (ET)
        </p>
      </motion.div>

      {/* Closing note */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card-advanced p-6 rounded-xl text-center hover:-translate-y-1 hover:shadow-lg transition"
      >
        <h3 className="text-lg font-semibold mb-2">
          We'd Love to Hear from You
        </h3>
        <p className="text-gray-300">
          Have a question or need clarity? Feel free to reach out directly—no
          obligation, just friendly advice.
        </p>
      </motion.div>
    </div>
  );
}
