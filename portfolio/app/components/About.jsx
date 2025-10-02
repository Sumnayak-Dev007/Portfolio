import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] pb-10 pt-6 flex flex-col items-center'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
      <span className='w-full py-10'>                        </span>
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={ {opacity: 1, y: 0}}
      transition={ {duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-ovo'>About me</motion.h2>
    
    

  <motion.div 
      initial={{opacity: 0}}
      whileInView={ {opacity: 1}}
      transition={ {duration: 0.8}}
  className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 mb-16 mt-12'>
    <div className='flex-1 flex flex-col items-center lg:items-start'>
      <p className='mb-10 max-w-4xl text-center lg:text-left text-white/80 font-nunito mx-auto leading-relaxed'>
        
                I'm a Full Stack Developer with expertise in Django, Python, Tailwind CSS, SQL, JavaScript, jQuery, and Bootstrap. I specialize in building scalable, high-performance web applications that deliver seamless user experiences. With a passion for backend architecture and system optimization, I enjoy solving complex challenges and refining applications for efficiency and speed. I'm always eager to learn new technologies and improve my craft. Currently, I'm looking for exciting opportunities to contribute to innovative teams that value growth and creativity in tech.
            </p>
            <div className="w-full flex flex-col items-center ">
            <motion.ul 
            initial={{opacity: 0, y: -20}}
            whileInView={ {opacity: 1, y: 0}}
            transition={ {duration: 0.5, delay: 0.5}}
            className='grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto'>
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

            <div className="mt-6 max-w-4xl w-full flex flex-col ">
  <motion.h4 
  initial={{y:20, opacity: 0}}
      whileInView={ {y:0 , opacity: 1}}
      transition={ {delay:1.3 , duration: 0.5}}
  className="mb-4 text-white font-ovo lg:mr-4">Tools I use</motion.h4>
  <motion.ul
  
  initial={{opacity: 0}}
  whileInView={ {opacity: 1}}
  transition={ {delay:1.5 , duration: 0.8}}
      
  className="flex flex-wrap justify-start items-center gap-3 sm:gap-5">
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