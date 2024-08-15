import React from 'react'
import Image from 'next/image'
import logo from '/public/newsfooter.svg'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";


export const Footer = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3 w-full h-auto bg-gray-100   '>
     <div className='ml-10 lg:ml-20 m-5 mt-20 mb-36 '>
     <Image src={logo} alt="contactimage" width={70} height={70} className="" />
     <h1 className='text-2xl font-extrabold pt-10'>Media Kit</h1>
      <p className=' font-light pt-10'>Download images, factsheets, and more</p>
      <Link href={"/contact"}>
      <button className=' font-bold text-pink-700 pt-10 flex items-center gap-2'>Download <IoIosArrowForward />
      </button>
      </Link>
     </div>

     <div className='ml-10 lg:ml-20 m-5 mt-20 mb-36'>
     <Image src={logo} alt="contactimage" width={70} height={70} className="" />
     <h1 className='text-2xl font-extrabold pt-10'>Contact us</h1>
     <p className=' font-light pt-10'>Get in touch with our PR team</p>
     <Link href={"/contact"}>
     <button className=' font-bold text-pink-700 pt-10 flex items-center gap-2'>Contact Us <IoIosArrowForward /></button>
     </Link>
     </div>
    </div>
     )
}
