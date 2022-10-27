import React, { useState, useEffect } from "react";
import Footerr from "./Footerr";
import caree from "../img/caree.png"




const Carrier = () => {

  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  }

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
    <>
    <div className="backgroundImgCarrier  z-50 pt-28 font-link">
    <h1 className="text-3xl text-white ml-12 mb-2 ">#Our Carrier</h1>
       <div className="progressMainWrapper">
    <div className="progressMainStyle" style={{width: `${ScrollTop}%`}}>

    </div>

  </div>
    <h1 className="text-3xl gradiantTextColor text-center ">
    Join our team if you want to put a dent in <br /> universe, Virtually :)
    </h1>
    
    <div className="flex justify-center mb-10">
      <img className="w-fit" src={caree} alt="" srcset="" />
    </div>

  
  </div>  <Footerr /></>
  )
}

export default Carrier