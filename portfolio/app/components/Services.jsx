import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Services = () => {
  return (
    <div id='services' className='w-full  px-[8%] py-10 scroll-mt-20 ' >
      <h4 className='text-center mb-2 text-lg font-ovo'> What I Offer</h4>
      <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold  mb-4 font-ovo">
                My <span className="text-green-500">Services</span>
              </h2>
              <p className='text-gray-400 max-w-2xl mx-auto text-sm sm:text-base'>
          I have Designed multiple websites with dynamic UI/UX.
         </p>
            </motion.div>
      
      <div className='grid grid-auto gap-6 my-10'>
        {serviceData.map(({icon,title,description,link},index)=>(
          <div key={index}
          className='border border-gray-400 rounded-lg px-8  py-12 hover-shadow-white cursor-pointer hover:bg-[var(--dark-hover)] hover:-translate-y-1 duration-500'
          >
            <Image src={icon} alt='' className='w-10'/>
            <h3 className='my-4 text-[20px] text-white'>{title}</h3>
            <p className='services-list-p '>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more
              <Image src={assets.right_arrow} alt='' className='w-4' />
            </a>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
