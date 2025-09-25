import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-20">
  <div className="text-center">
    <div className="w-max flex items-center gap-2 mx-auto mb-6">
      <Image src={assets.mail_icon} alt="mail icon" className="w-6" />
      <span className="text-gray-600 text-base">prof.sumanatwork001@gmail.com</span>
    </div>
  </div>

  <footer className="mx-[10%] mt-12 border-t border-gray-300 pt-6">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Copyright */}
      <p className="text-gray-500 text-sm sm:text-base md:text-lg tracking-wide text-center sm:text-left">
        © 2025 <span className="font-semibold text-gray-700">Sumanayak</span>. All rights reserved.
      </p>

      {/* Social Links */}
      <ul className="flex gap-6 text-gray-600">
        <li><a href="#" target="_blank" className="hover:text-gray-900 transition">GitHub</a></li>
        <li><a href="#" target="_blank" className="hover:text-gray-900 transition">LinkedIn</a></li>
        <li><a href="#" target="_blank" className="hover:text-gray-900 transition">Twitter</a></li>
        <li><a href="#" target="_blank" className="hover:text-gray-900 transition">YouTube</a></li>
      </ul>
    </div>
  </footer>
</div>

  )
}

export default Footer
