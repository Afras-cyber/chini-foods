import React from 'react'
import Image from 'next/image'

import Navbar from './components/Navbar'
import contactbg from "/public/contact.jpeg";


function page() {
  return (
    <>
    <div className='m-20'>
      <h1 className='text-5xl font-extrabold mb-8 text-gray-800'>Newsroom</h1>
    <Navbar />
    </div>
    </>
  )
}

export default page
