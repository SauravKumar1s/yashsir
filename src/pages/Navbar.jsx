import React from "react";
import bgImg from "../img/BgParticles-12.png";
import img1 from "../img/HomeBg-1.png";
// import img2 from "../img/BgParticles-12.png";
import bgpart from "../img/Bg2.png";
import logo from "../img/LogoR.png";
import ImpTech from "./ImpTech";

import "../css/navbar.css";

const Navbar = () => {
  return (
    <header className="z-50 border-b-2  border-white border-opacity-25  text-white shadow-lg  font-link">
      <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src={logo}
              class="mr-3 sm:h-22 h-10 "
              alt="Flowbite Logo"
            />

          </a>
          <div class="flex md:order-2">
          <button className="border border-blue rounded-full font-bold px-8 py-2">
            Play me
          </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class=" hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          >
            <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8 active">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>About</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>Projects</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>Services</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
