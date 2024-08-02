import React from 'react'
import Image from 'next/image'

import Navbar from './components/Navbar'
import CardNews from './components/CardNews'
import { Footer } from './components/Footer'


function page() {
  return (
    <>
    <div className='m-20'>
    <div className=''>
      <h1 className='text-5xl font-extrabold mb-8 text-gray-800'>Newsroom</h1>
    <Navbar />
    </div>
    <div className=''> 
       <CardNews />
    </div>
    </div>
    <div className=''>
    <Footer />
    </div>
    </>
  )
}

export default page
