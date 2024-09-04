import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='border-b-2 '>
      <ul className='flex  gap-[4vw] justify-start mb-3'>
        <li className='hover:text-pink-500 gap-5  font-bold'>
          <Link href="/news/press-releases">Press Releases</Link>
        </li>
        <li className='hover:text-pink-500 gap-5  font-bold'>
          <Link href="/news/editorials">Editorials</Link>
        </li>
        <li className='hover:text-pink-500 gap-5  font-bold'>
          <Link href="/news/infographics">Infographics</Link>
        </li>
      </ul>
      </nav>
  )
}

export default Navbar