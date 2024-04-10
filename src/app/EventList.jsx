"use client";
import React from "react";
import Link from "next/link";
export default function EventList() {
  return (
    <>
      <div className=" grid grid-cols-1  md:grid-cols-3 gap-10 md:my-5 p-1 ">
        <div className=" bg-white rounded-md text-center p-2 shadow-lg">
          <p className=" font-bold text-xl md:text-2xl my-2">
            Pratik Ratadiya Session
          </p>
          <p className=" text-lg md:text-xl my-2">Auditorium</p>
          <p className=" text-lg my-2 md:text-xl ">2 March 2023</p>
          <Link href="/event/1">
          <button className=" bg-[#155EB3] text-white p-1 px-4 rounded-sm font-bold my-2 text-sm">
            View Permissions
          </button>
          </Link>
          
        </div>

        <div className=" bg-white rounded-md text-center p-2 shadow-lg">
          <p className=" font-bold text-xl md:text-2xl my-2">
            Pratik Ratadiya Session
          </p>
          <p className=" text-lg md:text-xl my-2">Auditorium</p>
          <p className=" text-lg my-2 md:text-xl ">2 March 2023</p>
          <button className=" bg-[#155EB3] text-white p-1 px-4 rounded-sm font-bold my-2 text-sm">
            View Permissions
          </button>
        </div>

        <div className=" bg-white rounded-md text-center p-2 shadow-lg">
          <p className=" font-bold text-xl md:text-2xl my-2">
            Pratik Ratadiya Session
          </p>
          <p className=" text-lg md:text-xl my-2">Auditorium</p>
          <p className=" text-lg my-2 md:text-xl ">2 March 2023</p>
          <button className=" bg-[#155EB3] text-white p-1 px-4 rounded-sm font-bold my-2 text-sm">
            View Permissions
          </button>
        </div>

        <div className=" bg-white rounded-md text-center p-2 shadow-lg">
          <p className=" font-bold text-xl md:text-2xl my-2">
            Pratik Ratadiya Session
          </p>
          <p className=" text-lg md:text-xl my-2">Auditorium</p>
          <p className=" text-lg my-2 md:text-xl ">2 March 2023</p>
          <button className=" bg-[#155EB3] text-white p-1 px-4 rounded-sm font-bold my-2 text-sm">
            View Permissions
          </button>
        </div>

        <div className=" bg-white rounded-md text-center p-2 shadow-lg">
          <p className=" font-bold text-xl md:text-2xl my-2">
            Pratik Ratadiya Session
          </p>
          <p className=" text-lg md:text-xl my-2">Auditorium</p>
          <p className=" text-lg my-2 md:text-xl ">2 March 2023</p>
          <button className=" bg-[#155EB3] text-white p-1 px-4 rounded-sm font-bold my-2 text-sm">
            View Permissions
          </button>
        </div>
      </div>
    </>
  );
}
