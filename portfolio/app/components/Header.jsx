import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
 <section className="w-full px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 min-h-screen flex flex-col md:flex-row md:justify-between items-center gap-12 pt-20">
  <div className="flex justify-center items-center md:justify-start flex-col md:flex-row ml-4 sm:ml-8 relative">
  {/* Green border arc */}
  <div className="absolute -left-5 sm:-left-8 md:-left-10 w-0 h-0 sm:w-60 sm:h-60 md:w-88 md:h-88 border-8 border-green-400 rounded-l-full border-r-0 border-b-0 border-t-0"></div>

  {/* Profile image */}
  <Image
    src={assets.me}
    alt="Sumanayak"
    className="rounded-full shadow-lg object-cover w-44 h-44 sm:w-55 sm:h-55 md:w-82 md:h-82"
  />
</div>



  {/* Right - Intro Text */}
  <div className="text-center md:text-left flex flex-col items-center md:items-start ">
    <motion.p
  initial={{ opacity: 0, y: -15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-gray-200 font-bold text-4xl sm:text-5xl md:text-6xl mb-3"
>

  <span className="mt-4 block text-gray-200 font-bold font-medium text-4xl sm:text-5xl md:text-6xl">
   Hi,I am
  </span>
</motion.p>

<motion.h1
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
>
  <span className="bg-clip-text ">
    Suman Nayak
  </span>
</motion.h1>

<motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-2xl sm:text-3xl md:text-4xl mt-4 font-semibold text-gray-200"
>
  
  <span className="text-green-400">
    Software Developer
  </span>
</motion.h2>


    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-4 text-gray-400 max-w-lg"
    >
      I am dedicated to building applications that give reader a visual treat 
      with highly functional and intuitive design.
    </motion.p>

    {/* Traits Section */}
{/* <div className="flex flex-col gap-4 mt-6 absolute top-180 left-20 justify-center md:justify-start">
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
    className="px-4 py-2 text-white text-sm sm:text-base font-medium"
  >
    Curious Learner: Always exploring new tech, AI, and best practices.
  </motion.div>

  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
    className="px-4 py-2 text-white text-sm sm:text-base font-medium"
  >
    Detail-Oriented: Focused on clean, maintainable code and polished UI.
  </motion.div>
</div> */}
    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      <motion.a 
      initial={{ y: 30, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{
    delay: 1,
    type: "spring",
    stiffness: 50,
    damping: 40,
  }} 
      href="#contact" 
      className="px-10 py-3 border border-green-400 rounded-full bg-transparent text-white font-semibold flex items-center gap-2 transition-all" > Contact 
      <Image src={assets.right_arrow_bold_dark} className="w-4" alt="arrow" /> 
      </motion.a> 
      
      <motion.a 
      initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    delay: 1.2,
    type: "spring",
    stiffness: 50,
    damping: 40,
  }}
      href="/SumaNayak's_Resume.pdf" download className="px-10 py-3  border-2 rounded-full border-green-400 flex items-center gap-2 text-black bg-white hover:bg-green-200 transition-all" > 
      Resume <Image src={assets.download_icon} className="w-4" alt="download" />
      </motion.a>
      
      </div>
    {/* Social Icons */}
<div className="flex items-center gap-6 mt-6">
  <a
    href="https://github.com/Sumnayak-Dev007"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-2xl"
  >
    <FaGithub />
  </a>
  <a
      href="https://x.com/Sumanayak__"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-2xl"
    >
      <FontAwesomeIcon icon={faXTwitter} />
    </a>
  <a
    href="https://instagram.com/__sumanayak__"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-2xl"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.linkedin.com/in/sumanknayak/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-2xl"
  >
    <FaLinkedin />
  </a>
</div>
  </div>
</section>

  );

}

export default Header
