import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { FaRegCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from 'react'

const Projects = () => {
  return (
    <>
    <div id='projects' className='w-full  px-[12%] pt-4 scroll-mt-20 '>
    
      <h2 className='text-center text-5xl font-ovo pt-4'>Featured Projects</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-nunito-v3'>
        Welcome to the portfolio! Explore these collection of projects
         built by me throughout my Web Dev journey.
      </p>
      </div>
    <section className="my-10">
  <div className="hidden md:grid grid-cols-1 gap-6 max-w-4xl mx-auto">
    {workData.map((project, index) => (
      <div
        key={index}
        className="group relative border-b border-gray-400 rounded-2xl overflow-hidden shadow-lg bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] flex items-stretch"
      >
        {/* Left: Text Content */}
        <div className="flex flex-col justify-between flex-1 p-8">
          {/* Tag */}
          <h4 className="text-green-600 font-semibold uppercase tracking-wide mb-2">
            {project.tag} • {project.year}
          </h4>

          {/* Title + Live Button */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold relative inline-block pb-1">
              {project.title}
              <span className="absolute left-0 bottom-0 w-2/3 h-[2px] bg-gradient-to-r from-gray-400 via-gray-600 to-transparent"></span>
            </h2>

            <a
              href={project.link}
              target="_blank"
              className="flex items-center justify-center gap-2 px-5 py-1.5 border border-gray-400 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition ml-4"
            >
              Live
              <Image alt="" src={assets.arrow_icon_dark} className="w-3" />
            </a>
          </div>

          {/* Features */}
          <p className="text-sm text-gray-400 mb-4 leading-relaxed max-w-lg">
            {project.features}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.stack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 bg-gray-800 text-green-400 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-md">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Right: Fixed Image */}
        <div className="w-[360px] flex-shrink-0 flex items-center p-6">
          <Image
            src={project.bgImage}
            alt={project.title}
            width={350}
            height={220}
            className="rounded-xl object-cover w-full h-[220px]"
          />
        </div>
      </div>
    ))}
  </div>

</section>
      {/* Mobile (slide container) */}
       {/* Mobile / Small Screen Layout */}
  <div className="flex
    overflow-x-auto
    snap-x
    snap-mandatory
    gap-4
    px-4
    scrollbar-hide
    pb-6
    mt-4
    sm:grid
    sm:grid-cols-2
    sm:gap-4
    sm:px-6
    sm:overflow-x-visible">
    {workData.map((project, index) => (
      <div
        key={index}
        className=" min-w-[90vw]
        max-w-[90vw]
        sm:min-w-0
        sm:max-w-full
        bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')]
        rounded-2xl
        snap-center
        shadow-lg
        border
        border-gray-700
        flex-shrink-0
        transition-transform
        duration-300
        transform
        hover:z-10
        hover:-translate-y-2
        hover:scale-[1.03]"
      >
        <div className="h-32 md:h-36 bg-center bg-no-repeat bg-contain rounded-t-2xl"
          style={{ backgroundImage: `url(${project.bgImage})` }}
          aria-label={`${project.title} image`}
        />
        <div className="p-4 flex flex-col">
          <h2 className="text-white text-base font-bold mb-1 break-words">
            {project.title}
          </h2>
          <p className="text-gray-400 text-xs mb-2 line-clamp-2 break-words">
            {project.description}
          </p>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {project.features}
          </p>
          <div className="mb-3 flex gap-1 flex-wrap">
            {project.stack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-1 py-0.5 bg-gray-800 text-green-400 text-[8.5px] rounded-md break-words"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-0.5 bg-gray-700 text-white text-[10px] rounded-md">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1 border border-green-600 text-green-600 text-xs font-medium px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* Swipe hint for mobile */}
  <div className="md:hidden flex items-center justify-between mt-2 px-6 text-gray-400 text-sm select-none">
    <FaChevronLeft className="text-gray-500" />
    <span className="text-xs">Swipe to explore projects</span>
    <FaChevronRight className="text-gray-500" />
  </div>
  </>
  )
}

export default Projects
