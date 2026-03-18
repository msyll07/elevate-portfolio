"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className=" py-28 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          {/* TITLE */}
          <p className="text-sm text-gray-500 tracking-wide mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let’s build something great together
          </h2>

          {/* TEXT */}
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Have a project in mind or want to collaborate?  
            I’m always open to discussing new ideas and opportunities.
          </p>

          {/* BUTTON */}
          <a
            href="mailto:mbenesyll07@gmail.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            Contact Me
          </a>

        </motion.div>

      </div>
    </section>
  );
}