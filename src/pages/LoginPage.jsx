import React from "react";
import arylogin from "../img/arylogin.png";

export const LoginPage = () => {
  return (
    <div className="background">
      <div className="w-full h-42 followbg p-6 rounded-lg shadow-lg justify-center ">
        <h2 className="text-2xl font-bold mb-2 text-center text-white">
          lorem 42
        </h2>
        <p className="text-white text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis
          numquam consequuntur, provident ab, praesentium est dolore temporibus
          nihil a maiores aliquid sit.
        </p>
      </div>

      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center  h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-2/4 lg:w-2/4 md:w-9/12 mb-12 md:mb-0">
            <img src={arylogin} className="" alt="Sample image" />
          </div>
          <section className="backgroundLogin w-2/4 rounded-5xl">
            <div className="backgroundLogin flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className=" p-6 space-y-4 md:space-y-6  sm:p-8">
                  <h1 className="text-3xl text-center font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white">
                    Get in Touch
                  </h1>
                  <h1 className="text-center text-white">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        for="Name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start"></div>
                    </div>
                    <div className="flex justify-center">
                    <button
                      type="button"
                      className="p-2 w-36 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
                    >
                      Sumbit
                    </button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
