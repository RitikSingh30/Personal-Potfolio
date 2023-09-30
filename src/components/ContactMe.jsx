import React from 'react'
import {CiMail,CiTwitter,CiLocationOn} from 'react-icons/ci'
import { useForm } from 'react-hook-form';
import {PiPaperPlaneRightBold} from 'react-icons/pi'
import MainBtn from './MainBtn';
import { useSelector } from 'react-redux';

const ContactMe = () => {

    const {register,handleSubmit,formState: { errors }} = useForm();
    const {darkMode} = useSelector((store) => store?.changePageColor);

    const contactData = [
        {
            contactIcon:CiMail,
            contactName:"Email",
            contactDesc:"ritikraj.rr87@gmail.com"
        },
        {
            contactIcon:CiTwitter,
            contactName:"Twitter",
            contactDesc:"@RitikSi15789790"
        },
        {
            contactIcon:CiLocationOn,
            contactName:"Location",
            contactDesc:"Pune, Maharashtra India"
        }
    ]
  return (
    <div id='Contact Me' className='mt-[6rem]'>
       <div>
        <h3 className='font-poppins-600 text-[2.25rem] text-center'>Contact Me</h3>
        <p className={`text-center ${darkMode ? "text-[#BCBAC4]" : "text-textColor"}`}>Want to connect? My inbox is always open!</p>
      </div>
      <div className='flex justify-center mt-12 gap-x-[6rem]'>
        {/* social media handle  */}
        <div className='flex flex-col gap-y-7'>
            {
                contactData?.map((Data,index) => (
                    <div className='flex items-center gap-x-3' key={index}>
                        <Data.contactIcon className='text-firstColor text-[2rem]'/>
                        <div>
                            <h4 className='font-poppins-500 text-[1.25rem]'>{Data.contactName}</h4>
                            <p className='text-[0.875rem] font-poppins-500 text-[#A19FAD]'>{Data.contactDesc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        {/* contact me form  */}
        <form onSubmit={handleSubmit((data) => console.log(data))} className='font-poppins-400 flex flex-col gap-y-6'>
            <div className='flex gap-x-6'>
                <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3`}>
                    <label htmlFor='fullName' className='flex flex-col'>
                        Name
                        <input id='fullName' {...register('Name',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md`}/>
                    </label>
                    {errors.Name && <p className='text-red-500'>Name is required.</p>}
                </div>
                <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3`}>
                    <label htmlFor='emailId' className='flex flex-col'>
                        Email
                        <input id='emailId' {...register('Email',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md`}/>
                    </label>
                    {errors.Email && <p className='text-red-500'>Email is required.</p>}
                </div>
            </div>
            <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3`}>
                <label htmlFor='subject' className='flex flex-col'>
                    Subject
                    <input id='subject' {...register('subject',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md`}/>
                </label>
                {errors.subject && <p className='text-red-500'>Subject is required.</p>}
            </div>
            <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3`}>
                <label htmlFor='message' className='flex flex-col'>
                    Message
                    <textarea id='message' {...register('message',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md h-[11.25rem]`}/>
                </label>
                {errors.message && <p className='text-red-500'>Message is required.</p>}
            </div>
            <MainBtn text={"Send Message"} Icon={PiPaperPlaneRightBold}/>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
