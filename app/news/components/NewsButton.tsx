import React from 'react'

function NewsButton (props: any)  {
    const {children} = props
    return (
      <button className="hover:text-pink-700 font-bold border-2 border-black bg-white text-black rounded-full p-2 pl-7 pr-7 m-1 text-sm">{children}</button>
    )
  }
  
  
export default NewsButton


