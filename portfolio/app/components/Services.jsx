import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Services = () => {
  return (
    <div id='services' className=' bg-[#252a41] w-full  px-[8%] py-10 scroll-mt-20 ' >
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
              
            </motion.div>
      
      <div className='grid grid-auto justify-between services-list my-10'>
        {serviceData.map(({icon,title,description,link},index)=>(
          <div key={index}
          className='bg-[var(--dark-hover)] border border-gray-800 rounded-[20px]  px-6  py-12   cursor-pointer hover:bg-[var(--dark-hover)]'
          >
            <Image src={icon} alt='' className='w-10'/>
            <h2 className='my-2 '>{title}</h2>
            <p className=''>{description}</p>
            <a href={link} className='group flex items-center gap-2 text-sm mt-4 '>Read more
              <Image src={assets.right_arrow_bold_dark} alt='' className='w-4 transform transition-transform duration-200 group-hover:translate-x-2' />
            </a>

          </div>
        ))}
      </div>
      <div className="services_model"></div>
    </div>
  )
}

export default Services
