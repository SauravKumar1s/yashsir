import React from "react";
import img1 from "../img/HomeBg-1.png";
// import img2 from "../img/BgParticles-12.png";
import bgpart from "../img/Bg2.png";
import ImpTech from "./ImpTech";



const Home = () => {
  return (
    <section className=" mx-auto bg-black " style={{backgroundImage: `url(${bgpart})`  }} >
      <div  className="flex align-center justify-center ">
        <img src={img1} className="bg-cover bg-center" />
       
      </div>
      <h1 className="text-5xl text-white text-center absolute -bottom-0 right-0 left-0">Be ready <br></br>to  Enter <br></br>new into <br></br>Dimesntions</h1>
      
    </section>
  );
};

export default Home;
