import React from "react";
import robo from "../img/robo.png";
import rect from "../img/rect.png";

const WeAre = () => {
  return (
    <>
    <div
        className="bg-black justify-center flex 
      "
      >
        <img src={rect} />
        {/* <h1 className="text-white relative">Hi this is animation section</h1> */}
      </div>
      <div className="background flex justify-center">
        <img src={robo} />
      </div>
      <div
        className="bg-black justify-center flex 
      "
      >
        <img src={rect} />
        {/* <h1 className="text-white relative">Hi this is animation section</h1> */}
      </div>
    </>
  );
};

export default WeAre;
