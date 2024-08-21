"use client"
import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";



import logo from "/public/logo.svg";
import delivery from "/public/hero.png"


const Footer = () => {
  return (
    <div>
      <footer>
      <hr className=""/>
        <div className=" grid grid-cols-1  lg:grid-cols-4  p-14 pb-5">
        <div className="col-md-2 ">
            <h5 className="p-2 group font-bold text-2xl "></h5>
            <p className=" text-gray-500 p-2 group ">&copy;foodpanda</p>
            
          </div>
          <div className="col-md-2 pt-5 gap-5">
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                About Us
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Contact
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Pandapay Terms and Conditions
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Pandago
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
          </div>

          <div className="col-md-2 pt-5 gap-5">
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Press
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
            <p className=" relative text-gray-600 p-2 group">
              <Link href="#" className="text-center">
               Terms and Conditions
               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>

            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Pandapay
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
          </div>

          <div className="col-md-2 pt-5 gap-5">
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Help Center
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Privacy Policy
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
            <p className=" relative text-gray-600  p-2 group ">
              <Link href="#" className=" text-center">
                Security
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
          </div>
        </div>        
        <hr className="" />
      
    </footer>
    <footer className="grid grid-cols-1 lg:grid-cols-2 items-center text-center text-white">
       <div className=" flex pl-8 m-5">
       
         <Image 
             src={logo} 
             alt="contactimage" 
             width={150} 
             height={150} 
             className="" 
         /> 
         <div className="h-14 w-px bg-gray-900 mx-4 " />
         <Image 
             src={delivery} 
             alt="contactimage" 
             width={150} 
             height={150} 
             className="" 
         /> 
         
       </div>
       <div className="flex pl-8 m-5">
              <Link
                className="text-2xl  "
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/search?q=instagram&rlz=1C1KNTJ_enLK1078LK1078&oq=ins&gs_lcrp=EgZjaHJvbWUqDQgDEAAYgwEYsQMYgAQyDwgAEEUYORiDARixAxiABDIMCAEQIxgnGIAEGIoFMgYIAhAjGCcyDQgDEAAYgwEYsQMYgAQyEAgEEAAYgwEYsQMYgAQYigUyBggFEAUYQDIGCAYQRRg8MgYIBxBFGD3SAQg1OTczajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              >
                <FaInstagram />

              </Link>
              <Link
                className="text-2xl  "
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyour-website.com%2F&amp;src=sdkpreparse"
              >
                <RiFacebookFill />
              </Link>
      </div>
     </footer>
     
    </div>
  )
}

export default Footer







  