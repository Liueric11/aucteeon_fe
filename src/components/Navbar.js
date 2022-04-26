import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="bg-dark absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#" className="py-6 block">
              <img src={logo} alt="" />
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
    </div>
  );
};

export default Navbar;
