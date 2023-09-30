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
        <h3 className='font-poppins-600 text-[2.25rem] text-center'>About Me</h3>
        <p className={`text-center ${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`}>My Introduction</p>
      </div>
      {/* Potfolio picture and introduction  */}
      <div className='flex justify-center gap-x-[5rem]'>
        <img src={RitikPicture} className='rounded-md w-[21.5rem] max-h-[20rem]'/>
        <div className='flex flex-col gap-y-7'>
            <p className={`max-w-[26rem] font-poppins-500 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} text-justify`}>
                Hey there,👋 I'm Ritik a 21-year-old CSE undergrad who is passionate about Software Development, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻 I'm passionate about solving complex problems through code. With a background in competitive programming, I have completed my Intern at Barclays, and teach Data Structures and Algorithms to undergraduates at TLE Eliminator. I thrive on pushing the boundaries of what's possible in the world of computer science and sharing my knowledge with the next generation of tech enthusiasts.. ✍🏻
            </p>
            <a href={ResumeLink} download><MainBtn text={"Resume"} Icon={CgFileDocument} color={"text-white"}/></a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
