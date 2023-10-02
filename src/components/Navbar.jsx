import {BiMoon,BiSun} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../Redux/Slice/DarkModeSlice';
import Scrollspy from 'react-scrollspy'
import {AiOutlineAppstore} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import { useState } from 'react';
import NavBarData from '../Data/NavbarData'

const Navbar = () => {

  const [showNavbarData,setShowNavbarData] = useState(true);
  const dispatch = useDispatch();
  const {darkMode} = useSelector((store) => store?.changePageColor);

  const changePageModeColor = () => {
    if(darkMode){
      localStorage.setItem('isUiDark',false);
      dispatch(setDarkMode(false));
    }
    else{
      localStorage.setItem('isUiDark',true);
      dispatch(setDarkMode(true));
    }

  }
  
  const controllNavbar = () => {
    const curState = showNavbarData ;
    setShowNavbarData(!curState);
  }

  return (
    <header className={`sticky md:top-0 z-10 ${darkMode ? "bg-DarkColor text-white" : "bg-white text-black"} mmd:fixed mmd:bottom-0
    mmd:w-[100%]`}>
      <nav className='md:max-w-[715px] lg:max-w-[960px] mmd:max-w-[960px] mx-auto flex md:justify-between py-[1.5rem] mmd:py-[0.6rem] mmd:px-6'>
        <a href='#' className={`${showNavbarData ? 'block' : 'hidden'} font-poppins font-poppins-500 mmd:text-[1.2rem] text-[1rem] hover:text-firstColor`}>Ritik</a>
        <div className='flex gap-x-3 mmd:flex-col mmd:w-full mmd:gap-y-3'>
          <Scrollspy items={["Home","About","Skills","Qualification","Projects","Contact Me"]} currentClassName="text-firstColor" 
          className={`flex gap-x-8 font-poppins font-poppins-500 text-[0.875rem] mmd:grid-rows-2 mmd:grid-cols-3 
          mmd:justify-between mmd:w-full mmd:gap-y-[1.5rem] mmd:py-2 ${!showNavbarData ? 'mmd:grid' : 'mmd:hidden'}`}>
            {
              NavBarData?.map((Data,index) => (
                <a href={`#${Data?.name}`} key={index} onClick={controllNavbar}
                className={`flex flex-col items-center cursor-pointer hover:text-firstColor font-poppins-600`}>
                <Data.Icon className='text-[1.3rem] md:hidden font-poppins-600'/>
                {Data?.name}
                </a>
              ))
            }
          </Scrollspy>
          
          <div className={`flex flex-row-reverse gap-x-3 ${!showNavbarData ? 'w-full' : null} `}>
            {
              !showNavbarData &&
              <div  onClick={controllNavbar} className='cursor-pointer hover:text-firstColor md:hidden self-end'>
              {
                darkMode ? (<RxCross2 className='mmd:text-[1.4rem]'/>) : (<RxCross2 className='mmd:text-[1.4rem]'/>)
              }
              </div>
            }
            {
              showNavbarData &&
              <div  onClick={controllNavbar} className='cursor-pointer hover:text-firstColor md:hidden'>
              {
                darkMode ? (<AiOutlineAppstore className='mmd:text-[1.4rem]'/>) : (<AiOutlineAppstore className='mmd:text-[1.4rem]'/>)
              }
              </div>
            }
            <div onClick={changePageModeColor} className={`cursor-pointer hover:text-firstColor ${showNavbarData ? 'block' : 'hidden'}`}>
              {
                darkMode ? (<BiSun className='text-[1.1rem] mmd:text-[1.2rem]'/>) : (<BiMoon className='text-[1.1rem] mmd:text-[1.4rem]'/>)
              }
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
