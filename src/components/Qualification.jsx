import React, { useState } from 'react'
import {SlGraduation} from 'react-icons/sl'
import {PiHandbagSimpleBold} from 'react-icons/pi'
import {VscCalendar} from 'react-icons/vsc'
import { useSelector } from 'react-redux'

const Qualification = () => {
  const [showOrHideQual,setShowOrHideQual] = useState([true,false]);
  const {darkMode} = useSelector((store) => store?.changePageColor);

  const changeData = (ind) => {
    const newArray = [...showOrHideQual];
    newArray[ind] = !newArray[ind];
    ind = ind === 0 ? 1 : 0 ;
    newArray[ind] = !(newArray[ind]);
    setShowOrHideQual(newArray);
  }
  
  return (
    <div id='Qualification' className='mt-[10.5rem]'>
        <div>
            <h3 className='font-poppins-600 sm2:text-[1.7rem] lg:text-[2.25rem] text-center'>Qualifications</h3>
            <p className={`text-center md:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`}>My Educational Qualification & Work Experience</p>
        </div>
        <div className='flex gap-x-8 justify-center mt-[3.8rem]'>
            <div className={`flex items-center gap-x-2 ${showOrHideQual[0] ? 'text-firstColor' :`${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`} cursor-pointer`} onClick={() => changeData(0)}>
                <SlGraduation className='text-[1.8rem]'/>
                <p className='text-[1.25rem] font-poppins-500'>Education</p>
            </div>
            <div className={`flex items-center gap-x-2 ${showOrHideQual[1] ? 'text-firstColor' :`${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`} cursor-pointer`} onClick={() => changeData(1)}>
                <PiHandbagSimpleBold className='text-[1.8rem]'/>
                <p className='text-[1.25rem] font-poppins-500'>Work</p>
            </div>
        </div>
       {
        showOrHideQual[0] ? (
            <>  
            <div className='flex justify-center gap-x-6 mt-[3rem] msm1:px-4'>
                <div className='flex flex-col justify-between msm1:gap-y-6'>
                    <div className='font-poppins-600 max-w-[15rem]'>
                        <h2 className='sm3:text-[0.8rem] sm1:text-[1rem] lg:text-[1.2rem]'>Bachelor of Engineering</h2>
                        <a href='https://www.nmiet.edu.in/' target='_blank' rel="noreferrer" className='msm1:max-w-[10rem] '>
                            <p className={`sm3:text-[0.7rem] sm1:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} font-poppins-500`}>Nutan Maharashtra Institute of Engineering and Technology</p>
                        </a>
                        <div className={`flex items-center gap-x-1 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} mt-3`}>
                            <VscCalendar/>
                            <p className='text-[0.813rem] font-poppins-400'>2020 - 2024</p>
                        </div>
                    </div>
                    <div className='font-poppins-600 max-w-[15rem]'>
                        <h2 className='sm3:text-[0.8rem] sm1:text-[1rem] lg:text-[1.2rem]'>Secondary School</h2>
                        <a href='https://gayatrischoolpune.com/' target='_blank' rel="noreferrer">
                            <p className={`sm3:text-[0.7rem] sm1:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} font-poppins-500`}>Gayatri English Medium School and Jr. College</p>
                        </a>
                        <div className={`flex items-center gap-x-1 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} mt-3`}>
                            <VscCalendar/>
                            <p className='text-[0.813rem] font-poppins-400'>2008 - 2018</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='h-[0.813rem] w-[0.813rem] bg-firstColor rounded-full'></div>
                    <div className='h-[7.938rem] w-[1px] bg-firstColor'></div>
                    <div className='h-[0.813rem] w-[0.813rem] bg-firstColor rounded-full'></div>
                    <div className='h-[7.938rem] w-[1px] bg-firstColor'></div>
                    <div className='h-[0.813rem] w-[0.813rem] bg-firstColor rounded-full'></div>
                </div>
                <div className='font-poppins-600 self-end max-w-[15rem]'>
                    <h2 className='sm3:text-[0.8rem] sm1:text-[1rem] lg:text-[1.2rem]'>Senior Secondary School</h2>
                    <a href='https://gayatrischoolpune.com/' target='_blank' rel="noreferrer">
                        <p className={`sm3:text-[0.7rem] sm1:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} font-poppins-500`}>Gayatri English Medium School and Jr. College</p>
                    </a>
                    <div className={`flex items-center gap-x-1 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} mt-3`}>
                        <VscCalendar/>
                        <p className='text-[0.813rem] font-poppins-400'>2018 - 2020</p>
                    </div>
                </div>
            </div></>
            ) : (<>  
            <div className='flex justify-center gap-x-6 mt-[3rem] msm1:px-4'>
                <div className='flex flex-col justify-between msm1:gap-y-6'>
                    <div className='font-poppins-600'>
                        <h2 className='sm3:text-[0.8rem] sm1:text-[1rem] lg:text-[1.2rem]'>Technology Developer</h2>
                        <a href='https://home.barclays/' target='_blank' rel="noreferrer">
                            <p className={`sm3:text-[0.7rem] sm1:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} font-poppins-500`}>Barclays</p>
                        </a>
                        <div className={`flex items-center gap-x-1 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} mt-3`}>
                            <VscCalendar/>
                            <p className='text-[0.813rem] font-poppins-400'>July 2024 - Present</p>
                        </div>
                    </div>
                    <div className='font-poppins-600'>
                        <h2 className='sm3:text-[0.8rem] sm1:text-[1rem] lg:text-[1.2rem]'>BA3 Intern</h2>
                        <a href='https://home.barclays/' target='_blank' rel="noreferrer">
                            <p className={`sm3:text-[0.7rem] sm1:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} font-poppins-500`}>Barclays</p>
                        </a>
                        <div className={`flex items-center gap-x-1 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} mt-3`}>
                            <VscCalendar/>
                            <p className='text-[0.813rem] font-poppins-400'>June 2023 - August 2023</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='h-[0.813rem] w-[0.813rem] bg-firstColor rounded-full'></div>
                    <div className='h-[7.938rem] w-[1px] bg-firstColor'></div>
                    <div className='h-[0.813rem] w-[0.813rem] bg-firstColor rounded-full'></div>
                    <div className='h-[7.938rem] w-[1px] bg-firstColor'></div>
                    <div className='h-[0.813rem] w-[0.813rem] bg-firstColor rounded-full'></div>
                </div>
                <div className='font-poppins-600 self-end'>
                    <h2 className='sm3:text-[0.8rem] sm1:text-[1rem] lg:text-[1.2rem]'>DSA/CP Instructor</h2>
                    <a href='https://www.tle-eliminators.com/' target='_blank' rel="noreferrer">
                        <p className={`sm3:text-[0.7rem] sm1:text-[0.9rem] lg:text-[1rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} font-poppins-500`}>TLE Eliminator</p>
                    </a>
                    <div className={`flex items-center gap-x-1 ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} mt-3`}>
                        <VscCalendar/>
                        <p className='text-[0.813rem] font-poppins-400'>August 2022 - Present</p>
                    </div>
                </div>
            </div></>)
       }
    </div>
  )
}

export default Qualification
