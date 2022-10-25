import React, { useState, useEffect } from "react";

import { LoginPage } from "./LoginPage";
import "../css/about.css";
import Footerr from "./Footerr";
import servicegrl from "../img/serviceGrl.png";
import bottomGrl from "../img/bottomGrl.png";
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
      <div className="backgroundImgTeam z-50 pt-32 ">
        <h1 className="text-3xl text-white ml-12  ">#Our Contact</h1>
        <h1 className="text-3xl text-white text-center ">
          “No one can whistle a symphony. <br />
          It takes a whole orchestra to play it.”
        </h1>
        <div className="flex flex-col  items-center justify-center ">
          <img className="w-fit mt-44" src={servicegrl} alt="" srcset="" />
          <img className="w-fit " src={bottomGrl} alt="" srcset="" />
        </div>

        <div className="space-y-10 mt-32 h-screen ">
          <div className="flex flex-col justify-center ">
            <div className="gradiantClr relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg  max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3  grid place-items-center">
                <img
                  src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center"></div>
                <h3 className="font-black text-getTextClr md:text-3xl text-xl">
                  Lorem ipsum dolor sit.
                </h3>
                <div></div>
                <p className="md:text-lg text-gray-500 text-base mt-10 pb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  illo. elit. Nam, illo. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nam, illo. elit. Nam, illo.
                </p>
                <button
                  type="button"
                  className="p-2 w-36  sm:mt-8 mt-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center ">
            <div className="gradiantClr relative flex flex-col-reverse md:flex-row md:space-x-5 space-y-0 md:space-y-0 rounded-xl shadow-lg max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
              <div className="w-full md:w-2/3  flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center"></div>
                <h3 className="font-black text-getTextClr md:text-3xl text-xl">
                  Lorem ipsum dolor sit.
                </h3>
                <p className="md:text-lg text-gray-500 text-base mt-10 pb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  illo. elit. Nam, illo. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nam, illo. elit. Nam, illo.
                </p>
                <button
                  type="button"
                  className="p-2 w-36  sm:mt-8 mt-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
                >
                  Contact us
                </button>
              </div>

              <div className="w-full md:w-1/3 grid place-items-center">
                <img
                  src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="sm:text-3xl text-xl text-bold text-white text-center sm:mt-24 mt-16">
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
