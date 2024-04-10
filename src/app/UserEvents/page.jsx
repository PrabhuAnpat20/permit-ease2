"use client";
import Link from "next/link";
import React from "react";
import EventList from "../EventList";
// import "boxicons";
export default function page() {
  return (
    <>
      <div className=" mt-10">
        <div className=" flex justify-center mb-7">
          <img src="acm.png" alt="" t className=" w-44 md:w-60" />
        </div>
        <hr className="bg-[#155EB3] h-0.5 mx-2 md:mx-40 mb-9" />
      </div>

      <div className=" mx-2 md:mx-52">
        <div className=" text-[#155EB3]  font-extrabold   text-xl md:text-3xl flex justify-between mb-8 ">
          <div className=" flex">
            <div className=" my-auto mr-3">
              <div className=" my-1">
                {/* <box-icon
                  name="calendar-alt"
                  type="solid"
                  color="#155eb3"
                  size="md"
                ></box-icon> */}
              </div>
            </div>

            <p className=" my-auto "> Events</p>
          </div>
          <div className=" my-auto">
            <Link href="addEvent">
              <p className=" my-auto">+ Add Event</p>
            </Link>
          </div>
        </div>
        <EventList />
      </div>
    </>
  );
}
