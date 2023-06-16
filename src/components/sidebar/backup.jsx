import React, { useState } from 'react';

const Sidebar = () => {
  const [isShown, setIsShown] = useState(true);
  const [isShowna, setIsShowna] = useState(true);
  const [isShownb, setIsShownb] = useState(true);
  const [isShownc, setIsShownc] = useState(true);
  const [isShownd, setIsShownd] = useState(true);

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
    <div className={`bg-[gray] min-h-screen ${isShown ? 'w-96' : ''} flex`}>
      {/* Sidebar */}
      <div className='bg-[#f5f4f4] min-h-screen w-20 fixed top-0 left-0 ml-0 shadow-none z-35'>
        {/* Sidebar content */}
        <div className='bg-black h-16'>
          <h1>C</h1>
        </div>
        <div className='bg-slate-400 h-96'>
          <ul className="list-none bg-slate-400">
            <li onClick={toggleShowa} className={`flex items-center p-1 justify-center h-16 ${isShowna ? 'bg-[#91f22a]' : ''}`}>
              a
            </li>
            <li onClick={toggleShowb} className={`flex items-center p-1 justify-center h-16 ${isShownb ? 'bg-[#446026]' : ''}`}>
              b
            </li>
            <li onClick={toggleShowc} className={`flex items-center p-1 justify-center h-16 ${isShownc ? 'bg-[#4ce3db]' : ''}`}>
              c
            </li>
            <li onClick={toggleShowd} className={`flex items-center p-1 justify-center h-16 ${isShownd ? 'bg-[#6b34be]' : ''}`}>
              d
            </li>
            <li onClick={toggleShow} className={`flex items-center p-1 justify-center h-16 ${isShown ? 'bg-[#91f22a]' : ''}`}>
              f
            </li>
          </ul>
        </div>
        <div className='bg-red-600 h-80 mt-48'>
          <ul className="m-0 p-0 list-none">
            <li className='flex items-center p-1 justify-center h-16'>
              <div>
                1
              </div>
            </li>
            <li className='flex items-center p-1 justify-center h-16'>
              2
            </li>
            <li className='flex items-center p-1 justify-center h-16'>
              3
            </li>
          </ul>
        </div>
      </div>

      {/* Divs */}
      <div className={`bg-[#91f22a] min-h-screen ${isShowna ? 'w-96' : ''} flex`}></div>
      <div className={`bg-[#446026] min-h-screen ${isShownb ? 'w-96' : ''} flex`}></div>
      <div className={`bg-[#4ce3db] min-h-screen ${isShownc ? 'w-96' : ''} flex`}></div>
      <div className={`bg-[#6b34be] min-h-screen ${isShownd ? 'w-96' : ''} flex`}></div>
    </div>
  );
}

export default Sidebar;
