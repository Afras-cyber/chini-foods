"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import NewsButton from './NewsButton';


const Nav = () => {

  const [showMore, setShowMore] = useState(false);
  const toggleMore = () => {
    setShowMore(!showMore);
};

  return (
    <nav className='flex flex-wrap justify-between'>
            <div className='flex'>
                <h1 className='text-2xl font-extrabold'>Discover latest news</h1>
            </div>

            <div className='flex flex-wrap gap-3 w-full lg:w-1/2'>
                <Link href="/news/press-releases"><button className='hover:text-pink-700 font-bold border-2 border-white bg-black text-white rounded-full p-2 pl-7 pr-7 m-1'>All</button></Link>
                <Link href="/news/press-releases"><NewsButton className="">BUSINESS</NewsButton></Link>
                <Link href="/news/press-releases"><NewsButton className=''>CAMPAIGNS</NewsButton></Link>
                <button 
                    className='hover:text-pink-700 font-bold border-2 border-black text-black rounded-full p-2 pl-7 pr-7 m-1'
                    onClick={toggleMore}
                >
                    {showMore ? '- FEWER' : '+ MORE'}
                </button>
                 {showMore && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-2">
                    <Link href="/news/press-releases"><NewsButton className=''>EDITORIALS</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>FOOD DELIVERY</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>INFOGRAPHICS</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>MERCHANTS</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>PANDA ADS</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>PANDAGO</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>PRESS RELEASES</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>RIDERS</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>SUSTAINABILITY</NewsButton></Link>
                    <Link href="/news/press-releases"><NewsButton className=''>TECH</NewsButton></Link>
                </div>
            )}
            </div>

           
        </nav>
  )
}

export default Nav