"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white pt-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-gray-500 mb-4 tracking-wide">
              DIGITAL CREATOR & DEVELOPER
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              I build modern <br />
              websites that <br />
              convert.
            </h1>

            <p className="mt-6 text-gray-600 max-w-md">
              Helping brands and businesses stand out with clean design,
              powerful UI, and modern web experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                View Work
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop"
                alt="Workspace"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
                priority
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}