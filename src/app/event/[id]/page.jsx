"use client"
import React from "react";
import 'boxicons'
import Link from "next/link";
export default function page() {
  return (
    <div className=" mx-2 md:mx-52">
      <div className="  flex justify-between  my-6 md:my-16 text-[#155EB3] font-bold  text-md md:text-2xl">
        <div className=" flex justify-center  ">
          <div className="my-auto  mr-2">
          <box-icon name='label' type='solid' color='#155eb3' size='md'></box-icon>
          </div>
        
        <p className=" my-auto">Pratik Ratadiya Session</p>
        </div>
        <Link href="addPermission">
          <div className=" my-4">
          <p >+ Add Permission</p>
          </div>
        
        </Link>
       
      </div>
      <div className="  bg-white rounded-lg shadow-md my-6">
        <div className=" p-6">
          <div className=" flex justify-between mb-3 <p >+ Add Permission</p>">
            <p className=" font-bold ">
              Permission to provide Auditorium
            </p>
            <p >20/03/2002</p>
          </div>
          <p className=" my-3 text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            accusamus quasi itaque ea officia sequi minima nihil! Nesciunt fuga
            magni facilis dolore mollitia fugiat facere animi at atque
            consequuntur doloremque nihil sunt non, rem culpa autem ea dicta
            sint, velit repudiandae eum quasi temporibus quis? Mollitia atque
            corrupti voluptatem doloribus iusto provident eveniet velit hic
            laudantium. Illo incidunt aut adipisci.
          </p>
        </div>

        <div className=" flex justify-end  ">
          <p className=" bg-green-300 text-green-600 font-bold p-1 px-3 rounded-tl-lg">
            Approved
          </p>
        </div>
      </div>
      <div className="  bg-white rounded-lg shadow-md my-6">
        <div className=" p-6">
          <div className=" flex justify-between mb-3 <p >+ Add Permission</p>">
            <p className=" font-bold ">
              Permission to provide Auditorium
            </p>
            <p >20/03/2002</p>
          </div>
          <p className=" my-3 text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            accusamus quasi itaque ea officia sequi minima nihil! Nesciunt fuga
            magni facilis dolore mollitia fugiat facere animi at atque
            consequuntur doloremque nihil sunt non, rem culpa autem ea dicta
            sint, velit repudiandae eum quasi temporibus quis? Mollitia atque
            corrupti voluptatem doloribus iusto provident eveniet velit hic
            laudantium. Illo incidunt aut adipisci.
          </p>
        </div>

        <div className=" flex justify-end  ">
          <p className=" bg-green-300 text-green-600 font-bold p-1 px-3 rounded-tl-lg">
            Approved
          </p>
        </div>
      </div>

      <div className="  bg-white rounded-lg shadow-md my-6">
        <div className=" p-6">
          <div className=" flex justify-between mb-3 <p >+ Add Permission</p>">
            <p className=" font-bold ">
              Permission to provide Auditorium
            </p>
            <p >20/03/2002</p>
          </div>
          <p className=" my-3 text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            accusamus quasi itaque ea officia sequi minima nihil! Nesciunt fuga
            magni facilis dolore mollitia fugiat facere animi at atque
            consequuntur doloremque nihil sunt non, rem culpa autem ea dicta
            sint, velit repudiandae eum quasi temporibus quis? Mollitia atque
            corrupti voluptatem doloribus iusto provident eveniet velit hic
            laudantium. Illo incidunt aut adipisci.
          </p>
        </div>

        <div className=" flex justify-end  ">
          <p className=" bg-green-300 text-green-600 font-bold p-1 px-3 rounded-tl-lg">
            Approved
          </p>
        </div>
      </div>
    </div>
  );
}
