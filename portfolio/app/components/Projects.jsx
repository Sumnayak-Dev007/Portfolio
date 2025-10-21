import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { FaRegCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from 'react'
import { useState } from "react"
import { motion } from "motion/react"
import { ExternalLink, Github } from "lucide-react"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

const Projects = () => {
  return (
     <section id="projects" className="py-20 bg-[#22273a]">
      <div className="w-full mx-auto py-10 scroll-mt-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-ovo">
            My <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-gray-400 md:w-8/12 w-10/12 mx-auto text-sm sm:text-base">
            Explore these collection of projects I've built, ranging from responsive frontends to full-stack platforms. Each one helped me sharpen my craft.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-auto-p gap-6 p-4 services-list-p"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg  p-6 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 max-w-sm mx-auto"
              variants={itemVariants}
              whileHover={{ y: -4, opacity: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* IMAGE SECTION */}
              <div className="mb-4 overflow-hidden rounded-md">
                <img
                  src={project.bgImage}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover"
                />
              </div>

              {project.status === "ongoing" && (
                <div className="flex items-center gap-1 mb-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Ongoing</span>
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.features}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-slate-800 text-green-600 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Github size={16} />
                  View Code
                </motion.a> */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 cursor-pointer py-2 bg-green-800 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="text-center mt-12">
          <motion.a
            href="https://github.com/SlinkyCollins"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Github size={16} />
            View more on GitHub
          </motion.a>
        </div> */}

      </div>
    </section>
  )
}

export default Projects
