import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdOutlineDarkMode } from "react-icons/md"
import image from './1.png';


const Navbar = () => {
  return (
    <div className='w-full h-10 mt-2 flex justify-between'>

      <div className='h-full  w-72'>
        
        <h1>
           Personal 
        </h1>
      </div>
      <div className='h-full  w-60 flex justify-between'>
        <div className='h-full  w-1/4 flex justify-center items-center'>
          <MdOutlineDarkMode />
        </div>
        <div className="h-full  w-1/4 flex justify-center items-center">
          <img className="w-10 h-10" src={image} alt="" />
        </div>
        <div className='h-full  w-1/4 flex justify-center items-center'>
          <IoMdNotificationsOutline />
        </div>
        <div className='h-full  w-1/4 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:grid" class="iconify sidebar-svg iconify--feather"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Navbar