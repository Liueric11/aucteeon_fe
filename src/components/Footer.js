import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-200 shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
          <img src={logo} alt="" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-500">
            Aucteeon
          </span> */}
        </a>

        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#licensing" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="h-px bg-slate-400 w-100 my-5"></div>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="https://flowbite.com" className="hover:underline">
          Aucteeon™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
