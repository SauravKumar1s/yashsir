import React, { useState, useEffect } from "react";

import { LoginPage } from "./LoginPage";
import "../css/about.css";
import Footerr from "./Footerr";
import servicegrl from "../img/serviceGrl.png";
import bottomGrl from "../img/bottomGrl.png";
import ar from "../img2/ar.svg";
const Services = () => {
  const [ScrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${ScrollTop}%` }}
        ></div>
      </div>
      <div className="backgroundImgService z-50 pt-28 font-link h-screen">
        <h1 className="text-3xl text-white ml-12 mb-4">#Services</h1>
        <h1 className="text-3xl text-white text-center mb-6 gradiantTextColor">
        Helps you dive deep into the world of magic
        </h1>
        <div className="flex flex-col  items-center justify-center ">
          <img className=" w-fit" src={servicegrl} alt="" srcset="" />
          <img className="w-fit " src={bottomGrl} alt="" srcset="" />
        </div>

        <div className="space-y-10 mt-24 h-auto  ">
          <div className="flex justify-center md:flex-col flex-reverse-row ">
            <div className=" mb-24">
              <div className="backgroundClr relative w-screen flex flex-col md:flex-row md:space-x-5 space-y-0 md:space-y-0 rounded-xl shadow-lg max-w-xs md:max-w-4xl m-auto md:h-80">
                <div className="w-full md:w-2/4 grid place-items-center">
                  <img
                    src={ar}
                    alt="tailwind logo"
                    className="rounded-xl lg:absolute md:w-96 md:ml-10"
                  />
                </div>
                <div className="w-full flex flex-col space-y-2 p-3">
                  <div className="flex flex-col md:ml-14 text-left  ">
                    <h3 className="font-black text-getTextClr md:text-2xl text-xl p-2">
                      Lorem ipsum dolor sit.
                    </h3>
                    <p className="md:text-xs text-white text-base w-11/12 p-2">
                      Architects sometimes have to convince customers that the
                      completed result is superior than 2D and 3D models, but VR
                      offers a better understanding of what to expect with the
                      next-general experience. Customers may `walk' inside their
                      final project even before construction starts and grasp
                      the designer's concepts immediately.
                    </p>
                    <button
                      type="button"
                      className="p-2 ml-2 w-28 text-xs  sm:mt-8 mt-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
                    >
                      Check Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center ">
            <div className="backgroundClr relative  flex flex-col-reverse md:flex-row md:space-x-5 space-y-0 md:space-y-0 rounded-xl shadow-lg max-w-xs md:max-w-4xl md:h-80 mx-auto ">
              <div className="w-full  flex flex-col space-y-2 p-3">
                <div className="flex flex-col p-2 ">
                  <h3 className="font-black text-getTextClr md:text-2xl text-xl p-2">
                    Lorem ipsum dolor sit.
                  </h3>
                  <p className="md:text-xs text-white text-base w-11/12 p-2">
                    Architects sometimes have to convince customers that the
                    completed result is superior than 2D and 3D models, but VR
                    offers a better understanding of what to expect with the
                    next-general experience. Customers may `walk' inside their
                    final project even before construction starts and grasp the
                    designer's concepts immediately.
                  </p>
                  <button
                    type="button"
                    className="p-2 w-28 text-xs  sm:mt-8 mt-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
                  >
                    Check Demo
                  </button>
                </div>
              </div>
              <div className="w-full md:w-2/4 grid place-items-center">
                <img
                  src={ar}
                  alt="tailwind logo"
                  className="rounded-xl lg:absolute md:w-96 md:mr-10"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="sm:text-3xl text-xl text-bold text-white text-center sm:mt-24 mt-16 mb-10">
              And More
            </h1>
          </div>
        </div>
      </div>

      <LoginPage />
      <Footerr />
    </>
  );
};

export default Services;
