import React from 'react'
import RitikPicture from '../assets/Ritik Picture.png'
import MainBtn from './MainBtn'
import {CgFileDocument} from 'react-icons/cg'
import { useSelector } from 'react-redux'
import ResumeLink from '../assets/Ritik Resume 1.pdf'

const AboutMe = () => {
  const {darkMode} = useSelector((store) => store?.changePageColor);

  return (
    <div id='About' className='mt-[6.5rem] flex flex-col gap-y-[4rem]'>
      {/* Heading  */}
      <div>
        <h3 className='font-poppins-600 sm2:text-[1.7rem] lg:text-[2.25rem] text-center'>About Me</h3>
        <p className={`text-center md:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`}>My Introduction</p>
      </div>
      {/* Potfolio picture and introduction  */}
      <div className='flex sm3:flex-col sm:flex-row sm3:items-center md:items-start justify-center sm3:gap-y-[1.5rem] sm:gap-x-[2rem] lg:gap-x-[5rem]'>
        <img src={RitikPicture} className='rounded-md sm3:w-[15rem] md:w-[19rem] sm3:max-h-[14rem] md:max-h-[17rem] lg:w-[21.5rem] lg:max-h-[20rem]'/>
        <div className='flex flex-col gap-y-7 sm3:px-4'>
            <p className={`sm3:text-[0.85rem] sm:text-[0.77rem] md:text-[0.85rem] lg:text-[1rem] sm3:max-w-[36rem] sm:max-w-[19rem] md:max-w-[22rem] lg:max-w-[26rem] font-poppins-500 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} text-justify`}>
                Hey there,👋 I'm Ritik a 21-year-old CSE undergrad who is passionate about Software Development, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻 I'm passionate about solving complex problems through code. With a background in competitive programming, I have completed my Intern at Barclays, and teach Data Structures and Algorithms to undergraduates at TLE Eliminator. I thrive on pushing the boundaries of what's possible in the world of computer science and sharing my knowledge with the next generation of tech enthusiasts.. ✍🏻
            </p>
            <a href={ResumeLink} download className='sm3:self-center lg:self-start'><MainBtn text={"Resume"} Icon={CgFileDocument} color={"text-white"}/></a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
