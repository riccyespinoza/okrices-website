"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// 👉 Relleno de ejemplo. Luego cámbialo por datos reales.
const testimonials = [
  {
    name: "Sarah L.",
    role: "CEO, BloomTech",
    avatar: "/avatars/avatar1.jpg",
    quote:
      "Okrices elevated our brand beyond expectations. Their attention to detail is unmatched.",
  },
  {
    name: "Jason R.",
    role: "Founder, GreenHub",
    avatar: "/avatars/avatar2.jpg",
    quote:
      "The website is fast, beautiful and easy to manage. Highly recommend working with them!",
  },
  {
    name: "María E.",
    role: "Marketing Lead, Viva Health",
    avatar: "/avatars/avatar3.jpg",
    quote:
      "Working bilingually was seamless. They truly understood our vision and delivered.",
  },
];

export default function TestimonialsInner() {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="backdrop-blur-md bg-light/5 border border-darkgray/40 rounded-2xl p-6 flex flex-col h-full"
        >
          <div className="flex items-center mb-4">
            <Image
              src={t.avatar}
              alt={t.name}
              width={48}
              height={48}
              className="rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-semibold text-light">{t.name}</p>
              <p className="text-text-muted text-sm">{t.role}</p>
            </div>
          </div>

          <p className="text-text-muted flex-1">“{t.quote}”</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
