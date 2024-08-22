import React from 'react'
import Image from 'next/image'
import { IoCloseOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { PiHandbagSimpleLight } from "react-icons/pi";


import bg from "/public/header.svg";
import logo from "/public/logo.svg";

const Navbar = () => {
  return (
    <div>
      <header className="sticky top-0 bg-pink-700 p-3 gap-[3vw] justify-center flex flex-col  md:flex-row items-center">
        <div className="text-white">
         <Image 
             src={bg} 
             alt="contactimage" 
             width={50} 
             height={50} 
             className="filter invert brightness-0" 
         />
       </div>
        <ul className="flex  gap-[4vw] justify-center items-center">
            <li className=" ">
              <p  className="text-white font-bold ">Do you need a business account?</p>
            </li>
             <li className="">
             <button className='border border-white rounded-lg text-white bg-pink-700 hover:bg-white hover:text-black px-5 py-2 text-sm'>SIGN UP NOW</button>
             </li>
        </ul> 
        <ul className='flex justify-end items-end'>
        <li className="">
            <button ><IoCloseOutline className='text-white ' /></button>
            </li>
        </ul>
      </header>

    <nav className='flex flex-col  md:flex-row items-center justify-between sticky top-0 p-3 gap-[3vw]'>

      <ul className="flex  gap-[4vw] justify-center items-center ml-10">
        <li>
            <Image 
            src={logo} 
            alt="logo" 
            width={150} 
            height={150} 
            className="" />
        </li>
      </ul>
      
      <ul className="flex  gap-[4vw] justify-center items-center">  
        
        <li className="">
        <button className='border border-black rounded-lg text-black px-3 py-2 text-sm'>Log in</button>
        </li>
        <li className="">
        <button className=' text-white rounded-lg bg-pink-700  px-3 py-2 text-sm'>Sing up</button>
        </li>
        <li className="">
        <button className="flex items-center justify-center "><TbWorld className="mr-2" /> EN <IoIosArrowDown className="ml-2" /></button>
        </li>
        <li>
        <PiHandbagSimpleLight  className='mr-5'/>
        </li>
      </ul> 
        </nav>
    </div>
  )
}

export default Navbar