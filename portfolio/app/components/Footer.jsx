import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <span className='w-36 mx-auto'>              </span>    
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            prof.sumanatwork001@gmail.com
        </div>
     </div>
    </div>
  )
}

export default Footer
