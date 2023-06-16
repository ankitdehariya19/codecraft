import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { GiChart } from 'react-icons/gi';
import {BsPieChart,BsAirplane} from "react-icons/bs"
import {AiOutlineLineChart,AiOutlineCreditCard,AiOutlineMail,AiOutlinePieChart} from "react-icons/ai"
import {CiBank} from "react-icons/ci"
import {BiBuildings} from "react-icons/bi"
import {BsPeople,BsHeartPulse,BsWindowSidebar} from "react-icons/bs"
import {SlGraduation} from "react-icons/sl"
import {TfiBag,TfiWrite,TfiShoppingCart} from "react-icons/tfi"
import {TiWeatherPartlySunny} from "react-icons/ti"
import {FaRegHospital,FaRegChartBar} from "react-icons/fa"
import {RiVideoLine} from "react-icons/ri"
import {CiServer,CiPizza} from "react-icons/ci"
import {LuMessageSquare} from "react-icons/lu"
import {TbMap2} from "react-icons/tb"
import {RiPagesLine} from "react-icons/ri"







const Layouts = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Close submenu if already active
    } else {
      setActiveMenu(menu); // Open submenu
    }
  };

  const menuItems = [
    {
      title: 'Lists',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Personal V1', icon: GiChart },
        { name: 'Personal v3', icon: BsPieChart },
        { name: 'Personal V3', icon: AiOutlineLineChart },
      ],
    },
    {
      title: 'Flex Lists',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Analytics Dashboard', icon: GiChart },
        { name: 'Stocks Dashboard', icon: AiOutlineLineChart },
        { name: 'Sales Dashboard', icon: AiOutlineCreditCard },
      ],
    },
    {
      title: 'Datatabale',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Banking V1', icon: CiBank },
        { name: 'Banking V2', icon: CiBank },
        { name: 'Banking V3', icon: CiBank },
        
      ],
    },
    {
      title: 'Form Layouts',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Flights Booking', icon: BsAirplane },
        { name: 'Companay Board', icon: BiBuildings },
        { name: 'HR Board', icon: BsPeople },
        { name: 'Course Dashboard', icon: SlGraduation },
        { name: 'Jobs Dashboard', icon: TfiBag },
      ],
    },
    {
      title: 'Placeload',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Influencer', icon: BsHeartPulse },
        { name: 'Hobbies', icon: TiWeatherPartlySunny },
        { name: 'Health', icon: FaRegHospital },
        { name: 'Writer', icon: TfiWrite },
        { name: 'Video', icon: RiVideoLine },
        { name: 'Soccer Dashboard', icon: CiServer },
      ],
    },
    {
      title: 'Card Grid',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Ecommerce V1', icon: TfiShoppingCart },

      ],
    },
    {
      title: 'Tile Grid',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Food Delivery', icon: CiPizza },
        { name: 'Maps V1', icon: TbMap2 },
        { name: 'Maps V2', icon: TbMap2 },
        { name: 'Inbox', icon: AiOutlineMail },
        { name: 'Messaging V1', icon: LuMessageSquare },
        { name: 'Messaging V2', icon: LuMessageSquare },
      ],
    },
    {
      title: 'User Grid',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Food Delivery', icon: CiPizza },
        { name: 'Maps V1', icon: TbMap2 },
        { name: 'Maps V2', icon: TbMap2 },
        { name: 'Inbox', icon: AiOutlineMail },
        { name: 'Messaging V1', icon: LuMessageSquare },
        { name: 'Messaging V2', icon: LuMessageSquare },
      ],
    },
    {
      title: 'Personal',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Food Delivery', icon: CiPizza },
        { name: 'Maps V1', icon: TbMap2 },
        { name: 'Maps V2', icon: TbMap2 },
        { name: 'Inbox', icon: AiOutlineMail },
        { name: 'Messaging V1', icon: LuMessageSquare },
        { name: 'Messaging V2', icon: LuMessageSquare },
      ],
    },
    {
      title: 'Pages',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Apex Charts', icon: AiOutlinePieChart },
        { name: 'Bilboard Js', icon: FaRegChartBar },
       
      ],
    },
    {
      title: 'Subpages',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'UI Widgets', icon: RiPagesLine },
        { name: 'Creative Widgets', icon: RiPagesLine },
        { name: 'List Widgets', icon: RiPagesLine },
        { name: 'Stat Widgets', icon: RiPagesLine },
      ],
    },
    {
      title: 'Projects',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Regular Sidebar', icon: BsWindowSidebar },
        { name: 'Courved Sidebar', icon: BsWindowSidebar },
        { name: 'Colored Sidebar', icon: BsWindowSidebar },
        { name: 'Labels Sidebar', icon: BsWindowSidebar },
      ],
    },
    {
      title: 'Utility',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Regular Sidebar', icon: BsWindowSidebar },
        { name: 'Courved Sidebar', icon: BsWindowSidebar },
        { name: 'Colored Sidebar', icon: BsWindowSidebar },
        { name: 'Labels Sidebar', icon: BsWindowSidebar },
      ],
    },
    {
      title: 'Onboarding',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Regular Sidebar', icon: BsWindowSidebar },
        { name: 'Courved Sidebar', icon: BsWindowSidebar },
        { name: 'Colored Sidebar', icon: BsWindowSidebar },
        { name: 'Labels Sidebar', icon: BsWindowSidebar },
      ],
    },
    {
      title: 'Error Pages',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Regular Sidebar', icon: BsWindowSidebar },
        { name: 'Courved Sidebar', icon: BsWindowSidebar },
        { name: 'Colored Sidebar', icon: BsWindowSidebar },
        { name: 'Labels Sidebar', icon: BsWindowSidebar },
      ],
    },
    // Add more menu items as needed
  ];

  return (
    <div className='w-80 h-screen bg-red-400'>
      <div className='w-80 h-16 bg-red-600 flex'>
        <div className='bg-yellow-500 w-2/3 h-16'></div>
        <div className='bg-yellow-600 w-2/3 h-16 flex place-items-center'>
          <h1 className='text-xl text-gray-700'>Dashboards</h1>
        </div>
      </div>
      <div className='w-64 h-5/6 bg-white ml-16 -mt-1'>
        <ul className='ml-6 mt-6'>
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`mb-4 text-sm font-medium text ${
                activeMenu === menuItem.title.toLowerCase()
                  ? 'text-stone-950'
                  : 'text-slate-400'
              } hover:text-stone-950`}
              onClick={() => handleMenuClick(menuItem.title.toLowerCase())}
            >
              <div className='flex items-center justify-between'>
                <span>{menuItem.title}</span>{' '}
                {menuItem.submenus ? (
                  activeMenu === menuItem.title.toLowerCase() ? (
                    <MdOutlineKeyboardArrowDown className='text-xl mr-4' />
                  ) : (
                    <MdOutlineKeyboardArrowRight className='text-xl mr-4' />
                  )
                ) : null}
              </div>
              {activeMenu === menuItem.title.toLowerCase() && menuItem.submenus && (
                <ul className='ml-6 mt-2'>
                  {menuItem.submenus.map((submenu, index) => (
                    <li
                      key={index}
                      className='mb-2 text-sm font-medium text text-slate-400 hover:text-stone-600 flex items-center'
                    >
                      <span className='mr-2'>
                        {submenu.icon ? <submenu.icon size={16} /> : null}
                      </span>
                      {submenu.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Layouts;
