import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';


import {AiOutlineMail,AiOutlinePieChart} from "react-icons/ai"


import {BsWindowSidebar} from "react-icons/bs"


import {FaRegChartBar} from "react-icons/fa"

import {CiPizza} from "react-icons/ci"
import {LuMessageSquare} from "react-icons/lu"
import {TbMap2} from "react-icons/tb"
import {RiPagesLine} from "react-icons/ri"


import {BsListTask,BsGrid} from "react-icons/bs"
import {CgViewComfortable,CgProfile} from "react-icons/cg"
import {SiReacthookform} from "react-icons/si"
import {TfiReload} from "react-icons/tfi"
import {FiEdit2} from "react-icons/fi"
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineSetting} from "react-icons/ai"







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
        { name: 'List View V1', icon: BsListTask },
        { name: 'List View V2', icon: BsListTask },
        { name: 'List View V3', icon: BsListTask },
        { name: 'List View V4', icon: BsListTask },
      ],
    },
    {
      title: 'Flex Lists',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Flex List V1', icon: BsListTask },
        { name: 'Flex List V2', icon: BsListTask },
        { name: 'Flex List V3', icon: BsListTask },
      ],
    },
    {
      title: 'Datatabale',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Table List V1', icon: CgViewComfortable },
        { name: 'Table List V2', icon: CgViewComfortable },
        { name: 'Table List V3', icon: CgViewComfortable },
        
      ],
    },
    {
      title: 'Form Layouts',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Form Layout v1', icon: SiReacthookform },
        { name: 'Form Layout v2', icon: SiReacthookform },
        { name: 'Form Layout v3', icon: SiReacthookform },
        { name: 'Form Layout v4', icon: SiReacthookform },
        { name: 'Form Layout v5', icon: SiReacthookform },
      ],
    },
    {
      title: 'Placeload',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Placeload v1', icon: TfiReload },
        { name: 'Placeload v2', icon: TfiReload },
        { name: 'Placeload v3', icon: TfiReload },
        { name: 'Placeload v4', icon: TfiReload },
        { name: 'Placeload v5', icon: TfiReload },
        { name: 'Placeload v6', icon: TfiReload },
      ],
    },
    {
      title: 'Card Grid',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Card Grid V1', icon: BsGrid },
        { name: 'Card Grid V2', icon: BsGrid },
        { name: 'Card Grid V3', icon: BsGrid },
        { name: 'Card Grid V4', icon: BsGrid },

      ],
    },
    {
      title: 'Tile Grid',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Tile Grid V', icon: CiPizza },
        { name: 'Tile Grid V', icon: TbMap2 },
        { name: 'Tile Grid V', icon: TbMap2 },
        { name: 'Tile Grid V', icon: AiOutlineMail },
        { name: 'Tile Grid V', icon: LuMessageSquare },
        { name: 'Tile Grid V', icon: LuMessageSquare },
      ],
    },
    {
      title: 'User Grid',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'User Grid V', icon: CiPizza },
        { name: 'User Grid V', icon: TbMap2 },
        { name: 'User Grid V', icon: TbMap2 },
        { name: 'User Grid V', icon: AiOutlineMail },
        { name: 'User Grid V', icon: LuMessageSquare },
        { name: 'User Grid V', icon: LuMessageSquare },
      ],
    },
    {
      title: 'Personal',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Profile', icon: CgProfile },
        { name: 'Edit Profile', icon: FiEdit2 },
        { name: 'Notifaction', icon: IoIosNotificationsOutline },
        { name: 'Setting', icon: AiOutlineSetting },
        
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
    <div className='w-80 h-screen '>
      <div className='w-80 h-16  flex'>
        <div className=' w-2/3 h-16'></div>
        <div className=' w-2/3 h-16 flex place-items-center'>
          <h1 className='text-xl text-gray-700'>Layouts</h1>
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
