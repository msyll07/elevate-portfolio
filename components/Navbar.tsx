"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-lg font-semibold text-gray-900">
          Elevate
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-black transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-lg text-sm">
          Let’s Talk
        </button>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-5"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 text-base hover:text-black"
              >
                {link.name}
              </Link>
            ))}

            <button className="w-full bg-black text-white py-3 rounded-lg">
              Let’s Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}