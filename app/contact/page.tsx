import React from 'react'
import Image from "next/image";
import TextField from '@mui/material/TextField';

import Button from "@/components/Button";
import contactbg from "/public/contact.jpeg";
import pau from "/public/Pau.png";


function page() {
  return (
    <>
    <div className='relative'>
      <div className='w-full h-auto '>
      <Image src={contactbg} alt="contactimage" layout="responsive" width={1920} height={1080} className="object-cover w-full h-auto" />
      </div>
      <div className='absolute inset-0 flex items-center  left-10'>
      <h1 className='text-white text-3xl md:text-5xl font-bold'>Contact us</h1>
      </div>
    </div>

    <div className='lg:grid lg:grid-cols-2 md:grid-cols-2 m-20 sm:m-10'>

    <form className='max-w-4xl mx-auto p-6'>
  <h1 className='text-2xl font-bold mb-6'>Contact Form</h1>
  
  <div className='mb-4'>
    <label className='block text-sm font-medium mb-2'>Name *</label>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      <div className='w-full'>
        <TextField
          placeholder=""
          helperText="First"
          className='w-full'
        />
      </div>
      <div className='w-full'>
        <TextField
          placeholder=""
          helperText="Last"
          className='w-full'
        />
      </div>
    </div>
  </div>
  
  <div className='mb-4'>
    <label className='block text-sm font-medium mb-2'>Email *</label>
    <div>
      <TextField
        className='w-full'
        placeholder=""
        helperText=""
      />
    </div>
  </div>
  
  <div className='mb-4'>
    <label className='block text-sm font-medium mb-2'>Your Message *</label>
    <div>
      <textarea
        className='w-full h-52 p-2 border rounded'
        placeholder=""
      ></textarea>
    </div>
  </div>
  
  <div className='flex justify-start'>
    <Button>Submit</Button>
  </div>
</form>
      <div className='m-10 pt-28'>
      <Image src={pau} alt="contactimage" layout="responsive" width={400} height={300} className="object-center" />
      </div>
    </div>

    <div className='w-full h-56 bg-gray-100 flex items-center   md:text-center  '>
  <div className='lg:ml-40 m-5 md:text-center  '>
    <p>Got a question about your order? Need help with some of your app features? Contact Help Centre via app menu.</p>
  </div>
</div>
    </>
  )
}

export default page
