import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div
       
      >
        <Image src={assets.me}
        className='rounded-full w-45'
        />
        
      </div>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
            Hello, my name is Sumanayak
        </motion.h3>
        <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.8, delay: 0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            Software Developer 
           <motion.p
           initial={ {opacity: 0}}
            whileInView={ {opacity: 1}}
            transition={ {duration: 0.6, delay: 0.7}}
           className='mx-auto max-w-3xl font-ovo'>I create what you envision.</motion.p>
        </motion.h1>
    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 1}}
        href="#contact"
         className='px-10 py-3 border border-white rounded-full bg-transparent text-white flex items-center gap-2'>Contact<Image src={assets.right_arrow_white} className='w-4' /> </motion.a>
        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 1.2}}
        href="/SumaNayak's_Resume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-black bg-white'>Resume<Image src={assets.download_icon} className='w-4' /> </motion.a>
    </div>
    </div>
  )
}

export default Header
