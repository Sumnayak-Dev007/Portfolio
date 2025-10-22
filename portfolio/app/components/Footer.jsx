import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-20">
  <div className="text-center">
    <Image src={assets.logo} alt=''  className='w-36 mx-auto nb-2'/>
    <div className="w-max flex items-center gap-2 mx-auto mb-6">
      <Image src={assets.mail_icon_dark} alt="mail icon" className="w-6" />
      <span className="text-base">buildwithsumanayak@gmail.com</span>
    </div>
  </div>

  <footer className="mx-[10%] mt-12 border-t border-gray-300 pt-6">
    <div className="flex sm:flex-row items-center justify-center gap-4">
      {/* Copyright */}
      <p className="text-sm sm:text-base md:text-lg tracking-wide text-center sm:text-left">
        © 2025 <span className="font-semibold">Sumanayak</span>. All rights reserved.
      </p>

      
    </div>
  </footer>
</div>

  )
}

export default Footer
