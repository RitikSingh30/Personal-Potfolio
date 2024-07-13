import React from 'react'
import RitikPicture from '../assets/Ritik Picture.png'
import MainBtn from './MainBtn'
import {CgFileDocument} from 'react-icons/cg'
import { useSelector } from 'react-redux'
import ResumeLink from '../assets/Ritik Resume.pdf'

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
        <img src={RitikPicture} alt='Profile' className='rounded-md sm3:w-[15rem] md:w-[19rem] sm3:max-h-[14rem] md:max-h-[17rem] lg:w-[21.5rem] lg:max-h-[20rem]'/>
        <div className='flex flex-col gap-y-7 sm3:px-4'>
            <p className={`sm3:text-[0.85rem] sm:text-[0.77rem] md:text-[0.85rem] lg:text-[1rem] sm3:max-w-[36rem] sm:max-w-[19rem] md:max-w-[22rem] lg:max-w-[26rem] font-poppins-500 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} text-justify`}>
                👨‍💼 Hi, I'm Ritik 👋, a Technology Developer at Barclays with over a year of experience as a Full Stack Web Developer, skilled in creating comprehensive websites using various technologies and frameworks.
                👨‍🏫 Beyond my professional role, I have over two years of experience mentoring and teaching over 2,000 undergraduates in Data Structures and Algorithms (DSA) and Competitive Programming (CP) on platform like TLE Eliminator. I provide one-on-one sessions to help students clear their doubts and achieve their goals.
                💻 I'm also a passionate competitive programmer, an ICPC Regionalist in 2023, and a specialist on Codeforces with a rating of 1556.
            </p>
            <a href={ResumeLink} download className='sm3:self-center lg:self-start'><MainBtn text={"Resume"} Icon={CgFileDocument} color={"text-white"}/></a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
