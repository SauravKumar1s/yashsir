import React from "react";
import image1 from "../img/homeI.png";
import home1 from "../img/Home(1).svg"
import home2 from "../img/Home2.svg"
import home3 from "../img/home33.jpg"
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
  


  

  <img className="hideMe " src={home1} />
  <img className="hideMe2 " src={home2} />
  {/* <img className="hideMe3" src={home3} /> */}
    
   <section className="sm:w-screen backgroundImghead">

      <div className="sm:flex justify-center  pt-24">   <div>
</div>
          <img src={image1}  />
        </div>
   </section>
   <ImpTech/>
   <WeAre/>
   <CardWithMan/>
   <Blog/>
   <LoginPage/>
   <Footerr/>
      </>
        
  
  );
};

export default Home;
