import React, { useState } from 'react'
import {BiMoon,BiSun} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../Redux/Slice/DarkModeSlice';
import Scrollspy from 'react-scrollspy'

const Navbar = () => {

  const NavBarData = ["Home","About","Skills","Qualification","Projects","Contact Me"];
  const dispatch = useDispatch();
  const {darkMode} = useSelector((store) => store?.changePageColor);

  const changePageModeColor = () => {
    if(darkMode){
      dispatch(setDarkMode(false));
    }
    else{
      dispatch(setDarkMode(true));
    }
  }

  return (
    <header className={`sticky top-0 z-10 ${darkMode ? "bg-DarkColor text-white" : "bg-white text-black"}`}>
      <nav className='max-w-[968px] mx-auto flex justify-between py-[1.5rem]'>
        <a href='#' className='font-poppins font-poppins-500 text-[1rem] hover:text-firstColor'>Ritik</a>
        <div className='flex items-center gap-x-3'>
          <Scrollspy items={NavBarData} currentClassName="text-firstColor" 
          className='flex gap-x-8 font-poppins font-poppins-500 text-[0.875rem]'>
            {
              NavBarData?.map((data,index) => (
                <a href={`#${data}`} key={index} 
                className={`cursor-pointer hover:text-firstColor`}>
                {data}</a>
              ))
            }
          </Scrollspy>
          
          <div onClick={changePageModeColor} className='cursor-pointer hover:text-firstColor'>
            {
              darkMode ? (<BiSun className='text-[1.1rem]'/>) : (<BiMoon className='text-[1.1rem]'/>)
            }
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
