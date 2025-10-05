import React, { useEffect, useRef, useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {
  const [isScroll,setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }
      else{
        setIsScroll(false)
      }
    })
  })
  return (
    <>
    {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div> */}
     <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex item-center justify-between z-50 bg-[#22273a] backdrop-blur-md ${isScroll?"border-b border-white/50 border-b-[0.2px] shadow-sm":""}`}>
            <a href="">
            <Image src={assets.logo} alt='' className='w-40
            cursor-pointer mr-14 '/>
            </a>

            

            <ul className={`hidden md:flex item-cener gap-6 lg:gap-8 rounded-full px-12 py-3   ${isScroll?"":"border border-white/50 bg-transparent"}`}>
            <li><a className='font-ovo font-semibold underline-animate' href="#top">Home</a></li>
            <li><a className='font-ovo font-semibold underline-animate' href="#about">About me</a></li>
            <li><a className='font-ovo font-semibold underline-animate' href="#services">Services</a></li>
            <li><a className='font-ovo font-semibold underline-animate' href="#projects">Projects</a></li>
            <li><a className='font-ovo font-semibold underline-animate' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
              {/* <button>
                <Image src={assets.moon_icon} alt='' className='w-6 relative right-11 top-2'/>
              </button> */}
          <a href="#contact" className='hidden  lg:flex items-center  gap-3  px-10 py-2.5 border font-semibold border-white/50 rounded-full ml-4'>Contact <Image alt='' src={assets.arrow_icon_dark} className='w-3'/></a>
          <button className='block absolute top-6 right-6 md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_white} alt='' className='w-6'/>
          </button>
</div>
      {/* _________Mobile Menu _________ */}

      <ul ref={sideMenuRef} className='flex md:hidden flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-[var(--dark-hover)] text-white'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
          <Image src={assets.close_white} alt='' className='w-5 cursor-pointer'/>
        </div>
        <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#projects">Projects</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
      </ul>

   </nav>
    </>
  )
}

export default Navbar
