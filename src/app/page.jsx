"use client";
import { useLogin } from "@/hooks/useLogin";
import Image from "next/image";

export default function Home() {
  const { login } = useLogin();
  const handleSubmit = (user) => {
  

    login(user);
  };
  return (
    <>
    <div className=" flex justify-between mt-4 w-1/2 mx-auto" >  
      <button  className="  bg-[#155EB3]  p-2  text-white rounded-lg" onClick={()=>handleSubmit("admin")}>Admin</button>

      <button className=" bg-[#155EB3]  p-2  text-white rounded-lg" onClick={()=>handleSubmit("club")}>Club</button>
    </div>
    </>
  );
}
