"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Aura Store",
    desc: "Modern e-commerce website with smooth UI and premium product experience.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },{
    title: "Finova App",
    desc: "Finance app UI focused on clean dashboard experience and user clarity.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Nova SaaS",
    desc: "High-converting SaaS landing page designed for startups and growth.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Marsel AI",
    desc: "AI interface concept focused on simplicity and modern interaction.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  
];
export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-20 text-center">
          <p className="text-sm text-gray-500 tracking-wide mb-3">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Selected Projects
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >

              {/* IMAGE */}
              <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {project.desc}
              </p>

              <a
                href={project.link}
                className="inline-block mt-4 text-sm font-medium text-black border-b border-black hover:opacity-70 transition"
              >
                View Project →
              </a>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}