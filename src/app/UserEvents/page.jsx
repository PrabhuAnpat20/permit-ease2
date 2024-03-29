import Link from "next/link";
import React from "react";
import EventList from "../EventList";

export default function page() {
  return (
    <>
      <div className=" mt-10">
        <div className=" flex justify-center mb-7">
            <img src="acm.png" alt="" />
        </div>
        <hr className="bg-[#155EB3] h-0.5 mx-40 mb-9" />
      </div>

      <div className=" mx-52">
        <div className=" text-[#155EB3]  font-extrabold text-3xl flex justify-between mb-8 ">
        
            <p>Events</p>
            
            <Link href="addEvent">
            <p>+ Add Event</p>
            </Link>
          
        </div>
        <EventList/>
      </div>
    </>
  );
}
