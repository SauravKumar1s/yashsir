import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import WeAre from "./pages/WeAre";
import ImpTech from "./pages/ImpTech";
import CardWithMan from "./pages/CardWithMan";
import { LoginPage } from "./pages/LoginPage";
import Footerr from "./pages/Footerr";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <>
      <div className="bg-black scroll-smooth">
        <div className="backgroundImghead bg-black">
          <Navbar />
          {/* <Home /> */}
        </div>
      </div>
      {/* <div className="font-link bg-black scroll-smooth">
        <ImpTech />
        <WeAre />
        <CardWithMan />

        <Blog/>
      </div>{" "}
      <LoginPage />
      <Footerr /> */}
      {/* <Footer /> */}
      <div className="backgroundImg scroll-smooth">
        <div className="bg-black">
          <Team/>
          {/* <ContactUs/> */}
      
        </div>
      </div>
      <div className="backgroundImgAbout scroll-smooth">
        <div className="bg-black">
 {/* <Navbar/>
          <AboutUs/> */}
        </div>
      </div>
      
    </>
  );
}

export default App;
