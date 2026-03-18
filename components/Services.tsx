"use client";

import { motion } from "framer-motion";
import { Code, Layout, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Layout size={28} />,
      title: "Web Design",
      desc: "Modern, clean, and user-focused designs that elevate your brand.",
    },
    {
      icon: <Code size={28} />,
      title: "Web Development",
      desc: "Fast, responsive, and scalable websites built with modern technologies.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Launch & Optimization",
      desc: "Deploy your project and optimize performance for the best results.",
    },
  ];

  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-16 text-center">
          <p className="text-sm text-gray-500 tracking-wide mb-3">
            SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What I can do for you
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition"
            >
              <div className="mb-5 text-black">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}