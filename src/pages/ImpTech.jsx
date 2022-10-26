import React from "react";
import bgpartcles12 from "../img/BgParticles-12.png";
import supergirl from "../img/supergirl.png";
import "../css/imptech.css";
import "../css/cardwithman.css";
import CardWithMan from "./CardWithMan";

const ImpTech = () => {
  return (
    <>
      <div className="backgroundImg border-b-2 border-gray-700 shadow-lg">

        <div className=" flex flex-col sm:flex sm:flex-row justify-around  md:flex text-xs  pt-24" >
          <div className="">
            <div className="max-w-7xl mx-auto">
              <div className="sm:relative group">
                <div className="sm:absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="sm:relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-white">
                      Metaverse Market size USD 824.53 Billion <br></br> or more
                      by 2030
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="max-w-7xl mx-auto">
              <div className="sm:relative group">
                <div className="sm:absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="sm:relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-white">
                      Metaverse Market size USD 824.53 Billion <br></br> or more
                      by 2030
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-7xl mx-auto">
              <div className="sm:relative group">
                <div className="sm:absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="sm:relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-white text-xs">
                      Metaverse Market size USD 824.53 Billion <br></br> or more
                      by 2030
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
           
        </div>
        <div className="backgroundImg2 bg-black">
          <div className=" flex justify- pb-10 pt-10">
            <div className="widhtt sm:ml-10 ml-4 sm:justify-start justify-center m-auto flex-col ">
              <h1 className="text-white sm:text-5xl text-3xl mb-8 z-20 h1tag ">
                <span className="font-link text-cardClr">Immersive</span>{" "}
                <br></br> Technology
              </h1>
              <div className="">
              <h2 className="text-white sm:justify-center lg:ml-10 sm:text-base text-xs text-start mt-4 ">
                The immersive experience can Thrill you, Educate you, Train you,
                and can make you imagine the world without any limits. It feels
                exceptional when you touch the limits with your Virtual Reality
                headsets. Things become more alive, active, visible. Janvry
                Studio believes in freedom which can be achieved with Virtual
                Reality technology, for every people in this world just like you
                and me.
              </h2></div>
              <div className="lg:ml-10">
                <button
                  type="button"
                  className="p-2 w-36  sm:mt-8 mt-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
                >
                  Contact us
                </button>
              </div>
            </div>

            <div className="w-1/2 sm:top-0 relative top-56 ">
            <img className=" " src={supergirl} />

            </div>
          </div>
          {/* <CardWithMan/> */}
        </div>
      </div>
    </>
  );
};

export default ImpTech;
