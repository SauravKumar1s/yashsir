import React from "react";
import image1 from "../img/homeI.png";
import home1 from "../img/Home(1).svg";
import home2 from "../img/Home2.svg";
import home3 from "../img/home33.jpg";
import Blog from "./Blog";
import CardWithMan from "./CardWithMan";
import Footerr from "./Footerr";
import ImpTech from "./ImpTech";
import { LoginPage } from "./LoginPage";
import Scroll from "./Scroll";
import WeAre from "./WeAre";

const Home = () => {
  return (
    <>
      <div className="">
        <img className="hideMe z-50 absolute" src={home1} />
        <img className="hideMe2 absolute" src={home2} />
      </div>

      {/* <img className="hideMe3" src={home3} /> */}

      <section className="sm:w-screen backgroundImghead">
        <div className="sm:flex justify-center  ">
          {" "}
          <div className="pt-24">
          <img src={image1} /></div>
        </div>
      </section>
      <ImpTech />
      <WeAre />
      <CardWithMan />
      <Blog />
      <LoginPage />
      <Footerr />
    </>
  );
};

export default Home;
