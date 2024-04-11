"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginLayout({ children }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("admin");

  const handleAdminLogin = () => {
    router.push("/login/adminLogin");
    setActiveButton("admin");
  };

  const handleClubLogin = () => {
    router.push("/login/clubLogin");
    setActiveButton("club");
  };

  return (
    <div className="bg-slate-50 mx-4 text-center shadow-xl rounded-sm 
     ">
      <div className=" flex flex-col md:flex-row  ">
        <div className=" mx-auto md:mx-0  bg-white w-full md:h-full md:w-1/2">
          <img src="/login.png" alt="login" className=" mx-auto  md:w-[700px]"/>
        </div>
        <div className=" md:my-auto md:mx-auto">
          <div className="flex justify-center w-1/2 mx-auto md:mx-0 md:w-full">
            <button
              className={`p-2 text-white rounded-md px-8 mr-2 mt-8 ${
                activeButton === "admin" ? "bg-blue-800" : "bg-[#155EB3]"
              }`}
              onClick={handleAdminLogin}
            >
              Admin
            </button>

            <button
              className={`p-2 text-white rounded-md px-10 mt-8 ${
                activeButton === "club" ? "bg-blue-800" : "bg-[#155EB3]"
              }`}
              onClick={handleClubLogin}
            >
              Club
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
