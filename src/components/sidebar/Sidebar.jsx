import React, { useState } from 'react';
import Dashboards from './submenu/Dashboards';
import Layouts from './submenu/Layouts';
import Elements from './submenu/Elements';
import image from './12.png';


const Sidebar = () => {
  const [isShown, setIsShown] = useState(true);
  const [isShowna, setIsShowna] = useState(false);
  const [isShownb, setIsShownb] = useState(false);
  const [isShownc, setIsShownc] = useState(false);
  const [isShownd, setIsShownd] = useState(false);

  const toggleShow = () => {
    setIsShown(!isShown);
    setIsShowna(false);
    setIsShownb(false);
    setIsShownc(false);
    setIsShownd(false);
  };

  const toggleShowa = () => {
    setIsShowna(!isShowna);
    setIsShown(false);
    setIsShownb(false);
    setIsShownc(false);
    setIsShownd(false);
  };

  const toggleShowb = () => {
    setIsShownb(!isShownb);
    setIsShown(false);
    setIsShowna(false);
    setIsShownc(false);
    setIsShownd(false);
  };

  const toggleShowc = () => {
    setIsShownc(!isShownc);
    setIsShown(false);
    setIsShowna(false);
    setIsShownb(false);
    setIsShownd(false);
  };

  const toggleShowd = () => {
    setIsShownd(!isShownd);
    setIsShown(false);
    setIsShowna(false);
    setIsShownb(false);
    setIsShownc(false);
  };

  return (
    <div className={` min-h-screen ${isShown ? 'w-96' : ''} flex`}>
      {/* Sidebar */}
      <div className='bg-[#f5f4f4] min-h-screen w-20 fixed top-0 left-0 ml-0 shadow-none z-35'>
        {/* Sidebar content */}
        <div className=' h-16'>
          <h1 className='flex justify-center mt-2'>
          <img className="w-10 h-10" src={image} alt="" />
          </h1>
        </div>
        <div className=' h-96'>
          <ul className="list-none ">
            <li onClick={toggleShowa} className={`flex items-center p-1 justify-center  h-16 ${isShowna ? '' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:activity" class="iconify sidebar-svg iconify--feather"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </li>
            <li onClick={toggleShowb} className={`flex items-center p-1 justify-center h-16 ${isShownb ? '' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:grid" class="iconify sidebar-svg iconify--feather"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z"></path></svg>
            </li>
            <li onClick={toggleShowc} className={`flex items-center p-1 justify-center h-16 ${isShownc ? '' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:box" class="iconify sidebar-svg iconify--feather"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path></g></svg>
            </li>
            <li onClick={toggleShowd} className={`flex items-center p-1 justify-center h-16 ${isShownd ? '' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:cpu" class="iconify sidebar-svg iconify--feather"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2" ry="2"></rect><path d="M9 9h6v6H9zm0-8v3m6-3v3M9 20v3m6-3v3m5-14h3m-3 5h3M1 9h3m-3 5h3"></path></g></svg>
            </li>
            <li onClick={toggleShow} className={`flex items-center p-1 justify-center h-16 ${isShown ? '' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:message-circle" class="iconify sidebar-svg iconify--feather"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </li>
          </ul>
        </div>
        <div className=' h-80 mt-48'>
          <ul className="m-0 p-0 list-none">
            <li className='flex items-center p-1 justify-center h-16'>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:sidebar" class="iconify sidebar-svg iconify--feather"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M9 3v18"></path></g></svg>
              </div>
            </li>
            <li className='flex items-center p-1 justify-center h-16'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather-search" class="iconify sidebar-svg iconify--feather"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21l-4.35-4.35"></path></g></svg>
            </li>
            <li className='flex items-center p-1 justify-center h-16'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="feather:settings" class="iconify sidebar-svg iconify--feather"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></g></svg>
            </li>
          </ul>
        </div>
      </div>

      {/* Divs */}
      {isShowna && (
        <div className={` min-h-screen w-96 flex  duration-500 `}>
          <Dashboards />
        </div>
      )}
      
      {isShownb && (
        <div className={` min-h-screen w-96 flex`}>y

          <Layouts/>
        </div>
      )}
      {isShownc && (
        <div className={` min-h-screen w-96 flex`}>
          <Elements/>
        </div>
      )}
      {isShownd && (
        <div className={` min-h-screen w-96 flex`}></div>
      )}
    </div>
  );
}
// fghfg dgsdfg dgsdfg 
export default Sidebar;
