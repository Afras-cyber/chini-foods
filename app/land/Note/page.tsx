import * as React from 'react';
import Link from 'next/link';
import { TextField, InputAdornment } from '@mui/material';
import { TbCurrentLocation } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import CardUI from './components/CardUI';


import Image from 'next/image'
import refresh from "/public/refresh.png"

const page = () => {
  return (
    <>
    <div className=' flex bg-gray-100 shadow-md '>
      <div className='lg:w-2/3 p-5 pt-10 lg:p-20 lg:pt-52 '>
      <h1 className='text-xl lg:text-4xl font-bold pb-5'>It&apos;s the food and groceries you love, delivered</h1>
      
      <div className=' p-5 pl-0 bg-white rounded-md grid grid-cols-1 gap-2 sm:grid-cols-2 '>
      <TextField
       id="outlined-textarea"
       label="Your street and street number"
       placeholder="Street, Postal Code"
       className='w-full ml-3 responsive'
       InputProps={{
       endAdornment: (
        <InputAdornment position="end">
          <Link href='#' className='flex text-gray-900 items-center justify-center'>
          <TbCurrentLocation className='text-pink-600 text-3xl pr-2' />
           Locate me
          </Link>
        </InputAdornment>
         ),
        }}
         />
  <button className='w-full lg:w-1/2 lg:ml-auto responsive  text-white bg-pink-700 px-3 py-2 text-sm rounded-md  ml-3'>
    Find Food
  </button>
</div>
      </div>
    <div className="lg:w-1/3  relative" >
         <Image 
             src={refresh} 
             alt="refresh"   
             layout='fill'
             objectFit='fill'
             className="responsive  lg:bottom-0 lg:right-10 " 
         /> 
         
       </div>
    </div>

    <main className='p-10'>
        <div className='flex items-center gap-3 relative '>
        <p className=" relative group  ">
              <Link href="#" className=" text-center">
                Homepage
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 group-hover:bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </p>
            <IoIosArrowForward className='text-gray-500 items-center  '/>
            <h1>Islamabad</h1>
        </div>
        <h1 className='text-4xl pt-5'>All restaurants</h1>
        
        <div className=' '>
          <CardUI />
        </div>
        

    </main>



    </>
  )
}

export default page