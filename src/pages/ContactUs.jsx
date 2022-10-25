import React, { useState, useEffect } from "react";
import Footerr from './Footerr'
import { LoginPage } from './LoginPage'

const ContactUs = () => {
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
  return (<>

<div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${ScrollTop}%` }}
        ></div>
      </div>
    <div className="backgroundImgTeam z-50 pt-32 font-link">
        <h1 className="text-3xl text-white ml-12 mb-12 ">#Our Contact</h1>
        <h1 className="text-3xl gradiantTextColor text-center pb-24">
          “No one can whistle a symphony. 
          It takes a whole orchestra to play it.”
        </h1>
        </div>
        <LoginPage/>
        <Footerr/>
        </>
  )
}

export default ContactUs