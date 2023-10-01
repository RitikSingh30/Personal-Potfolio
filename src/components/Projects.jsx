import React, { useState } from 'react'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import PersonalPotfolio from '../assets/PersonalPotfolio.mp4'
import MainBtn from './MainBtn'
import {ImArrowRight2} from 'react-icons/im'
import projectData from '../Data/ProjectData'
import { useSelector } from 'react-redux'

const Projects = () => {

  const [showProject,setShowProject] = useState([true,false,false]);
  const [projectIndex,setProjectIndex] = useState(0);
  const {darkMode} = useSelector((store) => store?.changePageColor);

  const changeProjectIndex = (forwardMove) => {
    let curIndex = projectIndex ;
    const newArr = [...showProject] ;
    newArr[curIndex] = false ;
    if(forwardMove){
      curIndex++ ;
      if(curIndex > 2) curIndex = 0 ;
    }
    else{
      curIndex-- ;
      if(curIndex < 0) curIndex = 2 ;
    }
    newArr[curIndex] = true ;
    setShowProject(newArr);
    setProjectIndex(curIndex);
  }

  const changeProjectThroughDotClick = (index) => {
    let curIndex = projectIndex ;
    const newArr = [...showProject] ;
    newArr[curIndex] = false ;
    newArr[index] = true ;
    setShowProject(newArr);
    setProjectIndex(index);
  }

  // creating a 3 dots
  const numberOfDivs = 3 ;
  const divElement = Array.from({length:numberOfDivs},(_,index) => (
    <div key={index} className={`w-[0.6rem] h-[0.6rem] rounded-full ${index === projectIndex ? 'bg-firstColor' : 'bg-gray-400'}
    cursor-pointer`} onClick={() => changeProjectThroughDotClick(index)}></div>
  ))

  return (
    <div id='Projects' className='mt-[8rem]'>
      <div>
        <h3 className='font-poppins-600 sm2:text-[1.7rem] lg:text-[2.25rem] text-center'>Projects</h3>
        <p className={`text-center md:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`}>Most recent work</p>
      </div>
      <div className='flex items-center justify-center mt-[4rem] sm3:gap-x-4 lg:gap-x-12'>
        <IoIosArrowBack className='text-firstColor sm3:text-[2rem] lg:text-[3.5rem] cursor-pointer' onClick={() => changeProjectIndex(false)}/>
        {
          projectData?.map((data,index) => (
            <div className={`flex msm:w-[80%] mmd:items-center msm:flex-col msm:gap-y-[2rem] sm3:gap-x-[2rem] lg:gap-x-[5rem] ${showProject[index] ? 'block' : 'hidden'}`} key={index}>
              <img src={data?.imgSrc} alt={`${data?.altText}`} loading='lazy' className='w-[21.25rem] h-[11.25rem]'/>
              <div className='flex flex-col gap-y-3 msm:w-full msm:items-center'>
                <h3 className='text-[1.25rem] font-poppins-600'>{data?.projectName}</h3>
                <p className={`msm:w-full text-[1rem] font-poppins-500 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} sm:max-w-[20rem]`}>{data?.projectDesc}</p>
                <a href={data?.projectLink} target='_blank'><MainBtn text={"Check Out"} Icon={ImArrowRight2} translate={'group-hover:translate-x-1'}/></a>
              </div>
            </div>
          ))
        }
        {
          showProject[2] ? (<div className='flex msm:w-[80%] mmd:items-center msm:flex-col msm:gap-y-[2rem] sm3:gap-x-[2rem] lg:gap-x-[5rem]'>
          <video autoPlay muted loop className='w-[21.25rem] h-[11.25rem]'>
            <source src={PersonalPotfolio} type='video/mp4'/>
            Sorry, your browser doesn't support videos.
          </video>
          <div className='flex flex-col gap-y-3  msm:w-full msm:items-center'>
            <h3 className='text-[1.25rem] font-poppins-600'>Personal Potfolio Website</h3>
            <p className={`msm:w-full text-[1rem] font-poppins-500 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} sm:max-w-[20rem]`}>My Personal Potfolio Website made using MERN Stack with a clear and minimul UI</p>
            <a href='https://personal-potfolio-ten.vercel.app/' target='_blank'><MainBtn text={"Check Out"} Icon={ImArrowRight2} translate={'group-hover:translate-x-1'}/></a>
          </div>
        </div>) : null
        }
        <IoIosArrowForward className='text-firstColor sm3:text-[2rem] lg:text-[3.5rem] cursor-pointer' onClick={() => changeProjectIndex(true)}/>
      </div>
      <div className='flex justify-center gap-x-2 mt-9'>{divElement}</div>
    </div>
  )
}

export default Projects
