"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-light px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-medium tracking-tight">
          Okrices
        </Link>
        <nav className="space-x-6 text-sm sm:text-base">
          <Link href="/about" className="hover:text-accent transition">
            About
          </Link>
          <Link href="/services" className="hover:text-accent transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-accent transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-accent transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
