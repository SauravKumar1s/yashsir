import React from "react";
import bgImg from "../img/BgParticles-12.png";
import "../css/navbar.css"

const Navbar = () => {
  return (
    <header    style={{
      // backgroundImage: `url(${bgImg}) `,
      position:'relative',
      zIndex:'1000',
    }} className="  bg-black  text-white shadow-lg hidden md:block">
      <div className="container mx-auto flex items-center h-24">
        <a href="" className="flex items-center justify-center">
          <span className="ml-4 uppercase font-black">Javvry</span>
        </a>
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8 active">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>About</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>Projects</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>Services</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="border border-blue rounded-full font-bold px-8 py-2">
            Play me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
