import React from "react";
import vrgirl from "../img/vrgirl1png.png";
import vrman from "../img/man1.png";
import vrguy from "../img/vrguy.png";
import "../css/cardwithman.css";

const CardWithMan = () => {
  return (
    <>
      <div className="backgroundImg22">
        <div
          className="h-2/4 relative flex justify-center items-end bg-"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="left-12 relative z-50">
            <img className="z-50" src={vrgirl} alt="" />
          </div>

          <div className="backgroundClr text- relative right-12 w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center backdrop-brightness-50 bg-white/30">
            <h2 className="text-2xl font-bold mb-2 text-cardTextClr text-center">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis numquam consequuntur, provident ab, praesentium est dolore
              temporibus nihil a maiores aliquid sit.
            </p>
          </div>
        </div>

        <div className="backgroundImg2 flex justify-center items-end bg-black"   data-aos="fade-up-left"
            data-aos-duration="1000">
          <div
            className="backgroundClr left-12 relative w-2/4  p-6 rounded-lg shadow-lg h-72 justify-center "
          
          >
            <h2 className="text-2xl font-bold mb-2 text-center text-cardTextClr">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis numquam consequuntur, provident ab, praesentium est dolore
              temporibus nihil a maiores aliquid sit.
            </p>
          </div>
          <div className="relative z-50">
            <img src={vrman} alt="" />
          </div>
        </div>

        <div
          className=" backgroundImg2  border-gray-700  z-50 flex justify-center items-center bg-black"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="mymovee left-12 relative z-50">
            <img className="" src={vrguy} alt="" />
          </div>

          <div className="backgroundClr relative right-12 backgroundMan w-2/4  bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center items-start">
            <h2 className="text-2xl font-bold mb-2 text-center text-cardTextClr">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis numquam consequuntur, provident ab, praesentium est dolore
              temporibus nihil a maiores aliquid sit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWithMan;
