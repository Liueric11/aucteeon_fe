import React from 'react';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart.png';
import notifIcon from '../assets/bell.png';
import profileLogo from '../assets/dummy-profile.png';
const Navbar = () => {
  return (
    <nav className="bg-dark bg-slate-100 absolute border-white px-2 sm:px-4 py-2.5 rounded top-0 left-0 w-full flex items-center z-10 ">
      <div className="flex flex-wrap justify-between items-center w-full md:mx-4">
        <a href="#logo" className="py-1 block">
          <img className="scale-75" src={logo} alt="" />
        </a>
        <div className="flex" id="hamburger-mobile">
          <div
            className="md:hidden origin-top-right absolute right-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Sell
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                My Cart
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                Notification
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                Profiles
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
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
            <img className="w-8 h-8 rounded-full" src={profileLogo} alt="userPhoto" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
