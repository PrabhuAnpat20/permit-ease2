"use client";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className=" mx-52">
        <div className=" mt-10">
          <div className=" flex justify-center mb-7">
            <img src="acm.png" alt="" />
          </div>
          <hr className="bg-[#155EB3] h-0.5  mb-9" />
        </div>
        <div className="  bg-white rounded-lg shadow-md my-6">
          <p className=" p-5 font-extrabold text-3xl text-[#155EB3]">
            Pratik Ratadiya Session
          </p>
          <div className=" p-6">
            <div className=" flex justify-between mb-3">
              <p className=" font-bold text-2xl">
                Permission to provide Auditorium
              </p>
              <p>20/03/2002</p>
            </div>
            <p className=" my-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              accusamus quasi itaque ea officia sequi minima nihil! Nesciunt
              fuga magni facilis dolore mollitia fugiat facere animi at atque
              consequuntur doloremque nihil sunt non, rem culpa autem ea dicta
              sint, velit repudiandae eum quasi temporibus quis? Mollitia atque
              corrupti voluptatem doloribus iusto provident eveniet velit hic
              laudantium. Illo incidunt aut adipisci.
            </p>
          </div>

          <div className=" flex justify-center pb-9  ">
            <Link href="/reply/1">
            <button className=" bg-green-300 text-green-600 font-bold p-1 px-3 rounded-lg mx-4">
              Approve
            </button>
            </Link>
            
            <button className=" bg-[#E9673E] text-[#A10606] font-bold p-1 px-5 rounded-lg mx-4">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
