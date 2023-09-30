import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {PiGithubLogoBold} from 'react-icons/pi'
import {TfiTwitter} from 'react-icons/tfi'
import {IoLogoInstagram} from 'react-icons/io'
import MainBtn from './MainBtn'
import {PiPaperPlaneRightBold} from 'react-icons/pi'
import { TypeAnimation } from 'react-type-animation';
import iconImg from '../assets/icon.png'
import eggeBackgrdImg from '../assets/ProfileBackground.png'
import {RiMouseLine} from 'react-icons/ri'
import {BsArrowDownShort} from 'react-icons/bs'
import { useSelector } from 'react-redux'


const HeroSection = () => {

  const {darkMode} = useSelector((store) => store?.changePageColor);

  return (
    <div id='Home' className={`max-w-[968px] mx-auto flex lg:pt-[8rem] lg:pb-[2rem] gap-x-[7rem]`}>
      <div className='flex flex-col justify-start gap-y-6 mt-12'>
          <a href='https://www.linkedin.com/in/ritik-singh-171405212/' target='_blank'>
            <SlSocialLinkedin className='fill-firstColor text-[1.5rem] cursor-pointer hover:fill-firstColorHover'/>
          </a>
          <a href='https://github.com/RitikSingh30' target='_blank'>
            <PiGithubLogoBold className='fill-firstColor text-[1.5rem] cursor-pointer hover:fill-firstColorHover'/>
          </a>
          <a href='https://twitter.com/RitikSi15789790' target='_blank'>
            <TfiTwitter className='fill-firstColor text-[1.5rem] cursor-pointer hover:fill-firstColorHover'/>
          </a>
          <a href='https://www.instagram.com/lx_ritik_singh_xl/?next=%2F' target='_blank'>
            <IoLogoInstagram className='fill-firstColor text-[1.5rem] cursor-pointer hover:fill-firstColorHover'/>
          </a>
      </div>
      <div className='flex gap-x-8'>
        <div className='font-poppins w-[22rem] flex flex-col gap-y-[7.5rem]'>
            <div>
              <div className='mb-[2rem]'>
                <p className='text-[3rem] font-poppins-600'>Hi, I'm Ritik</p>
                <p className={`text-[1.25rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} font-poppins-500 flex gap-x-2 mb-[1rem]`}>
                I am a
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    1000, 
                    'Competetive Programmer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{display: 'inline-block' }}
                  repeat={Infinity}
                />
                </p>
                <p className={`text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} max-w-[17rem] font-poppins-400`}>Building Software to solve real life problems</p>
              </div>
              <MainBtn text={"Contact Me"} Icon={PiPaperPlaneRightBold} link={'#Contact Me'}/>
            </div>
            {/* scroll down button  */}
            <div className='font-poppins-500 flex gap-x-2 items-center hover:translate-y-1 cursor-pointer transition-all duration-400 ease-in'>
              <RiMouseLine className='fill-firstColor text-[2rem]'/>
              <p className='text-[0.9rem]'>Scroll Down</p>
              <BsArrowDownShort className='fill-firstColor text-[1.5rem]'/>
            </div>
        </div>
          {/* main page profile picture  */}
          <div className='relative'>
            <img src={eggeBackgrdImg} className='absolute max-w-none w-[18rem] -top-[3rem] left-[0.7rem]'></img>
            <img src={iconImg} className='relative w-[16rem] left-[1.5rem]'></img>
          </div>
      </div>
    </div>
  )
}

export default HeroSection
