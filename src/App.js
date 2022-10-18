import "./App.css";
import bgpart from "../src/img/Bg2.png";
import bgpart2 from "../src/img/Bgheader.png";
import bgpart3 from "../src/img/Bgpart3.png";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import WeAre from "./pages/WeAre";
import ImpTech from "./pages/ImpTech";
import CardWithMan from "./pages/CardWithMan";
import TechWithWork from "./pages/TechWithWork";
import { LoginPage } from "./pages/LoginPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <div className="bg-black ">
        {/* <img className="object-fill w-full h-screen z-50" src={bgpart2} />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col text-center  justify-center items-center">
            <Navbar />
            <Home />
          </div>
        </div> */}
      
      
          <div className=" backgroundImg " >
            <ImpTech/>
          </div>
          <div className=" backgroundImg2 " >
            <CardWithMan/>
          </div>
    
      </div>
    </>
  );
}

export default App;
