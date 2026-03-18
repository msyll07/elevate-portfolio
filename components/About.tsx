"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

    
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* SMALL TITLE */}
            <p className="text-sm text-gray-500 mb-4 tracking-wide">
              ABOUT ME
            </p>

            {/* BIG TITLE */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              I design and build <br /> digital experiences that matter.
            </h2>

            {/* TEXT */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              I’m a passionate developer focused on creating modern,
              user-friendly websites and applications. My goal is to help
              businesses grow through clean design, strong performance,
              and meaningful user experiences.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From concept to launch, I work closely with clients to turn
              ideas into powerful digital products that stand out.
            </p>

            {/* STATS */}
            <div className="mt-8 flex gap-10">

              <div>
                <p className="text-2xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-500">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">2+</p>
                <p className="text-sm text-gray-500">Years Learning</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500">Passion</p>
              </div>

            </div>

          </motion.div>

                {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop"
                alt="About"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </motion.div>


        </div>

      </div>
    </section>
  );
}