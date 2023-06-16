import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import {BsAirplane} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

import {BiBuildings} from "react-icons/bi"
import {BsPeople,BsHeartPulse} from "react-icons/bs"
import {SlGraduation} from "react-icons/sl"
import {TfiShoppingCart} from "react-icons/tfi"
import {TiWeatherPartlySunny} from "react-icons/ti"
import {FaRegHospital} from "react-icons/fa"

import {CiPizza} from "react-icons/ci"
import {LuMessageSquare} from "react-icons/lu"
import {TbMap2} from "react-icons/tb"








const Elements = () => {
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
      title: 'Elements Hub',
      
      
    },
    {
      title: 'Colors',
      
     
    },
    {
      title: 'Helpers',
     
    },
    {
      title: 'Icons',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'Iconify', icon: BsAirplane },
        { name: 'Line Icons Light', icon: BiBuildings },
        { name: 'Line Icons Regular', icon: BsPeople },
        { name: 'Font Awesome 5', icon: SlGraduation },

       
       
      ],
    },
    {
        title: 'VDropdown',
        
      },
    {
        title: 'VLoader',
        
      },
    {
        title: 'VPlaceload',
        
      },
    {
        title: 'VPlaceloadAvatar',
        
      },
    {
        title: 'VMessage',
        
      },
    {
        title: 'VModal',
        
      },
    {
        title: 'VProgress',
        
      },
    {
        title: 'VTootip',
        
      },
    {
      title: 'Buttons',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'VButton', icon: BsHeartPulse },
        { name: 'VAction', icon: TiWeatherPartlySunny },
        { name: 'VIconButton', icon: FaRegHospital },
       
      ],
    },
    
    {
      title: 'Forms',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'VFiedl', icon: TfiShoppingCart },
        { name: 'VControl', icon: TfiShoppingCart },
        { name: 'VTextarea', icon: TfiShoppingCart },
        { name: 'VSelect', icon: TfiShoppingCart },
        { name: 'VCheckbox', icon: TfiShoppingCart },
        { name: 'VRadio', icon: TfiShoppingCart },
        { name: 'File Input', icon: TfiShoppingCart },

      ],
    },
    {
      title: 'Switches',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'VAnimatedCheckbox', icon: CiPizza },
        { name: 'VSwichbock', icon: TbMap2 },
        { name: 'VSwichSegment', icon: TbMap2 },
       
      ],
    },
    {
      title: 'Addons',
      icon: MdOutlineKeyboardArrowRight,
      submenus: [
        { name: 'VCalendar & VdatePicker', icon: CiPizza },
        { name: 'VMaskinput', icon: TbMap2 },
        { name: 'VFilePond', icon: TbMap2 },
        { name: 'VCreditCrad', icon: AiOutlineMail },
        { name: 'Vueform/multiselect', icon: LuMessageSquare },
        { name: 'vueform/slider', icon: LuMessageSquare },
        { name: 'CKEditor ', icon: LuMessageSquare },
      ]
    },
    // Add more menu items as needed
  ];

  return (
    <div className='w-80 h-screen'>
      <div className='w-80 h-16 flex'>
        <div className=' w-2/3 h-16'></div>
        <div className=' w-2/3 h-16 flex place-items-center'>
          <h1 className='text-xl text-gray-700'>Elements</h1>
        </div>
      </div>
      <div className='w-64 h-5/6  ml-16 -mt-1'>
        <ul className='ml-6 mt-6'>
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`mb-4 text-sm font-medium text ${
                activeMenu === menuItem.title.toLowerCase()
                  ? 'text-stone-950'
                  : 'text-slate-400'
              } hover:text-black`}
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

export default Elements;
