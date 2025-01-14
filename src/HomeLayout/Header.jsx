import React from 'react';
import {
  IoMenu
} from "react-icons/io5";


function Header() {
  return (
    <div className="bg-white rounded-full sm:w-[600px] lg:w-[650px] h-auto py-3 px-3 flex justify-between items-center fixed z-50 mt-5 space-x-2">
      <div className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-full">
        <span className="font-myFont font-extrabold text-2xl">DA</span>
      </div>
      <span className="font-myFont font-bold text-base text-center text-2xl">DAVIS AYOMIDE</span>
      <div className="flex w-28 h-12 rounded-full bg-black text-white justify-between items-center">
        <h2 className="ml-2 font-josefinsans font-extrabold text-2xl">
          Menu
        </h2>
        <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
          <IoMenu size={30} />
        </div>
      </div>
    </div>
  )
}

export default Header