import React from "react";
import vrgirl from "../img/vrgirl1png.png";
import vrman from "../img/man1.png";
import vrguy from "../img/vrguy.png";
import "../css/cardwithman.css";

const CardWithMan = () => {
  return (
    <>
      <div className="  flex justify-center items-end bg-">
        <div className=" ">
          <img data-aos="fade-up-right" data-aos-duration="2000" src={vrgirl} alt="" />
        </div>

        <div className=" w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center " data-aos="fade-up-left" data-aos-duration="2000">
          <h2 className="text-2xl font-bold mb-2 text-white">lorem 42</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis numquam consequuntur, provident ab, praesentium est dolore
            temporibus nihil a maiores aliquid sit.
          </p>
        </div>
      </div>

      <div className="backgroundImg2 flex justify-center items-end bg-black">
        <div className="w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center "data-aos="fade-up-right" data-aos-duration="2000">
          <h2 className="text-2xl font-bold mb-2 text-white">lorem 42</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis numquam consequuntur, provident ab, praesentium est dolore
            temporibus nihil a maiores aliquid sit.
          </p>
        </div>
        <div className=" z-50" >
          <img data-aos="fade-up-left" data-aos-duration="2000" src={vrman} alt="" />
        </div>
      </div>

      <div className="backgroundImg2 border-gray-700  z-50 flex justify-center items-center bg-black">
        <div className="mymovee">
          <img data-aos="fade-up-left" data-aos-duration="2000"src={vrguy} alt="" />
        </div>

        <div data-aos="fade-up-right" data-aos-duration="2000" className=" backgroundMan w-2/4  bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center items-start">
          <h2 className="text-2xl font-bold mb-2 text-white">lorem 42</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis numquam consequuntur, provident ab, praesentium est dolore
            temporibus nihil a maiores aliquid sit.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardWithMan;
