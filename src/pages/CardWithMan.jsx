import React from "react";
import vrgirl from "../img/vrgirl1png.png"

const CardWithMan = () => {
  return (
    <>
    <div className="flex justify-center items-end bg-black">
  

      <div>
        <img src={vrgirl} alt="" />
      </div>

      <div className="w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center ">
        <h2 className="text-2xl font-bold mb-2 text-white">
          lorem 42
        </h2>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis numquam consequuntur, provident ab, praesentium est dolore temporibus nihil a maiores aliquid sit.</p>
      </div>
    </div>

<div className="flex justify-center items-end bg-black">
  

<div>
  <img src={vrgirl} alt="" />
</div>

<div className="w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center ">
  <h2 className="text-2xl font-bold mb-2 text-white">
    lorem 42
  </h2>
  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis numquam consequuntur, provident ab, praesentium est dolore temporibus nihil a maiores aliquid sit.</p>
</div>
</div>

<div className="flex justify-center items-end bg-black">
  

  <div>
    <img src={vrgirl} alt="" />
  </div>

  <div className="w-2/4 bg-gray-700 p-6 rounded-lg shadow-lg h-72 justify-center ">
    <h2 className="text-2xl font-bold mb-2 text-white">
      lorem 42
    </h2>
    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis numquam consequuntur, provident ab, praesentium est dolore temporibus nihil a maiores aliquid sit.</p>
  </div>
</div>
</>
    
  );
};

export default CardWithMan;
