"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useLogin } from "@/hooks/useLogin";
export default function page() {
  const { login } = useLogin();
  const router = useRouter()
  const handleSubmit = (user) => {
  
   
    login(user);
    router.push('/HomeUser');
  };
  return (
    <>
    <div className='   p-4     mx-10  rounded-sm py-8 md:py-0  md:mt-5 '>
        <div className=' text-center'>
            <p className=' text-[#155EB3]  font-extrabold  text-4xl my-2'>Club Login</p>
            <input type="text" placeholder='Email ID' className=' my-2 p-1 mt-6 md:w-72' />
            <br />
            <input type="password" placeholder='password' className=' my-2 p-1 md:w-72'/>
            <br />
        
            <button className=' text-white bg-[#155EB3] p-1 px-4 rounded my-3 font-bold px-6' onClick={()=>handleSubmit("club")}>Login</button>
        </div>
    </div>
    </>
  )
}
