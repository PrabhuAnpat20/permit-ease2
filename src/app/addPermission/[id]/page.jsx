import React from "react";

export default function page() {
  return (
    <>
      <div className="  md:w-2/3   md:ml-auto md:mr-auto my-16">
        <div className=" ">
          <p className=" text-4xl  font-extrabold text-[#155EB3]  flex justify-center mb-5">
            New Permission
          </p>
          <div className=" flex justify-center">
            <input
              type="text"
              className="  my-6 p-2 md:p-3 rounded-lg shadow-lg  w-full mx-3 md:mx-0  md:w-2/3 "
              placeholder="Subject"
            />
          </div>

          <br />

          <div className=" flex justify-center">
            <textarea
              placeholder="Description...."
              className=" p-2 rounded-lg shadow-lg mb-7 w-full mx-3 md:mx-0 md:w-2/3 h-60 "
            ></textarea>
          </div>

<div className=" md:flex md:justify-center">
<div className=" flex justify-between mx-3 md:w-2/3">
            <select className="  p-2 rounded-sm w-1/2">
              <option value="">Send To</option>
              <option value="option1">Dr GV Kale</option>
              <option value="option2">PT Kulkarni</option>
              <option value="option3">ST Gandhe</option>
            </select>
            <button className=" bg-[#155EB3] p-1 text-white font-bold px-5 rounded-md">
              Send
            </button>
          </div>
</div>
         
        </div>
      </div>
    </>
  );
}
