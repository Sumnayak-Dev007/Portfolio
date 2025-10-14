import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const About = () => {
  return (
    <motion.div id='about' className='w-full md:px-[12%] px-[17px] pb-10 pt-6 flex flex-col items-center'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
      <span className='w-full py-10'>                        </span>
      
    <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold  font-ovo">
                About <span className="text-green-500">me</span>
              </h2>
              
            </motion.div>
    

  <motion.div 
      initial={{opacity: 0}}
      whileInView={ {opacity: 1}}
      transition={ {duration: 0.8}}
  className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 mb-16 md:mt-7 '>
    <div className='flex flex-col items-center lg:items-start'>
      <p className='mb-10 text-left text-[1rem] lg:text-left text-white/80 about-text-p '>
        
                I'm a Software Developer with expertise in Django, Python, Tailwind CSS, SQL, JavaScript, jQuery, and Bootstrap. I specialize in building scalable, high-performance web applications that deliver seamless user experiences. With a passion for backend architecture and system optimization, I enjoy solving complex challenges and refining applications for efficiency and speed. I'm always eager to learn new technologies and improve my craft. Currently, I'm looking for exciting opportunities to contribute to innovative teams that value growth and creativity in tech.
            </p>
            <div className="w-full flex flex-col items-center ">
            <motion.ul 
            initial={{opacity: 0, y: -20}}
            whileInView={ {opacity: 1, y: 0}}
            transition={ {duration: 0.5, delay: 0.5}}
            className='grid grid-cols-1 sm:grid-cols-4 gap-6   mx-4 md:mx-0 '>
                {infoList.map(({iconDark,title,description},index)=>(
                    <motion.li
                    
                    whileHover={ {scale: 1.05}}
                    className='border-[0.5px] border-gray-400 rounded-xl p-6 rounded-xl hover:-translate-y-2 duration-500 hover-shadow-white hover:bg-[var(--dark-hover)]/50'
                    key={index}>
                        <Image src={iconDark} alt='' className='w-7 mt--3'/>
                        <h3 className='my-4 font-semibold text-white'>{title}</h3>
                        <p className='font-nunito-v2 text-sm'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <div className="mt-6 w-full flex flex-col ">
  <motion.h4 
  initial={{y:20, opacity: 0}}
      whileInView={ {y:0 , opacity: 1}}
      transition={ {delay:0.5 , duration: 0.5}}
  className="mb-4 text-white ml-5 md:ml-0  sm:ml-0 md:max-w-full font-ovo lg:mr-4">Tools I use</motion.h4>
  <motion.ul
  
  initial={{opacity: 0}}
  whileInView={ {opacity: 1}}
  transition={ {delay:0.8 , duration: 0.8}}
      
  className="flex flex-wrap justify-start ml-5 md:ml-0  sm:ml-0 mx-auto md:mx-0 items-center gap-3 sm:gap-5">
    {toolsData.map((tool, index) => (
      <motion.li
      
      whileHover={ {scale:1.05}}

        key={index}
        className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-2 duration-500"
      >
        <Image src={tool} alt="" className="w-5 sm:w-7" />
      </motion.li>
    ))}
  </motion.ul>
</div>
</div>
        </div>
    </motion.div>
    </motion.div>
  )
}

export default About