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
      <div className="bg-black scroll-smooth hover:scroll-auto ">
        <div className="backgroundImghead bg-black">
          <Navbar />
          <Home />
        </div>
      </div>
      <div className="font-link bg-black scroll-smooth hover:scroll-auto">
        <ImpTech /> 
        <WeAre />
        <CardWithMan />
      </div>

      <TechWithWork />
      <LoginPage />
      <Footer />
    </>
  );
}

export default App;
