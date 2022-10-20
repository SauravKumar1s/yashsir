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
import Footerr from "./pages/Footerr";
// import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <div className="bg-black scroll-smooth">
        <div className="backgroundImghead bg-black">
          <Navbar />
          <Home />
        </div>
      </div>
      <div className="font-link bg-black scroll-smooth">
        <ImpTech />
        <WeAre />
        <CardWithMan /> <TechWithWork />
        <Blog/>
      </div>{" "}
      <LoginPage />
      <Footerr />
      {/* <Footer /> */}
    </>
  );
}

export default App;
