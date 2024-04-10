"use client";
import { useLogin } from "@/hooks/useLogin";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  // const { login } = useLogin();
  // const handleSubmit = (user) => {
  

  //   login(user);
  // };
  return (
    <>
    {/* <div className=" flex justify-between mt-4 w-1/2 mx-auto" >  
      <button  className="  bg-[#155EB3]  p-2  text-white rounded-lg" onClick={()=>handleSubmit("admin")}>Admin</button>

      <button className=" bg-[#155EB3]  p-2  text-white rounded-lg" onClick={()=>handleSubmit("club")}>Club</button>
    </div> */}

    <div className=" text-3xl font-extrabold text-center">
      Welcome 
      <Link href="/login/adminLogin">
             <p className="bg-[#155EB3]  p-2  text-white rounded-lg w-32 text-md my-4 mx-auto">Login</p>
           </Link>
    </div>
    </>
  );
}
