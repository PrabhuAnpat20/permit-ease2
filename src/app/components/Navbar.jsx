"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
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
          <div className=" flex my-auto text-white p-5 font-bold  text-xl ">
            <Link href="HomeUser">
              <p className=" mx-8">Home</p>
            </Link>
            <p className=" mx-8">About</p>
            <Link href="UserEvents">
              <p className=" mx-8">Events</p>
            </Link>
          </div>
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
        </div>
        {nav && (
          <div className=" font-bold p-2  text-center  bg-slate-100 text-[#155EB3] py-6">
            <Link href="HomeUser">
              <p className=" my-1">Home</p>
            </Link>

            <p className=" my-1">About</p>
            <Link href="UserEvents">
              <p className=" my-1">Event</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
