import React from 'react'

const Footer = () => {
  return (
    <>
<div className="mt-8 w-full bg-gray-600 px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col gap-1 text-teal-400 text-lg ">
         <p className='hover:scale-105 duration-300 cursor-pointer'>Featured Blogs</p>
         <p className='hover:scale-105 duration-300 cursor-pointer'>Most viewed</p>
         <p className='hover:scale-105 duration-300 cursor-pointer'>Readers Choice</p>
       </div>

       <div className="flex flex-col gap-1 text-teal-400 text-lg">
         <p className='hover:scale-105 duration-300 cursor-pointer'>Forum</p>
         <p className='hover:scale-105 duration-300 cursor-pointer'>Support</p>
         <p className='hover:scale-105 duration-300 cursor-pointer'>Recent Posts</p>
       </div>

       <div className="flex flex-col gap-1 text-teal-400 text-lg">
         <p className='hover:scale-105 duration-300 cursor-pointer'>Privacy Policy</p>
         <p className='hover:scale-105 duration-300 cursor-pointer'>About Us</p>
         <p className='hover:scale-105 duration-300 cursor-pointer'>Terms & Conditions</p>
         <p className='hover:scale-105 duration-300 cursor-pointer'>Terms of Service</p>
       </div>
    </div>
    <p className="py-3 pb-6 text-center text-white bg-gray-800 text-lg">All rights reserved @BlogAura 2024</p>
    </>
    
  )
}

export default Footer