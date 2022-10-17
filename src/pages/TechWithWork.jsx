import React from "react";
import unity from "../img/unity1.png";
import unreal from "../img/unreal2.png";
import android from "../img/android5.png";
import vive from "../img/vive6.png";

const TechWithWork = () => {
  return (
    <div className="background">
      <div>
        <h1 className="text-4xl text-bold text-white text-center font-bold  mb-12 pt-12">
          Technologies we work with
        </h1>
      </div>

      <div>
        <div className="flex justify-center space-x-20 mb-12 ">
          <div>
            <img src={unity} alt="" />
          </div>
          <div>
            <img src={unreal} alt="" />
          </div>
          <div>
            <img src={unreal} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div>
            <img src={android} alt="" />
          </div>
          <div>
            <img src={vive} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
        </div>
        <div className="flex justify-center space-x-20">
          <div>
            <img src={unity} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-bold text-white text-center mt-12">
          And More
        </h1>
      </div>
    </div>
    
  );
};

export default TechWithWork;
