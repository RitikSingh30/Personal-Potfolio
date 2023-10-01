import React, { useState } from 'react'
import {CiMail,CiTwitter,CiLocationOn} from 'react-icons/ci'
import { useForm } from 'react-hook-form';
import {PiPaperPlaneRightBold} from 'react-icons/pi'
import MainBtn from './MainBtn';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactMe = () => {

    let {register,handleSubmit,formState: { errors },reset} = useForm();
    const {darkMode} = useSelector((store) => store?.changePageColor);
    const [changeBorder,setChangeBorder] = useState([false,false,false,false]);

    const changeBorderColor = (e) => {
        const {name,value} = e.target ;
        const newArr = [...changeBorder];
        if(name === 'Name' && value.length > 0) newArr[0] = true ;
        else if(name === 'Name') newArr[0] = false ;

        if(name === 'Email' && value.length > 0) newArr[1] = true ;
        else if(name === 'Email') newArr[1] = false ;

        if(name === 'subject' && value.length > 0) newArr[2] = true ;
        else if(name === 'subject') newArr[2] = false ;

        if(name === 'message' && value.length > 0) newArr[3] = true ;
        else if(name === 'message') newArr[3] = false ;
        setChangeBorder(newArr);
    }

    const contactData = [
        {
            contactIcon:CiMail,
            contactName:"Email",
            contactDesc:"ritikraj.rr87@gmail.com",
            contactLink:"mailto:ritikraj.rr87@gmail.com"
        },
        {
            contactIcon:CiTwitter,
            contactName:"Twitter",
            contactDesc:"@RitikSi15789790",
            contactLink:'https://twitter.com/RitikSi15789790'
        },
        {
            contactIcon:CiLocationOn,
            contactName:"Location",
            contactDesc:"Moshi, Pimpri-Chinchwad, Pune, Maharashtra",
            contactLink:'https://www.google.com/maps/place/Moshi,+Pimpri-Chinchwad,+Maharashtra/@18.6720653,73.8282566,14z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c800505bd8df:0xc5c371b50033df50!8m2!3d18.6793699!4d73.8491808!16s%2Fm%2F0gvsh3_?entry=ttu'
        }
    ]

    const onsubmit = async(data) => {
        const id = toast.loading("Please wait it would take couple of min to send message...");
        try{
            const response = await axios({
                method: 'post',
                url: process.env.REACT_APP_SERVER_URL + 'RitikSingh30/sendMail',
                data
              });
              toast.dismiss(id);
            //   toast.success(response.data.message)
            
        }catch(error){
            toast.dismiss(id);
            console.log(error);
            toast.error("could not send the message")
        }
        reset();
    }
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
                    <a href={Data?.contactLink} target='_blank' key={index}>
                    <div className='flex items-center gap-x-3'>
                        <Data.contactIcon className='text-firstColor text-[2rem]'/>
                        <div>
                            <h4 className='font-poppins-500 text-[1.25rem]'>{Data.contactName}</h4>
                            <p className='text-[0.875rem] font-poppins-500 text-[#A19FAD]'>{Data.contactDesc}</p>
                        </div>
                    </div>
                    </a>
                ))
            }
        </div>
        {/* contact me form  */}
        <form onSubmit={handleSubmit(onsubmit)} className='font-poppins-400 flex flex-col gap-y-6'>
            <div className='flex gap-x-6'>
                <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3 ${changeBorder[0] ? 'focus-within:border-[#7fff00]'
                 : 'focus-within:border-[#ff4500]'}`}>
                    <label htmlFor='fullName' className='flex flex-col'>
                        Name
                        <input id='fullName' {...register('Name',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md`}
                            onChange={changeBorderColor}
                        />
                    </label>
                    {errors.Name && <p className='text-red-500'>Name is required.</p>}
                </div>
                <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3 ${changeBorder[1] ? 'focus-within:border-[#7fff00]'
                 : 'focus-within:border-[#ff4500]'}`}>
                    <label htmlFor='emailId' className='flex flex-col'>
                        Email
                        <input id='emailId' {...register('Email',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md`}
                            onChange={changeBorderColor}
                        />
                    </label>
                    {errors.Email && <p className='text-red-500'>Email is required.</p>}
                </div>
            </div>
            <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3 ${changeBorder[2] ? 'focus-within:border-[#7fff00]'
                 : 'focus-within:border-[#ff4500]'}`}>
                <label htmlFor='subject' className='flex flex-col'>
                    Subject
                    <input id='subject' {...register('subject',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md`}
                        onChange={changeBorderColor}
                    />
                </label>
                {errors.subject && <p className='text-red-500'>Subject is required.</p>}
            </div>
            <div className={`border-firstColor border-2 rounded-md ${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} p-3 ${changeBorder[3] ? 'focus-within:border-[#7fff00]'
                 : 'focus-within:border-[#ff4500]'}`}>
                <label htmlFor='message' className='flex flex-col'>
                    Message
                    <textarea id='message' {...register('message',{required:true})} className={`${darkMode ? "bg-DarkInputColor" : "bg-inputColor"} outline-none rounded-md h-[11.25rem]`}
                        onChange={changeBorderColor}
                    />
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
