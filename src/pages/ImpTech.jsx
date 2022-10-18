import React from "react";
import bgpartcles12 from "../img/BgParticles-12.png";
import supergirl from "../img/supergirl.png";
import "../css/imptech.css";


const ImpTech = () => {
  return (
    <>
      <div
        className="backgroundImg border-b-2 border-gray-700 shadow-lg"
        
      >
        <div className="flex justify-center space-x-4 md:flex  pt-9">
          <div className="">
            <div className="max-w-7xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
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
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
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

          <div className=" ">
            <div className="max-w-7xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
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
        </div>
        <div className="backgroundImg2 bg-black">
          <div className=" flex justify-around pb-10 pt-10">
            <div className="w-2/4 justify-center text-center m-auto flex-col">
              <h1 className="text-white text-5xl h1tag">
                <span className="text-blue-600">Immersive</span> <br></br>{" "}
                Technology
              </h1>
              <h2 className="text-white justify-center text-start mb-10 mt-4 ml-12">
                The immersive experience can Thrill you, Educate you, Train you,
                and can make you imagine the world without any limits. It feels
                exceptional when you touch the limits with your Virtual Reality
                headsets. Things become more alive, active, visible. Janvry
                Studio believes in freedom which can be achieved with Virtual
                Reality technology, for every people in this world just like you
                and me.
              </h2>
              <button
                type="button"
                className="p-2 w-36  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-white"
              >
                Contact us
              </button>
            </div>

            <div className="flex w-2/4 " data-aos="fade-up-left">
              <img className=" " src={supergirl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpTech;
