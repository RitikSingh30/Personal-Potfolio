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
      <div className='flex justify-center gap-x-[4rem]'>
        {/* Name and proffesion  */}
        <div className='flex flex-col gap-y-1'>
            <h1 className='text-[2.25rem] font-poppins-600 max-w-[10rem]'>Ritik Singh</h1>
            <p className='text-[0.875rem] font-poppins-500'>Full Stack Developer</p>
        </div>
        {/* social media links  */}
        <div className='flex gap-x-[8rem]'>
            <ul className='flex gap-x-3'>
                <li className='font-poppins-500'>About</li>
                <li className='font-poppins-500'>Projects</li>
                <li className='font-poppins-500'>Contact Me</li>
            </ul>
            <div className='flex gap-x-6'>
                <SlSocialLinkedin className='fill-white text-[1.2rem]'/>
                <TfiTwitter className='fill-white text-[1.2rem]'/>
                <IoLogoInstagram className='fill-white text-[1.2rem]'/>
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
