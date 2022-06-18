import React from 'react';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart.png';
import notifIcon from '../assets/bell.png';
import profileLogo from '../assets/dummy-profile.png';
const Navbar = () => {
  return (
    <nav className="bg-dark bg-slate-100 absolute border-white px-2 sm:px-4 py-2.5 rounded top-0 left-0 w-full flex items-center z-10">
      <div className="flex flex-wrap justify-between items-center md:w-full md:mx-4">
        <div className="flex" id="hamburger-mobile">
          <a href="#logo" className="py-1 block">
            <img className="scale-75" src={logo} alt="" />
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:mt-0.5"
          id="user-profile"
        >
          <div className="pr-6">
            <a
              href="#logo"
              className="block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Sell
            </a>
          </div>
          <div className="pr-3">
            <a href="#myCart" className="block">
              <img className="scale-75" src={cartIcon} alt="cartIcon" />
            </a>
          </div>
          <div className="pr-3">
            <a href="#notification" className="block">
              <img className="scale-50" src={notifIcon} alt="notifIcon" />
            </a>
          </div>
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <image className="w-8 h-8 rounded-full" src={profileLogo} alt="userPhoto" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
