import { Transition, Menu } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import logo from "../img/LogoR.png";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "../css/navbar.css";

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [issOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <>
      <header className="z-50 lg:h-24 sm:fixed w-full  top-0 backdrop-blur-sm bg-white/5  text-white shadow-lg  font-link">
        <nav className=" border-gray-200 px-2 py-2  rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 sm:h-22 h-10 " alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

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

            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 ">
              <nav className="contents font-semibold text-base lg:text-lg">
                <ul className=" flex items-center ">
                  <li className="p-5 xl:p-8 active">
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li className="">
                    <Menu as="div" className="  text-left">
                      <div>
                        <Menu.Button className="flex w-full justify-center items-center rounded-md  text-white px-4 py-2 shadow-sm   ">
                          Options
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute lg:left-24 z-10 mt-2 rounded-md  shadow-lg backgroundClr  p-24">
                          <div className=" flex ">
                            <Menu.Item>
                              {({ active }) => (
                                <>
                                  <NavLink
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-white text-gray-900"
                                        : "text-blue-600",
                                      "w-24 text-xs flex flex-col w-98"
                                    )}
                                  >
                                    {" "}
                                    <div className="flex flex-row w-24">
                                      {" "}
                                      <svg
                                        className="svg-icon w-10"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fill="white"
                                          d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                                        ></path>
                                      </svg>{" "}
                                      
                                      Accountsettings
                                    </div>
                                  </NavLink>
                                </>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              <div className="">
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block p-8 text-sm"
                                    )}
                                  >
                                    Support
                                  </a>
                                )}{" "}
                              </div>
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  License
                                </NavLink>
                              )}
                            </Menu.Item>
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full px-4 py-2 text-left text-sm"
                                    )}
                                  >
                                    Sign out
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                  <li className="">
                    <button
                      className="relative dropdown:block"
                      role="navigation"
                      aria-haspopup="true"
                    >
                      <div className="flex justify-center items-center">
                        Products{" "}
                        <svg
                          className="ml-2 w-4 h-4"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                      <ul
                        className="absolute right-0 hidden w-auto"
                        aria-label="submenu"
                      >
                        <div
                          className=" backgroundImg2 border-gray-700  z-50 flex justify-center sm:items-end items-center bg-black sm:mb-0 mb-16 sm:mt-0 mt-16"
                          data-aos="fade-up-right"
                          data-aos-duration="1000"
                        >
                          <div className="backgroundClr  text-start sm:relative right-12 sm:w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center backdrop-brightness-50 bg-white/30">
                            <h2 className=" sm:text-xl sm:font-bold mb-2 text-cardTextClr text-center">
                              Lorem ipsum dolor sit amet consectetur.
                            </h2>
                            <p className="text-white text-sm ">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Libero nobis numquam consequuntur, provident
                              ab, praesentium est dolore temporibus nihil a
                              maiores aliquid sit.
                            </p>
                          </div>
                        </div>
                      </ul>
                    </button>
                  </li>
                  <li className="p-5 xl:p-8">
                    <NavLink to="/contact">
                      <span>Contact</span>
                    </NavLink>
                  </li>
                  <li className="p-5 xl:p-8">
                    <NavLink to="/blog">
                      <span>Blog</span>
                    </NavLink>
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
