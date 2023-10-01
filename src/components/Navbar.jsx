import {BiMoon,BiSun} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../Redux/Slice/DarkModeSlice';
import Scrollspy from 'react-scrollspy'
import {AiOutlineAppstore} from 'react-icons/ai'

const Navbar = () => {

  const NavBarData = ["Home","About","Skills","Qualification","Projects","Contact Me"];
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

  return (
    <header className={`sticky md:top-0 z-10 ${darkMode ? "bg-DarkColor text-white" : "bg-white text-black"} mmd:fixed mmd:bottom-0
    mmd:w-[95%]`}>
      <nav className='md:max-w-[715px] lg:max-w-[960px] mmd:max-w-[960px] mx-auto flex justify-between py-[1.5rem] mmd:py-[0.6rem] mmd:px-3'>
        <a href='#' className='font-poppins font-poppins-500 mmd:text-[1.2rem] text-[1rem] hover:text-firstColor'>Ritik</a>
        <div className='flex items-center gap-x-3'>
          <Scrollspy items={NavBarData} currentClassName="text-firstColor" 
          className='flex gap-x-8 font-poppins font-poppins-500 text-[0.875rem] mmd:hidden'>
            {
              NavBarData?.map((data,index) => (
                <a href={`#${data}`} key={index} 
                className={`cursor-pointer hover:text-firstColor`}>
                {data}</a>
              ))
            }
          </Scrollspy>
          
          <div className='flex flex-row-reverse gap-x-3'>
            <div className='cursor-pointer hover:text-firstColor md:hidden'>
              {
                darkMode ? (<AiOutlineAppstore className='mmd:text-[1.4rem]'/>) : (<AiOutlineAppstore className='mmd:text-[1.4rem]'/>)
              }
            </div>
            <div onClick={changePageModeColor} className='cursor-pointer hover:text-firstColor '>
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
