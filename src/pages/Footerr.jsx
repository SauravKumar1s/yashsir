import React from "react";
import logo from "../img/LogoR.png";

const Footerr = () => {
  return (
    <div className="bg-black w-full p-10 h-full pt-24 flex justify-center items-center">
      <div className="">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <img className="mb-8" src={logo} alt="" />
              <h1 className="text-2xl text-white">#Startup</h1>
              <h1 className="text-white">DPIIT no. 827u987283k</h1>
            </div>
            <div>
              <h1 className="text-3xl text-white mr-4 mb-8">
                Let’s create a <br /> <span className="text-futureClr">FUTURE</span>  together
              </h1>
              <h1 className="text-gray-500 text-xs">Janvry is a top notch Deep tech development company that converges technologies like Blockchain, AI, AR/VR solutions for enterprises.</h1>
            </div>
            <div>
              <p className="font-medium tracking-wide text-white">Company</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Contact At
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-gray-300">
              Subscribe for Newletter
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="p-2 w-36 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col  pt-5 pb-10 border-t border-gray-800 ">
          <p className="text-sm text-gray-500 text-center">
            Terms & Conditions | Privacy Policy | Refunds & Cancellations | ©
            janvry studio | 2022. All Rights Reserved.k
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footerr;
