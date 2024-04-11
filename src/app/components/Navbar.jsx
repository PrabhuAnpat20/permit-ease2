"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import { useLogout } from "@/hooks/useLogout";
import Link from "next/link";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
  const {user}=useAuthContext();
  const {logout}=useLogout();
  
  const handleNav = () => {
    setNav(!nav);
  };
 


  return (
    <>
      <div className=" hidden md:block bg-[#155EB3] shadow-2xl sticky top-0 ">
        <div className=" flex p-3 justify-between  mx-36 ">
          <div className=" flex">
            <img src="/logo.png" alt="" className=" h-20" />
            <p className=" text-white font-bold text-3xl my-auto mx-6">
              Permit-Ease
            </p>
          </div>
          {user &&
           <div className=" flex my-auto text-white p-5 font-bold  text-xl ">
           <Link href="HomeUser">
             <p className=" mx-8">Home</p>
           </Link>
          
           {user === "club" && (
             <Link href="UserEvents">
               <p className="mx-8">Events</p>
             </Link>
           )}
             {user === "admin" && (
             <Link href="clubs">
               <p className="mx-8">Clubs</p>
             </Link>
           )}
           
           {user &&
           <Link href="/">
           <button className="mx-8 p-1 text-sm bg-red-500 rounded-md px-3 text-white" onClick={logout}>
             Log out
           </button>
         </Link>}
         </div>
          }
         
        </div>
      </div>

      {/* mobile navbar */}
     
      <div className=" block md:hidden">
        <div className=" bg-[#155EB3] flex p-2 justify-between">
          <div className=" flex">
            <img src="/logo.png" alt="" className=" h-20" />
            <p className=" font-bold text-white  my-auto mx-3 text-xl">
              Permit-Ease
            </p>
          </div>

          {
            user &&
            <div className=" my-auto p-5">
            <div
              onClick={handleNav}
              className=" cursor-pointer block md:hidden"
            >
              {nav ? (
                <AiOutlineClose size={25} color="white" />
              ) : (
                <AiOutlineMenu size={25} color="white" />
              )}
            </div>
          </div>
          }
          
        </div>
        {nav && user && (
          <div className=" font-bold p-2  text-center  bg-slate-100 text-[#155EB3] py-6">
            <Link href="HomeUser">
              <p className=" my-1"  onClick={handleNav}>Home</p>
            </Link>

            <p className=" my-1">About</p>
            {user === "club" && (
              <Link href="UserEvents">
                <p className="my-1"  onClick={handleNav}>Events</p>
              </Link>
            )}
              {user === "admin" && (
              <Link href="clubs">
                <p className="my-1"  onClick={handleNav}>Clubs</p>
              </Link>
            )}
            {user &&
             <Link href="/">
             <button className="text-red-700" onClick={logout}>
               Logout
             </button>
           </Link>}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
