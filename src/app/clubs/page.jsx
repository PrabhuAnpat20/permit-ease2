import React from 'react'

export default function page() {
  return (
    <>
    <div className=' mx-4 md:mx-44'>
        
           <p className=' text-[#155EB3] font-extrabold text-3xl my-11'>CLUBS</p>
           <div className=' grid md:grid-cols-3 gap-10'>
            <div className=' bg-white text-center p-4 rounded-md shadow-md'>
                <p className=' font-bold text-xl'>PICT ACM Student Chapter</p>
                <img src="acm.png" alt="" className=' mx-auto' />
                <button className=" bg-[#155EB3] text-white p-2 px-3 rounded-sm font-bold my-2 text-sm">View Permissions</button>
            </div>
            <div className=' bg-white text-center p-4 rounded-md shadow-md'>
                <p className=' font-bold text-xl'>PICT ACM Student Chapter</p>
                <img src="acm.png" alt="" className=' mx-auto' />
                <button className=" bg-[#155EB3] text-white p-2 px-3 rounded-sm font-bold my-2 text-sm">View Permissions</button>
            </div>
            <div className=' bg-white text-center p-4 rounded-md shadow-md'>
                <p className=' font-bold text-xl'>PICT ACM Student Chapter</p>
                <img src="acm.png" alt="" className=' mx-auto' />
                <button className=" bg-[#155EB3] text-white p-2 px-3 rounded-sm font-bold my-2 text-sm">View Permissions</button>
            </div>
            </div> 
    </div>
    </>
  )
}
