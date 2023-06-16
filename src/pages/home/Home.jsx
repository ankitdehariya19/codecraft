import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
// import Dashboards from "../../components/sidebar/submenu/Dashboards"


// import {Link} from "react-router-dom"


const Home = () => {
  return (
    <section className='flex  '>

      <Sidebar />
      {/* <Dashboards/> */}

      <div className='  text-xl text-gray-600 font-semibold transition-all duration-1000 ease-in-out  w-full min-h-screen flex justify-center center'>
        <div className=' h-screen w-5/6 ml-14 transition-all duration-1000 ease-in-out grid' >

           <Navbar/>
        </div>
      </div>


    </section>
  )
}

export default Home