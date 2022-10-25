import React from "react";
import vrgirl from "../img/vrgirl1png.png";
import vrman from "../img/man1.png";
import vrguy from "../img/vrguy.png";
import "../css/cardwithman.css";
import TechWithWork from "./TechWithWork";

const CardWithMan = () => {
  return (
    <>
      {" "}
      {/* 1 */}
      <div className="backgroundImg22">
      <div
          className=" backgroundImg2 border-gray-700  z-50 flex justify-center sm:items-end items-center bg-black sm:mb-0 mb-16 sm:mt-0 mt-16"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="mymovee sm:left-12 relative z-50 sm:w-fit ">
            <img className="" src={vrgirl} alt="" />
          </div>

          <div className="backgroundClr  text-start sm:relative right-12 sm:w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center backdrop-brightness-50 bg-white/30">
            <h2 className=" sm:text-xl sm:font-bold mb-2 text-cardTextClr text-center">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="text-white text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis numquam consequuntur, provident ab, praesentium est dolore
              temporibus nihil a maiores aliquid sit.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div
          className="backgroundImg2  flex justify-center sm:items-end items-center bg-black sm:mb-0 mb-16"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="backgroundClr left-12 sm:relative sm:w-2/4  p-6 rounded-lg shadow-lg h-72 justify-center ">
            <h2 className="sm:text-xl font-bold mb-2 text-center text-cardTextClr">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis numquam consequuntur, provident ab, praesentium est dolore
              temporibus nihil a maiores aliquid sit.
            </p>
          </div>
          <div className="relative z-50">
            <img src={vrman} alt="" />
          </div>
        </div>
        {/* 3 */}
        <div
          className=" backgroundImg2  border-gray-700  z-50 flex justify-center items-center bg-black sm:mb-0 mb-16"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="mymovee sm:left-12  relative z-50">
            <img className="" src={vrguy} alt="" />
          </div>

          <div className="backgroundClr  text-start sm:relative right-12 sm:w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center backdrop-brightness-50 bg-white/30">
            <h2 className="sm:text-xl sm:font-bold mb-2 text-cardTextClr text-center">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="text-white text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis numquam consequuntur, provident ab, praesentium est dolore
              temporibus nihil a maiores aliquid sit.
            </p>
          </div>
        </div>
        <TechWithWork />
      </div>
    </>
  );
};

export default CardWithMan;
