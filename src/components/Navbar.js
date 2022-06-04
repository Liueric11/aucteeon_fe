import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-dark absolute border-white px-2 sm:px-4 py-2.5 rounded top-0 left-0 w-full flex items-center z-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-2">
            <a href="#" className="py-1 block">
              <img className="scale-75" src={logo} alt="" />
            </a>
          </div>
          <div className="flex items-center px-4 bg-dark">
            <button
              id="hamburger"
              name="humberger"
              type="button"
              className="block absolute right-4"
            >
              <span className="w-[30px] h-[2px] my-2 block;"></span>
              <span className="w-[30px] h-[2px] my-2 block;"></span>
              <span className="w-[30px] h-[2px] my-2 block;"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
