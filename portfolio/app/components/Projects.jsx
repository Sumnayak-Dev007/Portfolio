import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { FaRegCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from 'react'
import { useState } from "react"

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  return (
    <>
    <div id='projects' className='w-full  px-[12%] pt-4 scroll-mt-20 '>
    
      <h2 className='text-center flex items-center justify-center  text-4xl max-w-4xl md:text-5xl font-ovo pt-4'><span className='mr-3 md:mr-4'>Featured </span> <span>Projects</span> </h2>
      <p className='text-left max-w-2xl mx-auto mt-5 mb-12 text-base text-sm  md:text-[16px] '>
        Welcome to the portfolio! Explore these collection of projects
         built by me throughout my Web Dev journey.
      </p>
      </div>
    <section className="my-10">
  <div className="hidden md:grid grid-cols-1 gap-6 max-w-4xl mx-auto">
    {workData.map((project, index) => (
      <div
        key={index}
        className="project-card group relative border-b border-gray-400 rounded-2xl overflow-hidden shadow-lg bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] flex items-stretch"
      >
         <span className="side-border left"></span>
  <span className="side-border right"></span>
        {/* Left: Text Content */}
        <div className="flex flex-col justify-between flex-1 p-8">
          {/* Tag */}
          <h4 className="text-green-600 font-semibold uppercase tracking-wide mb-2">
            {project.tag} • {project.year}
          </h4>

          {/* Title + Live Button */}
          <div className="flex items-center justify-between mb-4 relative">
            <h2 className="text-white text-2xl font-bold relative inline-block pb-1">
              {project.title}
              <span className="absolute left-0 bottom-0 w-2/3 h-[2px] bg-gradient-to-r from-gray-400 via-gray-600 to-transparent"></span>
            </h2>

            
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
        <div className="relative">
        <div className="w-[360px] flex-shrink-0 flex items-center p-6">
          <Image
            src={project.bgImage}
            alt={project.title}
            width={350}
            height={220}
            className="rounded-xl object-cover w-full h-[220px]"
          />
          <a
              href={project.link}
              target="_blank"
              className="flex absolute right-7 bottom-4 z-100 items-center justify-center gap-2 px-2 py-1.5 border border-gray-400 text-white text-sm font-semibold hover:bg-gray-700 transition ml-4"
            >
              Live
              <Image alt="" src={assets.arrow_icon_dark} className="w-3" />
            </a>
        </div>
        </div>
      </div>
    ))}
  </div>

</section>
      {/* Mobile (slide container) */}
<div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-16 scrollbar-hide pb-6 mt-4">
  {workData.map((project, index) => (
    <div
      key={index}
      className={` bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] w-[280px] flex-shrink-0 rounded-2xl snap-center shadow-lg border border-gray-700 transition-transform duration-300 ${activeIndex === index ? "is-active" : ""}`}
    >
      <span className="side-border left"></span>
      <span className="side-border right"></span>
      

      {/* Image */}
      <div className="relative">
      <div
        className="h-36 w-[100%] md:h-36 bg-center bg-no-repeat bg-contain rounded-t-2xl"
        style={{ backgroundImage: `url(${project.bgImage})` }}
       
        
      />
      {/* Live Button */}
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute right-8 -bottom-1 z-10 bg-gray-800 px-2 py-1.5 border border-gray-300 hover:bg-gray-100 shadow transition font-semibold text-xs flex items-center gap-2"
    style={{ transform: 'translateY(50%)' }}
  >
    Live
    <Image alt="" src={assets.arrow_icon_dark} className="w-3" />
  </a>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        <h4 className="text-green-600 font-semibold text-xs uppercase tracking-wide mb-2">
          {project.tag} • {project.year}
        </h4>
        <h2 className=" relative inline-block pb-1  text-white text-base font-bold mb-1 break-words">{project.title}
          <span className="absolute left-0 bottom-0 w-2/3 h-[2px] bg-gradient-to-r from-gray-400 via-gray-600 to-transparent"></span>
        </h2>
        
        
        
        <p className="text-xs text-gray-400 mb-4 leading-relaxed break-words">
          {project.features}
        </p>

        {/* Tech stack */}
        <div className="mb-3 flex gap-1 flex-wrap">
          {project.stack.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-1 py-0.5 bg-gray-800 text-green-400 text-[8.5px] rounded-md break-words">{tech}</span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 bg-gray-700 text-white text-[10px] rounded-md">+{project.stack.length - 4}</span>
          )}
        </div>

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
