import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { FaRegCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from 'react'

const Projects = () => {
  return (
    <div id='work' className='w-full  px-[12%] py-10 scroll-mt-20 '>
    
      <h2 className='text-center text-5xl font-ovo'>Featured Projects</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-nunito-v3'>
        Welcome to the portfolio! Explore these collection of projects
         built by me throughout my Web Dev journey.
      </p>

       <section className="my-10 ">
      {/* Desktop Grid (2-column layout) */}
      <div className="hidden lg:grid grid-cols-1 gap-10 ">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group border border-gray-400 rounded-2xl overflow-hidden shadow-lg flex"
          >
            {/* Left Content */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-green-600 font-semibold uppercase tracking-wide mb-2">
                  {project.tag} • {project.year}
                </h4>
                <h2 className="text-white text-2xl font-bold mb-2">
                  {project.title}
                </h2>
                <hr className='text-gray-400 mb-2' />
                <ul className="space-y-2 text-gray-300 mb-4">
  {project.features.map((f, i) => (
    <li key={i} className="flex items-start gap-2">
      <FaRegCheckCircle className="text-gray-400 text-xs mt-2 flex-shrink-0" />
      <span className='text-white/80' >{f}</span>
    </li>
  ))}
</ul>
                
              </div>

              {/* Tech Stack */}
              <div className="">
                <h3 className="text-gray-200 font-semibold mb-1">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-green-600 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex flex-col p-6 rounded-xl">
  {/* Image (takes top space) */}
  <div className="flex-grow">
    <Image
      src={project.bgImage}
      alt={project.title}
      width={500}
      height={600}
      className="rounded-xl w-full object-cover"
    />
  </div>

  {/* Button (bottom right) */}
  <a
    href={project.link}
    target="_blank"
    className="mt-4 self-end flex items-center justify-center gap-2 px-6 py-2 border font-semibold border-white/50 rounded-full hover:bg-gray-600 transition"
  >
    Live
    <Image alt="" src={assets.arrow_icon_dark} className="w-3" />
  </a>
</div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
<div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-2 scrollbar-hide">
  {workData.map((project, index) => (
    <div
      key={index}
      className="min-w-[100%] max-w-[100%] bg-gray-900 rounded-2xl snap-center shadow-lg border border-gray-700 flex-shrink-0"
    >
      {/* Project Image */}
      <div
        className="h-32  bg-contain bg-center bg-no-repeat rounded-t-2xl ml-0 px-0"
        style={{ backgroundImage: `url(${project.bgImage})` }}
      ></div>

      {/* Content */}
      <div className="p-4 px-[10px] flex flex-col">
        {/* Title & Description */}
        <h2 className="text-white text-base font-bold mb-1 break-words">
          {project.title}
        </h2>
        <p className="text-gray-400 text-xs mb-2 line-clamp-2 break-words">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-1 text-gray-300 text-xs mb-3">
          {project.features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-start gap-2 break-words">
              <FaRegCheckCircle className="text-gray-400 text-[10px] mt-0.5 flex-shrink-0" />
              <span className="text-white/80 break-words">{f}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mb-3 flex gap-1">
          {project.stack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-1 py-0.5 bg-gray-800 text-green-400 text-[8.5px] rounded-md break-words"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-700 text-white text-[10px] rounded-md">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Live Button */}
        <a
          href={project.link}
          target="_blank"
          className="ml-auto inline-flex items-center gap-1 border-[0.2] border-gray-400 text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Live
          <Image alt="" src={assets.arrow_icon_dark} className="w-3" />
        </a>
      </div>
    </div>
  ))}

</div>
<div className="md:hidden block sm:hidden flex items-center justify-between mt-4 px-6 text-gray-400 text-sm">
    <FaChevronLeft className="text-gray-500" />
    <span className="text-xs">Swipe to explore projects</span>
    <FaChevronRight className="text-gray-500" />
  </div>
    </section>
      
    </div>
  )
}

export default Projects
