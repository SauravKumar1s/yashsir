import React from "react";
import unity from "../img/unity1.png";
import unreal from "../img/unreal2.png";
import android from "../img/android5.png";
import vive from "../img/vive6.png";

const TechWithWork = () => {
  return (
    <div className="flex justify-center flex-col h-screen">
      <div>
        <h1 className="sm:text-4xl text-xl text-bold text-white text-center font-bold  sm:mb-24 sm:mt-0 sm:pb: pb-24">
          Technologies we work with
        </h1>
      </div>

      <div>
        <div className="h-4 flex justify-center items-center sm:space-x-20 space-x-2 mb-12 ">
          <div>
            <img className="w-16  sm:w-fit" src={unity} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={unreal} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={unreal} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={unity} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center sm:space-x-8 space-x-2  mb-12">
          <div>
            <img className="w-8  sm:w-fit" src={android} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={vive} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={unity} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={unity} alt="" />
          </div>
        </div>
        <div className="flex justify-center sm:space-x-20 space-x-2">
          <div>
            <img className="w-16  sm:w-fit" src={unity} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={unity} alt="" />
          </div>
          <div>
            <img className="w-16  sm:w-fit" src={unity} alt="" />
          </div>
          <div>
            <img className="w-16 sm:w-fit" src={unity} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="sm:text-3xl text-xl text-bold text-white text-center sm:mt-24 mt-16">
          And More
        </h1>
      </div>
    </div>
  );
};

export default TechWithWork;
