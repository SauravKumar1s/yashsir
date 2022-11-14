import { Transition, Menu } from "@headlessui/react";
import React, { useState } from "react";
import logo from "../img/LogoR.png";
import aboutui from "../img2/aboutui.svg";
import { NavLink } from "react-router-dom";
import "react-dropdown/style.css";
import "../css/navbar.css";

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [issOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => setOpen(!isOpen);
  const [isActive, setisActive] = useState(false);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <>
      <header className="z-50 lg:h-24 sm:fixed w-full  top-0 backdrop-blur-sm bg-white/5  text-white shadow-lg  font-link2">
        <nav className=" border-gray-200 px-2 py-2  rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 sm:h-22 h-10 "
                alt="Flowbite Logo"
              />
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

                  <li className="p-5 xl:p-8 active">
                    <button>
                      <div
                        className="flex justify-center items-center "
                        onClick={() => setisActive(!isActive)}
                      >
                        Services{" "}
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
                    </button>
                    {isActive && (
                      <div className="absolute  ">
                        <div className="h-44 z-50 backgroundLogin flex flex-wrap flex-row w-3/4 p-2.5 text-white bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                          {" "}
                          <ul className="grid grid-cols-3 ">
                            <NavLink className="flex items-center">
                              <img src={aboutui} />
                              ar/vr/XR
                              <br /> devlopement{" "}
                            </NavLink>
                            <NavLink>React with Tailwind CSS</NavLink>
                            <NavLink>React With Headless UI</NavLink> <br />
                            <NavLink>React With Headless UI</NavLink>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>

                  <li className=" active">
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
                        <div className="absolute left-0 top-4 ">
                          <div class="flex flex-row UiBack h-44 z-50 backgroundLogin text-xl font-medium text-white backgroun rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                            <div></div>

                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>

                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </button>
                  </li>

                  <li className="p-5 xl:p-8">
                    <button
                      className="relative dropdown:block"
                      role="navigation"
                      aria-haspopup="true"
                    >
                      <div className="flex justify-center items-center">
                        Company{" "}
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
                        <div className="absolute left-0 top-4 ">
                          <div class="flex flex-row UiBack h-44 z-50 backgroundLogin text-xl font-medium text-white backgroun rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                            <div></div>

                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>

                            <li className="p-5 xl:p-8 active flex flex-row justify-center ">
                              <NavLink
                                className="flex flex-row  text-center w-32 gap-2"
                                to="/"
                              >
                                <div className="">
                                  <img src={aboutui} />
                                </div>{" "}
                                <div className="m-2">Home</div>
                              </NavLink>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </button>
                  </li>

                  <li className="p-5 ">
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
