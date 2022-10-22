import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import logo from "../img/LogoR.png";

import "../css/navbar.css";

const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [issOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <>
      <header className="z-50 lg:h-24 sm:fixed w-full  top-0 backdrop-blur-sm bg-white/5  text-white shadow-lg  font-link">
        <nav class=" border-gray-200 px-2 py-2  rounded dark:bg-gray-900">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" class="flex items-center">
              <img src={logo} class="mr-3 sm:h-22 h-10 " alt="Flowbite Logo" />
            </a>
            <div class="flex md:order-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-cta"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 ">
              <nav className="contents font-semibold text-base lg:text-lg">
                <ul className="mx-auto flex items-center ">
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
               <li>
                
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
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            className="md:hidden fixed w-full text-center h-full "
            id="mobile-menu"
          >
            <div
              ref={ref}
              className="px-2 pt-2 pb-10 space-y-6 sm:px-3 z-50 gradiantClr"
            >
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>

              <a
                href="#"
                className="z-50 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Navbar;
