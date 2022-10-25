import React, { useState, useEffect } from "react";
import Footerr from "./Footerr";
import ServicesMeta from "../img/metaverse.png" ;

const ServiceMeta = () => {
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
    <div className="backgroundImgAbout  z-50 pt-32 ">
    <h1 className="text-3xl text-white ml-12 mb- ">#Service Game</h1>
       <div className="progressMainWrapper">
    <div className="progressMainStyle" style={{width: `${ScrollTop}%`}}>

    </div>

  </div>
    <h1 className="text-3xl text-white text-center ">
      “No one can whistle a symphony. <br />
      It takes a whole orchestra to play it.”
    </h1>
    <h1 className=" text-white text-center pb-12">
      “No one can whistle a symphony. It takes a whole orchestra to play
      it.”
    </h1>
    <div className="flex justify-center mb-10">
      <img className="w-fit" src={ServicesMeta} alt="" srcset="" />
    </div>

    <Footerr />
  </div>
  )
}

export default ServiceMeta;