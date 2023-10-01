import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {TfiTwitter} from 'react-icons/tfi'
import {IoLogoInstagram} from 'react-icons/io'
import {BiCopyright} from 'react-icons/bi'
import { useSelector } from 'react-redux'

const Footer = () => {

  const {darkMode} = useSelector((store) => store?.changePageColor);

  return (
    <div className={`${ darkMode ? "bg-footerDarkBg" : "bg-firstColor"} text-white mt-[4rem] p-[3rem]`}>
      {/* Name and links  */}
      <div className='flex msm1:flex-col msm1:gap-y-6 mmd:justify-between md:justify-center gap-x-[4rem]'>
        {/* Name and proffesion  */}
        <div className='flex flex-col gap-y-1'>
            <h1 className='mmd:text-[1.7rem] md:text-[1.7rem] lg:text-[2.25rem] font-poppins-600 max-w-[10rem]'>Ritik Singh</h1>
            <p className='text-[0.875rem] font-poppins-500'>Full Stack Developer</p>
        </div>
        {/* social media links  */}
        <div className='flex mmd:flex-col mmd:gap-y-4 gap-x-[8rem]'>
            <ul className='flex mmd:flex-col mmd:gap-y-2 gap-x-3'>
              <a href='#About' className='cursor-pointer'>
                <li className='font-poppins-500 hover:text-firstColorLighter'>About</li>
              </a>
              <a href='#Projects' className='cursor-pointer'>
                <li className='font-poppins-500 hover:text-firstColorLighter'>Projects</li>
              </a>
              <a href='#Contact Me' className='cursor-pointer'>
                <li className='font-poppins-500 hover:text-firstColorLighter'>Contact Me</li>
              </a>
            </ul>
            <div className='flex gap-x-6'>
              <a href='https://www.linkedin.com/in/ritik-singh-171405212/' target='_blank' className='cursor-pointer'>
                <SlSocialLinkedin className='fill-white text-[1.2rem] hover:fill-firstColorLighter'/>
              </a>
              <a href='https://twitter.com/RitikSi15789790' target='_blank' className='cursor-pointer'>
                <TfiTwitter className='fill-white text-[1.2rem] hover:fill-firstColorLighter'/>
              </a>
              <a href='https://www.instagram.com/lx_ritik_singh_xl/?next=%2F' target='_blank' className='cursor-pointer'>
                <IoLogoInstagram className='fill-white text-[1.2rem] hover:fill-firstColorLighter'/>
              </a>
            </div>
        </div>
      </div>
      <div className='flex gap-x-1 items-center justify-center mt-[5rem] text-[0.9rem] text-[#A19FAD]'>
        <BiCopyright/>
        <p>Ritik Singh. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
