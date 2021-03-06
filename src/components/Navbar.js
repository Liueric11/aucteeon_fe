import React from 'react';
import logo from '../assets/logo.png';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import cartIcon from '../assets/cart.png';
import { useNavigate } from 'react-router-dom';
import useFetchGetUser from 'src/hooks/useFetchGetUser';
import TempProfile from '../assets/profile.png';
const Navbar = () => {
  const history = useNavigate();
  const { user } = useFetchGetUser();
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(1);
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history('/login');
  };
  return (
    <nav className="bg-dark bg-slate-100  border-white py-4 sm:py-0 px-4 sm:px-4 rounded top-0 left-0 w-full flex items-center z-20 fixed">
      <div className="flex justify-between items-center w-full md:mx-4">
        <div className="py-1 cursor-pointer block" onClick={() => history('/')}>
          <img className="w-24 sm:w-40" src={logo} alt="" />
        </div>
        <div className="flex" id="hamburger-mobile">
          <div className="flex sm:hidden">
            <div className="py-1 flex items-center" role="none">
              <div onClick={() => history('/add-product')}>
                <span className="text-gray-700 block py-2 px-2 text-sm cursor-pointer hover:bg-blue-100 rounded font-bold">
                  Sell
                </span>
              </div>

              <div onClick={() => history('/transaction')}>
                <p className="text-gray-700 block  py-2 px-2  text-sm cursor-pointer hover:bg-blue-100 rounded font-bold">
                  My Cart
                </p>
              </div>

              <button onClick={() => history('/user')}>
                <p className="text-gray-700 block  py-2 px-2  text-sm cursor-pointer  hover:bg-blue-100 rounded font-bold">
                  Profiles
                </p>
              </button>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full text-left px-2 py-2 text-sm  hover:bg-blue-100 rounded font-bold"
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
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded my-6 mr-6"
            onClick={() => history('/add-product')}
          >
            Sell
          </button>

          <button onClick={() => history('/transaction')}>
            <div className="mr-5">
              <div className="block">
                <img className="scale-75" src={cartIcon} alt="cartIcon" />
              </div>
            </div>
          </button>
          <div className="flex flex-col justify-center items-center">
            <div>
              <button
                type="button"
                className={
                  isOpen
                    ? 'hidden'
                    : 'flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                }
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <button {...buttonProps}>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user?.avatar || TempProfile}
                    alt="userPhoto"
                  />
                </button>
              </button>
            </div>
            <div
              className={
                isOpen
                  ? 'visible flex flex-col origin-top-right w-auto p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none gap-2'
                  : 'hidden'
              }
              id="hamburger-desktop"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <span
                {...itemProps[0]}
                className="hover:bg-blue-100 cursor-pointer px-2 rounded"
                onClick={() => history('/user')}
              >
                Profile
              </span>
              <span
                {...itemProps[1]}
                className="hover:bg-blue-100 cursor-pointer px-2 rounded"
                onClick={handleLogout}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
