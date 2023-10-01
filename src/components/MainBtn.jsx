import React from 'react'

const MainBtn = ({text,Icon,link,color=null,translate=null}) => {

  return (
    <div>
      <a href={link}>
        <button className='flex justify-center font-poppins font-poppins-500 items-center bg-firstColor text-white gap-[0.4rem] p-[1rem] rounded-[0.5rem] hover:bg-firstColorHover group'>
          <p className='lg:text-[1rem]'>{text}</p>
          {
            color ? (<Icon className={`${color} text-lg`}/>) : translate ? (<Icon className={`${translate} transition-all duration-300`}/>) : (<Icon/>)
          }
        </button>
      </a>
    </div>
  )
}

export default MainBtn
