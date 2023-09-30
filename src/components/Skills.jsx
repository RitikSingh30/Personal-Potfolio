import React, { useState } from 'react'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import skillsData from '../Data/skillsData';
import { useSelector } from 'react-redux';

const Skills = () => {

  const [upArrowIcon,setUpArrowIcon] = useState([true,false,false]);
  const {darkMode} = useSelector((store) => store?.changePageColor);

  const arrowIconHandler = (ind) => {
    const newArray = [...upArrowIcon];
    newArray[ind] = !newArray[ind] ;
    setUpArrowIcon(newArray);
  }

  return (
    <div id='Skills' className='mt-[6.5rem]'>
      <div>
        <h3 className='font-poppins-600 text-[2.25rem] text-center'>Skills</h3>
        <p className={`text-center ${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`}>My Technical Skills</p>
      </div>
      <div className='flex mt-[3.3rem] max-w-[768px] mx-auto gap-x-5 flex-wrap gap-y-8'>
        {/* Languages  */}
        {
            skillsData?.map((info,index) => (
            <div className='flex flex-col cursor-pointer' key={index} onClick={() => arrowIconHandler(index)}>
              <div className='flex items-center gap-x-3'>
                {/* arrow  */}
                <div className='flex'>
                    {
                      info?.icon?.map((SubInfo,index1) => (
                        <SubInfo key={index1} className={`text-[2rem] text-firstColor ${index1 === 1 ? '-ml-[1.1rem]' : ''}`}/>
                      ))
                    }
                </div>
                <div className='flex items-center gap-x-2'>
                  <div>
                    <h3 className='font-poppins-600 text-[1.35rem]'>{info?.data}</h3>
                    <p className={`font-poppins-400 text-[0.925rem] ${darkMode ? "text-[#BCBAC4]" : "text-textColor"} w-[17rem]`}>{info.subData}</p>
                  </div>
                  {
                    upArrowIcon[index] ? (<IoIosArrowUp className='text-[1.3rem] text-firstColor'/>)
                    : (<IoIosArrowDown className='text-[1.3rem] text-firstColor'/>)
                  }
                </div>
              </div>
              {
                upArrowIcon[index] && 
                <div className='mt-[2rem] min-w-[306px] self-end'>
                  {
                    info?.allSkills?.map((CurData,index2) => (
                      <div key={index2} className='flex flex-col gap-y-3 mt-[1rem]'>
                        <div className='flex justify-between'>
                          <CurData.skillIcon className='text-firstColor text-[2.25rem]'/>
                          <p className='font-poppins-500 text-[1.2rem]'>{CurData.skillName}</p>
                        </div>
                        <div className='h-[0.313rem] bg-firstColor rounded-md'></div>
                      </div>
                    ))
                  }
                </div>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
